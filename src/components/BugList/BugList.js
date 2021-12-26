import React from 'react';
import useFetch from "../../hooks/useFetch";
import {BUGTRACKER_API, getToken} from "../../services/utils/utils";
import {Link} from "react-router-dom";

const BugList = () => {

    const {loading, error, data: bugList} = useFetch(BUGTRACKER_API + "/list/" + getToken() + "/0")

    return (
        <div className="buglist">
            <h2>BUG LIST</h2>
            {loading
                ? <p>Chargement...</p>
                : <ul>
                    {bugList?.result.bug?.map(bug => (
                        <li key={bug.id}><Link state={{
                            data: {
                                ...bug
                            }
                        }} to={`/bug/${bug.id}`}>#{bug.id} - {bug.title}</Link></li>
                    ))}
                </ul>}
        </div>
    )
}

export default BugList;