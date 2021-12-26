import React, {useContext} from "react";
import { deleteToken, getToken, signOut} from "../../services/utils/utils";
import {useNavigate} from "react-router-dom";

const Layout = ({children})=>{
    const navigate = useNavigate();

    const handleLogout = async e => {
        const data = await signOut(getToken());
        if (data.result.status === "done") {
            deleteToken();
            navigate('/');
        } else {
            alert(data.result.message)
        }
    }
    return (
        <div className="main">
            <button onClick={handleLogout}>Se déconnecter</button>
            {children}
        </div>
    )
}

export default Layout;