import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomBox from './CustomBox'
import CustomCard from './CustomCard'
import CustomLink from './CustomLink'
import CustomTypography from './CustomTypography'
import { ReactComponent as Cart } from '../image/ShoppingCart.svg'
import CustomStars from './CustomStars'


const useStyles = makeStyles((theme) => ({
    myCardMain:{
        '&.MuiPaper-root ':{
            '& img':{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            },
            [theme.breakpoints.down('md')]:{
                borderRadius: 15
            },
            [theme.breakpoints.down('sm')]:{
                borderRadius: 10
            },
        },
    },
    cardImageMain:{
        height: 188,
        display: 'block',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]:{
            height: 175,
        },
        [theme.breakpoints.down('sm')]:{
            height: 150,
        },
        '& a':{
            display: 'block'
        },
    },
    cardInfo:{
        '&.MuiBox-root':{
            backgroundColor: theme.palette.light.main,
            padding: [[33,26,40,10]],
            [theme.breakpoints.down('lg')]:{
                padding: [[30,20,35,10]],
            },
            [theme.breakpoints.down('md')]:{
                padding: [[25,10]],
            },
            [theme.breakpoints.down('sm')]:{
                padding: [[19,6]],
            },
        },
    },
    cardInfoWrapper:{
        '&.MuiBox-root':{
            display: 'flex',
            flexDirection: 'Column',
            gap: [[20,0],],
            position: 'relative',
            [theme.breakpoints.down('sm')]:{
                gap: [[8,0]]
            },
        }
    },
    cakeName:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.productDark,
            fontWeight: 500,
            lineHeight: '150%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            [theme.breakpoints.down('sm')]:{
                fontSize: 12
            },
        },
    },
    cakePrice:{
        '&.MuiTypography-h6':{
            fontWeight: 500
        },
    },
    starIconMain:{
        display: 'flex',
        alignItems: 'center',
    },
    totalReview:{
        paddingLeft: 8,
        fontSize: 12,
        color: theme.palette.gray.productInfo,
        marginTop: 5,
        [theme.breakpoints.down('md')]:{
            paddingLeft: 4,
        },
        [theme.breakpoints.down('sm')]:{
            padding: 0,
            marginTop: 8,
            fontSize: 11,
        },
    },
    cartIcon:{
        height: 48,
        width: 48,
        backgroundColor: theme.palette.dark.payement,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        [theme.breakpoints.down('xl')]:{
            height: 42,
            width: 42,
        },
        [theme.breakpoints.down('lg')]:{
            height: 40,
            width: 40,
        },
        [theme.breakpoints.down('md')]:{
            height: 35,
            width: 35,
        },
        [theme.breakpoints.down('sm')]:{
            height: 30,
            width: 30,
        },
        '& svg':{
            height: 25,
            width: 25,
            [theme.breakpoints.down('xl')]:{
                height: 20,
                width: 20,
            },
            [theme.breakpoints.down('md')]:{
                height: 18,
                width: 18,
            },
            [theme.breakpoints.down('sm')]:{
                height: 16,
                width: 16,
            },
            '& rect':{
                fill: theme.palette.light.main,
            }
        },
    },
}))

const MyCard = ({cakeCard}) => {

    const classes = useStyles(); 

  return (
    <>
        {
            cakeCard.map((card, cakeCardKey)=>{
                return(
                    <CustomCard key={cakeCardKey} className={classes.myCardMain}>
                        <CustomBox  className={classes.cardImageMain}>
                            <CustomLink to='/product-info'>
                                <img src={card.cakeImage} alt='cake card' />
                            </CustomLink>
                        </CustomBox>
                        <CustomBox className={classes.cardInfo}>
                            <CustomBox className={classes.cardInfoWrapper}>
                                <CustomLink to='/product-info'><CustomTypography className={classes.cakeName}>{card.Name}</CustomTypography></CustomLink>
                                <CustomTypography variant={'h6'} component={'h6'} className={classes.cakePrice}>{card.Price}</CustomTypography>
                                <CustomBox className={classes.starIconMain}>
                                    <CustomStars rating={card.starValue} />
                                    <CustomBox className={classes.totalReview}>(120)</CustomBox>
                                </CustomBox>
                                <CustomLink to='/cart' className={classes.cartIcon}>
                                    <Cart />
                                </CustomLink>
                            </CustomBox>
                        </CustomBox>
                    </CustomCard>
                )
            })
        }   
    </>
  )
}

export default MyCard
