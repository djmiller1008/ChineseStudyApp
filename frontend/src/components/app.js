import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Search from './search/search';
import CharacterDisplayContainer from './characters/character_display_container';
import DiaryContainer from './diary/diary_container';
import QuizContainer from './quiz/quiz_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <ProtectedRoute path="/search" component={Search} />
    <ProtectedRoute path="/character_display" component={CharacterDisplayContainer} />
    <ProtectedRoute path="/diary" component={DiaryContainer} />
    <ProtectedRoute path="/quiz" component={QuizContainer} />
  </div>
);

export default App;