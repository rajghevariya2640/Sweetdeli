import Check from '@mui/icons-material/CheckRounded';
import Wrong from '@mui/icons-material/ClearRounded';
import CreditCard from '@mui/icons-material/CreditCardRounded';
import { Checkbox, FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import CustomBox from '../../Components/CustomBox';
import CustomCol from '../../Components/CustomCol';
import CustomRow from '../../Components/CustomRow';
import MyFormLabel from '../../Components/MyFormLabel';
import MyTextField from '../../Components/MyTextField';

const useStyles = makeStyles((theme) => ({
    singleCardInput:{
       
    },
    saveCardMain:{
        '&.MuiFormControlLabel-root':{
            margin: 0,
            gap: [[0,10]],
        },
    },
    cardSave:{
        '&.MuiCheckbox-root':{
            padding: 0,
        },
        '& ~ .MuiTypography-root':{
            fontSize: 14,
            color: theme.palette.primary.main,
            fontWeight: 500,
        },
    },
}))

const CrediCardForm = () => {

     // UseStyle
     const classes = useStyles(); 

    // Funcrion Value Set
        const [cardNumber, setCardNumber] = useState('');
        const [cardHolder, setCardHolder] = useState('');
        const [expiryDate, setExpiryDate] = useState('');
        const [isInputFocused, setIsInputFocused] = useState(false);
        const [cvv, setCVV] = useState('');

    // Card Number Value Function
        const handleCardNumberChange = (event) => {
            const sanitizedValue = event.target.value.replace(/\D/g, '').slice(0, 16);
            setCardNumber(sanitizedValue);
        };
    // Card Number Counter
        const [cardNumberValue, setCardNumberValue] = useState(0);
        useEffect(() => {
            setCardNumberValue(cardNumber.length);
        }, [cardNumber]);
    // Card Number Input Focus & Blur Function
        const handleInputFocus = () => {
            setIsInputFocused(true);
        };
        const handleInputBlur = () => {
            setIsInputFocused(false);
        };
    // Holder Value Function
        const handleCardHolderChange = (event) => {
            const sanitizedValue = event.target.value.slice(0, 30);
            setCardHolder(sanitizedValue);
        };
    // Expiration Value Function
        const handleExpiryDateChange = (event) => {
            const sanitizedValue = event.target.value.replace(/\D/g, '').slice(0, 4);
            setExpiryDate(sanitizedValue);
        };
    // Cvv Value Function
        const handleCVVChange = (event) => {
            const sanitizedValue = event.target.value.replace(/\D/g, '').slice(0, 3);
            setCVV(sanitizedValue);
        };
    // Button Submit Function
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Submitted:', { formattedCardNumber,cardHolder, formattedExpiryDate, cvv });
        };
    // ADD / & blank space in cardNumber and expiry date
        const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
        const formattedExpiryDate = expiryDate.replace(/(..)/g, '$1/').slice(0, 5);

  return (
    <CustomBox>
        <form onSubmit={handleSubmit} method='get'>
            <CustomRow spacing={4}>
                <CustomCol xs={12} className={classes.singleCardInput}>
                    <MyFormLabel>card number</MyFormLabel>
                    <MyTextField
                        required
                        placeholder="---- ---- ---- ----"
                        value={formattedCardNumber}
                        onChange={handleCardNumberChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <>
                                    {cardNumberValue === 16 ? (
                                        <Check color="primary" />
                                    ) : (
                                    <>
                                        {isInputFocused ? (
                                            <Wrong color="error" />
                                        ) : (
                                            <CreditCard color="action" />
                                        )}
                                    </>
                                    )}
                                </>
                            )
                        }}
                    />
                </CustomCol>
                <CustomCol xs={12} className={classes.singleCardInput}>
                    <MyFormLabel>card holder</MyFormLabel>
                    <MyTextField
                        required
                        placeholder="PHAM TRAN LAN CAM NGOC"
                        value={cardHolder}
                        onChange={handleCardHolderChange}
                        fullWidth
                    />
                </CustomCol>
                <CustomCol xs={12}>
                    <CustomRow spacing={2}>
                        <CustomCol xs={6} className={classes.singleCardInput}>
                            <MyFormLabel>expiration date</MyFormLabel>
                            <MyTextField
                                required
                                placeholder="MM / YY"
                                value={formattedExpiryDate}
                                onChange={handleExpiryDateChange}
                                fullWidth
                            />
                        </CustomCol>
                        <CustomCol xs={6} className={classes.singleCardInput}>
                            <MyFormLabel>cvv</MyFormLabel>
                            <MyTextField
                                required
                                value={cvv}
                                onChange={handleCVVChange}
                                fullWidth
                            />
                        </CustomCol>
                    </CustomRow>
                </CustomCol>
                <CustomCol xs={12}>
                        <FormControlLabel control={<Checkbox  className={classes.cardSave} />} className={classes.saveCardMain} label="Save Card"/>
                </CustomCol>
                
            </CustomRow>
        </form>
    </CustomBox>
  )
}

export default CrediCardForm
