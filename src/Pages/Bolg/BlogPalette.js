import React from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomLink from '../../Components/CustomLink'
import CustomTypography from '../../Components/CustomTypography'
import { makeStyles } from '@mui/styles'
import CustomButton from '../../Components/CustomButton'
import CustomStack from '../../Components/CustomStack'
import CustomRow from '../../Components/CustomRow'
import CustomCol from '../../Components/CustomCol'

const useStyles = makeStyles((theme) => ({
    imageMain:{
        width: '40%',
        [theme.breakpoints.down('lg')]:{
            width: '100%'
        },
        '& img':{
            borderRadius: 20,
            height: '100%',
        },
    },
    singleBlogInfoMain:{
        height: '100%'
    },
    singleBolgHead:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.footerLink,
            fontWeight: 500,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
        },
    },
    blogInfo:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.footerLink,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            [theme.breakpoints.down('md')]:{
                marginTop: 16,
            },
        },
    },
    dateMore:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiButtonBase-root':{
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: 1.75,
            fontWeight: 600,
        },
    },
    uploadInfo:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,7]],
        '&.MuiTypography-root':{
            color: theme.palette.gray.footerLightGray
        },
    },
}))

const BlogPalette = ({singleBlogPalette,blogInfoSize,Spacing,blogHead,uploadInfo,btnSize,marginTop,UTop,UBottom,xs1,md1,lg1,xs2,md2,lg2,className,singleDateMore}) => {
        const classes = useStyles();
    return (
        <>
            {
                singleBlogPalette.map((data,blogIndex)=>{
                    return(
                        <CustomRow spacing={Spacing} className={`${className ? className : ''}`} >
                            <CustomCol xs={xs1} md={md1} lg={lg1} className={classes.imageMain} >
                                <CustomLink to='/single-blog' style={{display:'inline-block'}}>
                                    <img src={data.image} alt= {`Blog ${blogIndex - 1}`} />
                                </CustomLink>
                            </CustomCol>
                            <CustomCol xs={xs2} md={md2} lg={lg2}>
                                <CustomStack className={classes.singleBlogInfoMain}>
                                        <CustomLink to='/single-blog'>
                                            <CustomTypography variant={'h6'} component={'h6'} className={classes.singleBolgHead} fontSize={blogHead}>{data.blogHead}</CustomTypography>
                                        </CustomLink>
                                        <CustomTypography variant={'body1'} component={'p'} marginTop={marginTop} className={classes.blogInfo} fontSize={blogInfoSize}>{data.blogInfo}</CustomTypography>
                                        <CustomBox className={`${classes.dateMore} ${singleDateMore}`} marginTop={UTop} marginBottom={UBottom}>
                                            <CustomTypography variant={'body1'} component={'span'} className={classes.uploadInfo} fontSize={uploadInfo}>{data.icon}{data.upload}</CustomTypography>
                                            <CustomLink to='/single-blog'>
                                                <CustomButton variant='text' disableRipple fontSize={btnSize}>{data.btnContent}</CustomButton>
                                            </CustomLink>
                                        </CustomBox>
                                </CustomStack>
                            </CustomCol>
                        </CustomRow>
                    )
                })
            } 
        </>
    )
}

export default BlogPalette
