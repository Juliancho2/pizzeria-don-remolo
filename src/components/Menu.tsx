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
      left: 0;
      display:flex;
      align-items:center;
      height:50%;
      width:100%;
      padding:0;
      @media (min-width:700px ) {
      display: none;
    }
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
        font-size:1.4rem;
        font-weight:600;
    }
`;

const BtnLogin = styled.div`
  &>a{
    display: flex;
    gap: 5px;
    align-items: center;
    text-decoration: none;
    color: gray;
    
    &>p{
      font-size:1.6rem;
    }
    @media (max-width:700px ) {
    display: none;
    }
  }
`;

const Menu = () => {
	const [visible, setVisible] = useState(false);
	const handleMenu = () => {
		setVisible(!visible);
	};

	return (
		<Container>
			<BtnLogin>
				<Link to={'/login'}>
					<svg width='26' height='26' viewBox='0 0 76 76' fill='none' xmlns='http://www.w3.org/2000/svg' className='SignInHeaderSection__StyledAccountNotSignedInIcon-sc-1mecrgs-1 cbBVIS'><g clipPath='url(#clip0_615_53684)'><path fillRule='evenodd' clipRule='evenodd' d='M0.5 38C0.5 58.7188 17.2812 75.5 38 75.5C58.7188 75.5 75.5 58.7188 75.5 38C75.5 17.2812 58.7188 0.5 38 0.5C17.2812 0.5 0.5 17.2812 0.5 38ZM5.85716 38C5.85716 20.2573 20.225 5.85716 37.9677 5.85716C55.7427 5.85716 70.1427 20.2573 70.1427 38C70.1427 55.7427 55.7427 70.1427 37.9677 70.1427C20.225 70.1427 5.85716 55.7427 5.85716 38Z' fill='#B5B6BD'></path><path d='M14.638 61.4375L9.875 59.2822C12.5834 52.9897 26.9403 47.375 37.9953 47.375C49.0756 47.375 63.4747 52.9986 66.125 59.3033L61.3442 61.4164C59.7411 57.6036 47.2189 52.7131 37.9953 52.7131C28.782 52.7131 16.2903 57.5984 14.638 61.4375Z' fill='#B5B6BD'></path><path fillRule='evenodd' clipRule='evenodd' d='M52.0625 28.625C52.0625 20.8302 45.7948 14.5625 38 14.5625C30.2052 14.5625 23.9375 20.8302 23.9375 28.625C23.9375 36.4198 30.2052 42.6875 38 42.6875C45.7948 42.6875 52.0625 36.4198 52.0625 28.625ZM28.625 28.625C28.625 23.4181 32.7931 19.25 38 19.25C43.2069 19.25 47.375 23.4181 47.375 28.625C47.375 33.8319 43.2069 38 38 38C32.7931 38 28.625 33.8319 28.625 28.625Z' fill='#B5B6BD'></path></g><defs><clipPath id='clip0_615_53684'><rect width='76' height='76' fill='white'></rect></clipPath></defs></svg>
					<p>Inicio de sesion</p>
				</Link>
			</BtnLogin>
			<MenuIcon onClick={handleMenu} className={`hamburger hamburger--collapse ${visible ? 'is-active' : ''}`}>
				<div className='hamburger'>
					<div className='hamburger-box'>
						<div className='hamburger-inner'></div>
					</div>
				</div>
			</MenuIcon>
			{
				visible && <MenuList>
					<Link to={'/checkout'}>Navega por el menu</Link>
					<Link to={'/checkout'}>Contactanos</Link>
					<Link to={'/login'}>Inicio de sesion</Link>
				</MenuList>
			}
		</Container>
	);
};

export default Menu;
