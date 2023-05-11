import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import 'hamburgers/dist/hamburgers.css';

const Container = styled.div`
    display:flex;
    align-items:center;
    position:relative;
    height:77px;
`;
const MenuIcon = styled.button`
      display:flex;
      align-items:center;
      height:50%;
      width:100%;
      padding:0;
      &>.hamburger-box  {
          width:100%;
          color:red;
        &> div{
             width:100%; 
             height:3px;
             &:after{
                width:100%; 
                height:3px;

            }
             &:before{
                width:100%; 
                height:3px;
            }
        }
    }
`;
const openMenu = keyframes`
    0% {
    transform: translateY(-100%);
    animation-timing-function: ease-in;
  }
  25% {
    transform: translateY(30px);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translateY(-10px);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translateY(5px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0);
  }

`;
const MenuList = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:absolute;
    gap:10px;
    align-items:center;
    background: #ffff;
    height:150px;
    width:200px;;
    top: 75px;
    right: 0;
    border-radius:8px;
    box-shadow: 0px 4px 4px rgba(211, 211, 211, 0.25);
    animation: ${openMenu}  ease-in-out .7s;
    &>a{
        text-decoration:none;
        color:#656565;
        font-size:1.2rem;
        font-weight:600;
    }
`;
const Menu = () => {
	const [visible, setVisible] = useState(false);
	const handleMenu = () => {
		setVisible(!visible);
	};

	return (
		<Container>
			<MenuIcon onClick={handleMenu} className={`hamburger hamburger--collapse ${visible ? 'is-active' : ''}`}>
				<div className='hamburger'>
					<div className='hamburger-box'>
						<div className='hamburger-inner'></div>
					</div>
				</div>
			</MenuIcon>
			{
				visible && <MenuList>
					<Link to={'/checkout'}>My orders</Link>
					<Link to={'/login'}>Log in</Link>
				</MenuList>
			}
		</Container>
	);
};

export default Menu;
