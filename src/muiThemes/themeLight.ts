import { createTheme, ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { CSSInterpolation } from '@mui/system';
import { globalOptions } from './themeGlobal';

/**
 * Светлая тема MUI.
 */

// Predefined palette to acces when configure components.
const lightTheme = createTheme(deepmerge({
    palette: {
        mode: 'light',
        // primary: {
        //     main: '#103263',
        //     light: '#445B91',
        //     dark: '#000A38'
        // }
        secondary: {
            main: 'rgb(255, 198, 0)'
        }
    }
}, globalOptions));


export default lightTheme;