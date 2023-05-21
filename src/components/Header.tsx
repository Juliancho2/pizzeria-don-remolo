import React from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';
import Menu from './Menu';
import {Link} from 'react-router-dom';

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
const MenuLeft = styled.div`
  display: flex;
  gap: 30px;
  &>div{
    display: flex;
    align-items: center;
    gap: 20px;
    &>a{
      font-size: 1.8rem;
      font-weight: 600;
      color: gray;
      text-decoration: none;
    }
    @media (max-width:700px ) {
      display: none;
    }
  }
`;
const Header = () => (
	<Container>
		<Wrapper>
			<MenuLeft>
      <Link to={'/'}>
				<img src={logo} height='77' width='77' alt='' />
      </Link>
				<div>
					<Link to={'menu'}>
          NAVEGAR POR EL MENU
					</Link>
					<Link to={'#'}>
          CONTACTANOS
					</Link>
				</div>
			</MenuLeft>
			<Menu />
		</Wrapper>
	</Container>
);

export default Header;
