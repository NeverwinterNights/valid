import React from "react";
import {Route, Routes} from "react-router-dom";
import { Main } from "./components/main/Main";
import {Info} from "./components/info/Info";




const RoutesComponent = () => {

    const routes = [{
        path: '/',
        component: <Main/>,
    }, {
        path: '/main',
        component: <Main/>,
    }, {
        path: '/info',
        component: <Info/>,
    }];

    const routeComponents = routes.map(({path, component}, key) => <Route path={path} element={component} key={key}/>);
    return (
        <Routes>
            {routeComponents}
        </Routes>
    );
};

export default RoutesComponent;
