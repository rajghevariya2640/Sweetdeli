import styled from '@emotion/styled';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Badge, Drawer, Paper, Switch, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { React, useEffect, useState } from 'react';
import ProductThumb from '../Pages/Product/ProductThumb';
import { ReactComponent as Bulb } from '../image/Bulb.svg';
import { ReactComponent as Card } from '../image/CreditCard.svg';
import cake1 from '../image/Cupcake1.jpg';
import cake2 from '../image/Cupcake2.jpg';
import { ReactComponent as Gallary } from '../image/Gallary.svg';
import Logo from '../image/Logo.webp';
import { ReactComponent as MenuIcon } from '../image/MenuIcon.svg';
import { ReactComponent as Cart } from '../image/ShoppingCart.svg';
import { ReactComponent as SignOut } from '../image/SignOut.svg';
import { ReactComponent as User } from '../image/User.svg';
import CustomBox from './CustomBox';
import CustomButton from './CustomButton';
import CustomCol from './CustomCol';
import CustomContainer from './CustomContainer';
import CustomLink from './CustomLink';
import CustomList from './CustomList';
import CustomListItem from './CustomListItem';
import CustomListText from './CustomListText';
import CustomMenu from './CustomMenu';
import CustomMenuItem from './CustomMenuItem';
import CustomRow from './CustomRow';
import CustomStack from './CustomStack';
import CustomTypography from './CustomTypography';

// const CstmSwitch = styled(Switch)(({ theme }) => ({
    
// }))

// const Android12Switch = styled(Switch)(({ theme }) => ({
//     padding: 8,
//     '& .MuiSwitch-track': {
//       borderRadius: 22 / 2,
//       '&:before, &:after': {
//         content: '""',
//         position: 'absolute',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         width: 16,
//         height: 16,
//       },
//       '&:before': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
//           theme.palette.getContrastText(theme.palette.primary.main),
//         )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
//         left: 12,
//       },
//       '&:after': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
//           theme.palette.getContrastText(theme.palette.primary.main),
//         )}" d="M19,13H5V11H19V13Z" /></svg>')`,
//         right: 12,
//       },
//     },
//     '& .MuiSwitch-thumb': {
//       boxShadow: 'none',
//       width: 16,
//       height: 16,
//       margin: 2,
//     },
//   }));
const BadgeItem = styled(Badge)(({ theme }) => ({
    '&.MuiBadge-root':{
        '& .MuiBadge-badge': {
            top: 13,
            right: 10,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.light.main,
            border: `1px solid ${theme.palette.secondary.main}`,
            padding: '0 4px',
        },
    }
}));

