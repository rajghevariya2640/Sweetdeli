import AppleIcon from '@mui/icons-material/Apple'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import { Checkbox, FormControlLabel, FormLabel } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomBox from './Components/CustomBox'
import CustomButton from './Components/CustomButton'
import CustomCol from './Components/CustomCol'
import CustomContainer from './Components/CustomContainer'
import CustomLink from './Components/CustomLink'
import CustomRow from './Components/CustomRow'
import CustomTextField from './Components/CustomTextField'
import CustomTypography from './Components/CustomTypography'
import theme from './Components/Theme'
import BG from './image/FormBg.jpg'
import Logo from './image/Logo.webp'


const useStyles = makeStyles((theme) => ({
    signUpMain:{
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden',
        '& .MuiContainer-root':{
            padding: '0 !important'
        },
        '& img':{
            width: '100%',
            objectfit: 'cover',
        },
    },
    mainLogo:{
        width: 125,
        [theme.breakpoints.down('md')]:{
            width: 100
        },
        '&:hover':{
            cursor: 'pointer'
        },
    },
    signUpInfo:{
        '&.MuiTypography-root':{
            maxWidth: 400,
            color: theme.palette.light.main,
            fontSize: 18,
            fontWeight: 300,
            marginTop: 35,
            [theme.breakpoints.down('xl')]:{
                marginTop: 30,
                fontSize: 16,
            },
            [theme.breakpoints.down('lg')]:{
                marginTop: 25,
                maxWidth: 360,
            },
            [theme.breakpoints.down('md')]:{
                marginTop: 20,
            },
            [theme.breakpoints.down('sm')]:{
                marginTop: 10,
                fontSize: 14,
                maxWidth: 425,
            },
        },
    },
    SignUpHeadMain:{
        marginTop: 75,
        marginLeft: 75,
        [theme.breakpoints.down('xl')]:{
            marginLeft: 30,
            marginTop: 50,
            marginBottom: 50
        },
        [theme.breakpoints.down('lg')]:{
            marginLeft: 0,
        },
        [theme.breakpoints.down('md')]:{
            marginBottom: 20,
        },
    },
    leftSideMain:{
        position: 'static',
        '&::after':{
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '50%',
            background: `url(${BG})`,
            backgroundSize: 'cover',
            zIndex: -1,
            [theme.breakpoints.down('lg')]:{
                width: 'unset',
                right: '-25%',
                left: '-25%'
            },
        },
        [theme.breakpoints.down('lg')]:{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
        },
    },
    leftSide:{
        minHeight: '100vh',
        position: 'static',
        paddingTop: 50,
        paddingRight: 30,
        [theme.breakpoints.down('xl')]:{
            paddingTop: 20,
        },
        [theme.breakpoints.down('lg')]:{
            minHeight: '100%',
            position: 'relative'
        },
        [theme.breakpoints.down('sm')]:{
            padding: 30
        },
    },
    rightSide:{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        [theme.breakpoints.down('lg')]:{
            minHeight: 'auto'
        },
        [theme.breakpoints.down('sm')]:{
            padding: 30
        },
        [theme.breakpoints.down('mdxs')]:{
            display: 'block',
            width: '100%',
        },
        '& .MuiTypography-h5':{
            color: theme.palette.dark.formHead,
        },
        '& .MuiTypography-body2':{
            color: theme.palette.dark.formHead,
            marginTop: 12,
        },
        '& label':{
            fontSize: 14,
            fontWeight: 500,
            color: theme.palette.dark.inputLable,
            marginBottom: 4,
            padding: 0,
            fontFamily: 'Inter',
            marginTop: 30,
        },
        '& .MuiCheckbox-root.Mui-checked':{
            color: theme.palette.gray.checkBox
        },
    },
    passwordLable:{
        '&.MuiTypography-root':{
            fontSize: 11,
            color: theme.palette.dark.formLink,
            margin: 0
        },
    },
    mybox:{
        maxWidth:'424px',
        marginTop: 20,
        marginBottom: 20,
        [theme.breakpoints.down('sm')]:{
            margin: 0
        },
    },
    privacyPolicy:{
        '&.MuiFormControlLabel-root':{
            padding: 0,
        },
        '& .MuiTypography-root':{
            lineHeight: '20px',
            fontSize: 12,
            paddingLeft: 8,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            margin: 0,
        },
    },
    inputMain:{
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]:{
            marginTop: 10,
        },
    },
    signUpBtn:{
        '&.MuiButtonBase-root':{
            width: '100%',
            marginTop: 30,
            marginBottom: 30,
            [theme.breakpoints.down('md')]:{
                marginTop: 30,
                marginBottom: 30,
        },
        }
    },
    techniqueLableMain:{
        position: 'relative', 
        display: 'flex',
        justifyContent: 'center',  
        '&::after':{
            content: "''",
            position: 'absolute',
            top: '55%',
            left: 0,
            height: 1,
            width: '100%',
            backgroundColor: theme.palette.gray.inputBG,
            zIndex: '-1',
        },
    },
    techniqueLable:{
        '&.MuiTypography-root':{
            fontSize: 12,
            fontWeight: 500,
            display: 'inline-block',
            color: theme.palette.dark.footerLink,
            zIndex: '1',
            backgroundColor: theme.palette.light.main,
            paddingLeft: 24,
            paddingRight: 24,
        },
    },
    buttonGroupMain:{
        display: 'flex',
        justifyContent: 'center'
    },
    buttonGroupWrapper:{
        maxWidth: 220,
        width: '100%',
        marginTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]:{
            marginTop: 20,
            maxWidth: 190,
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth: 166,
        },
        '& .MuiButton-containedLight':{
            height: 52,
            padding: 0,
            margin: 0,
            minWidth: 52,
            boxShadow: `0px 1px 3px 0px rgba(50, 50, 71, 0.10), 0px 0px 1px 0px rgba(12, 26, 75, 0.20)`,
            '&:hover':{
                boxShadow: `0px 1px 5px 0px rgba(50, 50, 71, 0.20), 0px 0px 1px 0px rgba(12, 26, 75, 0.20)`,
            },
            [theme.breakpoints.down('md')]:{
                height: 48,
                minWidth: 48,
                boxShadow: 'none',
                border: '1px solid',
                borderColor: '#e2e0de',
            },
            [theme.breakpoints.down('md')]:{
                height: 42,
                minWidth: 42,
            },
            '& svg':{
                height: 24,
                width: 24,
                [theme.breakpoints.down('md')]:{
                    height: 22,
                    minWidth: 22,
                },
            },
            '&:nth-child(odd)':{
                color: theme.palette.dark.dark555
            },
        },
    },
    signInButton:{
        marginTop: 50,
        margin: [[0,'auto']],
        display: 'block',
        textTransform: 'lowercase',
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: 'Inter',
        color: theme.palette.dark.formLink,
        [theme.breakpoints.down('md')]:{
            fontSize: 12,
            marginTop: 35,
        },
        '&::first-letter':{
            textTransform: 'uppercase'
        },
        '& a':{
            color: theme.palette.primary.main,
            textTransform: 'capitalize',
            textDecoration: 'none',
        }
    },
}))

