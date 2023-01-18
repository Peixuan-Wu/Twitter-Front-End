import { useState } from 'react';
import './index.css'

const Login = () => {
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    console.log(name);
    console.log(pw);
    const clickHandler = () => {
        alert("Login Successfully  " + name + ", " + pw);
    }
    const onChangeNameHandler = (e) => {
        // console.log(e);
        setName(e.target.value);
    }
    const onChangepwHandler = (e) => {
        setPw(e.target.value);
    }
    return (
        <div>
            <div  className='login'>
                {name} 
                {pw}
                <div>UserName: <input onChange={onChangeNameHandler}/></div>
                <div>PassWord: <input type="password" onChange={onChangepwHandler}></input></div>
                <div><button onClick={clickHandler}>Login</button></div>
            </div>
        </div>
    )
}

export default Login;