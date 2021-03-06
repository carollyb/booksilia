import ContainerSection from '../components/Layouts/Container';
import BoxSection from '../components/Layouts/Box';
import HeadingTitle from '../components/HeadingTitle/HeadingTitle';
import InputComponent from '../components/Input/InputComponent';
import ButtonComponent from '../components/Button/ButtonComponent';
import { useNavigate } from 'react-router-dom';

function UserData() {
    const navigate = useNavigate()
    
    return (
        <>
        <ContainerSection>
            <BoxSection>
                <HeadingTitle>
                    Atualizar Dados
                </HeadingTitle>
                <InputComponent
                    id='fullName'
                    type="text"
                    placeholder={'Nome e Sobrenome'}
                    onChange={(e) => {handle(e)}}
                />
                <InputComponent
                    id='username'
                    type="text"
                    placeholder={'Username'}
                    onChange={(e) => {handle(e)}}
                />
                <InputComponent
                    id='password'
                    type="password"
                    placeholder={'Senha'}
                    onChange={(e) => {handle(e)}}
                />
                <InputComponent
                    id='password'
                    type="password"
                    placeholder={'Confirme a senha'}
                    onChange={(e) => {handle(e)}}
                />
                <ButtonComponent
                    backgroundColor={'purple'}
                    color={'white'}
                    onClick={() => navigate('/home')}
                    >
                Confirmar
                </ButtonComponent>
            </BoxSection>
        </ContainerSection>
    </>);
}

export default UserData;