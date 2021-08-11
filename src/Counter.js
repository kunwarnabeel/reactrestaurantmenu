import React , {useState} from 'react'

const Counter = () => {
    const [value , setVal] = useState(1);
    
    const handleCheckBox = (checked) => {
        if(checked){
            setVal(value+1)
         }
    }

    const handleUnCheckBox = (unchecked) => {
        if(unchecked){
            value>0?setVal(value-1):setVal(0)
         }
    }
    return ( <>
          <h1 style={{color:'#fff'}}>{value}</h1>
          {/* <button onClick={()=>{setVal(value+1)}}>Increament</button>
          <button onClick={()=>{value>0?setVal(value-1):setVal(0)}}>Decreament</button> */}
          <div className="container">
            <div className="toggle">
                <input onChange={handleCheckBox} type="checkbox"/>
                <span className="button"></span>
                <span className="label">+</span>
            </div>
            <div className="toggle">
                <input onChange={handleUnCheckBox} type="checkbox" unchecked="true" />
                <span className="button"></span>
                <span className="label">–</span>
            </div>
            </div>
          </>
          )
  }
  
export default Counter