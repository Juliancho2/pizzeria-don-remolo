import React, {type ReactElement} from 'react';
import {Navigate, Outlet} from 'react-router-dom';

type Props = {
	children?: ReactElement;
	isAllowed: boolean | undefined;
	redirectTo?: string;
};

export const ProtectRoutes = ({children, isAllowed, redirectTo = '/'}: Props) => {
	if (!isAllowed) {
		return <Navigate to={redirectTo} />;
	}

	return (
		children ? children : <Outlet />
	);
};
