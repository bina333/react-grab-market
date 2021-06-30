function ClickmeComponent(){
    const click=function(){
        alert('sample alert')
    }
    return (<div onClick={click}>
        
        <button>sayhello</button>
    </div>)
}
export default ClickmeComponent;
