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
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.200',
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.800',
      },
    }),
  },
};

export const theme = extendTheme(
  config,
  withDefaultColorScheme({ colorScheme: 'teal' }),
);
