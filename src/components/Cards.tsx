'use client'

import { useState } from "react"

const Cards = () => {
    const [state] = useState([
        {id: 1, number: '01', heading: 'tracking', body: 'Manage your contractors by simple registration and onboarding process'},
        {id: 1, number: '02', heading: 'Analytics', body: 'Export CSV of your transactions and visualisation of your spends'},
        {id: 1, number: '03', heading: 'Payments', body: 'Identify and validate the chain and wallet, void transaction in case of necessity'},
        {id: 1, number: '04', heading: 'Invoices', body: 'Create invoices and make batch payments'},
        {id: 1, number: '05', heading: 'Categorization', body: 'Label and tag your transactions and invoices'},
    ])
  return (
    <div className='max-w-[1400px] px-4 w-full mx-auto pt-[330px] pb-[120px]'>
        <h1 className='text-[35px] md:text-[48px] leading-[130%] max-w-[677px] mb-10'>What we provide</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {state.map(item => (
                <div key={item.id}>
                    <h1 className="text-xl font-medium pb-6">{item.number}</h1>
                    <div className="line"></div>
                    <h1 className="pt-6 text-[26px] mb-[32px]">{item.heading}</h1>
                    <p className="text-base leading-[24px]">{item.body}</p>
                </div>
            ))}
        </div>
        <h1 className="mt-[200px] text-center text-[34px] leading-[134%]">GeekPay made this process lean, clear and manageable
</h1>
    </div>
  )
}

export default Cards