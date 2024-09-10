import styled from 'styled-components';

// Container da lista
export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 8px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`;

// Item da lista
export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 5px;
    margin-bottom: 15px;
    background-color: ${props => props.disabled ? '#f0f0f0' : '#fff'};
    color: #333;

    @media (max-width: 768px) {
        padding: 10px;
        margin-bottom: 10px;
    }

    @media (max-width: 480px) {
        padding: 8px;
        margin-bottom: 8px;
    }
`;

// Botão de adicionar
export const BotaoAdicionar = styled.button`
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        padding: 6px 12px;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        padding: 4px 8px;
        margin-bottom: 10px;
    }
`;

// Botão de excluir
export const BotaoExcluir = styled.button`
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 10px;

    @media (max-width: 768px) {
        padding: 4px 8px;
        margin-left: 8px;
    }

    @media (max-width: 480px) {
        padding: 3px 6px;
        margin-left: 6px;
    }
`;

// Botão de saída
export const BotaoSaida = styled.button`
    background-color: ${props => props.disabled ? '#ccc' : '#2196f3'};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    margin-left: 10px;

    @media (max-width: 768px) {
        padding: 4px 8px;
        margin-left: 8px;
    }

    @media (max-width: 480px) {
        padding: 3px 6px;
        margin-left: 6px;
    }
`;

// Botão salvar
export const BotaoSalvar = styled.button`
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 6px 12px;
    }

    @media (max-width: 480px) {
        padding: 4px 8px;
    }
`;

// Formulário
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        margin-bottom: 10px;
    }
`;

// Input
export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #333;

    @media (max-width: 768px) {
        padding: 8px;
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        padding: 6px;
        margin-bottom: 6px;
    }
`;

// Botão de ajuste de quantidade
export const QuantityAdjustButton = styled.button`
    background-color: #ddd;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin: 0 5px;

    @media (max-width: 768px) {
        padding: 4px 8px;
        margin: 0 4px;
    }

    @media (max-width: 480px) {
        padding: 3px 6px;
        margin: 0 3px;
    }
`;

// Display da quantidade
export const QuantityDisplay = styled.span`
    display: inline-block;
    width: 40px;
    text-align: center;
    color: #333;

    @media (max-width: 768px) {
        width: 30px;
    }

    @media (max-width: 480px) {
        width: 25px;
    }
`;

// Checkbox
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-left: 15px;
    margin-right: 10px;

    @media (max-width: 768px) {
        margin-left: 12px;
        margin-right: 8px;
    }

    @media (max-width: 480px) {
        margin-left: 10px;
        margin-right: 6px;
    }
`;
