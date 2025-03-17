function customRender(reactEle, container){
    const domEle = document.createElement(reactEle.type)
    domEle.innerHTML = reactEle.children
    
    // <---------Setting every attribite (property) manually--------->
    // domEle.setAttribute('href', reactEle.props.href)
    // domEle.setAttribute('target', reactEle.props.target)

    // <------------Setting all attributes using loop----------->
    for (let prop in reactEle.props){
        if (prop === 'children') continue;
        domEle.setAttribute(prop,reactEle.props[prop])
    }

    container.appendChild(domEle)
}

const reactEle1 = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click Here to visit google'
}
const mainDiv = document.getElementById('root')

customRender(reactEle1, mainDiv)
