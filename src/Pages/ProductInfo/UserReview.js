import { makeStyles } from '@mui/styles';
import React from 'react';
import CustomAvatar from '../../Components/CustomAvatar';
import CustomBox from '../../Components/CustomBox';
import CustomButton from '../../Components/CustomButton';
import CustomListItem from '../../Components/CustomListItem';
import CustomStars from '../../Components/CustomStars';
import CustomTypography from '../../Components/CustomTypography';

const useStyles = makeStyles((theme) => ({
    userReviewMain:{
        '&.MuiListItem-root':{
            padding: 0,
            paddingTop: '32px !important',
            paddingBottom: ' 32px !important',
            borderBottom: `1px solid ${theme.palette.gray.headerBorder}`
        },
    },
    singleUserRating:{
        display: 'flex',
        gap: [[0,20]],
        width: '100%',
    },
    userRatingWrapper:{
        width: '100%',
    },
    userName:{
        '&.MuiTypography-body2':{
            color: theme.palette.primary.main,
            fontWeight: 500,
            fontFamily: 'poppins'
        },
    },
    userRating:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    reviewInfo:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.payement,
            fontFamily: 'poppins',
            letterSpacing: 0,
            marginTop: 4,
            [theme.breakpoints.down('sm')]:{
                fontSize: 12
            },
        },
    },
    likeReply:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
        marginTop: 8,
        '& .MuiButtonBase-root':{
            minWidth: 'unset',
            fontSize: 12
        },
        '& .MuiTypography-subtitle2':{
            fontFamily: 'poppins',
            color: theme.palette.secondary.main,
            fontWeight: 400,
            fontSize: 12
        },
    },
}))

const UserReview = ({userReview, className}) => {

    // UseStyle
    const classes = useStyles(); 

  return (
    <>
        {
            userReview.map((review, reviewKey)=>{
                return(
                    <CustomListItem className={classes.userReviewMain}  key={reviewKey}>
                        <CustomBox className={classes.singleUserRating}>
                            <CustomAvatar alt="Remy Sharp" src={review.image} sx={{ width: 48, height: 48 }} />
                            <CustomBox className={classes.userRatingWrapper}>
                                <CustomBox className={classes.userRating}>
                                    <CustomTypography variant={'body2'} component={'p'} className={classes.userName}>{review.name}</CustomTypography>
                                        <CustomStars  rating={review.rating}/>
                                    </CustomBox>
                                <CustomTypography variant={'body2'} component={'p'} className={classes.reviewInfo}>{review.reviewInfo}</CustomTypography>
                                <CustomBox className={classes.likeReply}>
                                    <CustomTypography variant='subtitle2' component='span'>{review.time}</CustomTypography>
                                    <CustomButton variant={'text'} disableRipple>Like</CustomButton>
                                    <CustomButton variant={'text'} disableRipple>Reply</CustomButton>
                                </CustomBox>
                            </CustomBox>
                        </CustomBox>
                    </CustomListItem>
                )
            })
        }
    </>
  )
}

export default UserReview
