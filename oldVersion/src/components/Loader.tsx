import React from 'react';
import styled, {keyframes} from 'styled-components';

type LoaderProps = {
	size?: number;
	color?: string;
};

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div<{size: number; color: string}>`
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin: 0 auto;
  border: ${props => props.size / 8}px solid ${props => props.color};
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`;

const Loader: React.FC<LoaderProps> = ({size = 24, color = '#000000'}) => <Spinner size={size} color={color} />;

export default Loader;
