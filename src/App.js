import React from 'react';
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/addUser" component={AddEditUser} />
            </Switch>
        </div>
    </Router>
    )
}

export default App;