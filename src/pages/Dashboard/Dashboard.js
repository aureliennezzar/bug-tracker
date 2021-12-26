import React from "react";
import Layout from "../../components/Layout/Layout";
import {Link, Outlet} from "react-router-dom";

const Dashboard = () => {
    return (
        <Layout>
            <section className="dashboard">
                <h1>Dashboard</h1>
                <nav>
                    <Link to="/dashboard/buglist">Liste de bugs</Link>
                    <Link to="/dashboard/mybugs">Mes bugs</Link>
                </nav>
                <Outlet/>
            </section>
        </Layout>
    );
}
export default Dashboard;