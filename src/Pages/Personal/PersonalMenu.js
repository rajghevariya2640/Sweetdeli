import Bag from '@mui/icons-material/LocalMallOutlined'
import Coin from '@mui/icons-material/PaidOutlined'
import Voucher from '@mui/icons-material/Redeem'
import { useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomLink from '../../Components/CustomLink'
import CustomList from '../../Components/CustomList'
import CustomListItem from '../../Components/CustomListItem'
import CustomMenuItem from '../../Components/CustomMenuItem'
import CustomRow from '../../Components/CustomRow'
import CustomSelect from '../../Components/CustomSelect'
import { ReactComponent as Card } from '../../image/CreditCard.svg'
import { ReactComponent as Lock } from '../../image/Lock.svg'
import { ReactComponent as DArrow } from '../../image/SelectDown.svg'
import { ReactComponent as User } from '../../image/User.svg'

const useStyles = makeStyles((theme) => ({
  personalMenuMain:{
    padding: [[100,0,136,0]],
    [theme.breakpoints.down('xl')]:{
      padding: [[70,0,100,0]],
    },
    [theme.breakpoints.down('lg')]:{
      padding: [[50,0,70,0]],
    },
    [theme.breakpoints.down('md')]:{
      padding: [[30,0,64,0]],
    },
  },
  personalMenuMainWrapper:{
    display: 'flex',
    alignItems: 'start',
    gap: [[0,128]],
    width: '100%',
    [theme.breakpoints.down('xl')]:{
      gap: [[0,80]]
    },
    [theme.breakpoints.down('lg')]:{
      
    },
    [theme.breakpoints.down('lg')]:{
      flexWrap: 'wrap'
    },
  },
  menuMainBox:{
    maxWidth: 256,
    width: '100%',
    [theme.breakpoints.down('lg')]:{
      maxWidth: '100%'
    },
  },
  pagesBoxMain:{
    width: '100%',
    [theme.breakpoints.down('lg')]:{
      marginTop: 50,
    },
    [theme.breakpoints.down('md')]:{
      marginTop: 30,
    },
  },
  personalMenu:{
    '&.MuiList-root':{
      backgroundColor: theme.palette.primary.contrastText,
      border: `1px solid ${theme.palette.gray.testimonialBG}`,
      borderRadius: 16,
      padding: [[48,32]],
      display: 'flex',
      flexDirection: 'column',
      gap: [[35,0]],
      boxShadow: `0px 64px 64px rgba(15, 15, 15, 0.08)`,
      '& .MuiListItem-root':{
        padding: 0,
      },
      '& a':{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
        width: '100%',
        color: theme.palette.secondary.main,
        fontSize: 14,
        fontWeight: 500,
        '&.active,&:hover':{
          transition: 'all .3s ease-in-out',
          color: theme.palette.primary.main,
          '& svg':{
            '& path':{
              fill: theme.palette.primary.main
            },
          },
        },
      },
      '& svg':{
        height: 16,
        width: 16,
        verticalAlign: 'middle',
      },
    },
  },
  menuSelect:{
    '&.MuiInputBase-root':{
      border: `2px solid ${theme.palette.gray.headerBorder}`,
      borderRadius: 12,
      padding:[[8,16]],
      maxWidth: '100%',
      width: '100%',
      '& .MuiSelect-icon':{
        height: 20,
        width: 21,
        border: `2px solid ${theme.palette.gray.headerBorder}`,
        borderRadius: 50,
        marginTop: -4,
      },
    },
    '& .MuiSelect-select':{
      fontSize: 14,
      fontFamily:'poppins',
      '& a':{
        color: theme.palette.lightBtn.contrastText,
        width: '100%'
      },
    },
  },
  menuItem:{
    '& a':{
      color: theme.palette.secondary.main,
      width: '100%',
    },
  },
}))
const PersonalMenu = () => {

   //Drop Down Tab
   const [value, setValue] = useState(0);
   const handleChange = (event) => {
     setValue(event.target.value);
   };

  //Use Style
  const classes = useStyles(); 

  // Small Screen Query
  const isLargeScreen = useMediaQuery('(min-width:992px)');
  const isSmallScreen = useMediaQuery('(max-width:991px)');

  const mobMenu = [
    {
      value: 0,
      to: '/personal/personal-info',
      icon: <User />,
      menuName: 'Personal Info',
    },
    {
      value: 1,
      to: '/personal/login-security',
      icon: <Lock />,
      menuName: 'Login Security',
    },
    {
      value: 2,
      to: '/personal/my-payment',
      icon: <Card />,
      menuName: 'My payments',
    },
    {
      value: 3,
      to: '/personal/my-voucher',
      icon: <Voucher />,
      menuName: 'My voucher',
    },
    {
      value: 4,
      to: '/personal/my-point',
      icon: <Coin />,
      menuName: 'My points',
    },
    {
      value: 5,
      to: '/personal/my-order',
      icon: <Bag />,
      menuName: 'My orders',
    },
  ]

  return (
    <CustomBox className={classes.personalMenuMain}>
      <CustomContainer  maxWidth='md'>
        <CustomRow>
          <CustomBox className={classes.personalMenuMainWrapper}>
            <CustomBox className={classes.menuMainBox}>
                { isLargeScreen && (
                  <CustomList className={classes.personalMenu}>
                    {
                      mobMenu.map((data,index)=>{
                        return(
                          <CustomListItem key={index}><CustomLink to={data.to}>{data.icon}{data.menuName}</CustomLink></CustomListItem>
                        )
                      })
                    }
                  </CustomList> 
                )}
                { isSmallScreen && (

                  <CustomSelect
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    IconComponent={DArrow}
                    className={classes.menuSelect}
                  >
                    {
                      mobMenu.map((data, menuIndex)=>{
                      return(
                        <CustomMenuItem key={menuIndex} value={data.value} className={classes.menuItem}>
                          <CustomLink to={data.to}>{data.menuName}</CustomLink>
                        </CustomMenuItem>
                      )})
                    }
                  </CustomSelect>
                )}
            </CustomBox>
            <CustomBox className={classes.pagesBoxMain}>
                  <Outlet/>
            </CustomBox>
          </CustomBox>
        </CustomRow>
      </CustomContainer>
  </CustomBox>
  )
}

export default PersonalMenu
