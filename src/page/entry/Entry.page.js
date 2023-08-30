import React, {useState} from "react";
// import { Card } from "react-bootstrap";
import {LoginForm} from '../../components/login/login.comp';
import { PasswordReset } from "../../components/password/PasswordResert.comp";
import './entry.style.css'
export const Entry= () =>{
    //     variable , function
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [formload, setFormLoad] = useState('login')

    const handleOnChange = e =>{
        const{name,value} =e.target
        switch(name){
            case 'email':
                setemail(value)
                break
            case 'password':
                setpassword(value)
                break
            default:
                break
        }
    }
    const handleOnSubmit = e=>{
        e.preventDefault()

        if(!email || !password){
            return alert("Fill Up The Form")
        }
        //submit the form in the future API
        console.log(email,password)
    }

    const handleOnResetSubmit= e=>{
        e.preventDefault()

        if(!email){
            return alert("Please Enter The Email!")
        }
        //submit the form in the future API
        console.log(email)
    }

    const formSwitcher=formtype =>{
        setFormLoad(formtype);
    }
    return (
        <div className="entry-page bg-info">
            {
            
            <div className="p-5 mb-4 bg-light rounded-3 shadow form-box"> 
            {formload==='login' && 
                <LoginForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email} 
                pass={password}
                />
            }
            {formload==='reset' &&
                <PasswordReset
                handleOnChange={handleOnChange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitcher}
                email={email} 
                />
            }
            </div>
                
            }
        </div>
    )
}
// arrow functional component to get the whole react code
