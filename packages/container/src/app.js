import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/marketing-app';
import Header from './components/Header';


const generateClassname = createGenerateClassName({
    productionPrefix: 'co'
})


export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassname}>
                <div>
                    <Header />
                    <MarketingApp />
                    <hr />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}