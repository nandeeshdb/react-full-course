import { useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Inputbox from "./components/inputbox";

export default function App() {

  const[ammount,setAmmount] = useState(0);
  const[from,setFrom] = useState('usd');
  const[to,setTo]=useState('inr')
  const[converetdAmmount,setConvertedAmmount] = useState()

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap =()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmmount(ammount);
    setAmmount(converetdAmmount);
  }

  const convert=()=>{
    setConvertedAmmount(ammount * currencyInfo[to])
  }

  return (
  <div className=" w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{background:"https://www.pexels.com/photo/crop-farmer-showing-money-in-green-summer-field-in-countryside-4497591/"}} >
    <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30 ">
        <form onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
          <div className="w-full mb-1">
            <Inputbox
            label="from"
            ammount={ammount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)} 
            onAmountChange={(ammount)=>setAmmount(ammount)}
            selectedCurrency={from}/>
          </div>

          <button onClick={swap} className="absolute left-1/2 -translate-x-1/2
          -translate-y-3 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 mt-10">Swap</button>
          <div className="w-full mt-20">
          <Inputbox
            label="to"
            ammount={converetdAmmount}
            ammountDisabled={true}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)} 
            selectedCurrency={to}/>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-9">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            

        </form>

      </div>

    </div>



  </div>
  )
}