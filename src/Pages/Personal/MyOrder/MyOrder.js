import Cross from '@mui/icons-material/CloseRounded'
import Down from '@mui/icons-material/KeyboardArrowDownRounded'
import Up from '@mui/icons-material/KeyboardArrowUpRounded'
import { Button, LinearProgress, Modal } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import CustomBox from '../../../Components/CustomBox'
import CustomButton from '../../../Components/CustomButton'
import CustomCol from '../../../Components/CustomCol'
import CustomRow from '../../../Components/CustomRow'
import CustomTypography from '../../../Components/CustomTypography'
import { ReactComponent as Calander } from '../../../image/Calendar.svg'
import { ReactComponent as Clock } from '../../../image/Clock.svg'
import { ReactComponent as Map } from '../../../image/Map.svg'
import { ReactComponent as Chat } from '../../../image/Message.svg'
import { ReactComponent as Check } from '../../../image/Check.svg'
import CustomLink from '../../../Components/CustomLink'


const useStyles = makeStyles((theme) => ({
    myOrderMain:{
        display: 'flex',
        flexDirection: 'column',
        gap: [[128,0]],
        [theme.breakpoints.down('xl')]:{
            gap: [[100,0]],
        },
        [theme.breakpoints.down('lg')]:{
            gap: [[70,0]],
        },
        [theme.breakpoints.down('md')]:{
            gap: [[50,0]],
        },
        [theme.breakpoints.down('sm')]:{
            gap: [[27,0]],
        },
    },
    orderBoxWrapper:{
        padding: 16,
        borderRadius: 16,
        backgroundColor: theme.palette.light.lightf7,
    },
    orderNumber:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.productDark,
            fontWeight: 600,
        },
    },
    arrivalHead:{
        '&.MuiTypography-root':{  
            color: theme.palette.dark.productInfoDark,
            fontSize: 14,
        },
    },
    arrivalTime:{
        '&.MuiTypography-root':{
            fontSize: 24,
            color: theme.palette.dark.productDark,
            fontWeight: 600,
            [theme.breakpoints.down('sm')]:{
                fontSize: 20
            },
        },
    },
    progressMain:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,6]],
        marginTop: 24,
    },
    singleProgress:{
        height: 6,
        '&:first-child':{
            width: '10%',
        },
        '&:nth-child(2)':{
            width: '25%',
        },
        '&:last-child':{
            width: '74%',
        },
        '& span':{
            height: '100%',
            borderRadius: 10
        },
        '& .MuiLinearProgress-root':{
            backgroundColor: theme.palette.gray.grayA332
        },
    },
    modalProgress:{
        '& .MuiLinearProgress-bar':{
            backgroundColor: theme.palette.dark.dark5B,
        },
    },
    orderTrackerWrapper:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    orderTimeMain:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
    },
    orderNumStatus:{
        display: 'flex',
        alignItens: 'center',
        justifyContent: 'space-between',
    },
    orderStatus:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.dark,
            fontSize: 11,
            padding: [[4,8]],
            borderRadius: 6,
            textTransform: 'capitalize',
            background: `rgba(116, 116, 116, 0.10)`,
        },
    },
    cancelledOrder: {
        '&.MuiTypography-root':{
            color: '#555',
            background: `rgba(38, 38, 38, 0.10)`,
        },
    },
    dateTimeMain:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
        marginTop: 12,
    },
    dateTimeWrapper:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,8]],
        '& svg':{
            height: 16,
            width: 16,
            verticalAlign: 'middle',
        },
        '& .MuiTypography-root':{
            fontSize: 12,
            color: theme.palette.dark.productInfoDark,
        },
    },
    itemsMain:{
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: [[16,0]],
        minHeight: 105,
    },
    itemsWrapper:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
        '& .MuiTypography-root':{
            fontWeight: 600,
            fontSize: 12,
            lineHeight: '16px',
        },
    },
    itemCount:{
        '&.MuiTypography-root':{
            backgroundColor: theme.palette.light.main,
            height: 24,
            width: 24,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            color: theme.palette.gray.grayA3
        },
    },
    moreItem:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .MuiTypography-root':{
            fontSize: 12,
            fontWeight: 600,
            color: theme.palette.dark.dark
        },
    },
    btnMainWrapper:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
        marginTop: 24,
        '& .MuiButtonBase-root':{
            width: '100%',
            fontWeight: 700,
        },
    },
    defaultBtn:{
        '&.MuiButtonBase-root':{
            borderRadius: 100,
        },
    },
    cancelBtn:{
        '&.MuiButtonBase-root':{
            borderRadius: 8,
        },
    },
    modalContent: {
        maxWidth: 480,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        top: 0,
        right: 0,
        borderRadius: [[24,0,0,24]],
        overflow: 'auto',
        maxHeight: '100vh',
        [theme.breakpoints.down('sm')]:{
            borderRadius: 0,
            maxWidth: '100%',
        },
    },
    modalContentWrapper:{
        position: 'relative',
    },
    modalCloseBtn:{
        '&.MuiButtonBase-root':{
            minWidth: 'unset',
            position: 'absolute',
            top: theme.spacing(4),
            right: theme.spacing(4),
            backgroundColor: theme.palette.light.main,
            borderRadius: 10,
            padding: 12,
        },
    },
    modalInfoMain:{
        padding: 32,
        overflowY: 'auto',
        [theme.breakpoints.down('smxs')]:{
            padding: 15,
        },
    },
    timeDistance:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,27]],
        [theme.breakpoints.down('sm')]:{
            gap: [[0,12]],
            '& $orderTimeMain':{
                gap: [[0,8]]
            },
            justifyContent: 'space-between'
        },
    },
    singleDT:{
        width: '50%',
        [theme.breakpoints.down('sm')]:{
            width: 'unset'
        },
        '& svg':{
            '& path':{
                fill: theme.palette.dark.dark555,
            },
        },
    },
    singleTL:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
        marginTop: 32,
    },
    tlIcon:{
        height: 32,
        width: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.light.lightf7,
        borderRadius: 5,
        '& svg':{
            height: 16,
            width: 16,
            '& path':{
                fill: theme.palette.dark.dark5B
            },
        },
    },
    tlInfo:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    stageHead:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.productDark,
            fontWeight: 600,
        }
    },
    timeStatus:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.productInfoDark
        },
    },
    modalMoreItem:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 24,
        '& .MuiTypography-root':{
            color: theme.palette.dark.dark555,
        },
    },
    modalBtnMain:{
        display: 'flex',
        alignItems: 'center',
        gap: [[0,16]],
        marginTop: 32,
        '& .MuiButtonBase-root':{
            '& svg':{
                height: 24,
            },
            '&:last-child':{
                padding: [[20,24]],
                width: '100%',
            },
        },
    },
}))

