import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {getToken} from "../../services/utils/utils";

const Home = () => {
    return (
        <section className="homepage">
            <h1>Bienvenue sur bug tracker V0.1</h1>
            <nav>

                {typeof getToken() !== undefined && getToken()
                    ? <Link to="/dashboard">Dashboard</Link>
                    : <>
                        <Link to="/signin">Se connecter</Link>
                        <Link to="/signup">Créer un compte</Link>
                    </>
                }
            </nav>
        </section>
    )

}

export default Home;