import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AboutPage from './componenten/pages/AboutPage';
import Homepage from './componenten/pages/Homepage';
import CharacterPage from './componenten/pages/CharacterPage';
import TheMovieDb from './componenten/pages/TheMovieDbPage';
import FileUpload from './componenten/pages/FileUpload';
import ReactHookForm from './componenten/pages/ReactHookForm';
import Modal from './componenten/pages/'
import './App.css';

function App() {
    return (
        <React.Fragment>
              <Router>
                <Switch>
                    <Route path="/theMovieDbPage">
                        <TheMovieDb />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/character/:id">
                        <CharacterPage />
                    </Route>
                    <Route path={"/fileUpload"}>
                        <FileUpload/>
                    </Route>
                    <Route path{"/reactHookForm"}>
                        <ReactHookForm/>
                    </Route>
                    <Route path={"/modal"}>
                        <Modal/>
                    </Route>

                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
  );
}


export default App;
