import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    </Router>
    )
}

export default App;