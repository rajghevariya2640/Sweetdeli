import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import CustomTypography from '../../Components/CustomTypography'
import { makeStyles } from '@mui/styles'
import CustomCol from '../../Components/CustomCol'
import Blog1 from '../../image/Blog_1.jpeg'
import Blog2 from '../../image/Blog_2.jpeg'
import Blog3 from '../../image/Blog_3.jpeg'
import Blog4 from '../../image/Blog_4.jpeg'
import CustomButton from '../../Components/CustomButton'
import { ReactComponent as Heart } from '../../image/Heart.svg'
import CustomLink from '../../Components/CustomLink'
import BlogPalette from './BlogPalette'

const useStyles = makeStyles((theme) => ({
    blogMain:{
        padding: [[66,0,61,0]],
        [theme.breakpoints.down('sm')]:{
            padding: [[40,0,44,0]]
        },
        '& img':{
            width: '100%',
            objectFit: 'cover',
        },
    },
    blogRowWrapper:{
        marginTop: 66,
        [theme.breakpoints.down('md')]:{
            marginTop: 50,
        },
        [theme.breakpoints.down('sm')]:{
            marginTop: 40,
        },
    },
    blogMainHead:{
        '&.MuiTypography-h4':{
            textAlign: 'center',
            [theme.breakpoints.down('lg')]:{
                textAlign: 'start'
            },
            [theme.breakpoints.down('md')]:{
                fontSize: 28,
            },
            [theme.breakpoints.down('sm')]:{
                fontSize: 24,
            },
            textAlign: 'center',
            marginBottom: 20,
        },
    },
    loadMoreBtn:{
        '&.MuiGrid-root':{
            marginTop: 62,
            display: 'flex',
            justifyContent: 'center'
        },
        '& .MuiButtonBase-root':{
            maxWidth: 322,
            width: '100%'
        },
    },
}))

const Blog = ({blogInfoSize}) => {
    //use Style
    const classes = useStyles();

    const singleBlog = [
        [{
            image: Blog1,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog2,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog3,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog4,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
    ]
  return (
    <CustomBox className={classes.blogMain}>
        <CustomContainer maxWidth='xxs'>
            <CustomBox>
                <CustomTypography variant={'h4'} component={'h4'} className={classes.blogMainHead}>Blog</CustomTypography>
            </CustomBox>
            <CustomBox className={classes.blogRowWrapper}>
                <CustomRow spacing={{xs:5.5,lg:4.5}}>
                        {
                            singleBlog.map((data,blogIndex)=>{
                                return(
                                    <CustomCol xs={12}>
                                        <BlogPalette Spacing={{xs:5,lg:10,xl:16.5}} marginTop={{xs:2,sm:2.5}} UTop={{xs:'15px',lg:'auto'}} xs1={12} md1={4} lg1={5} xs2={12} md2={8} lg2={7} UBottom={{xs:0,lg:2.5}} singleBlogPalette={data} key={blogIndex}  />
                                    </CustomCol>
                                )
                            })
                        }
                    <CustomCol xs={12} className={classes.loadMoreBtn}>
                        <CustomButton variant='outlined' color={'secondary'} style={{width: '100%'}}>Load more 100+</CustomButton>
                    </CustomCol>
                </CustomRow>
            </CustomBox>
        </CustomContainer>
    </CustomBox>
  )
}

export default Blog
