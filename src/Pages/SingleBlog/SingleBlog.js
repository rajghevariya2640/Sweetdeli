import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import CustomTypography from '../../Components/CustomTypography'
import { makeStyles } from '@mui/styles'
import BlogPalette from '../Bolg/BlogPalette'
import Blog1 from '../../image/Blog_1.jpeg'
import Blog2 from '../../image/Blog_2.jpeg'
import Blog3 from '../../image/Blog_3.jpeg'
import Blog4 from '../../image/Blog_4.jpeg'
import { ReactComponent as Heart } from '../../image/Heart.svg'
import CustomCol from '../../Components/CustomCol'
import CustomStack from '../../Components/CustomStack'
import SectionMainHead from '../../Components/SectionMainHead'

const useStyles = makeStyles((theme) => ({
    singleBlogMain:{
        padding: [[100,0,167,0]],
        [theme.breakpoints.down('')]:{},
        '& img':{
            width: '100%',
            objectFit: 'cover'
        },
    },
    headingMain:{
        '& .MuiTypography-root':{
            textAlign: 'center'
        },
    },
    singleBlogHead:{
        '&.MuiTypography-h4':{
            [theme.breakpoints.down('lg')]:{
                textAlign: 'start'
            },
            [theme.breakpoints.down('md')]:{
                fontSize: 28,
            },
            [theme.breakpoints.down('sm')]:{
                fontWeight: 600,
                fontSize: 24,
            },
            marginBottom: 20,
        },
    },
    uploadInfo:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        gap: [[0,7]],
        '&.MuiTypography-root':{
            color: theme.palette.gray.footerLightGray
        },
    },
    blogContentMain:{
        marginTop: 18,
        marginBottom: 111,
        gap:[[67,0]],
        [theme.breakpoints.down('lg')]:{
            gap: [[50,0]]
        },
        [theme.breakpoints.down('md')]:{
            gap: [[45,0]]
        },
        '& .MuiTypography-h6':{
            fontWeight: 400,
        },
        '& .MuiTypography-root':{
            color: theme.palette.dark.dark
        },
    },
    blogContentImage:{
        borderRadius: 20,
        height: 465,
    },

    singleBlog:{
        '& $dateMore':{
            flexWrap: 'wrap'
        },
    },
    singleDateMOre:{
        marginTop: 10,
        [theme.breakpoints.down('xl')]:{
            flexWrap: 'wrap',
            justifyContent: 'end',
        },
        [theme.breakpoints.down('lg')]:{
            flexWrap: 'no-wrap',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.down('mdxs')]:{
           display: 'inline-grid',
           justifyContent: 'end',
           '& a':{
            textAlign: 'right',
           },
        },
    },
}))

const SingleBlog = () => {

    //Use Styles
    const classes = useStyles();

    const singleBlog = [
        [{
            image: Blog1,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog2,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog3,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog4,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog1,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
        [{
            image: Blog2,
            blogHead:'There are many reasons to get down',
            blogInfo: 'The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone.',
            icon: <Heart />,
            upload: '10	Oct 21, by Jane Ostin',
            btnContent: 'Read more',
        }],
    ]

  return (
    <CustomBox className={classes.singleBlogMain}>
        <CustomContainer maxWidth='xs'>
            <CustomBox className={classes.headingMain}>
                <CustomTypography variant={'h4'} component={'h4'} className={classes.singleBlogHead}>Lorem ipsum dolor sit amet, consectetur  elit. Ipsum placerat nibh a.</CustomTypography>
                <CustomTypography className={classes.uploadInfo} variant={'body1'} component={'span'}><Heart />29 Oct 18, by Milan Obama</CustomTypography>
            </CustomBox>
            <CustomStack className={classes.blogContentMain}>
                <CustomBox>
                    <CustomTypography variant={'h6'} component={'h6'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CustomTypography>
                    <CustomTypography variant={'body1'} component={'p'}>Sed lectus amet, eu lacus viverra magna ullamcorper ultricies. Laoreet est molestie tellus, volutpat, vitae. Viverra vitae nunc molestie nec. Id orci tincidunt amet ullamcorper morbi mauris augue. Faucibus ornare tincidunt malesuada phasellus.
                        Volutpat, est id tincidunt dolor eu. Enim dictum aenean ultrices pharetra lorem leo cursus. Mollis dui turpis sed suscipit. Mauris vestibulum in phasellus velit morbi lobortis varius egestas posuere. Commodo purus non adipiscing porttitor lectus nunc, nisi. Urna amet, nisl, lectus vel. Aliquam, porttitor quis at vel sed ut montes, egestas. Nisl, vestibulum tempor natoque lacinia posuere. Risus id tempor turpis faucibus ante volutpat nunc. Viverra iaculis iaculis at convallis tellus. Condimentum massa faucibus at porttitor vestibulum in.
                        Aliquam viverra tempor sodales proin penatibus elit ut sem. Volutpat, purus eget diam et, donec quis lectus magna elementum. Consequat, nunc, varius venenatis proin diam nullam cras. Et ut condimentum dui eu. Vestibulum fermentum vitae mauris quis. Odio eu velit tortor pulvinar eget nec. Non orci, sodales consequat 
                    </CustomTypography>
                </CustomBox>
                <img src={Blog1} alt={'Blog'} className={classes.blogContentImage} />
                <CustomTypography variant={'body1'} component={'p'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dapibus quis id convallis vitae auctor feugiat massa. Semper ac blandit neque vulputate tincidunt venenatis. Orci lectus enim nunc proin lobortis faucibus vulputate in consectetur. Turpis morbi morbi pharetra, nunc, eu consequat id cursus. Mauris erat gravida viverra et blandit enim nunc amet, placerat. Vel, id lacinia arcu, neque etiam morbi consectetur non leo. Facilisis eu commodo interdum lectus semper. Enim libero proin feugiat dignissim semper ac vulputate vitae. Sed hac nibh aliquam blandit tristique tincidunt. Et mi amet, sed hendrerit. Montes, adipiscing eget massa tempus turpis. Aliquam, tristique ut augue auctor placerat porta vel lorem. Arcu quam urna tortor aliquet. Elit volutpat enim, curabitur risus aliquam dapibus mattis sed aliquam.
                </CustomTypography>
            </CustomStack>
        </CustomContainer>
        <CustomContainer maxWidth='md'>
            <SectionMainHead style={{textAlign:'start'}}>Recommended</SectionMainHead>
            <CustomBox className={classes.reccomendMain}>
                <CustomRow spacing={{xs:3,lg:9.5}}>
                    {
                        singleBlog.map((data,index)=>{
                            return(
                                <CustomCol xs={12} lg={6}>
                                    <BlogPalette singleBlogPalette={data} key={index} xs1={5} lg1={5}  xs2={7} lg2={7} blogInfoSize={{xs:'12px',sm:'14px'}} blogHead={{xs:'14px',sm:'16px'}} uploadInfo={{xs:'12px',sm:'14px'}} Spacing={{xs:2,sm:4}} className={classes.singleBlog} singleDateMore={classes.singleDateMOre} />
                                </CustomCol>
                            )
                        })
                    }
                </CustomRow>
            </CustomBox>
        </CustomContainer>
    </CustomBox>
  )
}

export default SingleBlog
