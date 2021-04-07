import { useState } from 'react';
import { connect } from 'react-redux';
import {setToken} from '../redux/actionCreators';

const Signup = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if (password === passwordConf){
                fetch(`http://localhost:3000/users`, {
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
                .then(r => r.json())
                .then(response =>{
                    if (response.errors){
                        alert(response.errors)
                    } else {
                        props.setToken(response);
                        props.history.push("/");
                        setUsername("");
                        setPassword("");
                        setPasswordConf("");
                    }
                })
                
        } else {
            alert('your passwords do not match')
        }
    }

        return (
            <div className="login">
            <h1>Enter to get Blessed</h1>
            <form onSubmit={onSubmit}>
                <label>
                 Enter Your Username:
                  <input onChange={e => setUsername(e.target.value)} type="text" name="username" value={username}/>
                </label>
                <br></br>
                <label>
                 Enter Your Password:
                  <input onChange={e => setPassword(e.target.value)} type="password" name="password" value={password}/>
                </label>
                <br></br>
                <label>
                 Re-Enter Your Password:
                  <input onChange={e => setPasswordConf(e.target.value)} type="password" name="passwordConfirmation" value={passwordConf}/>
                </label>
                <br></br>
                  <input type="submit" value="Submit"/>
            </form>
            </div>
        );
        
}

export default connect(null, {setToken})(Signup);