import { Button } from '@chakra-ui/react';

function ButtonComponent({children, color, backgroundColor, onClick}) {
    return (
        <Button
        fontFamily={'sen'}
        fontWeight={'bold'}
        fontSize={'20px'}
        color={color}
        backgroundColor={backgroundColor}
        onClick={onClick}
        h={'47px'}>
            {children}
        </Button>
    );
}

export default ButtonComponent;