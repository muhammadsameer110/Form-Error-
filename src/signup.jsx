import React, { useEffect, useState } from 'react';
const SignUp = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    const [firstnameerr , setfirstnameerr]=useState(false);
    const [lastnameerr , setlastnameerr]=useState(false);
    const [passwordeerr , setpassworderr]=useState(false);
    const [emailerr , setemailerr]=useState(false);
    const SignUPform = (e) => {
        e.preventDefault();
        if(firstname === "" ){
                setfirstnameerr(true)
        }
        if(lastname === ""){
            setlastnameerr(true)
        }
        if(password === ""){
            setpassworderr(true)
        }
        if(email === ""){
            setemailerr(true)
        }
    };
    useEffect(()=>{
        if(firstname !== ""){
            setfirstnameerr(false);
        }
       if (lastname !== ""){
        setlastnameerr(false);}
        if(email !== ""){
            setemailerr(false)
        }
        if(password !== ""){
                setpassworderr(false)
        }
      
    },[SignUPform])
    return (
        <>
            <div class="ctr">
                <h1>SignUp</h1>

                <form onSubmit={SignUPform} >
                    <div class="dd">
                        <label>First name</label><br />
                        <input value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" placeholder='first name' />
                        {firstnameerr && <p> value is not defind</p>}
                    </div>
                    <div class="dd">
                        <label>last name</label><br />
                        <input value={lastname} onChange={(e)=>setlastname(e.target.value)} type="text" placeholder='last name' />
                        {lastnameerr && <p> value is not defind</p>}
                    </div>
                    <div class="dd">
                        <label>Email</label><br />
                        <input value={email} onChange={(e)=>setemail(e.target.value)}  type="email" placeholder='email' />
                        {emailerr && <p> value is not defind</p>}
                    </div>
                    <div class="dd">
                        <label>Password</label><br />
                        <input value={password} onChange={(e)=>setpassword(e.target.value)}  type="password" placeholder='password' />
                        {passwordeerr && <p> value is not defind</p>}
                    </div>
                    <button onSubmit={SignUPform} >SignUP</button>
                </form>
                <div>
                </div>
            </div>
        </>
    )

}

export default (SignUp);