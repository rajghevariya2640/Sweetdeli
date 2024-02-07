import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp'
import { Checkbox, Divider, FormControlLabel, FormLabel, Radio, RadioGroup, styled } from '@mui/material'
import Slider from '@mui/material/Slider'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomButton from '../../Components/CustomButton'
import CustomContainer from '../../Components/CustomContainer'
import CustomLink from '../../Components/CustomLink'
import CustomList from '../../Components/CustomList'
import CustomListItem from '../../Components/CustomListItem'
import CustomMenu from '../../Components/CustomMenu'
import CustomMenuItem from '../../Components/CustomMenuItem'
import CustomSelect from '../../Components/CustomSelect'
import CustomStars from '../../Components/CustomStars'
import CustomTextField from '../../Components/CustomTextField'
import CustomTypography from '../../Components/CustomTypography'
import { ReactComponent as Lable } from '../../image/Coupon.svg'
import { ReactComponent as Filter } from '../../image/Filter.svg'
import { ReactComponent as Arrow } from '../../image/FilterSelect.svg'
import { ReactComponent as Location } from '../../image/Location.svg'
import { ReactComponent as Search } from '../../image/Search.svg'


const useStyles = makeStyles((theme) => ({
    filterSecMain:{
        padding: [[80,0,37,0]],
        [theme.breakpoints.down('lg')]:{
            padding: [[50,0,35,0]],
        },
        [theme.breakpoints.down('md')]:{
            padding: [[30,0]],
        },
        [theme.breakpoints.down('sm')]:{
            padding: [[18,0,20,0]],
        },
    },
    filterSecRow:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        gap:[[28,68]],
        [theme.breakpoints.down('xl')]:{
            gap: [[28,40]],
        },
        [theme.breakpoints.down('md')]:{
            gap: [[28,22]],
        },
        [theme.breakpoints.down('sm')]:{
            gap: [[28,0]],
        },
    },
    locationBox:{
        maxWidth: 260,
        width: '100%',
        [theme.breakpoints.down('mdxs')]:{
            maxWidth: '50%',
            width: '100%'
        },
        [theme.breakpoints.down('smxs')]:{
            maxWidth: '45%',
            width: '100%'
        },
    },
    saleBox:{
        maxWidth: 143,
        width: '100%',
        [theme.breakpoints.down('mdxs')]:{
            maxWidth: '50%',
            width: '100%'
        },
        [theme.breakpoints.down('smxs')]:{
            maxWidth: '45%',
            width: '100%'
        },
    },
    inputBoxRow:{
        display:'flex',
        gap:[[28,68]],
        justifyContent:'space-between',
        flexWrap:'wrap',
        [theme.breakpoints.down('xl')]:{
            gap: [[28,40]],
        },
        [theme.breakpoints.down('lg')]:{
            width: '100%'
        },
        [theme.breakpoints.down('sm')]:{
            gap: [[28,22]],
        },
    },
    inputBox:{
        width: 465,
        [theme.breakpoints.down('xl')]:{
            width: 325,
        },
        [theme.breakpoints.down('lg')]:{
            width: '85%',
        },
        [theme.breakpoints.down('md')]:{
            width: '82%',
        },
        [theme.breakpoints.down('sm')]:{
            width: '78%',
        },
        [theme.breakpoints.down('smxs')]:{
            width: '75%',
        },
    },
    filterSelect:{
        '& .MuiSelect-select':{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'flow',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
            [theme.breakpoints.down('sm')]:{
                width: '70%',
                paddingRight: 0
            },
            '& svg':{
                verticalAlign: 'middle'
            },
        },
    },
    locationSelect:{
        minWidth: 260,
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]:{
            minWidth: 200,
        },
        [theme.breakpoints.down('mdxs')]:{
            minWidth: 175,
        },
        [theme.breakpoints.down('xxs')]:{
            minWidth: 150,
        },
        [theme.breakpoints.down('smxs')]:{
            minWidth: '100%',
        },
        '& .MuiSelect-select.MuiOutlinedInput-input':{
            [theme.breakpoints.down('sm')]:{
                paddingRight: '0 !important'
            },
        },
    },
    bestDeals:{
        minWidth: 143,
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]:{
            minWidth: '100%',
        },
        '& .MuiSelect-select':{
                width: '100%',
            [theme.breakpoints.down('sm')]:{
                width: '70%',
            }
        },
    },
    productInput:{
        '& .MuiInputBase-root':{
            borderRadius: 10,
        },
        '& .MuiFilledInput-root':{
            '& .MuiFilledInput-input':{
                padding: [[12,81,12,12]],
                backgroundColor: '#F7F7F7',
                [theme.breakpoints.down('lg')]:{
                    padding: [[12,50,12,12]],
                },
                [theme.breakpoints.down('sm')]:{
                    padding: 12,
                },
                '&::placeholder':{
                    color: theme.palette.dark.productInfoDark,
                    opacity: 1,
                    fontWeight: 400,
                    [theme.breakpoints.down('md')]:{
                        fontSize: 14,
                    },
                    [theme.breakpoints.down('sm')]:{
                        fontSize: 12,
                    },
                },
            },
        },
    },
    inputMain:{
        '& .MuiInputBase-root':{
            backgroundColor: '#f7f7f7',
            '&:hover':{
                backgroundColor: '#f7f7f7'
            },
        },
    },
    filterIcon:{
        backgroundColor: theme.palette.primary.main,
        padding: [[10,13,10,14]],
        borderRadius: 10,
        [theme.breakpoints.down('md')]:{
            padding: [[10,12]],
        },
        '& svg':{
            verticalAlign: 'sub'
        },
    },
    filterDropDown:{
        '& .MuiPaper-root':{
            maxWidth: 263,
            boxShadow: '0px 3px 100px rgba(0,0,0,0.1) !important',
            maxHeight: 'calc(100vh - 275px)',
            overflowY: 'auto',
            padding: [[0,25,16,25]],
            [theme.breakpoints.down('md')]:{
                maxWidth: 225,
            },
            [theme.breakpoints.down('sm')]:{
                maxWidth: 200,
            },
        },
        '& .MuiList-root':{
            [theme.breakpoints.down('lg')]:{
                maxHeight: 'calc(100vh - 315px)',
            },
            [theme.breakpoints.down('md')]:{
                maxHeight: 'calc(100vh - 275px)',
            },
        },
    },
    filterHead:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        '& .MuiTypography-body2':{
            fontWeight: 600,
            textTransform: 'uppercase',
            fontFamily: 'poppins',
            color: theme.palette.dark.filterHead,
            letterSpacing: 0.5
        },
        '& svg':{
            color: theme.palette.dark.filterHead
        },
    },
    viewMore:{
        '& .MuiTypography-body2':{
            textTransform: 'capitalize'
        },
    },
    filterValue:{
        '& .MuiTypography-root':{
            color: theme.palette.gray.filterValue,
            fontSize: 14,
        },
    },
    filterList:{
        '&.MuiList-root':{
            padding: 0,
            marginTop: 25,
            display: 'none',
        },
        '& ~ .MuiDivider-root':{
            marginTop: 20,
            marginBottom: 20,
        },
    },
    filterBlock:{
        '&.MuiList-root':{
            display: 'block ',
        },
    },
    reviewBlock:{
        '&.MuiList-root':{
            display: 'block ',
        },
    },
    filterListItem:{
        '&.MuiListItem-root':{
            padding: 0,
            paddingBottom: 15,
            justifyContent: 'space-between',
        },
        '& .MuiCheckbox-root,.MuiRadio-root':{
            padding: 0,
            paddingRight: 10
        },
        '& .MuiFormLabel-root':{
            fontSize: 14,
            fontFamily: 'poppins',
            [theme.breakpoints.down('sm')]:{
                fontSize: 12,
            },
        },
    },
    priceInputMain:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: [[0,10]],
        '& svg':{
            '& path':{
                fill: theme.palette.gray.unrateStar,
            }
        },
    },
    priceSlider:{
        marginTop: 15
    },
    priceProductLable:{
        '&.MuiTypography-root':{
            color: theme.palette.gray.filterValue,
            fontFamily:'poppins',
            fontWeight: 400,
            lineHeight: '125%',
            marginTop: 29,
        },
    },
    customerReviw:{
        '& .MuiFormControlLabel-root':{
            '& .MuiTypography-body1':{
                color: theme.palette.dark.fCustomerReview,
                fontSize: 14,
                [theme.breakpoints.down('sm')]:{
                    fontSize: 12,
                },
            },
        },
    },
    applyFilterBtn:{
        display: 'flex',
        justifyContent: 'center',
        '& .MuiButtonBase-root':{
            padding: [[12,25]],
            marginTop: 38,
        },
    },
}))