const SignUp = () => {
    const classes = useStyles(); 

    const signUpForm = [
        {
            lable: 'Full name',
            placeholder: 'Enter your name',
            type: 'text',
        },
        {
            lable: 'E-mail or phone number',
            placeholder: 'Type your e-mail or phone number',
            type: 'email',
        },
        {
            lable: 'Password',
            placeholder: 'Type your password',
            type: 'password',
        },
    ]
    return (
      <CustomBox className={classes.signUpMain}>
          <CustomContainer maxWidth='md'>
              <CustomRow>
                  <CustomCol xs={12} lg={6} className={classes.leftSideMain}>
                    <CustomBox  className={classes.leftSide}>
                        <CustomBox className={classes.mainLogo}>
                            <img src={Logo} alt='Logo'  />
                        </CustomBox>
                        <CustomBox className={classes.SignUpHeadMain}>
                            <CustomTypography className={classes.SignUpHead} variant={'h3'} component={'h3'} color={theme.palette.light.main}>Welcome to Sweetdeli!</CustomTypography>
                            <CustomTypography className={classes.signUpInfo} variant={'body1'} component={'p'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ut laoreet velit ma.</CustomTypography>
                        </CustomBox>
                    </CustomBox>
                  </CustomCol>
                  <CustomCol xs={12} lg={6} className={classes.rightSide}>
                    <CustomBox className={classes.mybox}>
                          <CustomTypography variant={'h5'} component={'h5'}>Create your account</CustomTypography>    
                          <CustomTypography variant={'body2'} component={'p'}>It’s free and easy</CustomTypography>    
                          <form className={classes.inputMain} method='get'>
                            {
                                signUpForm.map((data)=>{
                                    return(
                                        <>
                                            <FormLabel>{data.lable}</FormLabel>
                                            <CustomTextField variant='filled' type={data.type} required fullWidth placeholder={data.placeholder} />
                                        </>
                                    )
                                })
                            }
                              <CustomTypography variant='body2' component='span' className={classes.passwordLable}>Must be 8 characters at least</CustomTypography>
                              <FormControlLabel className={classes.privacyPolicy}  control={<Checkbox defaultChecked size="small" />} label={<>By creating an account means you agree to the <b>Terms and Conditions</b>, and our <b>Privacy Policy</b></>} />
                              <CustomLink to='/'>
                                <CustomButton disableElevation variant='contained' className={classes.signUpBtn} type='submit'>Sign Up</CustomButton>
                              </CustomLink>
                          </form>
                          <CustomBox className={classes.techniqueLableMain}>
                            <CustomTypography className={classes.techniqueLable}>or do it via other accounts</CustomTypography>
                          </CustomBox>
                          <CustomBox className={classes.buttonGroupMain}>
                              <CustomBox className={classes.buttonGroupWrapper}>
                                  <CustomButton variant='contained' color='light'><GoogleIcon /></CustomButton>
                                  <CustomButton variant='contained' color='light'><AppleIcon /></CustomButton>
                                  <CustomButton variant='contained' color='light'><FacebookIcon /></CustomButton>
                              </CustomBox>
                          </CustomBox>
                          <span className={classes.signInButton}>Already have an account? <CustomLink  to='/signIn' >Sign In</CustomLink></span>
                      </CustomBox>    
                  </CustomCol>  
              </CustomRow>
          </CustomContainer>
      </CustomBox>
    )
  }
export default SignUp
