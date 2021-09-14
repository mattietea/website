import { DeepPartial, extendTheme, Theme } from '@chakra-ui/react';

const config: DeepPartial<Theme> = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: "'Lora', sans-serif;",
    heading: "'Poppins', serif",
  },
};

export const theme = extendTheme(config);
