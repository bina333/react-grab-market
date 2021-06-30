import React from 'react';

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    function updateTime(){
       setTime(time+1);
    };
        
    

    return (<div>
        <button>{time}초</button>
        
        <br/>
        <button onClick={updateTime}>NewTimer</button>
    </div>)
}
export default TimerComponent;
