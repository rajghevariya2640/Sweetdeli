import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { InputAdornment } from '@mui/material'
import Rating from '@mui/material/Rating'
import { makeStyles, styled } from '@mui/styles'
import React, { useState } from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomButton from '../../Components/CustomButton'
import CustomCol from '../../Components/CustomCol'
import CustomContainer from '../../Components/CustomContainer'
import CustomList from '../../Components/CustomList'
import CustomListItem from '../../Components/CustomListItem'
import CustomMenuItem from '../../Components/CustomMenuItem'
import CustomRow from '../../Components/CustomRow'
import CustomSelect from '../../Components/CustomSelect'
import CustomTab from '../../Components/CustomTab'
import CustomTabs from '../../Components/CustomTabs'
import CustomTextField from '../../Components/CustomTextField'
import CustomTypography from '../../Components/CustomTypography'
import theme from '../../Components/Theme'
import { ReactComponent as Loader } from '../../image/BtnLoad.svg'
import User1 from '../../image/Customer1.jpg'
import User2 from '../../image/Customer2.jpg'
import User3 from '../../image/Customer3.jpg'
import { ReactComponent as RArrow } from '../../image/PostRight.svg'
import { ReactComponent as DArrow } from '../../image/SelectDown.svg'
import { ReactComponent as Smile } from '../../image/Smile.svg'
import UserReview from './UserReview'
import LDbtn from '../../Components/LDbtn'
import MyTextField from '../../Components/MyTextField'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#B1B5C3',
  },
  '& .MuiRating-iconHover': {
    color: '#B1B5C3',
  },
});

const useStyles = makeStyles((theme) => ({
  reviewTabBox:{
    marginTop: 40,
    [theme.breakpoints.down('md')]:{
      '&:first-child':{
        marginTop: 32,
      },
      '&:nth-child(2)':{
        marginTop: 32,
      },
      '&:last-child':{
        marginTop: 56,
      },
    },
  },
  tabHeadBox:{
    display: 'flex',
    flexDirection: 'column',
    gap: [[8,0]]
  },
  tabsMain:{
    '& .MuiTabs-flexContainer':{
      maxWidth: 482,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: [[0,56]],
      overflowX: 'auto',
      [theme.breakpoints.down('md')]:{
        gap:[[0,16]],
        maxWidth: '100%',
      },
      [theme.breakpoints.down('mdxs')]:{
        gap:[[0,8]],
        maxWidth: '100%',
      },
      '& .MuiButtonBase-root':{
        padding: 0,
        fontFamily: 'poppins',
        color: theme.palette.dark.dark,
        fontWeight: 600,
        lineHeight: '150%',
        minWidth: 'unset',
        textTransform: 'capitalize',
        [theme.breakpoints.down('md')]:{
          fontWeight: 500,
        },
        [theme.breakpoints.down('xxs')]:{
          fontSize: 13,
        },
      },
    },
    '& .MuiTabs-fixed.MuiTabs-scroller':{
      overflow: 'visible !important'
    },
    '& .MuiTabs-indicator':{
      backgroundColor: '#c4c4c4',
      width: '50%'
    },
  },
  tabContentWrapper:{
    maxWidth: 473,
    width: '100%',
    [theme.breakpoints.down('md')]:{
      maxWidth: '100%',
    },
  },
  reviweTabLabel:{
    display: 'flex',
    alignItems: 'center',
    gap: [[0,4]],
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column',
      alignItems: 'start',
      gap: [[4,0]],
    },
    '& .MuiTypography-body2':{
      fontFamily: 'poppins',
      fontWeight: 500,
    [theme.breakpoints.down('md')]:{
      fontWeight: 400,
    },
      '&:first-child':{
        color: theme.palette.secondary.main,
      },
      '&:last-child':{
        color: theme.palette.dark.filterHead,
      },
    },
  },
  reviwInput:{
    '&.MuiFormControl-root':{
      maxWidth: 473,
      width: '100%',
      [theme.breakpoints.down('md')]:{
        maxWidth: '100%',
      },
      '& .MuiInputBase-root':{
        padding: [[14,16,14,24]],
        borderRadius: 16,
        [theme.breakpoints.down('md')]:{
          padding: [[6,16]],
        },
        '& .MuiInputBase-input':{
          padding: 0,
        },
        '& .MuiButtonBase-root':{
          padding:[[10,16]],
          width: '40%',
          textTransform: 'math-auto',
          '& svg':{
            height: 24,
            width: 24,
          },
          [theme.breakpoints.down('md')]:{
            width: 'unset',
            minWidth: 'unset',
            padding: 10,
            fontSize: 0,
            '& .MuiButton-endIcon':{
              margin: 0,
            },
          },
        },
      },
    },
  },
  commentHead:{
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  reviewTimeSelect:{
    '&.MuiInputBase-root':{
      border: `2px solid ${theme.palette.gray.headerBorder}`,
      borderRadius: 12,
      padding:[[8,16]],
      maxWidth: 160,
      width: '100%',
      '& svg':{
        height: 20,
        width: 21,
        border: `2px solid ${theme.palette.gray.headerBorder}`,
        borderRadius: 50,
      },
    },
    '& .MuiSelect-select':{
      fontSize: 14,
      fontFamily:'poppins',
    },
    '& .MuiSelect-select ~ svg':{
      marginTop: -4,
    },
  },
  userReviewList:{
    '& .MuiListItem-root':{
      padding: 0,
    },
  },
  loadMoreBtn:{
    '&.MuiButtonBase-root':{
      margin: [[0,'auto']],
      marginTop: 32,
      [theme.breakpoints.down('sm')]:{
        padding: [[12,16]],
      },
    },
  },
}))

