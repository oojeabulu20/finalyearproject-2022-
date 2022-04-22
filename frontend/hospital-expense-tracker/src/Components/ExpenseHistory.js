import React from 'react'
import "boxicons";

const object = [
    {
        name: "Bank",
        color: "#ff0000",
    },
     {
        name: "Expense",
        color: "#ffff00",
    },
      {
        name: "Investment",
        color: "#0000ff",
    },
]

export default function ExpenseHistory() {
  return (
      <div className='flex flex-col py-6 gap-3'>
          <h1 className='py-4 font-bond text-xl'>History</h1>
          {object.map((v, i) => <Transaction key={i} category={v}></Transaction>)}
    </div>
  )
}

function Transaction({ category }) {
    if (!category) return null
    return (
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight:`8px solid ${category.color ?? "#00ff00"}`}}>
            <button className='px-3'><box-icon color={category.color ?? "#00ff00"}name="trash"></box-icon></button>
            <span className='block w-full'>{category.name ?? ""}</span>
        </div>
    )
}