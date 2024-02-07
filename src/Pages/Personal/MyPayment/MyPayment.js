import React from 'react'
import CustomBox from '../../../Components/CustomBox'
import CustomTypography from '../../../Components/CustomTypography'
import CustomRow from '../../../Components/CustomRow'
import CustomCol from '../../../Components/CustomCol'
import { makeStyles } from '@mui/styles'
import CrediCardForm from '../../Payment/CrediCardForm'
import CustomButton from '../../../Components/CustomButton'
import { ReactComponent as Visa } from '../../../image/Visa.svg'
import { ReactComponent as Master } from '../../../image/master.svg'
import LDbtn from '../../../Components/LDbtn'


const useStyles = makeStyles((theme) => ({
    cardSecMain:{
        padding: [[64,0,64,0]],
        [theme.breakpoints.down('lg')]:{
          padding: [[50,0,50,0]],
        },
        [theme.breakpoints.down('md')]:{
          padding: [[32,0,32,0]],
        },
        display: 'flex',
        flexDirection: 'column',
        gap: [[32,0]]
    },
    myPaymentCol:{
        marginBottom: 64
    },
    addedCardMain:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        [theme.breakpoints.down('xxs')]:{
          display: 'inline-grid',
            gap: [[12,0]]
        },
        '& .MuiTypography-body1':{
            color: theme.palette.dark.dark,
            fontWeight: 500,
            fontSize: 14,
        },
        '& .MuiTypography-body2':{
            color: theme.palette.secondary.main,
            fontWeight: 400,
            fontFamily: 'poppins',
            fontSize: 12,
        },
    },
    addNewCard:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiTypography-root':{
            color: theme.palette.dark.dropDownHead,
            fontWeight: 500,
        },
    },
    payMethodImageMain:{
        display: 'flex',
        alignItems: 'center'
    },
    payMethodImageWrapper:{
        height: 16,
        maxWidth: 64,
    },


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
          <CustomCol xs={12} md={colSize} key={colIndex} className={classes.logSecCol}>
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
        <CustomBox className={`${classes.logSecMain} ${classes.socialAccountMain}`}>
          <CustomRow spacing={0}>
            {generateGridItem(6, 0, 'Coupons', 'Coupons', 'No coupon added', 'Add')}
            {generateGridItem(6, 1, 'Coupons', 'Gift credit', 'No gift credit added', 'Add')}
          </CustomRow>
        </CustomBox>
      </CustomBox>
    );
  };

const MyPayment = () => {
    // Use Style
    const classes = useStyles();

    const payMethod = [
        {
            image: <Visa />,
        },
        {
            image: <Master />,
        },
    ]

    return (
        <CustomBox>
            <CustomRow>
                <CustomCol xs={12} className={`${classes.myPaymentCol}`}>
                    <CustomTypography variant={'secondHeading'} component={'h2'}>My payments</CustomTypography>
                </CustomCol>
                <CustomCol>
                    <CustomBox className={classes.cardSecMain}>
                        <CustomBox>
                            <CustomTypography variant={'h6'} component={'h6'}>Credit card</CustomTypography>
                            <CustomBox className={classes.addedCardMain}>
                                <CustomBox>
                                    <CustomTypography variant={'body1'}>Visa ••••••9999</CustomTypography>
                                    <CustomTypography variant={'body2'}>Expiration: 02/2024</CustomTypography>
                                </CustomBox>
                                <CustomBox>
                                    <CustomButton variant='contained'>Add payment method</CustomButton>
                                </CustomBox>
                            </CustomBox>
                        </CustomBox>
                        <CustomBox className={classes.addNewCard}>
                           <CustomBox>
                                <CustomTypography variant={'body1'} component={'span'}>Add new credit card</CustomTypography>
                           </CustomBox>
                           <CustomBox className={classes.payMethodImageMain}>
                                {
                                    payMethod.map((data,index)=>{
                                        return(
                                            <CustomBox key={index} className={classes.payMethodImageWrapper}>
                                                {data.image}
                                            </CustomBox>
                                        )
                                    })
                                }
                           </CustomBox>
                        </CustomBox>
                        <CustomBox>
                            <CrediCardForm />
                        </CustomBox>
                    </CustomBox>
                </CustomCol>
                <CustomCol xs={12}>
                    <CustomBox>
                    <CustomGrid />
                    </CustomBox>
                </CustomCol>
            </CustomRow>
        </CustomBox>
    )
}

export default MyPayment
