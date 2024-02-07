import React from 'react'
import CustomListItem from '../../Components/CustomListItem'
import CustomBox from '../../Components/CustomBox'
import CustomTypography from '../../Components/CustomTypography'
import { makeStyles } from '@mui/styles'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CustomButton from '../../Components/CustomButton'


const useStyles = makeStyles((theme) => ({
    cartBoxImageMain:{
        height: 80,
        width: 80,
        flex: '0 0 80px',
        '& img':{
            height: '100%',
            borderRadius: 10,
        },
    },
    cartBoxInfoWrapper:{
        width: '100%',
    },
    cartBoxItemName:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiTypography-root':{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
        },
        '& .MuiSvgIcon-root':{
            padding: 0,
        },
    },
    cartBoxPrice:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,5]],
        marginTop: 10,
        '& .MuiTypography-root':{
            fontWeight: '400 !important',
        },
    },
}))

const ProductThumb = ({productThumb}) => {
    //Use Style
    const classes = useStyles(); 
  return (
    <>
        {
            productThumb.map((data,index)=>{
                return(
                    <CustomListItem key={index}>
                        <CustomBox className={classes.cartBoxImageMain}>
                            <img src={data.proImage} alt='Cake' />
                        </CustomBox>
                        <CustomBox className={classes.cartBoxInfoWrapper}>
                            <CustomBox className={classes.cartBoxItemName}>
                                <CustomTypography>{data.proName}</CustomTypography>
                                <CustomButton style={{padding: 0, minWidth: 'unset'}}>
                                    <CloseRoundedIcon />
                                </CustomButton>
                            </CustomBox>
                            <CustomBox className={classes.cartBoxPrice}>
                                <CustomTypography>{data.proQnt}</CustomTypography>
                                <CustomTypography>x</CustomTypography>
                                <CustomTypography>{`$${data.proPrice}`}</CustomTypography>
                            </CustomBox>
                        </CustomBox>
                    </CustomListItem>
                )
            })
        }
    </>
  )
}

export default ProductThumb
