import './styles/main.css';
import './styles/cards.css';
import './styles/detailcard.css';
import './styles/login.css';
import './styles/footer.css';

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
