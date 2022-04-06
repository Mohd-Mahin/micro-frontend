import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassname = createGenerateClassName({
    productionPrefix: 'ma',
})

export default function App() {

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassname}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </StylesProvider>
        </BrowserRouter>
    )
}