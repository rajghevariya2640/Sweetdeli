import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomCol from '../../Components/CustomCol'
import CustomRow from '../../Components/CustomRow'
import { ReactComponent as Order } from '../../image/Order.svg'
import { makeStyles } from '@mui/styles'
import CustomTypography from '../../Components/CustomTypography'
import CustomButton from '../../Components/CustomButton'
import CustomLink from '../../Components/CustomLink'
import LDbtn from '../../Components/LDbtn'


const useStyles = makeStyles((theme) => ({
    paymentCompleteMain:{
        padding: [[34,0,34,0]],
    },
    paymentMainWrapper:{
        display: 'flex',
        flexDirection: 'column',
        gap: [[20,0]],
    },
    orderInfoMain:{
        '&.MuiGrid-root':{
            [theme.breakpoints.down('md')]:{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
        },
    },
    orderNumberMain:{
        display: 'flex',
        flexDirection: 'column',
        gap: [[16,0]],
        '& .MuiTypography-body1':{
            color: theme.palette.dark.payement,
        },
    },
    orderNumberWrapper:{
        display: 'flex',
        alignItem: 'center',
        gap: [[0,10]],
        '& .MuiTypography-h6':{
            '&:first-child':{
                fontWeight: 400,
                color: theme.palette.dark.payement,
            },
            '&:last-child':{
                color: theme.palette.dark.productDark,
            },
        },
    },
    orderSVG:{
        [theme.breakpoints.down('md')]:{
            height: 150
        },
        [theme.breakpoints.down('sm')]:{
            height: 120
        },
    },
    PaymentComSubHead:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.dark57,
            textTransform: 'uppercase',
            fontWeight: 700,
        },
    },
    PaymentComMainHead:{
        '&.MuiTypography-root':{
            color: theme.palette.lightBtn.contrastText,
            fontWeight: 700,
            letterSpacing: 1,
            [theme.breakpoints.down('sm')]:{
                letterSpacing: 0
            },
            [theme.breakpoints.down('xxs')]:{
                letterSpacing: -0.2
            },
        },
    },
    btnMain:{
        marginTop: 30,
        display: 'flex',
        alignItem: 'center',
        flexWrap: 'wrap',
        gap: [[0,20]],
        [theme.breakpoints.down('xxs')]:{
            gap: [[20,0]],
        },
        '& a':{
            [theme.breakpoints.down('xxs')]:{
                width: '100%',
            },
        },
        '& .MuiButtonBase-root':{
                width: '100%'
        },
    },
}))

const PaymentComplete = () => {

    // UseStyle
    const classes = useStyles(); 
  return (
    <CustomBox className={classes.paymentCompleteMain}>
      <CustomContainer>
        <CustomRow spacing={{xs:4}} justifyContent='center'>
            <CustomCol>
                <Order className={classes.orderSVG} />
            </CustomCol>
            <CustomCol xs={12} md={8} className={classes.orderInfoMain}>
                <CustomBox className={classes.paymentMainWrapper}>
                    <CustomTypography className={classes.PaymentComSubHead}>Order successful</CustomTypography>
                    <CustomTypography variant={'h3'} component={'h3'} className={classes.PaymentComMainHead}>Thank you for your order!</CustomTypography>
                    <CustomBox className={classes.orderNumberMain}>
                        <CustomBox className={classes.orderNumberWrapper}>
                            <CustomTypography variant={'h6'} component={'h6'}>Order number is:</CustomTypography>
                            <CustomTypography variant={'h6'} component={'h6'}>#123456</CustomTypography>
                        </CustomBox>
                        <CustomTypography variant={'body1'} component={'p'}>You can track your order in “My Order” section</CustomTypography>
                    </CustomBox>
                </CustomBox>
                <CustomBox className={classes.btnMain}>
                    <CustomLink to='/personal/my-order'>
                        <CustomButton variant={'contained'}>Track my order</CustomButton>
                    </CustomLink>
                    <CustomLink to='/product'>
                        <LDbtn variant={'outlined'}>Continue shopping</LDbtn>
                    </CustomLink>
                </CustomBox>
            </CustomCol>
        </CustomRow>
      </CustomContainer>
    </CustomBox>
  )
}

export default PaymentComplete
