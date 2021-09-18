import { DeepPartial, extendTheme, Theme } from '@chakra-ui/react';

const config: DeepPartial<Theme> = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    body: "'Overpass Mono', sans-serif;",
    heading: "'Poppins', serif",
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'black' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
};

export const theme = extendTheme(config);
