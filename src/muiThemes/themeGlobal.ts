import { ThemeOptions } from '@mui/material/styles';
import { CSSInterpolation } from '@mui/system';
// import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

/**
 * Глобальные параметры тем MUI.
 */

/**
 * NOTE: доступ к классу элемента, не определённому в объекте темы.
 *
 * root: {
 *    '&.Mui-class': <CssInterpolation>{
 *        // some style.
 *    }
 * }
 *
 * */

/** breakpoints override */
// export const breakpoints = createBreakpoints({
//     values: {
//         xs: 0,
//         sm: 600,
//         md: 900,
//         lg: 1280, // override default lg.
//         xl: 1536,
//     }
// });

/** Общие параметры тем. */
export const globalOptions: ThemeOptions = {
    // breakpoints,

    typography: {
        fontFamily: 'Montserrat',
        h1: {
            fontSize: '30px',
            fontWeight: 600
        },
        h2: {
            fontSize: '27px',
            fontWeight: 700
        },
        h3: {
            fontSize: '22px',
            fontWeight: 500
        },
        h4: {
            fontSize: '18px',
            fontWeight: 500
        },
        h5: {
            fontSize: '16px',
            fontWeight: 500
        },
        h6: {
            fontSize: '18px',
            fontWeight: 500
        },
        subtitle1: {
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 1.25
        },
        subtitle2: {
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: 1.25
        },
        body1: {
            fontSize: '16px',
            fontWeight: 500
        },
        body2: {
            fontSize: '14px',
            fontWeight: 500
        },
        caption: {
            fontSize: '12px',
            fontWeight: 500
        },
        button: {
            textTransform: 'none'
        }
    },

    // components: {
    //     MuiFormControlLabel: {
    //         styleOverrides: {
    //             root: {
    //                 userSelect: 'none'
    //             }
    //         }
    //     },
    //     MuiCheckbox: {
    //         styleOverrides: {
    //             root: {
    //                 ':hover': <CSSInterpolation>{
    //                     background: 'none'
    //                 }
    //             }
    //         }
    //     },
    //     MuiButton: {
    //         styleOverrides: {
    //             root: {
    //                 boxShadow: 'none',
    //                 ':hover': <CSSInterpolation>{
    //                     boxShadow: 'none'
    //                 }
    //             },
    //         }
    //     },
    //     MuiDialog: {
    //         styleOverrides: {
    //             paper: {
    //                 borderRadius: '10px',
    //                 boxSizing: 'border-box'
    //             }
    //         }
    //     }
    // },

    // mixins: {
    //     toolbar: {
    //         height: 64,
    //         // breakpoints demo.
    //         [breakpoints.down('md')]: <CSSInterpolation>{
    //             height: 56
    //         }
    //     },
    // }
};