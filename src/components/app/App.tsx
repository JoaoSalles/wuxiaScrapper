import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { MainDiv } from './styles/styles';
import HomeComponent from '../HomeComponent'
import SideBarComponent from '../SideBarComponent'

function App() {
  return (
    <BrowserRouter>
      <MainDiv>
        <div className="header">
          <SideBarComponent />
        </div>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <div className="content">
          <Switch>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </div>
      </MainDiv>
    </BrowserRouter>
  );
}


export default App;
