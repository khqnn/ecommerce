import React from 'react'
import { ShopFactory } from './Shopes/Factory'
import { BusinessData } from '../theme/BusinessWrapper'

const Shop = () => {

  const businessData = BusinessData()
  const businessSettings = businessData.settings
  const shopPage = businessSettings.shop_page

  
  const shopFactory = new ShopFactory(shopPage.id)

  return (
    shopFactory.init(shopPage.settings)
  )
}

export default Shop