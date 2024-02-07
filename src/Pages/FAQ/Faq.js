import AddIcon from '@mui/icons-material/AddRounded';
import RemoveIcon from '@mui/icons-material/RemoveRounded';
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import CustomBox from '../../Components/CustomBox';
import CustomCol from '../../Components/CustomCol';
import CustomContainer from '../../Components/CustomContainer';
import CustomRow from '../../Components/CustomRow';
import CustomTypography from '../../Components/CustomTypography';

const useStyles = makeStyles((theme) => ({
    faqMain:{
        padding: [[100,0,10,0]],
        [[theme.breakpoints.down('lg')]]:{
            padding:[[70,0,20,0]],
        },
        [[theme.breakpoints.down('md')]]:{
            padding:[[50,0,30,0]],
        },
        [[theme.breakpoints.down('sm')]]:{
            padding:[[30,0,40,0]],
        },
    },
    faqHeader:{
        '&.MuiTypography-h4':{
            [[theme.breakpoints.up('lg')]]:{
                fontSize: 36,
            },
            [[theme.breakpoints.down('lg')]]:{
                fontSize: 32,
                textAlign: 'start',
            },
            [[theme.breakpoints.down('md')]]:{
                fontSize: 28,
            },
            [[theme.breakpoints.down('sm')]]:{
                fontSize: 24,
            },
            textAlign: 'center',
            marginBottom: 40,
        },
    },
    faqCol:{
        minHeight: 365,
        height: '100%'
    },
    accHeaderWrapper:{
        minHeight: 365,
        border: `1px solid ${theme.palette.gray.headerBorder}`,
        padding: [[30,15,30,20]],
        [[theme.breakpoints.down('lg')]]:{
            minHeight: 'unset',
            border: 0,
            padding: 0,
        },
        '& .MuiPaper-root':{
            boxShadow: 'none',
        },
        '& .MuiButtonBase-root':{
            padding: 0,
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'row-reverse',
            gap: [[0,10]],
            minHeight: 'unset',
            marginBottom: 15,
        },
        '& .MuiAccordionSummary-root':{
            '& svg':{
                '& path':{
                    fill: theme.palette.dark.footerLink,
                },
            },
            '& .MuiTypography-root':{
                color: theme.palette.dark.footerLink,
                fontSize: 16
            },
            '&.Mui-expanded':{
                '& svg':{
                    '& path':{
                        fill: theme.palette.gray.footerLightGray,
                    },
                },
                '& .MuiTypography-root':{
                    color: theme.palette.gray.footerLightGray
                },
            },
        },
        '& .Mui-expanded.MuiAccordion-root':{
            margin: 0,
            '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded':{
                minHeight: 'unset'
            },
        },
        '& .MuiAccordionSummary-content':{
            margin: 0,
            '&.Mui-expanded':{
                margin: 0,
            },
        },
        '& .MuiAccordion-root':{
            '&::before':{
                backgroundColor: 'transparent'
            },
        },
    },
    accContentWrapper:{
        minHeight: 365,
        maxHeight: 365,
        overflowY: 'auto',
        padding: 30,
        border: `1px solid ${theme.palette.gray.headerBorder}`,
        '& .MuiAccordionDetails-root':{
            padding: 0,
        },
    },
    contentHeader:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.footerLink,
            fontWeight: 600,
            fontSize: 18,
            marginBottom: 20,
            [theme.breakpoints.down('md')]:{
                fontSize: 16,
            },
            [theme.breakpoints.down('sm')]:{
                fontSize: 14,
            },
        },
    },
    content:{
        '&.MuiTypography-root':{
            color: theme.palette.dark.footerLink,
            fontSize: 14,
            [theme.breakpoints.down('sm')]:{
                fontSize: 12,
            },
        },
    },
}))

