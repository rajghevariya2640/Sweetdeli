import Close from '@mui/icons-material/CloseRounded'
import Heart from '@mui/icons-material/FavoriteOutlined'
import { Checkbox, TableCell, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomAddQnt from '../../Components/CustomAddQnt'
import CustomBox from '../../Components/CustomBox'
import CustomButton from '../../Components/CustomButton'
import CustomTypography from '../../Components/CustomTypography'

const useStyles = makeStyles((theme) => ({
    cardItemMain:{
        '& img':{
            width: '100%',
            objectFit: 'cover',
        },
        '& .MuiTypography-root':{
            fontFamily:'lato',
            fontSize: 14,
        },
        [theme.breakpoints.down('md')]:{
            '& .MuiTableCell-root':{
                position: 'relative',
                display: 'block',
                borderBottom: `1px solid ${theme.palette.gray.headerBorder}`,
                '&::before':{
                    content: 'attr(data-title) " "',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontWeight: 'bold',
                },
            },
        },
    },
    tableCellWrapper:{
        [theme.breakpoints.down('md')]:{
            display: 'flex',
            justifyContent: 'end'
        },
    },
    imageSecMain:{
        display: 'flex',
        gap: [[0,15]],
    },
    CartItemImage:{
        flex: [['0 0 70px']],
        height: 70,
        width: 70,
        '& img':{
            borderRadius: 10,
            height: '100%',
        },
    },
    cartInfo:{
        marginTop: 5,
        [theme.breakpoints.down('md')]:{
            display: 'none',
        },
        '& .MuiTypography-root':{
            '&:first-child':{
                color: theme.palette.dark.filterHead,
                fontWeight: 800
            },
            '&:last-child':{
                color: theme.palette.dark.fCustomerReview,
            },
        },
    },
    cartAddOnt:{
        border: `1px solid ${theme.palette.gray.filterInput}`,
        borderRadius: 50,
        [theme.breakpoints.down('md')]:{
            maxWidth: 109
        },
        '& .MuiButtonBase-root':{
            backgroundColor: 'transparent',
            color: theme.palette.gray.unrateStar,
            fontSize: 20
        },
    },
    hrtClsBtnMain:{
        display: 'flex',
        gap: [[0,20]],
        '& .MuiButtonBase-root':{
            color: theme.palette.gray.unrateStar,
            '&:hover':{
                backgroundColor: 'transparent'
            },
        },
    },
    hrtCheck:{
        '&.MuiButtonBase-root':{
            padding: 0,
        },
    },
    unFilledHeart:{
        '& path':{
            fill: theme.palette.gray.unrateStar,
        },
    },
    closesBtn:{
        '&.MuiButtonBase-root':{
            minWidth: 'unset',
            '& svg':{
                height: 26,
                width: 26,
            },
            '& span':{
                margin: 0
            },
        },
    },
}))

const CartItem = ({cartItem}) => {

    // UseStyle
    const classes = useStyles(); 

  return (
    <>
        {
            cartItem.map((cart,cartIndex)=>{
                return(
                    <TableRow className={classes.cardItemMain} key={cartIndex}>
                        <TableCell data-title={'Item'}>
                            <CustomBox className={classes.tableCellWrapper}>
                                <CustomBox className={classes.imageSecMain}>
                                    <CustomBox className={classes.CartItemImage}>
                                        <img src={cart.itemImage} alt='Cake' />
                                    </CustomBox>
                                    <CustomBox className={classes.cartInfo}>
                                        <CustomTypography>{cart.itemName}</CustomTypography>
                                        <CustomTypography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CustomTypography>
                                    </CustomBox>
                                </CustomBox>
                            </CustomBox>
                        </TableCell>
                        <TableCell data-title={'Price'}>
                            <CustomBox className={classes.tableCellWrapper}>
                                <CustomTypography>{cart.price}</CustomTypography>
                            </CustomBox>
                        </TableCell>
                        <TableCell data-title={'Quantity'}>
                            <CustomBox className={classes.tableCellWrapper}>
                                <CustomAddQnt className={classes.cartAddOnt} />
                            </CustomBox>
                        </TableCell>
                        <TableCell data-title={'Total Price'}>
                            <CustomBox className={classes.tableCellWrapper}>
                                <CustomBox display='flex' alignItems='center' justifyContent='space-between'>
                                    <CustomTypography>{cart.totalPrice}</CustomTypography>
                                </CustomBox>
                            </CustomBox>
                        </TableCell>
                        <TableCell data-title={'Action'}>
                            <CustomBox className={classes.tableCellWrapper}>
                                <CustomBox className={classes.hrtClsBtnMain}>
                                    <Checkbox className={classes.hrtCheck} disableRipple icon={<Heart />} checkedIcon={<Heart className={classes.filledHeart}  />} />
                                    <CustomButton startIcon={<Close />} className={classes.closesBtn}/>
                                </CustomBox>
                            </CustomBox>
                        </TableCell>
                    </TableRow>

                )
            })
        }
    </>
  )
}

export default CartItem
