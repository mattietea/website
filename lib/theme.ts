import {
  DeepPartial,
  extendTheme,
  Theme,
  withDefaultColorScheme,
} from '@chakra-ui/react';

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
      '*, *:before, *:after': {
        borderColor: props.colorMode === 'dark' ? 'gray.700' : 'gray.300',
        borderStyle: 'solid',
      },
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
};

export const theme = extendTheme(
  config,
  withDefaultColorScheme({ colorScheme: 'teal' }),
);
