import { createTheme } from "@mui/material"


const theme = createTheme({
    palette: {
        primary: {
            main: '#141416',
            dark: '#141416db',
            contrastText: '#FCFCFD',
        },
        secondary:{
            main: '#777E90',
            contrastText: '#777E90',
        },
        dark:{
            formLink: '#718096',
            formHead: '#27272E',
            featureHead: '#304659',
            footerLink: '#363940',
            inputLable: '#425466',
            dropDownHead: '#23262F',
            productDark: '#182135',
            productInfoDark: '#626264',
            filterHead: '#262D33',
            fCustomerReview:'#4B5157',
            body1: '#3B5266',
            dark555: '#555',
            dark5B: '#5B5B5B',
            dark57: '#575757',
            dark93: '#939393',
            dark: '#000',
            payement: '#353945',
            dark222: '#222',
        },
        light:{
            main: '#fff',
            sectionColor:'#FCFCFD',
            lightf7: '#f7f7f7',
        },
        payment:{
            main: '#353945',
            dark: '#353945db',
            contrastText: '#F7FAFC',
        },
        gray:{
            50:'#F1F4F3',
            inputBG: '#edf2f7',
            headerBorder: '#E6E8EC',
            cardBorder: '#B1B5C3',
            inputBorder: '#CAD1E1',
            footerLightGray: '#95A1BB',
            testimonialBG: '#F4F5F6',
            checkBox: '#C9CED6',
            filterValue: '#939699',
            filterInput: '#D9DADB',
            productInfo: '#626264',
            unrateStar: '#BCBFC2',
            grayA3: '#A3A3A4',
            grayA332: '#A3A3A43d'
        },
        lightBtn:{
            main: '#E6E8EC',
            dark: '#E6E8ECdb',
            contrastText: '#23262F'
        },
        lighterBtn:{
            main: '#BFBFBF1A',
            dark: '#BFBFBF2a',
            contrastText: '#353945',
        },
        dark555:{
            main: '#555',
            dark: '#555555db',
            contrastText: '#F1F0FF'
        },
        dark555alt:{
            main: '#5555551A',
            dark: '#5555553a',
            contrastText: '#555'
        },
    },
   
    
    
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthMd: {
                    '@media screen and (min-width: 1441px)': {
                        maxWidth: 1320,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 1440px) and (min-width: 1200px)': {
                        maxWidth: 1180,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 1199px)': {
                        maxWidth: 960,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 991px)': {
                        maxWidth: 720,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 767px)': {
                        maxWidth: 540,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 575px)': {
                        maxWidth: '100%',
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 374px)': {
                        padding: '0px 15px !important',
                    },
                },
                maxWidthXs:{
                    '@media screen and (min-width: 768px)': {
                        maxWidth: 810,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 767px)': {
                        maxWidth: 540,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 575px)': {
                        maxWidth: '100%',
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 374px)': {
                        maxWidth: '100%',
                        padding: '0px 15px !important',
                    },
                },
                maxWidthXxs:{
                    '@media screen and (min-width: 1200px)': {
                        maxWidth: 1050,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 1199px)': {
                        maxWidth: 990,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 991px)': {
                        maxWidth: 720,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 767px)': {
                        maxWidth: 540,
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 575px)': {
                        maxWidth: '100%',
                        padding: '0px 30px !important',
                    },
                    '@media screen and (max-width: 374px)': {
                        maxWidth: '100%',
                        padding: '0px 15px !important',
                    },
                },
            },
        },
        MuiList:{
            styleOverrides: {
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
        MuiTypography: {
            styleOverrides: {
                fontFamily: 'Poppins', 
                h1: {
                    fontSize: 96,
                    lineHeight: '100%',
                    fontWeight: 700,
                    fontFamily: 'DM Sans',
                    wordBreak: 'break-word',
                    '@media screen and (max-width: 1439px)':{
                        fontSize: 84,
                    },
                    '@media screen and (max-width: 1199px)':{
                        fontSize: 76,
                    },
                    '@media screen and (max-width: 991px)':{
                        fontSize: 66,
                    },
                    '@media screen and (max-width: 767px)':{
                        fontSize: 54,
                    },
                    '@media screen and (max-width: 576px)':{
                        fontSize: 48,
                    },
                },
                h2: {
                    fontSize: 64,
                    lineHeight: '100%',
                    fontWeight: 700,
                    fontFamily: 'DM Sans',
                    letterSpacing: 1.75,
                    wordBreak: 'break-word',
                    '@media screen and (max-width: 1199px)': {
                        fontSize: 56,
                    },
                    '@media screen and (max-width: 991px)': {
                        fontSize: 52,
                    },
                    '@media screen and (max-width: 767px)': {
                        fontSize: 48,
                    },
                },
                h3: {
                    fontSize: 40,
                    lineHeight: '120%',
                    fontWeight: 500,
                    fontFamily: 'DM Sans',
                    wordBreak: 'break-word',
                    '@media screen and (max-width: 1200px)': {
                        fontSize: 38,
                    },
                    '@media screen and (max-width: 991px)': {
                        fontSize: 34,
                    },
                    '@media screen and (max-width: 767px)': {
                        fontSize: 28,
                    },
                    '@media screen and (max-width: 575px)': {
                        fontWeight: 400,
                        fontSize: 24,
                    },
                },
                h4: {
                    fontSize:32,
                    lineHeight: '125%',
                    fontWeight: 600,
                    fontFamily: 'DM Sans',
                    wordBreak: 'break-word',
                    '@media screen and (max-width: 1199px)': {
                        fontSize: 28,
                    },
                    '@media screen and (max-width: 767px)': {
                        fontSize: 24,
                    },
                    '@media screen and (max-width: 575px)': {
                        fontSize: 20,
                    },
                },
                h5: {
                    fontSize: 28,
                    lineHeight: '38px',
                    fontWeight: 500,
                    fontFamily: 'Inter',
                    wordBreak: 'break-word',
                },
                h6: {
                    fontSize: 24,
                    lineHeight: '133%',
                    fontWeight: 600,
                    fontFamily: 'Poppins',
                    wordBreak: 'break-all',
                    '@media screen and (max-width: 991px)': {
                        fontSize: 20,
                    },
                    '@media screen and (max-width: 767px)': {
                        fontSize: 18,
                        fontWeight: 500,
                    },
                    '@media screen and (max-width: 575px)': {
                        fontSize: 16,
                    },
                },
                body1:{
                    color: '#3B5266',
                    fontFamily: 'Poppins',
                    letterSpacing: 0,
                    '@media screen and (max-width: 767px)':{
                        fontSize: '14px',
                    },
                },
                body2:{
                    letterSpacing: 0,
                    fontFamily: 'Inter',
                    lineHeight: '25px'
                },
                secondHeading:{
                    fontSize: 48,
                    lineHeight: '100%',
                    fontWeight: 600,
                    fontFamily: 'DM Sans',
                    wordBreak: 'break-word',
                    '@media screen and (max-width: 1439px)':{
                        fontSize: 42,
                    },
                    '@media screen and (max-width: 1199px)':{
                        fontSize: 38,
                    },
                    '@media screen and (max-width: 991px)':{
                        fontSize: 32,
                    },
                    '@media screen and (max-width: 767px)':{
                        fontSize: 28,
                    },
                    '@media screen and (max-width: 576px)':{
                        fontSize: 26,
                    },
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'DM Sans',
                    lineHeight: '16px',
                    borderRadius: 50,
                    padding: '16px 24px',
                    textTransform: 'capitalize',
                },
                text:{
                    padding: 0,
                    '&:hover':{
                        backgroundColor: 'transparent !important',
                    }
                },
            },
        },
    },
  })
  
  export default theme