import React from 'react'
import CustomListItem from '../../Components/CustomListItem'
import CustomBox from '../../Components/CustomBox'
import CustomTypography from '../../Components/CustomTypography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
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
}))
const PriceDetail = ({priceDetail}) => {
    // UseStyle
    const classes = useStyles(); 

    return (
        <>
            {
                priceDetail.map((data,index)=>{
                    return(
                        <CustomListItem key={index}>
                            <CustomBox display='flex' gap='0 8px' className={classes.priceQnt}>
                                <CustomTypography variant={'body1'} component={'span'}>{data.price}</CustomTypography>
                                <CustomTypography variant={'body1'} component={'span'}>x</CustomTypography>
                                <CustomTypography variant={'body1'} component={'span'}>{data.qnt}</CustomTypography>
                            </CustomBox>
                            <CustomBox className={classes.price}>
                                <CustomTypography>{`$${data.price * data.qnt}`}</CustomTypography>
                            </CustomBox>
                        </CustomListItem>
                    )
                })
            }
        </>
    )
}

export default PriceDetail
