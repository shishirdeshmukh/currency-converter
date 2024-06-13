import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyinfo from './Hooks/useCurrencyinnfo'
import './App.css'

function App() {

  const [amount , setamount] = useState("")
  const [from , setfrom] = useState("usd")
  const [to , setto] = useState("inr")
  const [convertedamount , setconvertedamount]= useState(0)

  const Currencyinfo = useCurrencyinfo(from)

  const options = Object.keys(Currencyinfo)

  const swap = ()=>{
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }


 const convert =()=> {
    setconvertedamount(amount * Currencyinfo[to])
 }

 return (
  
  <div
      
  >
    <h1 className='font-serif text-center text-4xl pb-8'>Currency Converter</h1>
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black/70">
              <form
              
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                      className='bg-amber-500 text-black'
                          label="From" 
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency)=>setamount(amount)}
                          onAmountChange={(amount) => setamount(amount) } 
                          selectCurrency={from}

                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                      className='bg-amber-600'
                          label="To"
                          amount={convertedamount}
                          currencyOptions={options}
                          onCurrencyChange ={(currency)=> setto(currency)}
                          selectCurrency={to}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
