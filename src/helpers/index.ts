import React from 'react'

export  function formatCurrency(quantity:number ) {
  return new Intl.NumberFormat('es-ES',{
    style: 'currency',
    currency: 'USD'
  }).format(quantity)
}
