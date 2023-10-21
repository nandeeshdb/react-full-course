import React, { useId } from 'react'


function Inputbox({
    label,
    ammount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[], 
    selectedCurrency = 'usd',
    ammountDisabled = false,
    currencyDisabled = false,
    className=""}) {


        const id = useId();

  return (
    <div className={` bg-white P-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label className='text-black/40 mb-2 inline-block' htmlFor={id}>{label}</label>
            <input  
            id={id} 
            type='number' 
            className='outline-none w-full bg-transparent py-1.5'
            disabled={ammountDisabled}
            value={ammount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select 
            className='rounded-lg px-1 bg-white cursor-pointer outline-none' 
            value={selectedCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}>
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                        {currency}
                    </option>

                ))}

            </select>



        </div>

    </div>
  )
}

export default Inputbox