import './styles/main.css';
import './styles/cards.css';
import './styles/detailcard.css';
import './styles/login.css';
import './styles/footer.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Fragment, React, useEffect, useState} from 'react';

import HeroDetailView from './views/HeroDetailView';
import HomeView from './views/HomeView';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
// import {TeamProvider} from './context/TeamContext';
import { Provider } from 'react-redux';
import SearchView from './views/SearchView';
import {db} from './firebase';
import store from './store';
import { useSelector } from 'react-redux';

function App() {

  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  

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
