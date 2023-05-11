import {type AppContextInterface} from '../type';
import React from 'react';

const appContext = React.createContext<AppContextInterface | undefined>(undefined);

export default appContext;
