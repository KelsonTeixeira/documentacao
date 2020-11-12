import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SideBar from '../components/sidebar';
import Bar from '../components/bar';
import Home from '../pages/Home';
import Loop from '../pages/Wordpress/loop';
import WPQuery from '../pages/Wordpress/wpQuery';
import CustomPost from '../pages/Wordpress/customPost';
import MetaBox from '../pages/Wordpress/MetaBox';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Bar />
        <SideBar />
        <div className="row m-0 w-100 h-100">
            <div className="col-2 p-0"></div>
            <div className="col-10 p-0 pl-4">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/wordpress/loop' component={Loop} />
                    <Route 
                        path='/wordpress/custom-post-loop' 
                        component={WPQuery} 
                    />
                    <Route 
                        path='/wordpress/custom-post' 
                        component={CustomPost} 
                    />
                     <Route 
                        path='/wordpress/meta-box' 
                        component={MetaBox} 
                    />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default Routes;