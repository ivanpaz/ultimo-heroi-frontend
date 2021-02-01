import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Menu from './pages/Menu';
import Mission from './pages/Mission';



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/menu" component={Menu} />
                <Route path="/mission/:m" component={Mission} />
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;