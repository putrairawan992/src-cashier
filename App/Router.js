import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { DashboardPage, LoginPage } from '@Screens';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene 
                           key="Login"
                           component={LoginPage}
                           initial
                           hideNavBar
                    />
                    <Scene 
                           key="Dashboard"
                           component={DashboardPage}
                    />
                </Stack>
            </Router>
        );
    }
}

export default RouterComponent;