const ProductDetailTab = () => {

  // UseStyle
  const classes = useStyles(); 

  // Tab Change
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  //Drop Down Tab
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //Add class to header
  const header = document.getElementsByClassName('header');
    const handleToggle = () => {
        header[0].classList?.add("right");
    };
    const handleToggleClose = () => {
        header[0].classList?.remove("right");
    };

    //User Review
    const newReview = [
      [
        {
          image: User1,
          name: 'Osbaldo Beahan',
          reviewInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque mattis molestie eget phasellus tellus amet duis in.',
          rating: 2,
          time: 'about 1 hour ago'
        },
      ],
      [
        {
          image: User2,
          name: 'Osbaldo Beahan',
          reviewInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque mattis molestie eget phasellus tellus amet duis in.',
          time: 'about 1 hour ago'
        },
      ],
    ]
    
    const dayReview = [
      [
        {
          image: User2,
          name: 'Osbaldo Beahan',
          reviewInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque mattis molestie eget phasellus tellus amet duis in.',
          rating: 2,
          time: 'about 1 hour ago'
        },
      ],
      [
        {
          image: User3,
          name: 'Osbaldo Beahan',
          rating: 4,
          reviewInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque mattis molestie eget phasellus tellus amet duis in.',
          time: 'about 1 hour ago'
        },
      ],
      [
        {
          image: User1,
          name: 'Osbaldo Beahan',
          rating: 5,
          reviewInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque mattis molestie eget phasellus tellus amet duis in.',
          time: 'about 1 hour ago'
        },
      ],
    ]

  return (
    <CustomBox>
        <CustomContainer maxWidth='md'>
            <CustomRow>
                <CustomCol xs={12} lg={6} >
                <CustomTabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    className={classes.tabsMain}
                  >
                    <CustomTab label="Decription" />
                    <CustomTab label="Reviews" />
                    <CustomTab label="Ingredients" />
                    <CustomTab label="Hot Deal" />
                  </CustomTabs>
                  <CustomBox className={classes.tabContentWrapper}>
                    {selectedTab === 0 && <CustomBox>Description Content</CustomBox>}
                    {selectedTab === 1 && 
                      <CustomBox>
                        <CustomBox className={`${classes.reviewTabBox} ${classes.tabHeadBox}`}>
                          <CustomTypography variant={'h6'} component={'h6'}>Add a review</CustomTypography>
                          <CustomBox className={classes.reviweTabLabel}>
                            <CustomTypography variant='body2' component='p'>Be the first to review</CustomTypography>
                            <CustomTypography variant='body2' component='p'>Spectacular views of Queenstown</CustomTypography>
                          </CustomBox>
                          <StyledRating
                            name="customized-color"
                            defaultValue={3}
                            icon={<StarRoundedIcon fontSize="inherit" />}
                            emptyIcon={<StarOutlineRoundedIcon style={{fill: `${theme.palette.secondary.main}`}} fontSize="inherit"/>}
                            size="large"
                            />
                        </CustomBox>
                        <CustomBox className={`${classes.reviewTabBox}`}>
                            <MyTextField 
                              variant='outlined' 
                              placeholder='Share your thoughts' 
                              className={classes.reviwInput}
                              InputProps={{
                                endAdornment: (
                                  <>
                                    <InputAdornment position="start">
                                      <Smile />
                                    </InputAdornment>
                                    <CustomButton variant='contained' endIcon={<RArrow />}>Post it!</CustomButton>
                                  </>
                                ),
                              }}
                              />
                        </CustomBox>
                        <CustomBox className={`${classes.reviewTabBox}`}>
                          <CustomBox  className={classes.commentHead}>
                            <CustomTypography variant={'h6'} component={'h6'}>3 comments</CustomTypography>
                            <CustomSelect
                              value={value}
                              onChange={handleChange}
                              onOpen={handleToggle}
                              onClose={handleToggleClose}
                              variant="outlined"
                              IconComponent={DArrow}
                              className={classes.reviewTimeSelect}
                              >
                              <CustomMenuItem value={0}>Newest</CustomMenuItem>
                              <CustomMenuItem value={1}>Day Ago</CustomMenuItem>
                              <CustomMenuItem value={2}>Week Ago</CustomMenuItem>
                              <CustomMenuItem value={3}>Month Ago</CustomMenuItem>
                            </CustomSelect>
                          </CustomBox>
                          <CustomBox>
                            <CustomBox>
                              {value === 0 && 
                                <CustomBox>
                                  <CustomList className={classes.userReviewList}>
                                    {
                                      newReview.map((data, reviewindex)=>{
                                        return(
                                          <UserReview key={reviewindex} userReview={data} />
                                        )
                                      })
                                    }
                                    <CustomListItem>
                                      <LDbtn variant='outlined' color='lightBtn' startIcon={<Loader color='light' size={'small'} />} className={classes.loadMoreBtn}>Loading comment</LDbtn>
                                    </CustomListItem>
                                  </CustomList>
                                </CustomBox>}
                              {value === 1 && 
                                <CustomBox>
                                  <CustomList className={classes.userReviewList}>
                                    {
                                      dayReview.map((data, reviewindex)=>{
                                        return(
                                          <UserReview key={reviewindex} userReview={data} />
                                        )
                                      })
                                    }
                                    <CustomListItem>
                                      <LDbtn variant='outlined' color='lightBtn' startIcon={<Loader color='light' size={'small'} />} className={classes.loadMoreBtn}>Loading comment</LDbtn>
                                    </CustomListItem>
                                  </CustomList>
                                </CustomBox>
                              }
                              {value === 2 && 
                                <CustomBox>
                                  <CustomList className={classes.userReviewList}>
                                    {
                                      newReview.map((data, reviewindex)=>{
                                        return(
                                          <UserReview key={reviewindex} userReview={data} />
                                        )
                                      })
                                    }
                                    <CustomListItem>
                                      <LDbtn variant='outlined' color='lightBtn' startIcon={<Loader color='light' size={'small'} />} className={classes.loadMoreBtn}>Loading comment</LDbtn>
                                    </CustomListItem>
                                  </CustomList>
                                </CustomBox>}
                              {value === 3 && 
                                <CustomBox>
                                  <CustomList className={classes.userReviewList}>
                                    {
                                      dayReview.map((data, reviewindex)=>{
                                        return(
                                          <UserReview key={reviewindex} userReview={data} />
                                        )
                                      })
                                    }
                                    <CustomListItem>
                                      <LDbtn variant='outlined' color='lightBtn' startIcon={<Loader color='light' size={'small'} />} className={classes.loadMoreBtn}>Loading comment</LDbtn>
                                    </CustomListItem>
                                  </CustomList>
                                </CustomBox>
                              }
                            </CustomBox>

                          </CustomBox>
                        </CustomBox>
                      </CustomBox>}
                    {selectedTab === 2 && <CustomBox>Ingredients Content</CustomBox>}
                    {selectedTab === 3 && <CustomBox>Hot Deal Content</CustomBox>}
                  </CustomBox>
                </CustomCol>
            </CustomRow>
        </CustomContainer>
    </CustomBox>
  )
}

export default ProductDetailTab
