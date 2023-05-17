import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

// Estilos del footer
const FooterWrapper = styled.footer`
  background-color: #231F20;
  padding: 30px;
  text-align: center;
  min-height: 40px;
`;

const FooterText = styled.p`
  color: #888;
  font-size: 14px;
  margin: 0;
`;
const FooterImg = styled.p`
 
`;

// Componente de Footer
const Footer: React.FC = () => (
	<FooterWrapper>
		<FooterText>© 2023 - Todos los derechos reservados</FooterText>
		<FooterText>En desarrollo por Julian M.</FooterText>
		<FooterImg><img src={logo} alt='' width={60}/></FooterImg>
	</FooterWrapper>
);

export default Footer;
