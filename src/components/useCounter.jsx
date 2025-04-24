import { useState } from 'react';

function useCounter(initialValue = 0) {

    const [counter , setCounter ] = useState(initialValue);

    const increase = () => { 
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }
    
    return { counter , increase, decrease }
}

export default useCounter;