const FilterSection = () => {

    // Range Slider
    const [sliderValues, setSliderValues] = useState([20, 80]);

    const handleSliderChange = (event, newValues) => {
        setSliderValues(newValues);
    };

    const handleInputChange = (event, index) => {
        const newValue = event.target.value;
        const newValues = [...sliderValues];
        newValues[index] = newValue === '' ? '' : Number(newValue.replace('$', ''));
        setSliderValues(newValues);
      };

    const handleBlur = (index) => {
        if (sliderValues[index] < 0) {
        const newValues = [...sliderValues];
        newValues[index] = 0;
        setSliderValues(newValues);
        } else if (sliderValues[index] > 100) {
        const newValues = [...sliderValues];
        newValues[index] = 100;
        setSliderValues(newValues);
        }
    };

    // Filter Open
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    const toggleUser = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(!menuOpen);
    };

    // Filter Inner Open
    const [isFilterAdded, setIsFilter] = useState(false);
    const [isPriceAdded, setIsPriceAdded] = useState(false);
    const [isReviewAdded, setIsReviewAdded] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [reviewOpen, setReviewOpen] = useState(false);
    const [isIconChange, setIsIconChange] = useState(true);
    const [isPriceIcon, setIsPriceIcon] = useState(true);
    const [isReviewIconChange, setIsReviewIconChange] = useState(true);
    const toggleFilter = () => {
        setFilterOpen(!filterOpen);
        setIsFilter(!isFilterAdded); 
        setIsIconChange(!isIconChange);
    };
    const togglePrice = () => {
        setFilterOpen(!filterOpen);
        setIsPriceAdded(!isPriceAdded); 
        setIsPriceIcon(!isPriceIcon);
    };
    const toggleReview = () => {
        setReviewOpen(!reviewOpen);
        setIsReviewAdded(!isReviewAdded); 
        setIsReviewIconChange(!isReviewIconChange);
    };

    // UseStyle
    const classes = useStyles(); 

    // Select Change
    const [cityValue, setCity] = useState(0);
    const [saleValue, setSale] = useState(0);
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleSaleChange = (event1) => {
        setSale(event1.target.value);
    };
    const City = [
        {
            number: 0,
            name: 'San Francisco, California',
            icon: <Location />,
        },
        {
            number: 1,
            name: 'Cairo, Egypt',
            icon: <Location />,
        },
        {
            number: 2,
            name: 'Paris, France',
            icon: <Location />,
        },
        {
            number: 3,
            name: 'Tokyo, Japan',
            icon: <Location />,
        },
    ]

    const Deal = [
        {
            number: 0,
            name: 'Best Deal',
            icon: <Lable />,
        },
        {
            number: 1,
            name: 'Top Sellers',
            icon: <Lable />,
        },
        {
            number: 2,
            name: 'Hot Products',
            icon: <Lable />,
        },
        {
            number: 3,
            name: 'Top-Rated Products',
            icon: <Lable />,
        },
    ]

    const filterChecbox = [
        {
            lable: 'Sit dui ultrices.',
            value: '96',
        },
        {
            lable: 'Nec est eget.',
            value: '71',
        },
        {
            lable: 'Pharetra lacus.',
            value: '55',
        },
        {
            lable: 'Id elit a non sem.',
            value: '54',
        },
        {
            lable: 'Quis auctor.',
            value: '49',
        },
        {
            lable: 'Adipiscing.',
            value: '48',
        },
        {
            lable: 'Diam quam.',
            value: '47',
        },
    ]

    const rating = [
        {
            stars: 4,
            label: '& Up'
        },
        {
            stars: 3,
            label: '& Up'
        },
        {
            stars: 2,
            label: '& Up'
        },
    ]

    const BpIcon = styled('span')(({ theme }) => ({
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#',
        },
      }));
      
      const BpCheckedIcon = styled(BpIcon)({
        backgroundColor: '#141614',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
          content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: `#141614cc`
        },
      });
      
      // Inspired by blueprintjs
      function BpRadio(props) {
        return (
          <Radio
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
          />
        );
      }

  return (
    <CustomBox className={classes.filterSecMain}>
        <CustomContainer maxWidth='md'>
            <CustomBox className={classes.filterSecRow}>
                <CustomBox className={classes.locationBox}>
                    <CustomSelect
                        value={cityValue}
                        onChange={handleCityChange}
                        IconComponent={Arrow}
                        className={`${classes.locationSelect} ${classes.filterSelect}`}
                    >
                        {
                            City.map((data, index)=>{
                                return(
                                    <CustomMenuItem value={data.number} key={index} className={classes.languageName}>{data.icon}{data.name}</CustomMenuItem>
                                )
                            })
                        }
                    </CustomSelect>
                </CustomBox>
                <CustomBox className={classes.saleBox}>
                        <CustomSelect
                            value={saleValue}
                            onChange={handleSaleChange}
                            displayEmpty
                            IconComponent={Arrow}
                            className={`${classes.bestDeals} ${classes.filterSelect}`}
                        >
                            {
                                Deal.map((data, index)=>{
                                    return(
                                        <CustomMenuItem value={data.number} key={index} className={classes.languageName}>{data.icon}{data.name}</CustomMenuItem>
                                    )
                                })
                            }
                        </CustomSelect>
                </CustomBox>
                <CustomBox className={classes.inputBoxRow}>
                    <CustomBox className={classes.inputBox}>
                        <CustomBox className={classes.inputMain}>
                            <CustomTextField variant='filled' fullWidth placeholder="Search for anything…" className={classes.productInput} 
                                InputProps={{
                                    startAdornment: (
                                        <Search className={classes.searchIcon} />
                                    ),
                                }}
                            />
                        </CustomBox>
                    </CustomBox>
                    <CustomBox>
                        <CustomBox 
                            className={classes.filterIcon}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={toggleUser}
                        >
                            <CustomLink>
                                <Filter />
                            </CustomLink>
                        </CustomBox>
                        <CustomMenu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={menuOpen}
                            onClose={toggleUser}
                            className={classes.filterDropDown}
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
                                
                            <CustomLink className={classes.filterHead} onClick={toggleFilter} >
                                <CustomTypography variant={'body2'} component={'p'}>Filter</CustomTypography>
                                {isIconChange ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />}
                            </CustomLink>
                            <CustomList className={`${classes.filterList} ${isFilterAdded ? classes.filterBlock : ''}`}>
                                {
                                    filterChecbox.map((data,index)=>{
                                        return(
                                            <CustomListItem className={classes.filterListItem} key={index}>
                                                <CustomBox>
                                                    <Checkbox size='small' />
                                                    <FormLabel>{data.lable}</FormLabel>
                                                </CustomBox>
                                                <CustomBox className={classes.filterValue}>
                                                    <CustomTypography>{data.value}</CustomTypography>
                                                </CustomBox>
                                            </CustomListItem>
                                        )
                                    })
                                }
                                <CustomLink className={`${classes.filterHead} ${classes.viewMore}`}>
                                    <CustomTypography variant={'body2'} component={'p'}>View More</CustomTypography>
                                </CustomLink>
                            </CustomList>
                            <Divider />


                            <CustomLink className={classes.filterHead} onClick={togglePrice} >
                                <CustomTypography variant={'body2'} component={'p'}>Price</CustomTypography>
                                {isPriceIcon ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />}
                            </CustomLink>
                            <CustomList className={`${classes.filterList} ${isPriceAdded ? classes.filterBlock : ''}`}>
                                <CustomBox alignItems="center">
                                    <CustomBox className={classes.priceInputMain}>
                                        <CustomTextField
                                            value={`$${sliderValues[0]}`}
                                            onChange={(event) => handleInputChange(event, 0)}
                                            onBlur={() => handleBlur(0)}
                                            inputProps={{
                                            step: 1,
                                            min: 0,
                                            max: sliderValues[1] - 1,
                                            type: 'text',
                                            'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                        <RemoveSharpIcon />
                                        <CustomTextField
                                            value={`$${sliderValues[1]}`}
                                            onChange={(event) => handleInputChange(event, 1)}
                                            onBlur={() => handleBlur(1)}
                                            inputProps={{
                                                step: 1,
                                                min: sliderValues[0] + 1,
                                                max: 100,
                                                type: 'text',
                                                'aria-labelledby': 'input-slider',
                                            }}
                                        />
                                    </CustomBox>
                                    <CustomBox width={'100%'} className={classes.priceSlider}>
                                        <Slider
                                            value={sliderValues}
                                            onChange={handleSliderChange}
                                            aria-labelledby="input-slider"
                                            min={0}
                                            max={100}
                                        />
                                    </CustomBox>
                                </CustomBox>   
                                <CustomTypography variant={'subtitle2'} component={'span'} className={classes.priceProductLable}>38 products found</CustomTypography>
                            </CustomList>
                            <Divider />


                            <CustomLink className={classes.filterHead} onClick={toggleReview} >
                                <CustomTypography variant={'body2'} component={'p'}>Customer Review</CustomTypography>
                                {isReviewIconChange ? <KeyboardArrowDownRoundedIcon /> : <KeyboardArrowUpRoundedIcon />}
                            </CustomLink>
                            <CustomList className={`${classes.filterList} ${isReviewAdded ? classes.filterBlock : ''}`}>
                                <RadioGroup
                                    defaultValue="female"
                                    aria-labelledby="demo-customized-radios"
                                    name="customized-radios"
                                    className={classes.customerReviw}
                                >
                                    <FormControlLabel value={'all'} control={<BpRadio />} label={'Any rating'} />
                                    {
                                        rating.map((data , ratingIndex)=>{
                                            return(
                                                <FormControlLabel 
                                                    key={ratingIndex} 
                                                    value={ratingIndex + 1} 
                                                    control={<BpRadio />} 
                                                    label={
                                                        <CustomBox display='flex' alignItems='center-'>
                                                            <CustomStars rating={data.stars} />
                                                            {data.label}
                                                        </CustomBox>
                                                    } 
                                                />
                                            )
                                        })
                                    }
                                </RadioGroup>
                            </CustomList>
                            <CustomBox className={classes.applyFilterBtn}>
                                <CustomButton variant='contained'>apply filter</CustomButton>
                            </CustomBox>
                        </CustomMenu>
                    </CustomBox>
                </CustomBox>
            </CustomBox>
        </CustomContainer>
    </CustomBox>
  )
}

export default FilterSection
