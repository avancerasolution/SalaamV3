import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade';
import ProductText from './ProductText';
import UniqueProducts from './UniqueProducts';
import Suplimentaryriders from './Suplimentaryriders';



function ProductBanner() {
  return (
    <Fragment>
            <div className='col-sm-12 heads govbanner'>
                <Fade up delay={500}><h2 className="oswald">Product</h2></Fade>
            </div>


            <div className='container tabss motor' >
                <div className='row'>

                    <div className='col-sm-12 heads text mymaxheight'>
                        <ProductText/>
                    </div>  

                    <div className='col-sm-12 heads text mymaxheight'>
                        <UniqueProducts/>
                    </div>

                    <div className='col-sm-12 heads text mymaxheight cta'>
                        <Suplimentaryriders/>
                    </div>

                </div>
            </div>
        </Fragment>
  )
}

export default ProductBanner