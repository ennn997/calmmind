import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: '280px',
    md: '414px',
    lg: '1024px',
    xl: '1440px',
}

const overrides = {
    ...chakraTheme,

    breakpoints,
    styles: {
        global: {
            'html, body': {
                bg: '#FFBAA1',

                maxHeight: { md: '3245px', lg: '3000px' },
            },
        },
    },

    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
    },

    colors: {
        blue: '#110ACD',
        purple: '#422938',
        black: '#000000',
        pink: '#FFBAA1',
    },
}

const customTheme = extendTheme(overrides)

export default customTheme
