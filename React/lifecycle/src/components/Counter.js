import {useState,useEffect} from 'react'

function Counter() {
    const[number,setNumber] = useState(0)
    
    useEffect(() =>{
    console.log('Component mount edildi'); // ilk kez yüklendiği an
    setInterval(() =>{
        setNumber((n) =>n+1);
    },1000);
    },[]);
    

useEffect(() =>{
    console.log('number state güncellendi');
}, [number]);



    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number+1)}>Click</button>            
        </div>
    )
}

export default Counter