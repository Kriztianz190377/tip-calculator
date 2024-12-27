import type { MenuItems } from "../types"

type MenuItemsProps = {
	item: MenuItems,
	addItem:(item:MenuItems)=>void,
	
	
}
export const MenuItem = ({ item, addItem}: MenuItemsProps) => {



	return (
		<button 
		onClick={()=> addItem(item)}
		className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-100">
			<p>{item.name}</p>
			<p className="font-bold">$ {item.price}</p>
		</button>
	)
}
