import { useState } from 'react'
import { MenuItems, OrderItem } from '../types'

export default function useOrder () {
  const [order, setOrder] = useState<OrderItem[]>([])

  const [tip, setTip] = useState(0)

  console.log(order)

  const addItem = (item: MenuItems) => {
    const itemExist = order.find(orderItem => orderItem.id == item.id)

    if (itemExist) {
      const updateOrder = order.map(orderItem =>
        orderItem.id == item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setOrder(updateOrder)
      console.log('Èil existe')
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }
  const remuveItemn = (id: MenuItems['id']) => {
    const updateOrder = order.filter(orderItem => orderItem.id !== id)
    setOrder(updateOrder);
    
    console.log('eliminando: ', id)
  }
  const placeOrder=()=>{
    setOrder([])
    setTip(0)
console.log("removiendo....")
   }
  
  return {
    order,
    tip, 
    setTip,
    addItem,
    remuveItemn,
    setOrder,
    placeOrder
  }
}
