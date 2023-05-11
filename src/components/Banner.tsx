import React from 'react';
import styled, {keyframes} from 'styled-components';
import wave from '../assets/icons/wave.png';
import deliveryIcon from '../assets/icons/deliveryIcon.png';
import arrowBottom from '../assets/icons/arrowButtom.png';

const traslateImg = keyframes`
    from{
        transform: translateX(-3000px);
    }
    to{
        transform: translateX(0);
    }
`;
const traslateLetters = keyframes`
    from{
        transform: translateY(-3000px);
        rotate: calc(90deg);
    }
    to{
        transform: translateY(0);
        rotate: calc(0deg);
    }
`;
const arrowAnimation = keyframes`
    from{
        transform: translateY(5px);
    }
    to{
        transform: translateY(-1px);
    }
`;
const Container = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    overflow-x: hidden;
    padding-top: 78px;
    `;
const Wrapper = styled.div`
    display: grid;
    position: relative;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background: #ffff;
    background: url('../../public/bgBanner.svg') center/cover no-repeat;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 0.3fr;
  }

    &>img{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 140px;
        left: 0;
    }
`;
const Title = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 80px auto;
    width: 80%;
    max-width: 650px;
    gap: 20px;
    z-index: 2;
    color: #5d5d5d;
    padding-top: 80px;
    &>h3{
        text-align: start;
        width: 100%;
        font-size: 6rem;
        margin: 0;
        padding:0;
        color: #FA6241;
        animation: ${traslateLetters} .8s alternate;
    }
    &>small{
        font-size: 2rem;
        font-weight: 600;
        color: #5d5d5d;
        
        text-align: start;
        animation: ${traslateLetters} .8s alternate;
    }
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
    `;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 110px;
    height: 40px;
    font-weight: 600;
    font-size: 1.2rem;
    color: #fff;
    background: #FA6241;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(201, 201, 201, 0.25);
    animation: ${traslateLetters} .8s alternate;
    cursor: pointer;
    &>img{
        animation: ${arrowAnimation} .4s infinite alternate;
    }
`;
const ContainerImg = styled.div`
    display: flex;
    padding-top: 80px;
    justify-content: flex-start;
    animation:${traslateImg} 1s alternate;
    &>img{
        width: 100%;
        max-width: 500px;
        max-height: 500px;
        min-width: 200px;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        align-items: flex-start;
        padding-top: 0;
        padding-bottom: 90px;
        &>img{
            width: 300px;
        }
}

`;
type ChildComponentProps = {
	productsRef: React.RefObject<HTMLDivElement>;
};

const Banner = ({productsRef}: ChildComponentProps) => {
	const scrollProducts = () => {
		if (productsRef.current !== null) {
			productsRef.current.scrollIntoView({behavior: 'smooth'});
		}
	};

	return (
		<Container>
			<Wrapper>
				<Title>
					<h3>Pizzeria Don  Remolo</h3>
					<small>El sabor que te hace girar la cabeza: <br></br> ¡Bienvenidos a Don Remolo, la mejor pizzería de la ciudad!</small>
					<Button onClick={scrollProducts}>Products <img src={arrowBottom} alt='' width={15}/></Button>
				</Title>
				<ContainerImg>
					<img src={deliveryIcon} alt='' />
				</ContainerImg>
				<img src={wave} alt='' />
			</Wrapper>

		</Container>
	);
};

export default Banner;
