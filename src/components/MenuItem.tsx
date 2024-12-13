import type { MenuItems } from "../types"

type MenuItemsProps = {
	item: MenuItems
}




export const MenuItem = ({ item }: MenuItemsProps) => {
	return (
		<button>
			<p>{item.name}</p>
			<p className="text-black">{item.price}</p>
		</button>
	)
}
