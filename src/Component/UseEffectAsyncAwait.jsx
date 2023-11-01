import React, {useEffect, useState} from 'react';

const UseEffectAsyncAwait = () => {
    const [result,setResult] = useState()
    useEffect(()=>{
        (async ()=>{
            const data = await fetch("https://dummyjson.com/products");
            const res = await data.json()
            setResult(res)
        })()
    },[])
    return (
        <div>
            {
                JSON.stringify(result)
            }
        </div>
    );
};

export default UseEffectAsyncAwait;