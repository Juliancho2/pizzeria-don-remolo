import React, {useContext} from 'react';
import styled from 'styled-components';
import appContext from '../../context/AppContext';
import {type AppContextInterface} from '../../type';
import usedash from '../../assets/icons/usedash.png';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  top:0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 20px;
  background-color: #201368;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  &>div{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 90%;
	color: #fff;
}

`;

const DashboardHeader = () => {
	const state = useContext<AppContextInterface | undefined>(appContext);

	return (
		<HeaderContainer>
			<div>
				<img width={25} src={usedash} alt='user' />
				<p>{state?.state.user.email}</p>
			</div>
		</HeaderContainer>
	);
};

export default DashboardHeader;
