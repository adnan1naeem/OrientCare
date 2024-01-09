import React from 'react'
import './styles.css'
import Banner from '../Assets/intelligent-smart.webp'
import { Grid } from '@mui/material'
import { SubProductsImages } from './ArrayValues'
import Footer from '../Footer'


function ProductsDetail() {



    return (
        <div>
            {/* <img src={Banner} className="Sub_Product" alt='' /> */}
            {SubProductsImages?.map((card) => (
                <Grid item key={card.id}>
                    <div >
                        <img src={card.img} alt="" className="Sub_Products_Image" />
                    </div>
                </Grid>
            ))}
            <Footer />

        </div>
    )
}

export default ProductsDetail