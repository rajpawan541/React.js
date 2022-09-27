import react from 'react'

// function Greet(){
//     return <h1>Hello Pawan</h1>
// }
const Greet = props => {
console.log(props)
return <h1>Hello {props.name} a.k.a {props.heroName}</h1>
}

// const Hello = () => {
//     return react.createElement('div',null,'Hello Pawan')
// }

export default Greet