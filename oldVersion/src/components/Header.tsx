import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import Menu from './Menu';

const Container = styled.div`
  position: fixed;
  height: 78px;
  width: 100%;
  z-index: 65;
  top: 0;
  background: #FFFFFF;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  width: 90%;

  
`;

const Header = () => (
	<Container>
		<Wrapper>
			<div>
				<img src={logo} height='77' width='77' alt='' />
			</div>
			<Menu/>
		</Wrapper>
	</Container>
);

export default Header;
