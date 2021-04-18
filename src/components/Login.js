import { useState } from 'react';
import { connect } from 'react-redux';
import { setToken } from '../redux/actionCreators'

const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    async function onSubmit(e){
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
             })
         })
         const data = await res.json()
             if (data.errors){
                 alert(data.errors)
             } else {
              props.setToken(data);
              props.history.push("/");
              setUsername("");
              setPassword("");
             }
       }

        return (
            <div className="login">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>
                 Name:
                  <input onChange={e => setUsername(e.target.value)} type="text" name="username" value={username}/>
                </label>
                <label><br></br>
                 Password:
                  <input onChange={e => setPassword(e.target.value)} type="password" name="password" value={password}/>
                </label><br></br>
                  <input type="submit" value="Submit"/>
            </form>
            </div>
        );
    
}

export default connect(null, {setToken})(Login);