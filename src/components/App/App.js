import React, {useEffect, useState} from "react";
import './App.scss'
import {Routes, Route, Link, Navigate} from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import BugList from "../BugList/BugList";
import MyBugs from "../MyBugs/MyBugs";
import SingleBug from "../SingleBug/SingleBug";
import {getToken} from "../../services/utils/utils";

const App = () => {

    return (
        <>
                <Routes>
                    <Route path="/" element={<Home/>}/>

                    <Route path="/bug/:id" element={typeof getToken() !== undefined && getToken() ? <SingleBug/> : <Navigate to={"/"}/>}>
                    </Route>

                    <Route path="/dashboard" element={typeof getToken() !== undefined && getToken() ? <Dashboard/> : <Navigate to={"/"}/>}>
                        <Route path="/dashboard/buglist" element={<BugList/>}/>
                        <Route path="/dashboard/mybugs" element={<MyBugs/>}/>
                    </Route>

                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/signin" element={<SignIn/>}/>

                </Routes>
        </>
    )

}
export default App;