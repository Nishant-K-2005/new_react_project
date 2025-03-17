import  React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Component Function inside Main JSX file 
// converts this into a object and render it as an HTML element
function MyApp(){
    return(
        <div>Custom App | NK</div>
    )
}

// <------------Directly Creating an Component-------------->
// converts this into a object and render it as an HTML element
const customEle = (
    <div>Custom Element | Hello World!</div>
)


// <----------------A proper React Element---------------->
const var1 = "Nishant Karena" // variable
const reactEle = React.createElement(
    'a',
    {
        href:"https://google.com",
        target:'_blank'
    },
    'click me to visit google | ',
    var1 // injecting variable inside a react Element
)


// Rendering Elements and Components
createRoot(document.getElementById('root')).render(
    // MyApp() // it is valid but not a good way
    // <myApp/> // recommended method
    // customEle // rendering a custom element
    reactEle // rendering a react element
)
