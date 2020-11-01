import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SideBar from '../components/sidebar';
import Home from '../pages/Home';
import Wordpress from '../pages/Wordpress';
import Components from '../pages/Components';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="row m-0 w-100 h-100">
            <SideBar />
            <div className="col-2 p-0"></div>
            <div className="col-10 p-0">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/wordpress' component={Wordpress} />
                    <Route path='/components' component={Components} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default Routes;