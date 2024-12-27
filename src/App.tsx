import { MenuItem } from './components/MenuItem'
import OrderContents from './components/OrderContents'
import Ordertotal from './components/Ordertotal'
import TipsPercentageForm from './components/TipsPercentageForm'
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'

function App () {
  const { addItem, order, remuveItemn, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>
          Tip and consumption Calculator{' '}
        </h1>
      </header>

      <main className='max-w-7xl mx-auto py-10 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='font-black text-4xl'> Menu</h2>
          <div className='space-y-3 mt-10'>
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10 '>
          {order.length >
            0 ?(
              <>
                <OrderContents order={order} remuveItemn={remuveItemn} />
                <TipsPercentageForm setTip={setTip} tip={tip} />

                <Ordertotal order={order} tip={tip} placeOrder={placeOrder} />
              </>
            ):
            <p className="text-center text-2xl font-bold text-red-700">You have not yet made your menu selection</p>
            
            
            }
        </div>
      </main>
    </>
  )
}

export default App
