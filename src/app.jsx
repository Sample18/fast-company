import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./components/layout/users";
import NavBar from "./components/navBar";
import Main from "./components/layout/main";
import Login from "./components/layout/login";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </>
    );
};

export default App;
