import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';

const MarketingAppLazy = lazy(() => import('./components/marketing-app'));
const AuthAppLazy = lazy(() => import('./components/auth-app'));
const DashboardLazy = lazy(() => import('./components/dashboard-app'));




const generateClassname = createGenerateClassName({
    productionPrefix: 'co'
});

const history = createBrowserHistory();


export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) history.push('/dashboard');
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassname}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy />
                            </Route>
                            <Route path="/">
                                <MarketingAppLazy />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}