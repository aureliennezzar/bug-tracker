import react, {useContext, useEffect, useState} from 'react';
import {getToken, setToken, signIn, signUp} from "../../services/utils/utils";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [formData, setFormdata] = useState({
        username: '',
        password: '',
        passwordRepeat: ''
    })
    const {username, password, passwordRepeat} = formData;
    const navigate = useNavigate();

    useEffect(()=>{
        if(typeof getToken() !== undefined && getToken()) navigate("/dashboard");
    },[])


    const handleSubmit = async e => {
        e.preventDefault();
        if (password === passwordRepeat) {
            const data = await signUp(username, password)
            if (data.result.status === "done") {
                const signinData = await signIn(username,password)
                if(signinData.result.status==="done"){
                    setToken(signinData.result.token);
                    navigate("/dashboard");
                }else{
                    alert(signinData.result.message)
                }
                setToken(data.result.token);
            } else {
                alert(data.result.message)
            }
        } else {
            alert('Les mots de passe ne correspondent pas')
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
            <h1>sign UP</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input required type="text" name="username" value={username} onChange={handleInput}/>
                <input required type="password" name="password" value={password} onChange={handleInput}/>
                <input required type="password" name="passwordRepeat" value={passwordRepeat} onChange={handleInput}/>
                <button type={"submit"}>submit</button>
            </form>
        </section>
    )
}

export default SignUp;