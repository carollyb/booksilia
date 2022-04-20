import {
    Input
} from '@chakra-ui/react'

function InputComponent({type, placeholder}) {
    return (
        <Input
        type={type}
        h={'47px'}
        boxShadow={'md'}
        borderRadius={'10px'}
        fontFamily={'sen'}
        placeholder={placeholder}
        _focus={{
            boxShadow: 'md',
            border: 'solid',
            borderColor: 'purple'
        }} />
    );
}

export default InputComponent;