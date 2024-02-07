import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import SectionMainHead from '../../Components/SectionMainHead'
import SectionSubHead from '../../Components/SectionSubHead'
import CustomCol from '../../Components/CustomCol'
import CustomTypography from '../../Components/CustomTypography'
import { makeStyles } from '@mui/styles'
import cake1 from '../../image/Cupcake1.jpg'
import cake2 from '../../image/Cupcake2.jpg'
import cake3 from '../../image/Cupcake3.jpg'

const useStyles = makeStyles((theme) => ({
    flavourSection:{
        paddingBottom: 80,
        [theme.breakpoints.down('lg')]:{
            paddingBottom: 50
        },
        [theme.breakpoints.down('md')]:{
        paddingBottom: 30
        },
    },
    flavourMain:{
        marginTop: 20
    },
    singleFlavour:{
        '&.MuiGrid-root':{
            textAlign: 'center',
            marginTop: 20,
        },
    },
    cakeFlavourImageMain:{
        height: 'auto',
        '& img':{
            verticalAlign: 'top',
            height: 98,
            width: 98,
            borderRadius: 200,
            [theme.breakpoints.down('md')]:{
                height: 74,
                width: 74,
            },
        },
    },
    flavourName:{
        '&.MuiTypography-root':{
            fontWeight: 600,
            marginTop: 20,
            color: theme.palette.primary.main,
            [theme.breakpoints.down('lg')]:{
                marginTop: 15,
            },
            [theme.breakpoints.down('md')]:{
                marginTop: 10,
                fontSize: 14,
            },
            [theme.breakpoints.down('sm')]:{
                marginTop: 5,
            },
        },
    },
}))

const MainService = () => {

    const classes = useStyles(); 

    const cakeFlavour = [
        {
            cakeImage: cake1,
            flavour: 'Pineapple',
        },
        {
            cakeImage: cake2,
            flavour: 'Strawberry',
        },
        {
            cakeImage: cake3,
            flavour: 'Chocolate',
        },
        {
            cakeImage: cake1,
            flavour: 'Pineapple',
        },
        {
            cakeImage: cake2,
            flavour: 'Strawberry',
        },
        {
            cakeImage: cake3,
            flavour: 'Chocolate',
        },
    ]

  return (
    <CustomBox className={classes.flavourSection}>
        <CustomContainer maxWidth='xs'>
            <SectionSubHead>Main Service</SectionSubHead>
            <SectionMainHead>Choose your favorite favor</SectionMainHead>
                <CustomRow className={classes.flavourMain}>
                {
                    cakeFlavour.map((data , index)=>{
                        return(
                            <CustomCol xs={4} lg={2} className={classes.singleFlavour} key={index}>
                                <CustomBox className={classes.cakeFlavourImageMain}>
                                    <img src={data.cakeImage} alt='' />
                                </CustomBox>
                                <CustomTypography className={classes.flavourName}>{data.flavour}</CustomTypography>
                            </CustomCol>
                        )
                    })
                }
            </CustomRow>
        </CustomContainer>
    </CustomBox>
  )
}

export default MainService
