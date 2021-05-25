import React, { Suspense } from 'react';
import './index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Layout from './components/layout/Layout';

const AllQuotes = React.lazy(() => import('./components/quotes/AllQuotes'))
const NewQuote = React.lazy(() => import('./components/quotes/NewQuote'))
const QuoteDetail = React.lazy(() => import('./components/quotes/QuoteDetail'))
const NotFound = React.lazy(() => import('./components/quotes/NotFound'))

const App = () => {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className='centered'>
                        <LoadingSpinner />
                    </div>
                }>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/quotes' />
                    </Route>
                    <Route path='/quotes' exact>
                        <AllQuotes />
                    </Route>
                    <Route path='/quotes/:quoteId'>
                        <QuoteDetail />
                    </Route>
                    <Route path='/new-quote'>
                        <NewQuote />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default App
