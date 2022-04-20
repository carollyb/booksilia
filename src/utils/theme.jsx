import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        purple: '#6C5DD4',
        coral: '#FFAB7C',
        lightCoral: '#FFD0B6',
        darkGray: '#5A5A5A',
        lightGray: '#C4C4C4',
        backgroundFooter: '#D1C9C9',
        backgroundSection: '#F2F0FE',
        darkRed: '#9D213F'
    },
    fonts: {
        sen: 'Sen, sans-serif',
        lato: 'Lato, sans-serif',
    }
})

export default theme