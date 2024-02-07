import CheckRounded from '@mui/icons-material/CheckCircleOutlineRounded'
import Check from '@mui/icons-material/CheckRounded'
import Wrong from '@mui/icons-material/ClearRounded'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomButton from '../../Components/CustomButton'
import CustomContainer from '../../Components/CustomContainer'
import CustomLink from '../../Components/CustomLink'
import CustomRow from '../../Components/CustomRow'
import CustomSection from '../../Components/CustomSection'
import CustomTextField from '../../Components/CustomTextField'
import CustomTypography from '../../Components/CustomTypography'
import C1 from '../../image/Cupcake1.jpg'
import C2 from '../../image/Cupcake2.jpg'
import C3 from '../../image/Cupcake3.jpg'
import { ReactComponent as LArrow } from '../../image/LeftArrow.svg'
import CartItem from './CartItem'
const useStyles = makeStyles((theme) => ({
    cartMain:{
        '& .MuiTypography-root':{
            fontSize: 14,
            fontFamily: 'lato',
        },
    },
    cartHeadMain:{
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        gap: [[0,5]],
    },
    cartHead:{
        '&.MuiTypography-root':{
            fontSize: 20,
            fontWeight: 700,
            fontFamily: 'DM Sans',
            lineHeight: '125%',
            color: theme.palette.dark.filterHead
        },
    },
    cartItemValue:{
        '&.MuiTypography-root':{
            fontSize: 18,
            color: theme.palette.gray.filterValue,
        },
    },
    tableHead:{
        '& .MuiTableCell-head':{
            fontSize: 14,
            fontFamily: 'lato',
            color: theme.palette.dark.fCustomerReview,
            [theme.breakpoints.down('md')]:{
                display:'none'
            },
        },
    },
    tableBody:{
        '& .MuiTableRow-root':{
            '&:last-child td':{
                borderBottom: 0,
                [theme.breakpoints.down('md')]:{
                    borderBottom: `1px solid ${theme.palette.gray.headerBorder}`
                },
            },
        },
    },
    promoDiscountMain:{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: [[23,0]],
        borderBottom: `1px solid ${theme.palette.gray.filterInput}`,
        [theme.breakpoints.down('md')]:{
            display: 'block'
        },
    },
    promoCode:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,15]],
        width: '67%',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]:{
            width: '100%'
        },
    },
    promoInput:{
        maxWidth: 140,
        '& .MuiOutlinedInput-root':{
            borderRadius: 50,
            '& .MuiOutlinedInput-input':{
                padding: 10,
                fontSize: 14,
                '&::placeholder':{
                    fontSize: 14
                },
            },
        },
    },
    discount:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,10]],
        [theme.breakpoints.down('md')]:{
            marginTop: 10,
        },
    },
    cartText:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.fCustomerReview,
        },
    },
    disValue:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.filterHead,
            fontWeight: 600,
        },
    },
    checkoutSec:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        // flexWrap: 'wrap',
        [theme.breakpoints.down('mdxs')]:{
            display: 'block',
        },
    },
    backToShop:{
        '& .MuiButtonBase-root':{
            color: theme.palette.gray.filterValue,
            '& .MuiButton-startIcon':{
                '& path':{
                    fill: theme.palette.gray.unrateStar,
                },
            },
        },
    },
    totalPriceMain:{
        display: 'flex',
        gap: [[0,15]],
        [theme.breakpoints.down('mdxs')]:{
            marginTop: 10,
            justifyContent: 'space-between',
        },
        '& .MuiButtonBase-root':{
            padding: [[12,32]]
        },
    },
    totalPrice:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,10]],
        [theme.breakpoints.down('md')]:{
            marginTop: 10,
        },
    },
}))

const promoCodes = ['HAPPY', 'FLAT30', 'FLAT50'];
const discountLabel = {
    HAPPY: 'Congrats! You have 10% discount',
    FLAT30: 'Congrats! You have 30% discount',
    FLAT50: 'Congrats! You have 50% discount',
  };

