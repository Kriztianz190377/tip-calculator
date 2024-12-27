import { useMemo } from "react";
import {  OrderItem } from "../types"
import { formatCurrency } from "../helpers";


type OrderTotalsProps = {
        order: OrderItem[],
        tip:number
        placeOrder:() => void
}


export default function Ordertotal({order,tip,placeOrder}:OrderTotalsProps) {
    
   const subtotalAmount=useMemo(()=>order.reduce((total,item) =>total+(item.quantity*item.price) ,0),[order])
   const tipAmount=useMemo( ()=>subtotalAmount * tip,[tip, order])
   const totalAmount=useMemo( ()=>subtotalAmount + tipAmount,[tip, order])


  
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Total and Tips </h2>
                <p>SubTotal to pay:
                    <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
                </p>
                <p>tips:
                    <span className="font-bold"> {formatCurrency(tipAmount)}</span>
                </p>
                <p>Total to pay:
                    <span className="font-bold"> {formatCurrency(totalAmount)}</span>
                </p>

            </div>

            <button
            onClick={placeOrder} 
            disabled={totalAmount===0}
            className="w-full rounded-md bg-black p-3 uppercase text-white font-bold mt-10">
                Save Order
            </button>

        </>
    )
}
