import Carousels from "../components/Carousels/Carousels"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {
    Text
    
  } from '@chakra-ui/react';


  
function LandingPage() {
    return (
        <>
     <div>
         <Carousels/>
     </div>
        
        <Text color={'#6C5DDD'} align={'center'} fontSize={'36px'} marginBottom={"20px"}>
            Sobre
        </Text>
        <Text color={'gray.500'} align={'center'} fontSize={'20px'}>
        <h3>Somos uma livraria independente que aprecia diversos mundos, histórias e aprendizados através da leitura.</h3>
        <h3>Formar leitores e desenvolver o hábito da leitura são as razões de existir da Booksilia.</h3>
        <h3>Ao mesmo tempo, formamos um público que utiliza a leitura e o pensamento crítico como ferramenta de transformação pessoal e social</h3>
        </Text>
        </>
    );
}

export default LandingPage;