import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

    const [pass, setPass] = useState('')
    const [len, setLen] = useState(8)
    const [num, setNum] = useState(false)
    const [symbol, setSymbol] = useState(false)

    // useRef Hook
    const passRef = useRef(null)

    // useCallback hook
    const changePass = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (num) {
            str = str + "1234567890"
        }
        if (symbol) {
            str = str + "@#$%&*|\?/!"
        }
        let strLen = str.length
        for (let i = len; i >= 0; i--) {
            pass = pass + str.charAt(Math.floor(Math.random() * strLen))
        }
        setPass(pass)
    }, [len, num, symbol, setPass])

    
    // useEffect hook - here we used it to call our useCallback function
    useEffect(()=>{
        changePass()
    },[len,num,symbol,changePass])

    return (
        <>
            <div className='h-[100vh] mt-20'>
                <div className='w-full flex justify-center'>
                    <input type="text" name="" id=""
                        className='w-1/3 bg-white text-black border-white border-2 border-r-1 pl-5 py-1 text-xl font-bold rounded-l-xl'
                        value={pass}
                        readOnly={true}
                        ref={passRef}
                    />
                    <button 
                    className='border-2 border-l-1 px-5 rounded-r-xl cursor-pointer bg-blue-600 active:bg-blue-800'
                    ref = {passRef}
                    onClick={()=>{
                        passRef.current?.select()
                        passRef.current?.setSelectionRange(0, 21)
                        window.navigator.clipboard.writeText(pass)
                    }}
                    >Copy</button>
                </div>
                <div className='flex w-full gap-2 justify-center mt-2'>
                    <input type="range" name="" id="passLen" max={20} min={6} 
                    value={len}
                    onChange={() => {
                        setLen(passLen.value)
                    }} />Length:<span>{len}</span>
                    <input type="checkbox" name="" id="numAllowed" className='ml-10' 
                    value={num}
                    onChange={() => {
                        setNum((prev)=>!prev)
                    }}/>Numbers
                    <input type="checkbox" name="" id="symAllowed" className='ml-10' 
                    value={symbol}
                    onChange={() => {
                        setSymbol((prev)=>!prev)
                    }}/>Symbols
                </div>
            </div>
        </>
    )
}

export default App
