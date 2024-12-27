import { formatCurrency } from '../helpers'
import { MenuItems, OrderItem } from '../types'

type OrderContentProps = {
  order: OrderItem[]
  remuveItemn: (id: MenuItems['id']) => void
}

export default function OrderContents ({
  order,
  remuveItemn
}: OrderContentProps) {
  return (
    <div>
      <h2 className='font-black text-4xl '> Consumption </h2>

      {order.map(item => (
        <div
          key={item.id}
          className='flex mt-5 justify-between items-center  border-t-2 border-gray-200 my-5 py-5 last-of-type:border-b-2'
        >
          <div className='flex flex-col'>
            <p className='text-lg '>
              {item.name} -.- {formatCurrency(item.price)}
            </p>
            <p className='font-black'>
              Quantity: {item.quantity}-{' '}
              {formatCurrency(item.price * item.quantity)}{' '}
            </p>
          </div>
          <div className='flex space-x-2'>
            <button
              onClick={() => remuveItemn(item.id)}
              className='bg-red-600 rounded-full h-8 w-8 font-bold text-white'
            >
              X
            </button>
            
          </div>
        </div>
      ))}
    </div>
  )
}
