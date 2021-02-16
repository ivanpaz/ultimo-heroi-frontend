import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Mission from './pages/Mission';
import Admin from './pages/LoginAdmin'
import MenuAdmin from './pages/MenuAdmin';



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/menu" component={Menu} />
                <Route path="/mission/:m" component={Mission} />
                <Route path="/admin" component={Admin} />
                <Route path="/adminMenu" component={MenuAdmin} />
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;