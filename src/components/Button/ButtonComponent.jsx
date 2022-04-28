import { Button } from '@chakra-ui/react';

function ButtonComponent({children, color, backgroundColor, onClick, gap}) {
    return (
        <Button
        fontFamily={'sen'}
        fontWeight={'bold'}
        fontSize={'20px'}
        color={color}
        backgroundColor={backgroundColor}
        onClick={onClick}
        gap={gap}
        h={'47px'}>
            {children}
        </Button>
    );
}

export default ButtonComponent;