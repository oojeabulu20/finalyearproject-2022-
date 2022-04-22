import React from 'react';


const object = [
    {
        type: "Bank",
        color: "#ff0000",
        percent:"67"
    },
     {
        type: "Expense",
        color: "#ffff00",
        percent:"22"
    },
      {
        type: "Investment",
        color: "#0000ff",
        percent:"11"
    },
]


export default function ExpenseLabels() {
    return (
        <>
          {object.map((v,i) =><LabelComponent key={i} data={v}></LabelComponent>)}
      </>
  )
}
function LabelComponent({ data }) {
    if(!data)return<></>
    return (
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background:data.color ??"#ff0000"}}></div>
                <h3 className='text-md'>{data.type ?? ""}</h3>
            </div>
            <h3 className='font-bold'>{data.percent}</h3>
        </div>
    )
}