const MyOrder = () => {

    // Use Style
    const classes = useStyles();
    
    // Add class to header
    const [isModalOpen, setModalOpen] = useState(false);
    const header = document.getElementsByClassName('header');
    const handleToggle = () => {
        header[0].classList?.add("right");
        setModalOpen(true);
    };

    const handleToggleClose = () => {
        header[0].classList?.remove("right");
        setModalOpen(false);
    };
    
    // Prev Order detail open
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isModalDropOpen, setModalDropOpen] = useState(false);
    const handleModalDropToggle = () => {
        setModalDropOpen(!isModalDropOpen);
    };
    const handleDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    const handleItemClick = () => {
      setDropdownOpen(false);
    };
    
    const upcoming  = [
        {
            orderNumber: '#Order 123456',
            icon: <Clock />,
            arrivalHead: 'Estimated arrival',
            arrivalTime: '35 min',
            progress: [
                {
                    variant: 'determinate',
                    value: 100,
                },
                {
                    variant: 'determinate',
                    value: 100,
                },
                {
                    variant: 'determinate',
                    value: 50,
                }
            ]
        },
        {
            orderNumber: '#Order 11112',
            icon: <Clock />,
            arrivalHead: 'Estimated arrival',
            arrivalTime: '60 min',
            progress: [
                {
                    variant: 'determinate',
                    value: 100,
                },
                {
                    variant: 'determinate',
                    value: 80,
                },
                {
                    variant: 'determinate',
                    value: 0,
                }
            ]
        },
    ]
    
    const prevOrder = [
        {
            orderNumber: 'Order #14256',
            orderStatus: 'completed',
            dateTime: [
                {
                    icon: <Calander />,
                    info: 'September 16, 2020',
                },
                {
                    icon: <Clock />,
                    info: '11:54 PM',
                },
            ],
            items: [
                {
                    count: '1',
                    name: 'Cheese Cake',
                },
                {
                    count: '1',
                    name: 'Strawberry Donut',
                },
            ],
            btn: [
                {
                    detail: 'Details',
                    variant: 'contained',
                    color: 'payment',
                },
                {
                    detail: 'Get help',
                    variant: 'contained',
                    color: 'lighterBtn',
                },
            ]
        },
        {
            orderNumber: 'Order #14256',
            orderStatus: 'canceled',
            dateTime: [
                {
                    icon: <Calander />,
                    info: 'August 29, 2020',
                },
                {
                    icon: <Clock />,
                    info: '12:06 AM',
                },
            ],
            items: [
                {
                    count: '3',
                    name: 'Blueberry Cupcake',
                },
                {
                    count: '1',
                    name: 'Tropical soda',
                },
                {
                    count: '3',
                    name: 'Strawberry Donut',
                },
                {
                    count: '4',
                    name: 'Strawberry Donut',
                },
            ],
            btn: [
                {
                    detail: 'Details',
                    variant: 'contained',
                    color: 'payment',
                },
                {
                    detail: 'Get help',
                    variant: 'contained',
                    color: 'lighterBtn',
                },
            ]
        },
    ]

    const timeDistance = [
        {
            icon: <Clock />,
            head: 'Estimated arrival',
            info: '35 min',
        },
        {
            icon: <Map />,
            head: 'Distance',
            info: '3.6 km',
        },
    ]

    const progress = [
        {
            variant: 'determinate',
            value: 100,
        },
        {
            variant: 'determinate',
            value: 100,
        },
        {
            variant: 'determinate',
            value: 50,
        }
    ]

    const modalTimeLine = [
        {
            icon: <Clock />,
            timeStatus: 'Delivered',
        },
        {
            icon: <Check />,
            stageHead: 'On the way',
            timeStatus: '12:48 am',
        },
        {
            icon: <Check />,
            stageHead: 'Food is ready',
            timeStatus: '12:42 am',
        },
        {
            icon: <Check />,
            stageHead: 'Order Placed',
            timeStatus: '12:32 am',
        },
    ]
    
    return (
        <CustomBox className={classes.myOrderMain}>
      <CustomBox>
        <CustomRow spacing={{xs:4}}>
            <CustomCol xs={12}>
                <CustomTypography variant={'h6'} component={'h6'} sx={{width: '100%'}}>Upcoming orders</CustomTypography>
            </CustomCol>
            {
                upcoming.map((data,index)=>{
                    return(
                        <CustomCol xs={12} xl={6} key={index}>
                            <CustomBox className={classes.orderBoxWrapper}>
                                <CustomTypography className={classes.orderNumber}>{data.orderNumber}</CustomTypography>
                                <CustomBox className={classes.orderTrackerWrapper}>
                                    <CustomBox className={classes.orderTimeMain}>
                                        <CustomBox>{data.icon}</CustomBox>
                                        <CustomBox>
                                            <CustomTypography className={classes.arrivalHead}>{data.arrivalHead}</CustomTypography>
                                            <CustomTypography className={classes.arrivalTime}>{data.arrivalTime}</CustomTypography>
                                        </CustomBox>
                                    </CustomBox>
                                    <CustomBox>
                                        <CustomButton variant='contained' sx={{padding: '10px 24px', borderRadius: 2}} onClick={handleToggle} onClose={handleToggleClose}>Track</CustomButton>
                                    </CustomBox>
                                </CustomBox>
                                <CustomBox className={classes.progressMain}>
                                {
                                    data.progress?.map((prog,progIndex)=>{
                                        return(
                                            <CustomBox className={classes.singleProgress} key={progIndex}>
                                                <LinearProgress variant={prog.variant} value={prog.value} color='payment' />
                                            </CustomBox>
                                        )
                                    })
                                }
                                </CustomBox>
                            </CustomBox>
                        </CustomCol>
                    )
                })
            }
        </CustomRow>
      </CustomBox>
      <CustomBox>
        <CustomRow spacing={{xs: 3,md:4}}>
            <CustomCol xs={12}>
                <CustomTypography variant={'h6'} component={'h6'} sx={{width: '100%'}}>Previous orders</CustomTypography>
            </CustomCol>
            {
                prevOrder.map((data,index)=>{
                    return(
                        <CustomCol xs={12} xl={6} key={index}>
                            <CustomBox className={`${classes.orderBoxWrapper} ${classes.prevOrderBg}`}>
                                <CustomBox className={classes.orderNumStatus}>
                                    <CustomTypography className={classes.orderNumber}>{data.orderNumber}</CustomTypography>
                                    <CustomTypography className={`${classes.orderStatus} ${data.orderStatus === 'canceled' ? classes.cancelledOrder : ''}`}>{data.orderStatus}</CustomTypography>
                                </CustomBox>
                                <CustomBox className={classes.dateTimeMain}>
                                    {
                                        data.dateTime?.map((dt,dtIndex)=>{
                                            return(
                                                <CustomBox key={dtIndex} className={classes.dateTimeWrapper}>
                                                    <CustomBox>{dt.icon}</CustomBox> 
                                                    <CustomTypography variant={'body1'} component={'span'}>{dt.info}</CustomTypography>
                                                </CustomBox>
                                            )
                                        })
                                    }
                                </CustomBox>
                                <CustomBox className={classes.itemsMain}>
                                    {data.items?.slice(0, 2).map((item, itemIndex) => (
                                        <CustomBox key={itemIndex} className={classes.itemsWrapper} onClick={handleItemClick}>
                                            <CustomTypography variant={'body1'} component={'span'} className={classes.itemCount}>
                                                {item.count}
                                            </CustomTypography>
                                            <CustomTypography variant={'body1'} component={'span'} className={classes.itemName}>
                                                {item.name}
                                            </CustomTypography>
                                        </CustomBox>
                                    ))}
                                    {isDropdownOpen &&
                                        data.items?.slice(2).map((item, itemIndex) => (
                                            <CustomBox key={itemIndex} className={classes.itemsWrapper} onClick={handleItemClick}>
                                            <CustomTypography variant={'body1'} component={'span'} className={classes.itemCount}>
                                                {item.count}
                                            </CustomTypography>
                                            <CustomTypography variant={'body1'} component={'span'} className={classes.itemName}>
                                                {item.name}
                                            </CustomTypography>
                                        </CustomBox>
                                    ))}
                                    {data.items && data.items.length > 2 && (
                                        <CustomLink className={classes.moreItem} onClick={handleDropdownToggle}>
                                            <CustomTypography variant={'body1'} component={'span'}>
                                                {isDropdownOpen ? 'Show Less' : `${data.items.length - 2 } More Items`}
                                            </CustomTypography>
                                                {isDropdownOpen ? <Up /> : <Down />}
                                        </CustomLink>
                                    )}
                                </CustomBox>
                                <CustomBox className={classes.btnMainWrapper}>
                                    {
                                        data.btn?.map((btn,btnIndex)=>{
                                            return(
                                                <CustomButton key={btnIndex} variant={btn.variant} color={btn.color} className={`${data.orderStatus === 'canceled' ? classes.cancelBtn : classes.defaultBtn}`}>{btn.detail}</CustomButton>
                                            )
                                        })
                                    }
                                </CustomBox>
                            </CustomBox>
                        </CustomCol>
                    )
                })
            }
        </CustomRow>
        <Modal 
            open={isModalOpen} 
            onClose={handleToggleClose} 
            className={classes.modal} 
            closeAfterTransition
            slotProps={{
                backdrop: {
                timeout: 500,
            },
        }}>
            <CustomBox className={classes.modalContent}>
                <CustomBox className={classes.modalContentWrapper}>
                    <Button onClick={handleToggleClose} color="primary" className={classes.modalCloseBtn}><Cross /></Button>
                    <CustomBox>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8413214998136!2d72.88488817578131!3d21.23813998046408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2c4c9fc0c9%3A0xd6cbadcdb8553ef4!2sTagline%20Infotech%20LLP!5e0!3m2!1sen!2sin!4v1701069172355!5m2!1sen!2sin" title='map' width="100%" height="525" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </CustomBox>
                    <CustomBox className={classes.modalInfoMain}>
                        <CustomBox className={classes.timeDistance}>
                            {
                                timeDistance.map((td,tdIndex)=>{
                                    return(
                                        <CustomBox className={`${classes.orderTimeMain} ${classes.singleDT}`} key={tdIndex}>
                                            {td.icon}
                                            <CustomBox>
                                                <CustomTypography variant={'body1'} component={'span'} className={classes.arrivalHead}>{td.head}</CustomTypography>
                                                <CustomTypography variant={'h6'} component={'h6'} className={classes.arrivalTime}>{td.info}</CustomTypography>
                                            </CustomBox>
                                        </CustomBox>
                                    )
                                })
                            }
                        </CustomBox>
                        <CustomBox className={classes.progressMain}>
                            {
                                progress.map((prog,progIndex)=>{
                                    return(
                                        <CustomBox className={`${classes.singleProgress} ${classes.modalProgress}`} key={progIndex}>
                                            <LinearProgress variant={prog.variant} value={prog.value} />
                                        </CustomBox>
                                    )
                                })
                            }  
                        </CustomBox>
                        <CustomBox className={classes.modalTimeLine}>
                            {
                                modalTimeLine.slice(0, 3).map((tl,tlIndex)=>{
                                    return(
                                        <CustomBox key={tlIndex} className={classes.singleTL}>
                                            <CustomBox className={classes.tlIcon}>{tl.icon}</CustomBox>
                                            <CustomBox className={classes.tlInfo}>
                                                {tl.stageHead && (
                                                    <CustomTypography className={classes.stageHead}>{tl.stageHead}</CustomTypography>
                                                )}
                                                <CustomTypography className={classes.timeStatus}>{tl.timeStatus}</CustomTypography>
                                            </CustomBox>
                                        </CustomBox>
                                    )
                                })
                            }
                            {isModalDropOpen &&
                                        modalTimeLine?.slice(3).map((tl, tlIndex) => (
                                            <CustomBox key={tlIndex} className={classes.singleTL}>
                                            <CustomBox className={classes.tlIcon}>{tl.icon}</CustomBox>
                                            <CustomBox className={classes.tlInfo}>
                                                {tl.stageHead && (
                                                    <CustomTypography className={classes.stageHead}>{tl.stageHead}</CustomTypography>
                                                )

                                                }
                                                <CustomTypography className={classes.timeStatus}>{tl.timeStatus}</CustomTypography>
                                            </CustomBox>
                                        </CustomBox>
                                    ))}
                            {modalTimeLine.length > 3 && (
                                <CustomLink className={classes.modalMoreItem} onClick={handleModalDropToggle}>
                                    <CustomTypography variant={'body1'} component={'span'}>
                                        {isModalDropOpen ? 'See Less' : 'See More'}
                                    </CustomTypography>
                                        {isModalDropOpen ? <Up /> : <Down />}
                                </CustomLink>
                            )}
                        </CustomBox>
                        <CustomBox className={classes.modalBtnMain}>
                            <CustomButton variant='contained' color='dark555alt' sx={{borderRadius: '10px'}}><Chat /></CustomButton>
                            <CustomButton variant='contained' color='dark555'>Call to (Edward)</CustomButton>
                        </CustomBox>
                    </CustomBox>
                </CustomBox>
            </CustomBox>
        </Modal>
      </CustomBox>
    </CustomBox>
  )
}

export default MyOrder
