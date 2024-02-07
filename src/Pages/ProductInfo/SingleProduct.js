import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp'
import SharpStar from '@mui/icons-material/StarPurple500Sharp'
import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomCol from '../../Components/CustomCol'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import CustomTypography from '../../Components/CustomTypography'
import product from '../../image/Cupcake1.jpg'
import { ReactComponent as Wishlist } from '../../image/WishList.svg'
import CustomAddQnt from '../../Components/CustomAddQnt'
import CustomButton from '../../Components/CustomButton'
import { ReactComponent as Cart } from '../../image/BtnCart.svg'
import { Checkbox } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    singleProductMain:{
        padding: [[100,0]],
        [theme.breakpoints.down('xl')]:{
            padding: [[80,0]],
        },
        [theme.breakpoints.down('lg')]:{
            padding: [[70,0]],
        },
        [theme.breakpoints.down('md')]:{
            padding: [[50,0]],
        },
        [theme.breakpoints.down('sm')]:{
            padding: [[30,0]],
        },
        '& img':{
            width: '100%',
            objectFit: 'cover'
        },
    },
    productImage:{
        height: 496,
        width: '100%',
        [theme.breakpoints.down('xl')]:{
            height: 460
        },
        [theme.breakpoints.down('lg')]:{
            height: 400
        },
        [theme.breakpoints.down('md')]:{
            height: 350
        },
        [theme.breakpoints.down('sm')]:{
            height: 288
        },
        '& img':{
            height: '100%',
            borderRadius: 20
        },
    },
    productHeadWrapper:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .MuiTypography-h4':{
            fontFamily: 'poppins',
            color: theme.palette.dark.productDark,
        },
    },
    wishListMain:{
        '& svg':{
            padding: 8,
            borderRadius: 100,
            border: `1px solid ${theme.palette.gray.headerBorder}`
        },
        '& .MuiButtonBase-root':{
            padding: 0,
        },
    },
    checkedWishList:{
        '& path':{
            fill: '#fc2368'
        },
    },
    productPrice:{
        '&.MuiTypography-h4':{
            color: theme.palette.dark.productDark,
            marginTop: 38,
            [theme.breakpoints.down('xl')]:{
                marginTop: 25,
            },
            [theme.breakpoints.down('md')]:{
                marginTop: 20,
            },
            [theme.breakpoints.down('sm')]:{
                fontSize: 24,
            },
        },
    },
    productInfo:{
        '&.MuiTypography-body1':{
            color: theme.palette.gray.productInfo,
            marginTop: 38,
            [theme.breakpoints.down('xl')]:{
                marginTop: 25,
            },
            [theme.breakpoints.down('md')]:{
                marginTop: 20,
            },
        },
    },
    ratingCategory:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,32]],
        marginTop: 24,
        [theme.breakpoints.down('md')]:{
            marginTop: 32,
        },
    },
    ratingCategoryBox:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
    },
    rating:{
        '& svg':{
            '& path':{
                fill: theme.palette.secondary.main
            },
        },
    },
    ratingValue:{
        '&.MuiTypography-body1':{
            color: theme.palette.dark.productDark,
            fontWeight: 600
        },
    },
    totalRating:{
        '&.MuiTypography-body1':{
            color: theme.palette.gray.productInfo
        },
    },
    category:{
        '& svg':{
            '& path':{
                fill: '#A3A3A4'
            },
        },
    },
    addQnt:{
        marginTop: 58,
        [theme.breakpoints.down('xl')]:{
            marginTop: 50,
        },
    },
    productInfoBtnSet:{
        marginTop: 92,
        display: 'flex',
        alignItems: 'center',
        gap:[[0,20]],
        [theme.breakpoints.down('xl')]:{
            marginTop: 75,
        },
        [theme.breakpoints.down('lg')]:{
            marginTop: 50,
        },
        [theme.breakpoints.down('md')]:{
            marginTop: 47,
            flexWrap: 'wrap',
            gap: [[16,0]],
            '& .MuiButtonBase-root':{
                width: '100%'
            },
        },
    },
    orderBtn:{
        '&.MuiButtonBase-root':{
            padding: [[12,85]]
        },
    },
    addCartBtn:{
        '&.MuiButtonBase-root':{
            padding: [[12,20]],
            borderColor: theme.palette.gray.filterInput,
            color: theme.palette,
            '&:hover':{
                borderColor: theme.palette.gray.filterInput,
            },
        },
    },
}))

const SingleProduct = () => {
    // UseStyle
    const classes = useStyles(); 
  return (
    <CustomBox className={classes.singleProductMain}>
        <CustomContainer maxWidth='md'>
            <CustomRow spacing={{xs: 3.75, lg: 5,xl:12}}>
                <CustomCol xs={12} lg={6}>
                    <CustomBox className={classes.productImage}>
                        <img src={product} alt='Single Product'/>
                    </CustomBox>
                </CustomCol>
                <CustomCol xs={12} lg={6}>
                    <CustomBox className={classes.productInfoWrapper}>
                        <CustomBox className={classes.productHeadWrapper}>
                            <CustomTypography variant={'h4'} component={'h4'}>Chocolate CheeseCake</CustomTypography>
                            <CustomBox className={classes.wishListMain}>
                                <Checkbox  icon={<Wishlist />} checkedIcon={<Wishlist className={classes.checkedWishList} />} />
                            </CustomBox>
                        </CustomBox>
                        <CustomTypography variant={'h4'} component={'h4'} className={classes.productPrice}>$20.99</CustomTypography>
                        <CustomTypography variant={'body1'} component={'p'} className={classes.productInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl cursus tellus eget fringilla eget. Diam eu est id ut leo. </CustomTypography>
                        <CustomBox className={classes.ratingCategory}>
                            <CustomBox className={`${classes.rating} ${classes.ratingCategoryBox}`}>
                                <SharpStar />
                                <CustomBox className={classes.ratingCategoryBox} gap='0 2px'>
                                    <CustomTypography variant={'body1'} componene={'span'} className={classes.ratingValue}>4,8</CustomTypography>
                                    <CustomTypography variant={'body1'} componene={'span'} className={classes.totalRating}>(1,873)</CustomTypography>
                                </CustomBox>
                            </CustomBox>
                            <CustomBox className={`${classes.category} ${classes.ratingCategoryBox}`}>
                                <RestaurantSharpIcon />
                                <CustomTypography variant={'body1'} componene={'span'} className={classes.totalRating}>Cake</CustomTypography>
                            </CustomBox>
                        </CustomBox>
                        <CustomAddQnt className={classes.addQnt} variant={'contained'} />
                        <CustomBox className={classes.productInfoBtnSet}>
                            <CustomButton variant='contained' className={classes.orderBtn}>order now</CustomButton>
                            <CustomButton variant='outlined' startIcon={<Cart />} className={classes.addCartBtn}>add to cart</CustomButton>
                        </CustomBox>
                    </CustomBox>
                </CustomCol>
            </CustomRow>
        </CustomContainer>
    </CustomBox>
  )
}

export default SingleProduct
