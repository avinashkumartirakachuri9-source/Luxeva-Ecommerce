import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

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

        

    </div>
  )
}

export default LatestCollection