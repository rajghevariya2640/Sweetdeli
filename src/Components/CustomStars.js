import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    ratedStar:{
            height: '16px !important',
            width: '16px !important',
            verticalAlign: 'middle',
            [theme.breakpoints.down('md')]:{
                height: '14px !important',
                width: '14px !important',
            },
            [theme.breakpoints.down('sm')]:{
                height: '12px !important',
                width: '12px !important',
            },
    },
    unRatedStar:{
        '& path':{
            fill: theme.palette.gray.unrateStar
        },
    },
}))

const CustomStars = ({ rating }) => {
    // UseStyle
    const classes = useStyles(); 
    
    //Star Rating
    const filledStars = Math.min(5, Math.max(0, rating));
    
  return (
    <div>
        {[...Array(5)].map((_, index) => (
            <span key={index}>
            {index < filledStars ? (
                <StarIcon color="primary" className={classes.ratedStar} />
            ) : (
                <StarIcon color="primary" className={`${classes.unRatedStar} ${classes.ratedStar}`} />
            )}
            </span>
        ))}
    </div>
  );
}

export default CustomStars