const useStyles = makeStyles((theme) => ({
    header:{
        '&.MuiPaper-root':{
            height: 95,
            boxShadow: 'none ',
            position: 'unset',
            [theme.breakpoints.down('sm')]:{
                height: 91
            },
        },
        '& img':{
            width:'100%',
            objectFit: 'cover'
        },
    },
    headerWrapper:{
        position: 'relative',
        backgroundColor: theme.palette.light.main,
        borderBottom: `1px solid ${theme.palette.gray.headerBorder}`,
        '& .MuiContainer-root':{
            [theme.breakpoints.down('sm')]:{
                padding: '0 15px !important'
            },
        },
        '& .MuiToolbar-root':{
            minHeight: '100%'
        },
        '&.right': {
            marginRight: '0',
        }
    },
    sticky: {
        position: 'fixed !important',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        animation: '$fadeDown 0.3s  linear',
        transform: 'translateY(0%)',
        '&.right':{
            paddingRight: '15px !important',
            [theme.breakpoints.down('lg')]:{
                paddingRight: '0 !important'
            },
        },
    },
    '@keyframes fadeDown': {
        '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
        },
        '100%': {
            transform: 'translateY(0%)',
            opacity: '1',

        },
    },
    headerRow:{
        justifyContent:'space-between',
        alignItems: 'center',
    },
    logoMenu:{
        alignItems: 'center',
    },
    Logo:{
        width: 155,
        position: 'relative',
        [theme.breakpoints.down('lg')]:{
            width: 125,
        },
        [theme.breakpoints.down('sm')]:{
            width: 100,
        },
        '&::after':{
            content: '""',
            position: 'absolute',
            top: '50%',
            right: 0,
            height: 40,
            width: 2,
            backgroundColor: theme.palette.gray.headerBorder,
            transform: `translate(50% ,-50%)`,
            [theme.breakpoints.down('lg')]:{
                display: 'none'
            },
        },
    },
    mainLogo:{
        width: 125,
        filter: `brightness(0)`,
        [theme.breakpoints.down('sm')]:{
            width: 100,
        },
    },
    menuNav:{
        paddingLeft: 30,
    },
    mainMenu:{
        display: 'flex',
        [theme.breakpoints.down('lg')]:{
            display: 'none',
        },
        '& li':{
            width: 'unset',
            padding: 0,
            '& a':{
                display: 'block',
                margin: [[0,15]],
                textDecoration: 'none',
                color: theme.palette.secondary.main,
                fontWeight: 500,
                textTransform: 'capitalize',
                transition: 'all 0.3s ease-in-out',
                '&:hover':{
                    transition: 'all .3s ease-in-out',
                    color: theme.palette.primary.main,
                },
                '&.active':{
                    color: theme.palette.dark.dark222
                },
            }
        }
    },
    drawer:{
        '& .MuiPaper-root':{
            width: "100%",
        },
    },
    drawerTopSection:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        marginBottom: 20,

    },
    menuList:{
        '& .MuiListItem-root':{
            paddingLeft: 30,
            paddingRight: 30,
            textTransform: 'capitalize',
            '&::after':{
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                height: 0,
                width: 2,
                backgroundColor: theme.palette.primary.main,
            },
            '& span':{
                fontWeight: 500,
                transition: 'all 0.3s ease-in-out',
            },
            '&:hover':{
                '& span':{
                    color: theme.palette.primary.main
                },
            },
            '&:hover::after':{
                transition: 'all 0.3s ease-in-out',
                height: '100%',
            },
            '&:first-child:hover::after':{
                height: 0
            }
        },
    },


    menuIcon:{
        display: 'none',
        [theme.breakpoints.down('lg')]:{
            display: 'block',
        }
    },
    headerIcons:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,12]],
        [theme.breakpoints.down('sm')]:{
            gap: [[0,10]],
        },
        '& svg':{
            height: 24,
            width: 24,
            padding: 10,
        },
    },
    userBtn:{
        position: 'relative !important'
    },
    userDropDown:{
        '& .MuiPaper-root':{
            position: 'relative',
            maxWidth: 256,
            width: '100%',
            '&::before': {
                content: "''",
                position: 'absolute',
                bottom: '100%',
                right: 15,
                width: 0,
                height: 0, 
                borderLeft: '14px solid transparent',
                borderRight: '14px solid transparent',
                borderBottom: '13px solid',
                overflow: 'hidden',
                borderBottomColor: theme.palette.light.main
            }
        },
        '& .MuiList-root':{
            maxHeight: 'calc(100vh - 175px)',
            overflowY: 'auto',
            padding: [[32,8,20,8]],
            '& .MuiMenuItem-root':{
                padding:[[16,8,12,8]],
                display: 'flex',
                alignItems: 'end',
                color: theme.palette.secondary.main,
                fontSize: 14,
                fontFamily: 'DM Sans',
                borderBottom: `1px solid ${theme.palette.gray.headerBorder}`,
                borderRadius: 10,
                '& svg':{
                    height: 20,
                    width: 20,
                },
                '&:last-child':{
                    borderBottom: 'none',
                },
            },
        },
        '& .MuiTypography-h6':{
            fontWeight: 600,
            color: theme.palette.dark.dropDownHead,
            fontFamily: 'poppins',
            marginBottom: 8,
            padding: [[0,8,0,8]]
        },
    },
    cartMain:{
        position: 'relative',
        padding: [[22,0]],
        '&:hover':{
            '& .MuiList-root':{
                transform: 'scale(1)',
                visibility: 'visible',
                opacity: 1,
            }
        },
    },
    cartBox:{
        '&.MuiList-root':{
            backgroundColor: theme.palette.light.main,
            position: 'absolute',
            top: '100%',
            right: 0,
            zIndex: 1000,
            width: 300,
            padding: 0,
            borderRadius:[[0,0,15,15]],
            transform: 'scale(0.5)',
            transformOrigin: 'top right',
            transition: 'all 0.3s ease-in-out',
            opacity: 0,
            visibility: 'hidden',
            '& .MuiListItem-root':{
                gap: [[0,10]],
                alignItems: 'start',
                padding: 15,
                borderBottom: `1px solid ${theme.palette.gray.headerBorder}`,
                '& .MuiTypography-root':{
                    fontSize: 14,
                    fontWeight: 500,
                    color: theme.palette.dark.dropDownHead
                }
            },
        }
    },
    cartTotalLi:{
        '&.MuiListItem-root':{
            justifyContent: 'space-between',
            '& .MuiTypography-root':{
                fontSize: '16px !important',
            },
        },
        '& .MuiButtonBase-root':{
            width: '100%',
            borderRadius: 10,
        },
        '& a':{
            width: '100%',
        },
    },
}))