const OrderInfo = () => {
    
    // UseStyle
    const classes = useStyles(); 

    
    const cartItem = [
        [
            {
                itemImage:  C1,
                itemName: 'Vel pellentesque bibendum.',
                price: '$33.9',
                totalPrice: '$33.90',
            },
        ],
        [
            {
                itemImage:  C2,
                itemName: 'Magna quis at non',
                price: '$14.9',
                totalPrice: '$14.90',
            },
        ],
        [
            {
                itemImage:  C3,
                itemName: 'Cursus tortor ac eget',
                price: '$16.9',
                totalPrice: '$16.90',
            },
        ],
    ]
    const tableHead =[
        {
            width: '35%',
            headName:'Item',
        },
        {
            width: '5%',
            headName:'Price',
        },
        {
            width: '5%',
            align: 'center',
            headName:'Quantity',
        },
        {
            width: '12%',
            headName:'Total Price',
        },
        {
            width: '10%',
        },
    ]

    //Dynamic Item Counter
    const [dynamicNumber, setDynamicNumber] = useState(0);
    useEffect(() => {
        setDynamicNumber(cartItem.length);
    }, [cartItem]);

    // PromoCode TextField
    const [textFieldValue, setTextFieldValue] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };
    
    return (
        <CustomSection className={classes.cartMain}>
            <CustomContainer maxWidth='Xs'>
                <CustomRow>
                    <CustomBox className={classes.cartHeadMain}>
                        <CustomTypography className={classes.cartHead}>Cart</CustomTypography>
                        <CustomTypography className={classes.cartItemValue}>{dynamicNumber}</CustomTypography>
                    </CustomBox>
                    <TableContainer sx={{backgroundColor: '#f5f5f5', borderRadius: 3}}>
                        <Table>
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    {
                                        tableHead.map((data,headIndex)=>{
                                            return(
                                                <TableCell key={headIndex} width={data.width} align={data.align}>{data.headName}</TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                                {
                                    cartItem.map((cart)=>{
                                        return(
                                            <CartItem cartItem={cart} />
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <CustomBox className={classes.promoDiscountMain}>
                        <CustomBox className={classes.promoCode}>
                            <CustomTypography variant={'body1'} component={'span'} className={classes.cartText}>Promocode</CustomTypography>
                            <CustomTextField
                                value={textFieldValue}
                                onChange={handleTextFieldChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                variant='outlined'
                                className={classes.promoInput}
                                placeholder='Ex.happy'
                                InputProps={{
                                    endAdornment: (
                                        <>
                                            {promoCodes.includes(textFieldValue) ? (
                                                <Check color="primary" />
                                            ) : (
                                            <>
                                                {isInputFocused ? (
                                                    <Wrong color="error" />
                                                ) : (
                                                    <CheckRounded color="action" />
                                                )}
                                            </>
                                            )}
                                        </>
                                    ),
                                }}
                            />
                            {promoCodes.includes(textFieldValue) && (
                                <CustomTypography variant={'body1'} component={'span'} className={classes.cartText}>{discountLabel[textFieldValue]}</CustomTypography>
                            )}
                        </CustomBox>
                        <CustomBox className={classes.discount}>
                            <CustomTypography variant={'body1'} component={'span'} className={classes.cartText}>Discount:</CustomTypography>
                            <CustomTypography variant={'body1'} component={'span'} className={classes.disValue}>$7.66</CustomTypography>
                        </CustomBox>
                    </CustomBox>
                    <CustomBox className={classes.checkoutSec}>
                        <CustomBox className={classes.backToShop}>
                            <CustomLink to='/product'>
                                <CustomButton variant='text' startIcon={<LArrow />}>Back to shopping</CustomButton>
                            </CustomLink>
                        </CustomBox>
                        <CustomBox className={classes.totalPriceMain}>
                            <CustomBox className={classes.totalPrice}>
                                <CustomTypography variant={'body1'} component={'span'} className={classes.cartText}>Total Price:</CustomTypography>
                                <CustomTypography variant={'body1'} component={'span'} className={classes.disValue}>$68.94</CustomTypography>
                            </CustomBox>
                            <CustomLink to='/payment'>
                                <CustomButton variant='contained'>check out</CustomButton>
                            </CustomLink>
                        </CustomBox>
                    </CustomBox>
                </CustomRow>
            </CustomContainer>
        </CustomSection>
    )
}

export default OrderInfo