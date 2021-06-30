import React from 'react';

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log('update Component!');
    function updateTime(){
        setTime(time+1);
    }

    return (<div>
        <p>{time}초</p>
        <button onClick={updateTime}>push me and plus one</button>
    </div>)
}
export default TimerComponent;
