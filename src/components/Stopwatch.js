import React, {useEffect, useState} from 'react'

const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(()=>{
        
        if(isRunning){
            
            const interval = setInterval( ()=> {
                setTime(time + 1)
            }, 100 );
            return ()=> { clearInterval(interval) }
        }
    }, [isRunning, time])

    const handleStopwatch = () => setIsRunning(prevState => !prevState)
    const handleReset = () => setTime(0)
        
    return(
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className='stopwatch-time'>{time}</span>
            <button onClick={handleStopwatch}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Stopwatch