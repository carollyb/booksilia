import {
    Input
} from '@chakra-ui/react'

function InputComponent({values, id, type, placeholder, onChange}) {
    return (
        <Input
        value={values}
        id={id}
        type={type}
        h={'47px'}
        boxShadow={'md'}
        borderRadius={'10px'}
        fontFamily={'sen'}
        placeholder={placeholder}
        onChange={onChange}
        _focus={{
            boxShadow: 'md',
            border: 'solid',
            borderColor: 'purple'
        }} />
    );
}

export default InputComponent;