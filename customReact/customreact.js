
function customRender(element, container) {

    /* Way - 1
    const domElement = document.createElement(element.type)

    domElement.innerHTML = element.children

    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('target', element.props.target)

    container.appendChild(domElement)
    */

    // Way - 2 Modular Code
    const domElement = document.createElement(element.type)

    domElement.innerHTML = element.children

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(domElement)

}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click me to visit google'
};

const maincontainer = document.querySelector('#root');

customRender(reactElement, maincontainer);