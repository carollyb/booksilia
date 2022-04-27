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
        
        <Text color={'#6C5DDD'} align={'center'} fontFamily={"sen"} fontSize={'36px'} marginBottom={"20px"}>
            Sobre
        </Text>
        <Text color={'gray.500'} align={'center'} fontFamily={"sen"} fontSize={'20px'} marginBottom={"40px"}>
        <div>Somos uma livraria independente que aprecia diversos mundos, histórias e aprendizados através da leitura.</div>
        <div>Formar leitores e desenvolver o hábito da leitura são as razões de existir da Booksilia.</div>
        <div>Ao mesmo tempo, formamos um público que utiliza a leitura e o pensamento crítico como ferramenta de transformação pessoal e social</div>
        </Text>
        </>
    );
}

export default LandingPage;