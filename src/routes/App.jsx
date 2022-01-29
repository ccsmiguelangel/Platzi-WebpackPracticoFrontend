import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';

import Home from '@containers/Home';
import Checkout from '@containers/Checkout';
import Layout from '@components/Layout';
import NotFound from '@containers/NotFound';
import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

const AsyncCheckoutContainer = React.lazy(() =>import('@containers/Checkout'));

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.products).length;

  return(
  <>
    {isEmpty > 0 ? (
      <Suspense fallback={<div>Loading...</div>}>
        <AppContext.Provider value={initialState}>
          <Router>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        </AppContext.Provider>
      </Suspense>
    ) : <h1>Loading ...</h1>
    }
  </>
  )
};

export default hot(App); 
