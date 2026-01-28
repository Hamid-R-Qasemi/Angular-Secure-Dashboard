import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

export const primengPreset = definePreset(Aura, {
  semantic: {
    primary: {
      light: {
        500: '#137fec',
        hover: '#0d6efd',
      },
      dark: {
        500: '#137fec',
        400: '#137fec',
      },
    },
    colorScheme: {
      light: {},
      dark: {},
    },
  },
});
