import React, {useContext, useState, ChangeEvent, useEffect} from 'react';
import styled from 'styled-components';
import arrowLeft from '../assets/icons/arrow-left.svg';
import logo from '../assets/img/logo.png';
import firebaseApp from '../credentials';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {type AppContextInterface} from '../type';
import AppContext from '../context/AppContext';
import {Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const auth = getAuth(firebaseApp);

const Container = styled.div`
  &>a{
    display: inline-block;
    margin: 10px;
  }
  `;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;
  
  `;
const ContainerImg = styled.div`
  width: 100%;
  text-align: center;
  >img{
    width: 191px;
    height: 191px;
  }
`;
const ContainerForm = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  height: 320px;
  margin: 0 auto;
  margin-top: 10px;
  &>h2{
    font-size: 3rem;
    margin: 0;
    color: #424242;
  }
  &>form{
    width: 100%;
    height: 80%;
    border: 1px solid #DFDFDF;
    border-radius: 16px;
  }
`;
const WrapperForm = styled.div`
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 0 auto;
      margin-top: 20px;
      gap: 15px;
      &>div{
        display: flex;
        flex-direction: column;
        &>label{
          color:#777070;
          font-size:1.4rem;
          margin-bottom: 5px;
          font-weight: 500;
        }
        &>input{
        border: 1px solid #DFDFDF;
        border-radius: 10px;
        height: 40px;
        outline: none;
        padding: 0;
      }
      }
      &>button{
        width: 92px;
        height: 40px;
        color: #ffff;
        background: #FA6241;
        border-radius: 8px;
        border: none;
        align-self:center ;
        font-weight: 600;
        box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.21);

        transition:  all ease .7s;
        cursor: pointer;
        &:hover{
          opacity:.7 ;
        }
      }
`;

const LoginPage = () => {
	const state = useContext<AppContextInterface | undefined>(AppContext);
	const navigation = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({
		message: '',
		isError: false,
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigation('/dashboard');
			localStorage.setItem('adminIsLogged', 'true');
		} catch (err) {
			setError({
				message: 'Correo o contraseña son incorrectos',
				isError: false,
			});
			await Swal.fire({
				title: '¡Contraseña o correo son incorrectos!',
				icon: 'error',
			});
		}
	};

	useEffect(() => {
		if (state?.state.user.isLogged) {
			navigation('/dashboard');
		}
	}, []);

	return (
		<Container>
			<Link to={'/'}>
				<img alt='' height='30' width='30' src={arrowLeft}></img>
			</Link>
			<Wrapper>
				<ContainerImg>
					<img alt='' src={logo}></img>
				</ContainerImg>
				<ContainerForm>
					<h2>Log in</h2>
					<form onSubmit={handleSubmit}>
						<WrapperForm>
							<div>
								<label htmlFor=''>Username</label>
								<input onChange={e => {
									setEmail(e.target.value);
								}} type='text' />
							</div>
							<div>
								<label htmlFor=''>Password</label>
								<input onChange={e => {
									setPassword(e.target.value);
								}} type='password' />
							</div>
							<button>Log in</button>
						</WrapperForm>
					</form>
				</ContainerForm>
			</Wrapper>
		</Container>
	);
};

export default LoginPage;
