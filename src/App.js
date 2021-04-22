import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Topluluk from './pages/Topluluk';
import Ogren from './pages/Ogren';
import Etkinlik from './pages/Etkinlik';
import Blog from './pages/Blog';
import Hakkimizda from './pages/Hakkimizda';

import './custom.css'
import 'antd/dist/antd.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/topluluk' component={Topluluk} />
                <Route path='/ogren' component={Ogren} />
                <Route path='/etkinlik' component={Etkinlik} />
                <Route path='/blog' component={Blog} />
                <Route path='/hakkimizda' component={Hakkimizda} />
            </Layout>
        );
    }
}
