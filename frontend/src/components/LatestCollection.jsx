import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const [latestProducts,setLatestProducts]=useState([])

    const {products}=useContext(ShopContext)

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'Collections'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm text-gray-600 md:text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt blanditiis illo neque dignissimos asperiores corporis iste quisquam eos, exercitationem ab perferendis fuga? Blanditiis fugiat tempore natus perspiciatis obcaecati magnam libero!
            </p>
        </div>

        {/* Rendering Projects */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
        

    </div>
  )
}

export default LatestCollection