const Header = () => {

    // User Menu Open
    const [isClassAdded, setIsClassAdded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(true);
    const open = Boolean(anchorEl);
    const toggleUser = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(!menuOpen);
        setIsClassAdded(!isClassAdded); 
    };
    const handleClose = () => {
        setMenuOpen(false);
    };

    //Use Style
    const classes = useStyles(); 

    // Stickey Header
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 110) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Drawer Open
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    

    const menu = [
        {
            menuName: 'home',
            to: '/',
        },
        {
            menuName: 'Discover',
            to: '/product',
        },
        {
            menuName: 'Blog',
            to: '/blog',
        },
        {
            menuName: 'About Us',
            to: '/about-us',
        },
        {
            menuName: 'Contact',
            to: '/contact',
        },
    ]

    const userMenu = [
        {
            icon: <User />,
            menuName: 'Personal info',
            to: 'personal/personal-info',
        },
        {
            icon: <Card />,
            menuName: 'Login and security',
            to: 'personal/login-security',
        },
        {
            icon: <Card />,
            menuName: 'My payments',
            to: 'personal/my-payment',
        },
        {
            icon: <Gallary />,
            menuName: 'My voucher'
        },
        {
            icon: <Gallary />,
            menuName: 'My points'
        },
        {
            icon: <Gallary />,
            menuName: 'My orders',
            to: 'personal/my-order',
        },
        {
            icon: <Bulb />,
            menuName: 'Dark theme',
            switch: true,
        },
        {
            icon: <SignOut />,
            menuName: 'Log Out',
            to: '/signup',
        },
    ]

    const productThumb = [
        [{
            proImage: cake1,
            proName: 'Pineapple Cake',
            proQnt: '1',
            proPrice: '20',
        }],
        [{
            proImage: cake2,
            proName: 'Strawberry Cake',
            proQnt: '2',
            proPrice: '30',
        }],
    ]

    const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <AppBar position='relative' color='light' className={`${classes.header}`}>
        <CustomBox className={`${classes.headerWrapper} ${isSticky ? classes.sticky : ''} ${isClassAdded ? 'right' : ''} header`}>
            <CustomContainer maxWidth="md">
                <Toolbar disableGutters>
                    <CustomRow className={classes.headerRow}>
                        <CustomCol>
                            <CustomRow className={classes.logoMenu}>
                                <CustomCol className={classes.Logo}>
                                    <CustomLink to='/'>
                                        <img src={Logo} alt='Logo' className={classes.mainLogo} />
                                    </CustomLink>
                                </CustomCol>
                                <CustomCol className={classes.menuNav}>
                                    <CustomList className={classes.mainMenu}>
                                        {
                                            menu.map((data , index)=> {
                                                return(
                                                    <CustomListItem key={index}><CustomLink to={data.to}>{data.menuName}</CustomLink></CustomListItem>
                                                )
                                            })
                                        }
                                        <CustomListItem>
                                            
                                        </CustomListItem>
                                    </CustomList>
                                        {isSmallScreen && (
                                            <Drawer anchor="right" open={isOpen} onClose={toggle} className={classes.drawer}>
                                                <CustomStack >
                                                    <Paper sx={{'boxShadow': 0}}>
                                                        <CustomList className={classes.menuList}>
                                                            <CustomBox className={classes.drawerTopSection} >
                                                                <img src={Logo} alt='logo' className={classes.mainLogo} />
                                                                <CloseRoundedIcon button onClick={toggle} sx={{cursor: 'pointer'}} />
                                                            </CustomBox>
                                                            {
                                                                menu.map((data, index)=>{
                                                                    return(
                                                                        <CustomListItem button onClick={toggle} key={index}>
                                                                            <CustomLink to={data.to}>
                                                                                <CustomListText primary={data.menuName} />
                                                                            </CustomLink>
                                                                        </CustomListItem>
                                                                    )
                                                                })
                                                            }
                                                        </CustomList>
                                                    </Paper>
                                                </CustomStack>
                                            </Drawer>
                                        )}
                                </CustomCol>
                            </CustomRow>
                        </CustomCol>
                        <CustomCol>
                            <CustomBox className={classes.headerIcons}>
                                <CustomBox className={classes.cartMain}>
                                    <BadgeItem badgeContent={2} color="secondary" >
                                        <CustomLink>
                                            <Cart className={classes.cartSVG} />
                                        </CustomLink>
                                    </BadgeItem>
                                    <CustomList className={classes.cartBox}>
                                        {
                                            productThumb.map((pro,thumbIndex)=>{
                                                return(
                                                    <ProductThumb key={thumbIndex} productThumb={pro} />
                                                )
                                            })
                                        }
                                        <CustomListItem className={classes.cartTotalLi}>
                                            <CustomTypography variant='body1' component={'span'}>Total:</CustomTypography>
                                            <CustomTypography variant='body1' component={'span'}>$100.00</CustomTypography>
                                        </CustomListItem>
                                        <CustomListItem className={classes.cartTotalLi} style={{border: 0}}>
                                            <CustomLink to='/cart'>
                                                <CustomButton variant='contained'>View Cart</CustomButton>
                                            </CustomLink>
                                            <CustomLink to='/payment'>
                                                <CustomButton variant='contained' color='lightBtn'>checkout</CustomButton>
                                            </CustomLink>
                                        </CustomListItem>
                                    </CustomList>
                                </CustomBox>
                                <CustomLink>
                                    <User
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={toggleUser}
                                    />
                                </CustomLink>
                                    <CustomMenu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={menuOpen}
                                        onClose={toggleUser}
                                        className={classes.userDropDown}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        sx={{top: 26}}
                                    >
                                        <CustomTypography variant={'h6'} component={'h6'}>Ngoc Pham</CustomTypography>
                                        {
                                            userMenu.map((data, index)=>{
                                                return(
                                                    <>
                                                        <CustomLink to={data.to}>
                                                            <CustomMenuItem key={index} onClick={handleClose}>
                                                                    {data.icon}
                                                                    <CustomBox>
                                                                        {data.menuName}
                                                                    </CustomBox>
                                                            </CustomMenuItem>
                                                            {/* {
                                                                data.switch === true && (
                                                                    <Switch />
                                                                    )
                                                            } */}
                                                        </CustomLink>
                                                    </>
                                                )
                                            })
                                        }
                                    </CustomMenu>
                                <MenuIcon className={classes.menuIcon} onClick={toggle} />
                                {/* <Switch /> */}
                            </CustomBox>
                        </CustomCol>
                    </CustomRow>
                </Toolbar>
            </CustomContainer>
        </CustomBox>
    </AppBar>
  )
}

export default Header
