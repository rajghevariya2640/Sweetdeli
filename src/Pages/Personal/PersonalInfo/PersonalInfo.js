import { makeStyles } from '@mui/styles';
import React from 'react';
import CustomBox from '../../../Components/CustomBox';
import CustomCol from '../../../Components/CustomCol';
import CustomRow from '../../../Components/CustomRow';
import CustomButton from '../../../Components/CustomButton';
import CustomTypography from '../../../Components/CustomTypography';
import LDbtn from '../../../Components/LDbtn';
import MyFormLabel from '../../../Components/MyFormLabel';
import MyTextField from '../../../Components/MyTextField';
import Cross from '@mui/icons-material/ClearRounded';


const useStyles = makeStyles((theme) => ({
  infoHeaderBox:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiButtonBase-root':{
      padding: [[8,16]],
      height: 'fit-content'
    },
  },
  accountInfoMain:{
    marginTop: 64,
    [theme.breakpoints.down('lg')]:{
      marginTop: 50,
    },
    [theme.breakpoints.down('md')]:{
      marginTop: 30,
    },
  },
  accountInfoHead:{
    '&.MuiTypography-root':{
      fontWeight: 500,
      color: theme.palette.lightBtn.contrastText,
    },
  },
  inputBtn:{
    '&.MuiButtonBase-root':{
      width: '100%',
      padding: [[8,8,8,12]],
      maxWidth: 'fit-content'
    },
  },
  socialMain:{
    margin: [[48,0,48,0]]
  },
  btnMainWrapper:{
    display: 'flex',
    alignItems: 'center',
    gap: [[0,16]],
    paddingTop: 48,
    borderTop: `1px solid ${theme.palette.gray.headerBorder}`,
    [theme.breakpoints.down('md')]:{
      justifyContent: 'center',
      gap: [[0,10]],
      padding: 0,
      borderTop: 0,
    },
  },
  socialInput:{
    '&:last-child':{
      [theme.breakpoints.down('mdxs')]:{
        '& .MuiInputBase-root':{
          padding: 12,
          '& .MuiInputBase-input':{
            padding: 0,
            paddingRight: 12
          },
        },
      }
    },
  },
}))

const PersonalInfo = () => {

  //Use Style
  const classes = useStyles(); 

  const accountInput = [
    {
      label:'Display Name',
      placeholder:'Enter your display name',
      fullWidth: false,
    },
    {
      label:'real name',
      placeholder:'PHAM TRAN LAN CAM NGOC',
      fullWidth: false,
    },
    {
      label:'Phone',
      placeholder:'Enter your display name',
      fullWidth: false,
    },
    {
      label:'email',
      placeholder:'Enter your display name',
      fullWidth: false,
    },
    {
      label:'Your address',
      placeholder:'123 Ave, New York, United States',
      fullWidth: true,
    },
  ]

  const socialInput = [
    {
      label: 'website',
      placeholder: 'Your site URL',
    },
    {
      label: 'twitter',
      placeholder: '@twitter username',
      hasButton: true
    },
  ]
  return (
    <CustomBox>
      <CustomBox className={classes.infoHeaderBox}>
        <CustomTypography variant={'secondHeading'} component={'h2'}>Personal info</CustomTypography>
        <LDbtn variant='outlined'>View profile</LDbtn>
      </CustomBox>
      <CustomBox className={classes.accountInfoMain}>
        <CustomRow spacing={{xs:2.5, lg: 4}}>
          <CustomCol xs={12}>
            <CustomTypography className={classes.accountInfoHead}>Account info</CustomTypography>
          </CustomCol>
          {
            accountInput.map((data, index)=>{
              return(
                <CustomCol xs={12} md={data.fullWidth ? 12 : 6} key={index}>
                  <MyFormLabel>{data.label}</MyFormLabel>
                  <MyTextField fullWidth={data.fullWidth} placeholder={data.placeholder} />
                </CustomCol>
              )
            })
          }
        </CustomRow>
      </CustomBox>
      <CustomBox className={classes.socialMain}>
        <CustomRow spacing={{xs:2.5, lg: 4}}>
          <CustomCol xs={12}>
            <CustomTypography className={classes.accountInfoHead}>Social</CustomTypography>
          </CustomCol>
          {
            socialInput.map((data, index)=>{
              return(
                <CustomCol xs={12} md={ 6} lg={12} xl={6} key={index} className={classes.socialInput}>
                  <MyFormLabel>{data.label}</MyFormLabel>
                  <MyTextField 
                    placeholder={data.placeholder} 
                    InputProps={
                      data.hasButton
                        ? {
                            endAdornment: (
                                <LDbtn variant="outlined" className={classes.inputBtn}>Verify account</LDbtn>
                            ),
                          }
                        : undefined
                    }
                   />
                </CustomCol>
              )
            })
          }
        </CustomRow>
      </CustomBox>
      <CustomBox className={classes.btnMain}>
        <CustomBox className={classes.btnMainWrapper}>
          <CustomButton variant='contained'>Update profile</CustomButton>
          <CustomButton variant='' startIcon={<Cross />}>Clear all</CustomButton>
        </CustomBox>
      </CustomBox>
    </CustomBox>
  )
}

export default PersonalInfo
