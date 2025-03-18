import { useState } from 'react'

function App() {
    const [bgColor, setBgColor] = useState('black')
    const [textColor, setTextColor] = useState('white')

    return (
        <div className={`h-[100vh] w-full bg-${bgColor} text-${textColor}`}>
            {/* Header */}
            <div className='w-full flex justify-around bg-gray-400 py-3'>
                <button
                    className='border-2 px-4 rounded bg-red-500 cursor-pointer text-black'
                    onClick={() => {
                        setBgColor('red-400');
                        setTextColor('black')
                    }}>
                    Red
                </button>
                <button
                    className='border-2 px-4 rounded bg-green-400 cursor-pointer text-black'
                    onClick={() => {
                        setBgColor('green-400')
                        setTextColor('black')
                    }}>
                    Green
                </button>
                <button
                    className='border-2 px-4 rounded bg-blue-400 cursor-pointer text-black'
                    onClick={() => {
                        setBgColor('blue-400')
                        setTextColor('black')
                    }}>
                    Blue
                </button>
                <button
                    className='border-2 px-4 rounded bg-black text-white cursor-pointer'
                    onClick={() => {
                        setBgColor('black')
                        setTextColor('white')
                    }}>
                    Black
                </button>
                <button
                    className='border-2 px-4 rounded bg-white cursor-pointer text-black'
                    onClick={() => {
                        setBgColor('white')
                        setTextColor('black')
                    }}>
                    White
                </button>
            </div>
            <div className='w-1/2 mx-auto mt-10 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo qui eum illum nam dolorem consequatur rem vitae reprehenderit cum eligendi nostrum, officiis, vel ex! Molestias odit ea unde omnis perspiciatis tenetur quam aspernatur ullam fugit commodi repellat dicta atque a sequi fuga, consequuntur animi illo ducimus nesciunt officia, possimus alias. Sed, labore, facilis accusantium molestias odio quis provident, nihil eos sunt doloribus suscipit atque eum aliquam iusto? Rem expedita, doloremque consequatur aspernatur fugit et nam aliquam in sed hic. Minima inventore, corporis esse commodi sed culpa! Enim eum in suscipit quisquam dolore. Tenetur ducimus similique laudantium quae deserunt amet fugit!
            </div>
        </div>
    )
}

export default App
