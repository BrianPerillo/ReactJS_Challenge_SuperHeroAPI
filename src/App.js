import './assets/styles/main.css';
import './assets/styles/cards.css';
import './assets/styles/detailcard.css';
import './assets/styles/login.css';
import './assets/styles/footer.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {React, useEffect} from 'react';

import HeroDetailView from './views/HeroDetailView';
import Home from './views/Home';
import Login from './views/Login';
import PokeDetailView from './views/PokeDetailView';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux'; // (El Provider esta en el index)
import SearchView from './views/SearchView';
import TeamView from './views/TeamView';

function App() {
  

   useEffect(() => {



  }, [])

  return (

    <BrowserRouter>
      
      <Switch>

          <PrivateRoute exact path="/" component={Home}/>

          <Route exact path="/login" >
            <Login/>
          </Route>

          <PrivateRoute exact path="/:name/search" component={SearchView}/>

          <PrivateRoute exact path="/:name/team" component={TeamView}/>

          <PrivateRoute exact path="/:name/hero_detail/:id" component={HeroDetailView}/>

          <PrivateRoute exact path="/:name/poke_detail/:id" component={PokeDetailView}/>

      </Switch>

    </BrowserRouter>

  );
}

export default App;
