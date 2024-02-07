import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import CustomBox from './CustomBox';
import CustomButton from './CustomButton';
import CustomTypography from './CustomTypography';

const useStyles = makeStyles((theme) => ({
    addQntMain:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,18]],
    },
    qntBtn:{
        '&.MuiButtonBase-root':{
            backgroundColor: theme.palette.gray['50'],
            color: theme.palette.primary.main,
            padding: 10,
            maxWidth: 40,
            minWidth: 0,
            height: 40,
            width: '100%',
            borderRadius: 15,
            '&:hover':{
                backgroundColor: '#e1e3e2',
            },
        },
    },
    qntVal:{
        width: 15,
        textAlign: 'center'
    },
}))
const CustomAddQnt = ({className,variant}) => {

    // UseStyle
    const classes = useStyles(); 

    // Add Qnt
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

  return (
    <CustomBox className={`${classes.addQntMain} ${className ? className : ''}`}>
        <CustomButton variant={variant} className={`${classes.qntBtn} ${classes.incBtn}`} onClick={handleDecrement}>-</CustomButton>
        <CustomTypography variant="body1" component={'span'} className={classes.qntVal}>{quantity}</CustomTypography>
        <CustomButton variant={variant} className={`${classes.qntBtn} ${classes.decBtn}`} onClick={handleIncrement}>+</CustomButton>
    </CustomBox>
  )
}

export default CustomAddQnt
