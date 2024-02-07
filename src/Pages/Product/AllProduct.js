import React from 'react'
import CustomSection from '../../Components/CustomSection'
import CustomContainer from '../../Components/CustomContainer'
import CustomCol from '../../Components/CustomCol'
import MyCard from '../../Components/MyCard'
import cake1 from '../../image/Cupcake1.jpg'
import cake2 from '../../image/Cupcake2.jpg'
import cake3 from '../../image/Cupcake3.jpg'
import cake4 from '../../image/VideoPoster.jpg'
import StarRateIcon from '@mui/icons-material/StarRate'
import CustomRow from '../../Components/CustomRow'
import SectionMainHead from '../../Components/SectionMainHead'
import { makeStyles } from '@mui/styles'
import CustomButton from '../../Components/CustomButton'
import CustomBox from '../../Components/CustomBox'

const useStyles = makeStyles((theme) => ({
    allProductMain:{
        '& .MuiTypography-h4':{
            marginTop: '0 !important',
            textAlign: 'left'
        },
    },
    allProducRow:{
        '&.MuiGrid-root':{
            marginTop: 18,
            [theme.breakpoints.down('md')]:{
                marginTop: 15,
            },
            [theme.breakpoints.down('md')]:{
                marginTop: 9,
            },
        },
    },
    loadMoreBtn:{
        '&.MuiGrid-root':{
            marginTop: 24,
            display: 'flex',
            justifyContent: 'center'
        },
        '& .MuiButtonBase-root':{
            maxWidth: 322,
            width: '100%'
        },
    },
}))

const AllProduct = () => {

    const classes = useStyles(); 

    const product = [
        [
            {
                cakeImage: cake1,
                Name: 'Pinapple Cheesecake',
                Price: '$20.00',
                starValue :3, 
            }
        ],
        [
            {
                cakeImage: cake2,
                Name: 'Strawbery Cheesecake',
                Price: '$20.00',
                starValue :4, 
            }
        ],
        [
            {
                cakeImage: cake3,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :2, 
            }
        ],
        [
            {
                cakeImage: cake4,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :4, 
            }
        ],
        [
            {
                cakeImage: cake1,
                Name: 'Pinapple Cheesecake',
                Price: '$20.00',
                starValue :5, 
            }
        ],
        [
            {
                cakeImage: cake2,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :1, 
            }
        ],
        [
            {
                cakeImage: cake3,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :4, 
            }
        ],
        [
            {
                cakeImage: cake4,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :3, 
            }
        ],
        [
            {
                cakeImage: cake1,
                Name: 'Pinapple Cheesecake',
                Price: '$20.00',
                starValue :3, 
            }
        ],
        [
            {
                cakeImage: cake2,
                Name: 'Strawbery Cheesecake',
                Price: '$20.00',
                starValue :5, 
            }
        ],
        [
            {
                cakeImage: cake3,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :2, 
            }
        ],
        [
            {
                cakeImage: cake4,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :4, 
            }
        ],
        [
            {
                cakeImage: cake1,
                Name: 'Pinapple Cheesecake',
                Price: '$20.00',
                starValue :3, 
            }
        ],
        [
            {
                cakeImage: cake2,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :4, 
            }
        ],
        [
            {
                cakeImage: cake3,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :5, 
            }
        ],
        [
            {
                cakeImage: cake4,
                Name: 'Chocolate Cheesecake',
                Price: '$20.00',
                starValue :1, 
            }
        ],
    ]

  return (
    <CustomSection className={classes.allProductMain}>
        <CustomContainer maxWidth='md'>
            <SectionMainHead>All Product</SectionMainHead>
            <CustomRow spacing={{xs: 1.5,md: 2,lg: 4}} className={classes.allProducRow}>
                {
                    product.map((data, productKey)=>{
                        return(
                            <CustomCol xs={6}  lg={4} xl={3} key={productKey}>
                                <MyCard cakeCard={data} />
                            </CustomCol>
                        )
                    })
                }
                <CustomCol xs={12} className={classes.loadMoreBtn}>
                        <CustomButton variant='outlined' color={'secondary'}>Load more 100+</CustomButton>
                </CustomCol>
            </CustomRow>
        </CustomContainer>
    </CustomSection>
  )
}

export default AllProduct
