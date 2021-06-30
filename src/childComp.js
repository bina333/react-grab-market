function ChildComponent(prop){
    const name = prop.name;
    const age = prop.age;
    return (<div><p>My name is {name}, and {age}years old.</p></div>)

}
export default ChildComponent;
