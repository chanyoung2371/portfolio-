import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('원래는 고기');
    const countUp =(e) =>{
     setCount(count+1)
    }
    const animal= ['dog', 'cat', 'brid','rabbit'];
    const result =animal.filter(animal => animal.length <6);
    console.log(result)


    const countDown =(e) => {
        setCount(count-1)
    }
    const namechange =(e) => {
        setText('kimchi')
    }
    return (
        <div style={{textAlign:'center',marginTop:'5%'}}>
            {count} 
            <button className='Count'onClick={countUp}>Count+</button>
            <button className='Count'onClick={countDown}>Count-</button>
            
            {text}
            <button className='Text' onClick={namechange}>nameChange</button>
        </div> 
    )
}

export default Count
