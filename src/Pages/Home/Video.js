import CloseIcon from '@mui/icons-material/Close'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Dialog, IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import CustomBox from '../../Components/CustomBox'
import CustomCol from '../../Components/CustomCol'
import CustomContainer from '../../Components/CustomContainer'
import CustomRow from '../../Components/CustomRow'
import SectionMainHead from '../../Components/SectionMainHead'
import SectionSubHead from '../../Components/SectionSubHead'
import video from '../../image/Video.mp4'
import PosterImage from '../../image/VideoPoster.jpg'

const useStyles = makeStyles((theme) => ({
    videoMain:{
        
        paddingTop: 100,
        paddingBottom: 80,
        [theme.breakpoints.down('lg')]:{
            padding: [[50,0]]
        },
        [theme.breakpoints.down('md')]:{
            padding: [[30,0]]
        },
        [theme.breakpoints.down('sm')]:{
            '& .MuiContainer-root':{
                padding: '0 !important'
            },
        },
        '& img':{
            width: '100%',
            objectFit: 'cover',
            verticalAlign: 'text-top'
        },
    },
    videoPosterMain:{
        position: 'relative',
        marginTop: 40,
        [theme.breakpoints.down('md')]:{
            marginTop: 32
        },
    },
    videoPoster:{
        width: '100%',
        maxHeight: 444,
        borderRadius: 20,
        [theme.breakpoints.down('sm')]:{
            borderRadius: 0
        }
    },
    videoBtn:{
        '&.MuiBox-root':{
            height: 82,
            maxWidth: 82,
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            [theme.breakpoints.down('md')]:{
                height: 74,
                maxWidth: 74,
            },
            '&:hover':{
                cursor: 'pointer'
            },
            '& svg':{
                height: 36,
                maxWidth: 36,
                width: '100%',
                fill: theme.palette.light.main,
                [theme.breakpoints.down('md')]:{
                    height: 32,
                    maxWidth: 32,
                },
            },
        },
    },
    popupMain:{
        '& .MuiDialog-container':{
            '& .MuiPaper-root':{
                overflow: 'hidden',
                borderRadius: 20,
                [theme.breakpoints.down('sm')]:{
                    borderRadius: 0,
                    margin: 0,
                    width: '100%',
                },
                '& .MuiButtonBase-root':{
                    zIndex: 1
                }
            },
        },
    },
}))

const Video = () => {

    const classes = useStyles(); 

    const [open, setOpen] = useState(false);
    const header = document.getElementsByClassName('header');

    const handleOpen = () => {
        setOpen(true);
        header[0].classList?.add("right");
    };

    const handleClose = () => {
        setOpen(false);
        header[0].classList?.remove("right");
    };

  return (
    <CustomBox className={classes.videoMain}>
        <CustomContainer maxWidth='md'>
            <SectionSubHead>The reasons</SectionSubHead>
            <SectionMainHead>Why Choose Us? </SectionMainHead>
            <CustomRow>
                <CustomCol xs={12}>
                    <CustomBox className={classes.videoPosterMain}>
                        <img src={PosterImage} alt=''  className={classes.videoPoster} />
                        <CustomBox onClick={handleOpen} onClose={handleClose} className={classes.videoBtn}>
                            <PlayArrowIcon />
                        </CustomBox>
                    </CustomBox>

                    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth className={classes.popupMain} >
                        <IconButton
                            onClick={handleClose}
                            sx={{ position: 'absolute', top: 5, right: 5 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <video
                            width="100%"
                            height="auto"
                            autoPlay
                            poster={PosterImage}
                            controls
                            src={video}
                            type="video/mp4"
                        >
                        </video>
                    </Dialog>
                </CustomCol>
            </CustomRow>
        </CustomContainer>
    </CustomBox>
  )
}

export default Video
