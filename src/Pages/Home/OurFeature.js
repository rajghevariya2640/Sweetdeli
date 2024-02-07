import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import SectionMainHead from '../../Components/SectionMainHead'
import SectionSubHead from '../../Components/SectionSubHead'
import CustomCol from '../../Components/CustomCol'
import { makeStyles } from '@mui/styles'
import { ReactComponent as Feature }  from '../../image/Feature.svg'
import CustomTypography from '../../Components/CustomTypography'

const useStyles = makeStyles((theme) => ({
    featureSection:{
        paddingTop: 50,
        paddingBottom: 65,
        backgroundColor:theme.palette.light.sectionColor,
        [theme.breakpoints.down('lg')]:{
            padding: [[50,0]]
          },
          [theme.breakpoints.down('md')]:{
            padding: [[30,0]]
          },
    },
    featureMainRow:{
        '&.MuiGrid-root':{
            marginTop: 22
        },
    },
    singleFeature:{
        '&.MuiGrid-root':{
            textAlign: 'center',
            marginTop: 26,
        },
    },
    featureName:{
        "&.MuiTypography-root":{
            color: theme.palette.dark.featureHead,
            fontWeight: 700,
            fontSize: 20,
            marginTop: 24,
            overflowWrap: 'break-word',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
        }
    },
    featureInfo:{
        "&.MuiTypography-root":{
            maxWidth: 170,
            margin: [[0,'auto']],
            fontSize: 12,
            marginTop: 8,
        }
    },
}))

const OurFeature = () => {

    const classes = useStyles(); 

    const feature = [
        {
            featureName: 'Donec vitae.',
            featureInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect'
        },
        {
            featureName: 'Donec vitae.',
            featureInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect'
        },
        {
            featureName: 'Donec vitae.',
            featureInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect'
        },
        {
            featureName: 'Donec vitae.',
            featureInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect'
        },
    ]

  return (
    <CustomBox className={classes.featureSection}>
        <CustomContainer maxWidth='md'>
            <SectionSubHead>Our Feature</SectionSubHead>
            <SectionMainHead>Quality is Our First Priority</SectionMainHead>
            <CustomRow  
                className={classes.featureMainRow} 
                spacing={{
                xs: 0.5 }}
            >
                {
                    feature.map((data, index)=>{
                        return(
                            <CustomCol xs={6} lg={3} key={index} className={classes.singleFeature}>
                                <CustomBox>
                                    <Feature />
                                </CustomBox>
                                <CustomTypography variant={'body1'} component={'p'} className={classes.featureName}>{data.featureName}</CustomTypography>
                                <CustomTypography variant={'body1'} component={'p'} className={classes.featureInfo}>{data.featureInfo}</CustomTypography>
                            </CustomCol>
                        )
                    })
                }
            </CustomRow>
        </CustomContainer>
    </CustomBox>
  )
}

export default OurFeature
