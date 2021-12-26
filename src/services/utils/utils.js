export const BUGTRACKER_API = "http://greenvelvet.alwaysdata.net/bugTracker/api"

export const signUp = async (user, password) => {
    return fetch(`${BUGTRACKER_API}/signup/${user}/${password}`)
        .then(res => res.json())
}

export const signIn = async (user, password) => {
    return fetch(`${BUGTRACKER_API}/login/${user}/${password}`)
        .then(res => res.json())
}
export const signOut = async (token) => {
    console.log(token)
    return fetch(`${BUGTRACKER_API}/logout/${token}`)
        .then(res => res.json())
}


export const setToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

export const deleteToken = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

export const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
}
