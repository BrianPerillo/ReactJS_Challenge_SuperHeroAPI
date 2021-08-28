import './assets/styles/main.css';
import './assets/styles/cards.css';
import './assets/styles/detailcard.css';
import './assets/styles/login.css';
import './assets/styles/footer.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {React, useEffect} from 'react';

import HeroDetailView from './views/HeroDetailView';
import HomeView from './views/HomeView';
import Login from './views/Login';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux'; // (El Provider esta en el index)
import SearchView from './views/SearchView';

function App() {
  

   useEffect(() => {



  }, [])

  return (

    <BrowserRouter>
      
      <Switch>

          <PrivateRoute exact path="/" component={HomeView}/>

          <Route exact path="/login" >
            <Login/>
          </Route>

          <PrivateRoute exact path="/search" component={SearchView}/>

          <PrivateRoute exact path="/hero_detail/:id" component={HeroDetailView}/>

      </Switch>

    </BrowserRouter>

  );
}

export default App;
