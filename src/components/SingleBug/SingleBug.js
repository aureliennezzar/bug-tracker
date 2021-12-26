import React, {useEffect} from 'react';
import useFetch from "../../hooks/useFetch";
import {BUGTRACKER_API, getToken} from "../../services/utils/utils";
import {useLocation, useParams} from "react-router-dom";

const SingleBug = () => {
    const {id, description, state, timestamp, title} = useLocation().state.data
    useEffect(() => {
    }, [])
    return (
        <section className="singlebug">
            <h1>#{id} - {title}</h1>
            <p>Status : {state}</p>

            <h2>Description</h2>
            <p>{description}</p>
            <p>crée le {timestamp}</p>

        </section>
    )
}
export default SingleBug;