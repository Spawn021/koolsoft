import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
import { Provider } from 'react-redux';
import store from './store';
function App() {
   return (
      <Provider store={store}>
         <Router>
            <div className="App">
               <Routes>
                  {publicRoutes.map((route, index) => {
                     const Layout = route.layout || DefaultLayout;
                     const Page = route.component;
                     return (
                        <Route
                           key={index}
                           path={route.path}
                           element={
                              <Layout>
                                 <Page />
                              </Layout>
                           }
                        />
                     );
                  })}
               </Routes>
            </div>
         </Router>
      </Provider>
   );
}

export default App;