const Faq = () => {

    // UseStyle
    const classes = useStyles(); 

    //Accordian
    const [expanded, setExpanded] = useState('accordion1');
    const [accordionData, setAccordionData] = useState([
        { 
            id: 'accordion1', 
            header: 'Cursus at est venenatis in.', 
            contentHeader: 'Blandit nec feugiat vitae luctus.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae.' ,
        },
        { 
            id: 'accordion2', 
            header: 'Posuere amet vel egestas malesuada vel odio neque.', 
            contentHeader: 'Blandit nec feugiat vitae luctus.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut. Pharetra lectus volutpat arcu ut ultrices eu sit volutpat. Pretium egestas in massa cursus ornare. Amet, non gravida rutrum luctus ' ,
        },
        { 
            id: 'accordion3', 
            header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
            contentHeader: 'Molestie feugiat rutrum id urna quisque purus.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio.' ,
        },
        { 
            id: 'accordion4', 
            header: 'Quam nunc dolor varius.', 
            contentHeader: 'Quam nunc dolor varius.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum arcu, dolor, molestie feugiat rutrum id urna quisque purus. Sit ut non urna auctor libero, dictumst ut adipiscing. Platea non convallis vel iaculis nec odio. Nulla habitant felis laoreet pharetra scelerisque placerat scelerisque interdum. Lacus habitasse neque, scelerisque aliquet. Nec, bibendum viverra vitae, molestie cum ut.' ,
        },
    ]);
  
    const handleAccordionChange = (accordionId) => (event, isExpanded) => {
      setExpanded(isExpanded ? accordionId : '');
    };
  
    const getIcon = (accordionId) => (expanded === accordionId ? <RemoveIcon /> : <AddIcon />);

    // Small Screen Query
    const isLargeScreen = useMediaQuery('(min-width:992px)');
    const isSmallScreen = useMediaQuery('(max-width:991px)');

  return (
    <CustomBox className={classes.faqMain}>
      <CustomContainer maxWidth='Xxs'>
            <CustomTypography variant={'h4'} component={'h4'} className={classes.faqHeader}>FAQ</CustomTypography>
            {isLargeScreen &&(
                <CustomRow container spacing={2}>
                    <CustomCol item xs={12} lg={4} className={classes.faqCol}>
                        <CustomBox className={classes.accHeaderWrapper}>
                            {accordionData.map((accordion) => (
                                <Accordion
                                key={accordion.id}
                                expanded={expanded === accordion.id}
                                onChange={handleAccordionChange(accordion.id)}
                                >
                                    <AccordionSummary
                                        expandIcon={getIcon(accordion.id)}
                                        aria-controls={`${accordion.id}-content`}
                                        >
                                        <CustomTypography>{accordion.header}</CustomTypography>
                                    </AccordionSummary>
                                </Accordion>
                            ))}
                        </CustomBox>
                    </CustomCol>

                    <CustomCol item xs={12} lg={8} className={classes.faqCol}>
                        <CustomBox className={classes.accContentWrapper}>
                            <AccordionDetails>
                                {accordionData.map((accordion) => (
                                    <CustomBox key={accordion.id} style={{ display: expanded === accordion.id ? 'block' : 'none' }}>
                                        <CustomTypography className={classes.contentHeader}>{accordion.contentHeader}</CustomTypography>
                                        <CustomTypography className={classes.content}>{accordion.content}</CustomTypography>
                                    </CustomBox>
                                ))}
                            </AccordionDetails>
                        </CustomBox>
                    </CustomCol>
                </CustomRow>
            )}
            {isSmallScreen && (
                <CustomRow item xs={12}>
                    <CustomBox className={classes.accHeaderWrapper}>
                        {accordionData.map((accordion) => (
                                <Accordion
                                    key={accordion.id}
                                    expanded={expanded === accordion.id}
                                    onChange={handleAccordionChange(accordion.id)}
                                >
                                    <AccordionSummary
                                        expandIcon={expanded === accordion.id ? <RemoveIcon /> : <AddIcon />}
                                        aria-controls={`${accordion.id}-content`}
                                        className={classes.accordionButton}
                                    >
                                        <CustomTypography>{accordion.header}</CustomTypography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <CustomTypography className={classes.contentHeader}>{accordion.contentHeader}</CustomTypography>
                                        <CustomTypography className={classes.content}>{accordion.content}</CustomTypography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </CustomBox>
                    </CustomRow>
            )}
      </CustomContainer>
    </CustomBox>
  )
}

export default Faq
