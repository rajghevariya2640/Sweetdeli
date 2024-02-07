import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomButton from '../../Components/CustomButton'
import CustomCol from '../../Components/CustomCol'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import CustomTextField from '../../Components/CustomTextField'
import CustomTypography from '../../Components/CustomTypography'
import SectionMainHead from '../../Components/SectionMainHead'
import SectionSubHead from '../../Components/SectionSubHead'

const useStyles = makeStyles((theme) => ({
  getInTouchMain:{
    paddingTop: 80,
    paddingBottom: 80,
    [theme.breakpoints.down('lg')]:{
      padding: [[50,0]]
    },
    [theme.breakpoints.down('md')]:{
      padding: [[30,0]]
    },
  },
  // inputMain:{
  //   '& .MuiFormControl-root':{
  //     maxWidth: 313,
  //     [theme.breakpoints.down('sm')]:{
  //       maxWidth: '100%'
  //     },
  //   },
  //   '& .MuiFilledInput-root':{
  //     borderRadius: 6,
  //     '&::after':{
  //       border: 'none',
  //     },
  //     '&::before':{
  //       border: 'none !important',
  //     },
  //   },
    // '& input':{
    //   padding: '12px 15px',
    //   backgroundColor: theme.palette.light.main,
    //   borderRadius: 4,
    //   border: `1px solid ${theme.palette.gray.inputBorder}`,
    //   fontFamily: 'Poppins',
    // }
  // },
  subsInfo:{
    '&.MuiTypography-root':{
      maxWidth: 465,
      fontSize: 12,
      textAlign: 'center',
      margin: [[0,'auto']],
      marginTop: 40,
      [theme.breakpoints.down('md')]:{
        marginTop: 20
      },
    },
  },
  formCol:{
    '&.MuiGrid-root':{
      maxWidth: 486,
      margin: [[0,'auto']],
      marginTop: 32,
      '& form':{
        display: 'flex',
        gap: [[0,40]],  
        [theme.breakpoints.down('sm')]:{
          display: 'block'
        },
      },
    },
  },
  subsBtn:{
    '&.MuiButtonBase-root':{
      padding: [[11,32]],
      [theme.breakpoints.down('sm')]:{
        width: '100%',
        marginTop: 35,
      },
    },
  }
}))

const GetInTouch = () => {

  const classes = useStyles(); 

  return (
    <CustomBox className={classes.getInTouchMain}>
        <CustomContainer>
            <SectionSubHead>Get In Touch</SectionSubHead>
            <SectionMainHead>Join Our Newsletter</SectionMainHead>
            <CustomRow>
              <CustomCol xs={12}>
                <CustomTypography variant={'body1'} component={'p'} className={classes.subsInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nisl, elemmet nec non eget felis. Eu ut cursus luctus nunc.</CustomTypography>
              </CustomCol>
              <CustomCol xs={12} className={classes.formCol}>
                <form className={classes.inputMain}>
                  {/* <TextField variant='filled' fullWidth placeholder="Your email" /> */}
                  <CustomTextField variant='outlined' fullWidth placeholder="Your email"/>
                  <CustomButton variant='contained' className={classes.subsBtn}>subscribe</CustomButton>
                </form>
              </CustomCol>
            </CustomRow>
        </CustomContainer>
    </CustomBox>
  )
}

export default GetInTouch
