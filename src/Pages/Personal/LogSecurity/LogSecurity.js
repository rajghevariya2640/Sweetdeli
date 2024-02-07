import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomBox from '../../../Components/CustomBox'
import CustomCol from '../../../Components/CustomCol'
import CustomRow from '../../../Components/CustomRow'
import CustomTypography from '../../../Components/CustomTypography'
import LDbtn from '../../../Components/LDbtn'

const useStyles = makeStyles((theme) => ({
  logSecMain:{
    padding: [[64,0,64,0]],
    [theme.breakpoints.down('lg')]:{
      padding: [[50,0,50,0]],
    },
    [theme.breakpoints.down('md')]:{
      padding: [[32,0,32,0]],
    },
    width: '100%',
    display: 'inline-block',
    borderTop: `1px solid ${theme.palette.gray.headerBorder}`,
    '&:first-child':{
      borderTop: 0,
    },
    '&:last-child':{
      paddingBottom: 0,
    },
  },
  socialAccountMain:{
    '& .MuiGrid-item':{
      [theme.breakpoints.up('md')]:{
        '&:nth-child(even)':{
          paddingRight: 48,
          position: 'relative',
          '&::after':{
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: '0',
            height: '100%',
            width: 1,
            backgroundColor: theme.palette.gray.headerBorder
          },
        },
        '&:nth-child(odd)':{
          paddingLeft: 48,
        },
      },
    },
  },
  deviceHistoryMain:{
    '& $logSecCol.MuiGrid-item':{
      marginTop: 0,
      padding: [[16,0]],
      borderTop: `1px solid ${theme.palette.gray.headerBorder}`,
      '&:nth-child(2)':{
        borderTop: 0,
      },
      '&:last-child':{
        paddingBottom: 0,
      },
      [theme.breakpoints.down('smxs')]:{
        display: 'inline-grid'
      }
    }
  },
  logSecCol:{
    '&.MuiGrid-item':{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: [[10,0]],
      marginTop: 16,
    },
  },
  logSecHead:{
    '&.MuiTypography-root':{
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.dark.dark
    },
  },
  logSecInfo:{
    '&.MuiTypography-root':{
      fontSize: 12,
      color: theme.palette.secondary.main,
      marginTop: 4,
    },
  },
  heading:{
    '&.MuiTypography-root':{
      width: '100%',
      color: theme.palette.dark.dropDownHead,
      [theme.breakpoints.down('sm')]:{
        fontSize: 20,
      }
    },
  },
}))



const CustomGrid = () => {
  // Use Style
  const classes = useStyles();

  const generateGridItem = (colSize, colIndex, heading, logSecHead, logSecInfo, btnContent) => {
    return (
      <>
        {colIndex === 0 && (
          <CustomTypography variant={'h6'} component={'h6'} className={classes.heading}>
              {heading}
            </CustomTypography>
        )}
        <CustomCol xs={12} md={`${colSize ? colSize : 12}`} key={colIndex} className={classes.logSecCol}>
          <CustomBox>
            <CustomTypography className={classes.logSecHead}>{logSecHead}</CustomTypography>
            <CustomTypography className={classes.logSecInfo}>{logSecInfo}</CustomTypography>
          </CustomBox>
          <LDbtn sx={{padding: "10px 12px"}} variant="outlined">{btnContent}</LDbtn>
        </CustomCol>
      </>
    );
  };

  return (
    <CustomBox>
      <CustomBox className={classes.logSecMain}>
        <CustomRow spacing={0}>
          {generateGridItem(12, 0, 'Login', 'Password', 'Last updated 1 month ago', 'Update password')}
        </CustomRow>
      </CustomBox>
      <CustomBox className={`${classes.logSecMain} ${classes.socialAccountMain}`}>
        <CustomRow spacing={0}>
          {generateGridItem(6, 0, 'Social accounts', 'Facebook', 'Not connected', 'Connect')}
          {generateGridItem(6, 1, 'Social accounts', 'Apple account', 'Not connected', 'Connect')}
        </CustomRow>
      </CustomBox>
      <CustomBox className={`${classes.logSecMain} ${classes.deviceHistoryMain}`}>
        <CustomRow spacing={0}>
          {generateGridItem(12, 0, 'Device history', 'Session', 'May 14, 2021 at 08:36pm', 'Log out device')}
          {generateGridItem(12, 1, 'Device history', 'macOs Big Sur. Chrome', 'May 16, 2021 at 05:56pm', 'Log out device')}
          {generateGridItem(12, 2, 'Device history', 'Session', 'May 14, 2021 at 08:36pm', 'Log out device')}
        </CustomRow>
      </CustomBox>
    </CustomBox>
  );
};




const LogSecurity = () => {

    //Use Style
    // const classes = useStyles(); 

  // const logSecRow = [ 
  //   {
  //     heading: 'Login',
  //     col: [12],
  //     logSecHead: 'Password',
  //     logSecInfo: 'Last updated 1 month ago',
  //     btnContent: 'Update password',
  //   },
  //   [
  //     heading- 'Login',
  //     col: [6,6],
  //     {
  //       logSecHead: ['kjgvy'],
  //       logSecInfo: 'Last updated 1 month ago',
  //       btnContent: 'Update password',
  //     }
  //   ],
  // ]
  return (
    <>
      <CustomTypography variant={'secondHeading'} component={'h2'}>Login and security</CustomTypography>
      <CustomGrid />
    </>
  )
}

export default LogSecurity
