// src/components/BeverageList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Checkbox,
    BotaoSaida,
    ContainerItem,
    ContainerList,
    BotaoExcluir,
    BotaoAdicionar,
    FormContainer,
    Input,
    BotaoSalvar,
    QuantityAdjustButton,
    QuantityDisplay
} from './style';

const BeverageList = () => {
    const [beverages, setBeverages] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [available, setAvailable] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [newBeverage, setNewBeverage] = useState({ name: '', quantity: '' });
    const [mode, setMode] = useState({});

    useEffect(() => {
        fetchBeverages();
    }, []);

    const fetchBeverages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/bebidas/findAll');
            setBeverages(response.data);

            // Initialize quantities and availability
            const initialQuantities = {};
            const initialAvailable = {};
            const initialMode = {};
            response.data.forEach(beverage => {
                initialQuantities[beverage.name] = 0; // Default to 0
                initialAvailable[beverage.name] = beverage.quantity > 0;
                initialMode[beverage.name] = false; // Default to false (modo de adicionar)
            });
            setQuantities(initialQuantities);
            setAvailable(initialAvailable);
            setMode(initialMode);
        } catch (error) {
            console.error('Error fetching beverages:', error);
        }
    };

    const handleSell = async (name) => {
        const quantityToSell = quantities[name];
        const beverage = beverages.find(b => b.name === name);

        if (beverage) {
            // Verifica se a quantidade que o usuário deseja vender é maior do que a disponível
            if (quantityToSell > beverage.quantity) {
                alert(`Você não pode vender mais do que o disponível. Quantidade disponível: ${beverage.quantity}`);
                return; // Cancela a operação se a quantidade de saída for maior que a disponível
            }

            if (quantityToSell > 0) {
                try {
                    await axios.post('http://localhost:8080/bebidas/sell', { id: beverage.id, quantity: quantityToSell });
                    fetchBeverages(); // Recarrega a lista de bebidas após a venda
                } catch (error) {
                    console.error('Error selling beverage:', error);
                }
            }
        }
    };


    const handleAddQuantity = async (name) => {
        const quantity = quantities[name];
        if (quantity > 0) {
            const beverage = beverages.find(b => b.name === name);
            if (beverage) {
                try {
                    await axios.post('http://localhost:8080/bebidas/addQuantity', { id: beverage.id, quantity });
                    fetchBeverages(); // Recarrega a lista de bebidas após a adição
                } catch (error) {
                    console.error('Error adding quantity:', error);
                }
            }
        }
    };

    const handleQuantityChange = (name, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [name]: Math.max(0, (prevQuantities[name] || 0) + delta)
        }));
    };

    const handleAvailableChange = (name) => {
        setAvailable({ ...available, [name]: !available[name] });
        if (!available[name]) {
            setQuantities({ ...quantities, [name]: 0 });
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/bebidas/${id}`);
            setBeverages(beverages.filter(beverage => beverage.id !== id));
        } catch (error) {
            console.error('Error deleting beverage:', error);
        }
    };

    const handleAddBeverage = async () => {
        try {
            await axios.post('http://localhost:8080/bebidas/create', {
                name: newBeverage.name,
                quantity: parseInt(newBeverage.quantity, 10)
            });
            setNewBeverage({ name: '', quantity: '' });
            setShowForm(false);
            fetchBeverages(); // Recarrega a lista de bebidas após a adição
        } catch (error) {
            console.error('Error adding beverage:', error);
        }
    };

    const handleToggleMode = (name) => {
        setMode(prevMode => ({ ...prevMode, [name]: !prevMode[name] }));
    };

    const isButtonDisabled = (name) => {
        return !available[name] || (mode[name] && quantities[name] > available[name].quantity);
    };

    return (
        <ContainerList>
            <BotaoAdicionar onClick={() => setShowForm(!showForm)}>
                +
            </BotaoAdicionar>

            {showForm && (
                <FormContainer>
                    <Input
                        type="text"
                        placeholder="Nome da bebida"
                        value={newBeverage.name}
                        onChange={(e) => setNewBeverage({ ...newBeverage, name: e.target.value })}
                    />
                    <Input
                        type="number"
                        placeholder="Quantidade..."
                        value={newBeverage.quantity}
                        onChange={(e) => setNewBeverage({ ...newBeverage, quantity: e.target.value })}
                    />
                    <BotaoSalvar onClick={handleAddBeverage}>
                        Salvar
                    </BotaoSalvar>
                </FormContainer>
            )}

            {beverages.map(beverage => (
                <ContainerItem
                    key={beverage.id}
                    disabled={!available[beverage.name]} // Apply gray background if not available
                >
                    <div style={{ flex: '1', overflow: 'hidden' }}>
                        <span style={{ marginRight: '8px' }}>
                            {beverage.name}
                        </span>
                        <span style={{ margin: '0 8px' }}>
                            :
                        </span>
                        <span>
                            {beverage.quantity} disponíveis
                        </span>
                    </div>
                    {beverage.quantity === 0 && (
                        <Checkbox
                            type="checkbox"
                            checked={available[beverage.name]}
                            onChange={() => handleAvailableChange(beverage.name)}
                        />
                    )}
                    {beverage.quantity === 0 && ' Disponível'}
                    <div>
                        <QuantityAdjustButton
                            onClick={() => handleQuantityChange(beverage.name, -1)}
                        >
                            -
                        </QuantityAdjustButton>
                        <QuantityDisplay>
                            {quantities[beverage.name] || 0}
                        </QuantityDisplay>
                        <QuantityAdjustButton
                            onClick={() => handleQuantityChange(beverage.name, 1)}
                        >
                            +
                        </QuantityAdjustButton>
                    </div>
                    <BotaoSaida
                        onClick={() => {
                            if (mode[beverage.name]) {
                                handleAddQuantity(beverage.name);
                            } else {
                                handleSell(beverage.name);
                            }
                        }}
                        disabled={isButtonDisabled(beverage.name)} // Disable based on availability and quantity check
                    >
                        {mode[beverage.name] ? 'Adicionar' : 'Saída'}
                    </BotaoSaida>
                    <BotaoExcluir
                        onClick={() => handleDelete(beverage.id)}
                    >
                        Excluir
                    </BotaoExcluir>
                    <Checkbox
                        type="checkbox"
                        checked={mode[beverage.name]}
                        onChange={() => handleToggleMode(beverage.name)}
                    />
                    {mode[beverage.name] ? ' Modo Adicionar' : ' Modo Saída'}
                </ContainerItem>
            ))}


        </ContainerList>
    );
};

export default BeverageList;
