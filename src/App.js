import './styles/main.css';
import './styles/cards.css';
import './styles/detailcard.css';
import './styles/login.css';
import './styles/footer.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Fragment, React, useEffect, useState} from 'react';

import HeroDetailView from './views/HeroDetailView';
import HomeView from './views/HomeView';
// import {TeamProvider} from './context/TeamContext';
import { Provider } from 'react-redux';
import SearchView from './views/SearchView';
import {db} from './firebase';
import store from './store';

function App() {

  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(true)


   useEffect(() => {

    

  }, [])

  

  return (

    <BrowserRouter>
      
      <Switch>

        <Provider store={store}>

          {/* Ruta para la home/index - La Home contiene un ListadoCards, el cual a su vez contiene Cards */}
          <Route exact path="/">

            <HomeView></HomeView>

          </Route>

          <Route path="/search">

            <SearchView></SearchView>

          </Route>

          <Route path="/hero_detail/:id">

            <HeroDetailView></HeroDetailView>

          </Route>


        </Provider>

      </Switch>

    </BrowserRouter>

  );
}

export default App;
