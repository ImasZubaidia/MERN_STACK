import React, { Component } from 'react';

const people = [
    { firstName:"Imas", lastName:"zubaidia", age:25 ,hairColor:"Black" },
    { firstName:"Ibtisam" ,lastName:"ragb", age:52, hairColor:"Black" },
    { firstName:"Sami" ,lastName:"zubaidia" ,age:60 ,hairColor:"Brown"},
    { firstName:"Ahmad", lastName:"zubaidia", age:20, hairColor:"Black" }
]
class PersonCard extends Component{
    render() {
        return (

            <div>{people.map(pep => <Pep firstName={pep.firstName} lastName={pep.lastName} age={pep.age} hairColor={pep.hairColor} />)}</div>
        );

    }
}
function Pep(props) {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
export default PersonCard;