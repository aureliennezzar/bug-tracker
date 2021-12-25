import React from "react";
import './App.scss'
import useFetch from "../../hooks/useFetch";

const URL = "https://jsonplaceholder.typicode.com/todos";

const App = () => {
    const {loading, error, data} = useFetch(URL);

    if (loading) return 'loading...'
    if (error) return 'error...'

    return (
        <>
            <h1>APP</h1>
            {data?.map(article => (
                <p>{article.title}</p>
            ))}
        </>
    )

}
export default App;