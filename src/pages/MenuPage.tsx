import React, { useContext } from 'react';
import { AppContextInterface } from '../type';
import Header from '../components/Header';
import appContext from '../context/AppContext';
import ContainerMenu from '../containers/ContainerMenu';

const MenuPage = () => {

  const state = useContext<AppContextInterface | undefined>(appContext);

  return (
    <div>
      <Header></Header>
      <ContainerMenu></ContainerMenu>
    </div>

  );
}


export default MenuPage;