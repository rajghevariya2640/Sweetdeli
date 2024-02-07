import Star from '@mui/icons-material/StarRounded'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import CustomBox from '../../Components/CustomBox'
import CreditCardForm from './CrediCardForm'
import CustomButton from '../../Components/CustomButton'
import CustomCol from '../../Components/CustomCol'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import CustomTab from '../../Components/CustomTab'
import CustomTabs from '../../Components/CustomTabs'
import CustomTypography from '../../Components/CustomTypography'
import CustomList from '../../Components/CustomList'
import CustomListItem from '../../Components/CustomListItem'
import PriceDetail from './PriceDetail'
import CustomLink from '../../Components/CustomLink'

const useStyles = makeStyles((theme) => ({
    paymentMain:{
        padding: [[80,0]],
        [[theme.breakpoints.down('lg')]]:{
            padding: [[50,0]],
        },
        [[theme.breakpoints.down('md')]]:{
            paddingTop: 40,
            paddingBottom: 50,
        },
        '& .MuiTypography-h6':{
            [theme.breakpoints.down('xxl')]:{
                fontSize: 24
            },
            [theme.breakpoints.down('smxs')]:{
                fontSize: 22
            },
        },
    },
    paymentHead:{
        '&.MuiTypography-root':{
            marginBottom: 32
        },
    },
    paymentmethodWrapper:{
        paddingTop: 32,
        paddingBottom: 48,
        borderTop: `1px solid ${theme.palette.gray.headerBorder}`,
        borderBottom: `1px solid ${theme.palette.gray.headerBorder}`
    },
    paymentTab:{
        '&.MuiTabs-root':{
            alignItems: 'center'
        },
        '& .MuiButtonBase-root':{
            padding: [[6,12]],
            minHeight: 'unset',
            textTransform: 'capitalize',
            minHeight: 'unset',

            '&.Mui-selected':{
                backgroundColor: theme.palette.dark.payement,
                borderRadius: 50,
                color: theme.palette.light.main,
                fontWeight: 400,
            },
        },
        '& .MuiTabs-indicator':{
            display: 'none'
        },
    },
    paymentMethodMain:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    savedInfo:{
        marginTop: 24,
        '& .MuiTypography-root':{
            fontFamily: 'poppins',
            fontWeight: 600,
            textTransform: 'capitalize',
            color: theme.palette.gray.cardBorder
        },
        '& .MuiButtonBase-root':{
            background: '#9e9e9f',
            marginTop: 12,
        },
    },
    creditCardForm:{
        paddingTop: 48,
    },
    creditFormHead:{
        '&.MuiTypography-root':{
            marginBottom: 40,
            fontWeight: 500,
            color: theme.palette.lightBtn.contrastText
        },
    },
    priceDetailWrapper:{
        '&.MuiList-root':{
            marginTop: 16,
            padding: 0,
            '& .MuiListItem-root':{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 8,
                padding: [[8,12]],
                '& .MuiTypography-root':{
                    fontSize: 14,
                },
            }
        }
    },
    priceQnt:{
        '& .MuiTypography-root':{
            color: theme.palette.secondary.main
        },
    },
    price:{
        '& .MuiTypography-root':{
            color: theme.palette.lightBtn.contrastText,
            fontWeight: 500
        },
    },
    totalBillBox:{
        '&.MuiListItem-root':{
            backgroundColor: theme.palette.gray.testimonialBG,
            '& .MuiTypography-root':{
                fontSize: 14,
                fontWeight: 500
            },
        },
    },
}))

const Payment = () => {

    // UseStyle
    const classes = useStyles(); 

    // Tab Change
    const [selectedTab, setSelectedTab] = useState(1);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const priceDetail = [
        [
            {
                price: '20',
                qnt: '2'
            },
        ],
        [
            {
                price: '32.52',
                qnt: '4'
            },
        ],
    ]
    return (
        <CustomBox className={classes.paymentMain}>
            <CustomContainer maxWidth='md'>
                <CustomBox sx={{width: '100%'}}>
                    <CustomTypography variant={'secondHeading'} component={'h2'} className={classes.paymentHead}>Confirm and pay</CustomTypography>
                </CustomBox>
                <CustomRow spacing={{xs: 6,xl:10}}>
                    <CustomCol xs={12} lg={7}>
                        <CustomBox className={classes.paymentmethodWrapper}>
                            <CustomBox className={classes.paymentMethodMain}>
                                <CustomBox>
                                    <CustomTypography variant={'h6'} component={'h6'}>Pay with</CustomTypography>
                                </CustomBox>
                                <CustomBox>
                                    <CustomTabs
                                        value={selectedTab}
                                        onChange={handleTabChange}
                                        className={classes.paymentTab}
                                        >
                                        <CustomTab label="Paypal" />
                                        <CustomTab label="Credit Card" />
                                    </CustomTabs>
                                </CustomBox>
                            </CustomBox>
                            <CustomBox className={classes.savedInfo}>
                                <CustomTypography variant='body2' component='p'>saved contact info</CustomTypography>
                                <CustomButton variant='contained' startIcon={<Star />}>Button</CustomButton>
                            </CustomBox>
                        </CustomBox>
                        <CustomBox className={classes.creditCardForm}>
                            <CustomTypography variant={'body1'} component={'h6'} className={classes.creditFormHead}>Credit Card</CustomTypography>
                            <CreditCardForm />
                        </CustomBox>
                    </CustomCol>
                    <CustomCol xs={12} lg={5}>
                        <CustomTypography variant={'h6'} component={'h6'}>Price details</CustomTypography>
                        <CustomList className={classes.priceDetailWrapper}>
                            {
                                priceDetail.map((data,index)=>{
                                    return(
                                        <PriceDetail key={index} priceDetail={data} />
                                    )
                                })
                            }
                            <CustomListItem>
                                <CustomBox className={classes.priceQnt}>
                                    <CustomTypography variant={'body1'} component={'span'}>Shipping</CustomTypography>
                                </CustomBox>
                                <CustomBox className={classes.price}>
                                    <CustomTypography>$2.00</CustomTypography>
                                </CustomBox>
                            </CustomListItem>
                            <CustomListItem className={classes.totalBillBox}>
                                <CustomBox>
                                    <CustomTypography variant={'body1'} component={'span'}>Total</CustomTypography>
                                    <CustomTypography variant={'body1'} component={'span'}>(USD)</CustomTypography>
                                </CustomBox>
                                <CustomBox>
                                    <CustomTypography>$42.00</CustomTypography>
                                </CustomBox>
                            </CustomListItem>
                        </CustomList>
                    </CustomCol>
                </CustomRow>
                <CustomBox>
                    <CustomLink to='/payment-complete'>
                        <CustomButton variant="contained" type="submit" style={{marginTop: 32}}>Confirm and pay</CustomButton>
                    </CustomLink>
                </CustomBox>
            </CustomContainer>
        </CustomBox>
    )
}

export default Payment
