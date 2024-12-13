import { MenuItem } from "./components/MenuItem"
import { menuItems } from './data/db';



function App() {

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip and consumption Calculator </h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 py-20 grid md:grid-cols-2">
        <div>
          <h2> Menu</h2>

          {menuItems.map(item => (

            <MenuItem
              key={ item.id}
              item={item} 
              />

          ))}



        </div>

        <div>
          <h2>consumption</h2>
        </div>
      </main>
    </>
  )
}

export default App
