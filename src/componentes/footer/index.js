import React from "react";
import { Link,FooterInfo, FooterList, FooterItem } from "./styles";

const Footer = () => {
    return (
        <>
            <FooterInfo />
            <FooterList>
                <FooterItem>
                    <Link href="https://portfolio-cw9u.vercel.app/" target="_blank">Victor Lana</Link>
                    <span>Back-end</span>
                    </FooterItem>
                <FooterItem>
                    <Link href="https://portifolio-lxcz.vercel.app" target="_blank">Ruan Pablo</Link>
                    <span>Front-end</span>
                    </FooterItem>
            </FooterList>
        </>
    )
}

export default Footer;