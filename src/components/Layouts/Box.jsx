import {
    Flex,
    Text,
    Input,
    Button,
} from '@chakra-ui/react'

function BoxSection({children}) {
    return (
        <Flex 
        w={{base: '200px', md: '260px', lg: '722px'}}
        p={{base: '10px', md: '36px 150px 60px 150px'}}
        gap={'28px'}
        boxShadow={'lg'}
        borderRadius={'20px'}
        direction={'column'}
        align={'center'}
        >
            {children}
        </Flex>
    );
}

export default BoxSection;