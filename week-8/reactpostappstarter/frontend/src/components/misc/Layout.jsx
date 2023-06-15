import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import { useState } from 'react';


const links = [
    {link:'/', label:'Home', type:'public'},
    {link:'/posts', label:'Posts', type:'private'},
    {link:'/posts/create', label:'Create', type:'private'},
];

const Layout = () => {
    //If a page is accessed directly, the state of the active page will be incorrect
    //This function returms a starting state when required
    const getCurrentPage = () => {
        const currentLocation = useLocation();
        let returner = '/';
        if (currentLocation.pathname.substring(0,6) === '/posts') {returner = '/posts';}
        if (currentLocation.pathname.substring(0,6) === '/login') {returner = '/login';}
        if (currentLocation.pathname === '/posts/create') {returner = '/posts/create';}
        return returner;
    }

    const [active, setActive] = useState(getCurrentPage());

    return (
        <div>
            <Navbar links={links} activePage={active} setActivePage={setActive}/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
};

export default Layout;
