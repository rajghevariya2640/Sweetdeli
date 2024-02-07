import LanguageIcon from '@mui/icons-material/Language'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import AppStore from '../image/AppStore.png'
import { ReactComponent as Facebook } from '../image/Facebook.svg'
import { ReactComponent as DArrow } from '../image/FooterDArrow.svg'
import Gplay from '../image/GooglePlay.png'
import { ReactComponent as Instagram } from '../image/Instagram.svg'
import { ReactComponent as LinkedIn } from '../image/Linkedin.svg'
import Logo from '../image/Logo.webp'
import { ReactComponent as Twitter } from '../image/Twitter.svg'
import CustomBox from './CustomBox'
import CustomCol from './CustomCol'
import CustomContainer from './CustomContainer'
import CustomLink from './CustomLink'
import CustomList from './CustomList'
import CustomListItem from './CustomListItem'
import CustomMenuItem from './CustomMenuItem'
import CustomRow from './CustomRow'
import CustomSelect from './CustomSelect'
import CustomTypography from './CustomTypography'

const useStyles = makeStyles((theme) => ({
    footer:{
        backgroundColor: theme.palette.gray.testimonialBG,
    },
    upperFooter:{
        paddingTop: 55,
        paddingBottom: 32,
        [theme.breakpoints.down('sm')]:{
            paddingBottom: 22,
        },
    },
    footerLogoMain:{
        width: '100%'
    },
    footerLogo:{
        maxWidth: 115,
        filter: `brightness(0)`,
        display: 'inline',
        marginBottom: 32,
        [theme.breakpoints.down('sm')]:{
            marginBottom: 15,
        },
    },
    footerColumn:{
        '& ul':{
            padding: '0',

            '& li':{
                padding: 0,
                paddingBottom: 12,
                [theme.breakpoints.down('md')]:{
                    paddingBottom: 14
                },
                '&:last-child':{
                    paddingBottom: 0
                },
                '& a':{
                    color: theme.palette.dark.footerLink,
                    textDecoration: 'none',
                    transition: '0.3s all ease-in-out',
                    lineHeight: '150%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                    [theme.breakpoints.down('lg')]:{
                        fontSize: 14
                    },
                    [theme.breakpoints.down('md')]:{
                        fontSize: 12
                    },
                },
            },
            '& img':{
                maxWidth: 165,
                width: '100%',
                height: 45,
                borderRadius: 5,
                objectFit: 'cover',
                [theme.breakpoints.down('md')]:{
                    maxWidth: 147,
                    height: 40,
                },
            },
        },
    },
    linkTitle:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.footerLink,
            fontWeight: 600,
            lineHeight: '150%',
            marginBottom: 17,
            '&:first-letter':{
                textTransform: 'capitalize',
            }
        },
    },
    footerLinkMain:{
        '& .MuiListItem-root':{
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    socialIconMain:{       
        display:'flex', 
        marginTop: 17,
    },
    socialIcons:{
        marginRight: 20,
        [theme.breakpoints.down('md')]:{
            marginRight: 12,
        },
    },


    lowerFooter:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.gray.footerLightGray,
        padding: [[21,0]],
        [theme.breakpoints.down('mdxs')]:{
            display: 'block',
            padding: [[21,0,36,0]]
        },
    },
    footerLanguageMenu:{
        display: 'flex',
        '& .MuiFormControl-root':{
            margin: '0',
        },

    },
    lanuageSelect:{
        maxWidth: 141,
        width: '100%',
        [theme.breakpoints.down('sm')]:{
            maxWidth: 125
        },
        '& .MuiSelect-select':{
            color: theme.palette.gray.footerLightGray,
            fontFamily: 'poppins',
            [theme.breakpoints.down('lg')]:{
                fontSize: 14,
            },
            [theme.breakpoints.down('md')]:{
                fontSize: 12,
            },  
        },
        '& .MuiSelect-select ~ svg':{
            marginTop: -3,
        },
    },
    languageName:{
        '&.MuiButtonBase-root':{
            color: theme.palette.gray.footerLightGray,
            [theme.breakpoints.down('lg')]:{
                fontSize: 14,
            },
            [theme.breakpoints.down('md')]:{
                fontSize: 12,
            }, 
            '& svg':{
                paddingRight: 10,
                fill: theme.palette.primary.main
            },
        },
    },
    copyright:{
        '&.MuiTypography-root':{
            fontFamily: 'poppins',
            [theme.breakpoints.down('lg')]:{
                fontSize: 14,
            },
            [theme.breakpoints.down('md')]:{
                fontSize: 12,
            },  
            [theme.breakpoints.down('mdxs')]:{
                marginTop: 20,
            },  
        },
    },
}))

