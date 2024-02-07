import React, { useState } from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import CustomCol from '../../Components/CustomCol'
import CustomTypography from '../../Components/CustomTypography'
import { makeStyles } from '@mui/styles'
import CustomSelect from '../../Components/CustomSelect'
import { ReactComponent as DArrow } from '../../image/FooterDArrow.svg'
import CustomMenuItem from '../../Components/CustomMenuItem'
import CustomTextField from '../../Components/CustomTextField'
import CustomButton from '../../Components/CustomButton'
import { useMediaQuery } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    contactUsMain:{
        padding: [[73,0]],
        [theme.breakpoints.down('lg')]:{
            padding:[[50,0,80,0]],
        },
        [theme.breakpoints.down('md')]:{
            padding:[[35,0,80,0]],
        },
    },
    contactSubTitle:{
        '&.MuiTypography-root':{
            color: theme.palette.gray.footerLightGray,
            maxWidth: 425,
            marginTop: 20,
        },
    },
    formMain:{
        marginTop: 30,
        '& .MuiFormControl-root':{
            width: '100%',
        },
        '& .MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.gray.inputBorder,
        },
        '& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.dark.dark555,
        }
    },
    topicSelect:{
        width: '100%',
        padding: [[12,15]],
        '& .MuiSelect-select':{
            fontFamily: 'poppins',
            fontSize: 16
        },
        border: `1px solid ${theme.palette.gray.inputBorder}`,
        '& .MuiSelect-icon':{
            marginTop: -3,
        },
    },
    contactBtn:{
        '&.MuiButtonBase-root':{
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: 1.75,
            [theme.breakpoints.down('lg')]:{
                marginTop: 30,
            },
            [theme.breakpoints.down('sm')]:{
                width: '100%'
            },
        },
    },
    mapMain:{
        [theme.breakpoints.down('xxl')]:{
            '& iframe':{
                height: 525,
            },
        },
        [theme.breakpoints.down('xl')]:{
            '& iframe':{
                height: 475,
            },
        },
        [theme.breakpoints.down('lg')]:{
            marginTop: 50
        },
    },
}))

const ContactUs = () => {
    //use Style
    const classes = useStyles();

    const [topicValue, setTopic] = useState(0);

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

     // Small Screen Query
     const isLargeScreen = useMediaQuery('(min-width:992px)');
     const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <CustomBox className={classes.contactUsMain}>
        <CustomContainer maxWidth='md'>
            <CustomRow spacing={{xs:6.25,xl: 12.5}} alignItems='center'>
                <CustomCol xs={12} lg={6}>
                    <CustomBox>
                        <CustomTypography variant={'h4'} component={'h4'}>Contact us</CustomTypography>
                        <CustomTypography variant={'body1'} component={'p'} className={classes.contactSubTitle}>The harder you work for something, the greater you’ll feel when you achieve it.</CustomTypography>
                        <CustomBox className={classes.formMain}>
                                <CustomRow spacing={{xs:2.5,lg:3.75}}>
                                    <CustomCol xs={12}>
                                        <CustomSelect 
                                            value={topicValue}
                                            onChange={handleTopicChange}
                                            className={classes.topicSelect}
                                            IconComponent={DArrow}
                                        >
                                            <CustomMenuItem value={0}>Topic</CustomMenuItem>
                                            <CustomMenuItem value={1}>Topic 1</CustomMenuItem>
                                            <CustomMenuItem value={2}>Topic 2</CustomMenuItem>
                                            <CustomMenuItem value={3}>Topic 3</CustomMenuItem>
                                        </CustomSelect>
                                    </CustomCol>
                                    <CustomCol xs={12}>
                                        <CustomRow spacing={{xs:2.5}}>
                                            <CustomCol xs={12} lg={6}>
                                                <CustomTextField placeholder='Your name' variant={'outlined'} required />
                                            </CustomCol>
                                            <CustomCol xs={12} lg={6}>
                                                <CustomTextField placeholder='Email' variant={'outlined'} required />
                                            </CustomCol>
                                        </CustomRow>
                                    </CustomCol>
                                    <CustomCol xs={12}>
                                        <CustomTextField placeholder='Description (optional)' variant={'outlined'} required />
                                    </CustomCol>
                                    <CustomCol xs={12}>
                                        <CustomButton variant='contained' className={classes.contactBtn}>Send request</CustomButton>
                                    </CustomCol>
                                </CustomRow>
                        </CustomBox>
                    </CustomBox>
                </CustomCol>
                {isLargeScreen && (
                    <CustomCol xs={12} lg={6}>
                        <CustomBox className={classes.mapMain}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8413214998136!2d72.88488817578131!3d21.23813998046408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2c4c9fc0c9%3A0xd6cbadcdb8553ef4!2sTagline%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1701069172355!5m2!1sen!2sin" title='map' width="100%" height="610" style={{border:0,borderRadius: '20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </CustomBox>
                    </CustomCol>
                )}
            </CustomRow>
        </CustomContainer>
                {isSmallScreen && (
                    <CustomBox className={classes.mapMain}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8413214998136!2d72.88488817578131!3d21.23813998046408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2c4c9fc0c9%3A0xd6cbadcdb8553ef4!2sTagline%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1701069172355!5m2!1sen!2sin" title='map' width="100%" height="374" style={{border:0,borderRadius: '20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </CustomBox>
                )}
    </CustomBox>
  )
}

export default ContactUs
