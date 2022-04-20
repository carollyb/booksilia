import {
    Flex
} from '@chakra-ui/react';

function ContainerSection({children}) {
    return (
        <Flex
        m={{base: '10px', md: '70px', lg: '140px'}}
        direction={'row'}
        justify={'center'}>
            {children}
        </Flex>

    );
}

export default ContainerSection;