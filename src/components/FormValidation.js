import React,{useState} from 'react'


const FormValidation=()=> {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState(false)
    const[passworderror,setPasswordError]=useState(false)
    const[emailerror,setEmailError]=useState(false)


    



    const login=()=>{
        if(!email.length|| !password.length){
            return setError(true)
        }
        setError(false)
        if(!/\S+@\S+\.\S+/.test(email)){
            return setEmailError(true)
        }
        setEmailError(false)
            
        if(password.length <8){
            return setPasswordError(true)
        }
        setPasswordError(false)
        
        
        console.log({email,password})
    }
  

    return (
        <div>
            <div className="ui header"> 
                <h1>Login Form</h1> </div>
                <div className="ui form content" >
                    <div className="ui field content left">
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        {emailerror && <p style={{color:"red"}}>Email is invalid</p>}

                    </div>
                    <div className="ui field">
                        <label>Password</label>
                        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value) }/>
                        {passworderror && <p style={{color:"red"}}>Password must be 8 characters</p>}

                    </div>
                    {error && <p style={{color:"red"}}>Enter  the all required  inputs</p>}
                    <button  onClick={login} className="ui button blue">Submit</button>
                </div>
          
            
        </div>
    )
}

export default FormValidation
