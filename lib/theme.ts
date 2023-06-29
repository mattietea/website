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
    body: 'SFMono-Regular,Menlo,Monaco,Consolas,monospace',
    heading: 'SFMono-Regular,Menlo,Monaco,Consolas,monospace',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,monospace',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'gray.900' : 'gray.200',
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.800',
        fontSize: ['16px', '18px', '20px'],
      },
    }),
  },
};

export const theme = extendTheme(
  config,
  withDefaultColorScheme({ colorScheme: 'teal' }),
);
