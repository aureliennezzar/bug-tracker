import react, {useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {getToken, setToken, signIn, signUp} from "../../services/utils/utils";

const SignIn = () => {
    const [formData, setFormdata] = useState({
        username: '',
        password: '',
    })
    const {username, password, passwordRepeat} = formData;
    const navigate = useNavigate();

    useEffect(()=>{
        if(typeof getToken() !== undefined && getToken()) navigate("/dashboard");
    },[])

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await signIn(username, password)
        if (data.result.status === "done") {
            setToken(data.result.token);
            navigate("/dashboard");
        } else {
            alert(data.result.message)
        }

    }
    const handleInput = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <section className="page-signup">
            <h1>sign IN</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input required type="text" name="username" value={username} onChange={handleInput}/>
                <input required type="password" name="password" value={password} onChange={handleInput}/>
                <button type={"submit"}>submit</button>
            </form>
        </section>
    )
}

export default SignIn;