const Footer = () => {

    const classes = useStyles(); 

    const [, setLanguage] = useState('');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const header = document.getElementsByClassName('header');
    const handleToggle = () => {
        header[0].classList?.add("right");
    };

    const handleToggleClose = () => {
        header[0].classList?.remove("right");
    };

    const footerLinks = [
        {
            linkTitle:'Contact us',
            links:['sweetdeli@gmail.com','+1-2345-6789','123 Ave, New York, USA'],
            icons: [<Facebook />, <LinkedIn />, <Twitter />, <Instagram />],
        },
        {
            linkTitle:'Products',
            links:['Auctor volutpat.','Fermentum turpis.','Mi consequat.','Amet venenatis.','Convallis porttitor.'],
        },
        {
            linkTitle:'About',
            links:['Egestas vitae.','Viverra lorem ac.','Eget ac tellus.','Erat nulla.','Vulputate proin.'],
        },
        {
            linkTitle:'get the app',
            images:[AppStore, Gplay],
        },
    ]

    const language = [
        {
            name: 'English',
            icon: <LanguageIcon />,
        },
        {
            name: 'Hindi',
            icon: <LanguageIcon />,
        },
        {
            name: 'Germany',
            icon: <LanguageIcon />,
        },
        {
            name: 'France',
            icon: <LanguageIcon />,
        },
    ]

  return (
    <footer  className={classes.footer}>
        <CustomContainer maxWidth='md'>
            <CustomBox className={classes.upperFooter}>
                    <CustomBox className={classes.footerLogoMain}>
                        <CustomLink to='/'>
                            <img src={Logo} alt='Logo' className={classes.footerLogo} />
                        </CustomLink>
                    </CustomBox>
                <CustomRow spacing={{xs: 5.5,md: 2.5,lg: 5.5}}>
                    {
                        footerLinks.map((data, index)=>{
                            return(
                                <CustomCol key={index} xs={6} md={3} className={classes.footerColumn}>
                                    <CustomTypography variant={'body1'} component={'h6'} className={classes.linkTitle}>{data.linkTitle}</CustomTypography>
                                    <CustomList className={classes.footerLinkMain}>
                                        {
                                            data.links &&(
                                                data.links.map((link,index)=>{
                                                    return(
                                                        <CustomListItem  key={index}>
                                                            <CustomLink>{link}</CustomLink>
                                                        </CustomListItem>
                                                    )
                                                })
                                            )
                                        }
                                        {data.icons &&
                        
                                            <CustomBox className={classes.socialIconMain}>
                                                    {
                                                        data.icons.map((icon, iconkey)=>{
                                                            return(
                                                                <CustomLink className={classes.socialIcons} key={iconkey}>
                                                                    {icon}
                                                                </CustomLink>
                                                            )
                                                        })
                                                    }
                                            </CustomBox>    
                                        }
                                        {data.images&&
                                            (
                                                data.images.map((image, imagekey)=>{
                                                    return(
                                                            <img key={imagekey} src={image} alt='Get App' />
                                                    )
                                                })
                                            )
                                        }
                                    </CustomList>
                                </CustomCol>
                            )
                        })
                    }
                </CustomRow>
            </CustomBox>
            <CustomBox className={classes.lowerFooter}>
                <CustomBox className={classes.footerLanguageMenu}>
                    <CustomSelect
                        defaultValue={'English'}
                        onChange={handleChange}
                        onOpen={handleToggle}
                        onClose={handleToggleClose}
                        displayEmpty
                        className={classes.lanuageSelect}
                        IconComponent={DArrow}
                    >
                        {
                            language.map((data, index)=>{
                                return(
                                    <CustomMenuItem value={data.name} key={index} className={classes.languageName}>{data.icon}{data.name}</CustomMenuItem>
                                )
                            })
                        }
                    </CustomSelect>
                </CustomBox>
                <CustomBox>
                    <CustomTypography variant={'body2'} className={classes.copyright}>Copyright © 2020. All rights reserved.</CustomTypography>
                </CustomBox>
            </CustomBox>
        </CustomContainer>
    </footer>
  )
}

export default Footer