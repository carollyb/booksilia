import {
    Text,
    Flex,
    Image
  } from '@chakra-ui/react';
  
function LandingPage() {
    return (
        <>
        <Flex flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}>
        
        <Image alt={"Box Senhor dos Aneis"} src={"https://images-submarino.b2w.io/produtos/01/00/img/3046164/7/3046164764_1GG.jpg"} />
        <Image alt={"Duna"} src={"https://images-submarino.b2w.io/produtos/01/00/img/2903078/7/2903078765_1GG.jpg"} />
        
        </Flex>
        
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