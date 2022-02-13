import React from 'react';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import AddEditUser from './pages/AddEditUser';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
    <Router>
    <Header />
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/addUser" component={AddEditUser} />
                <Route exact path="/about" component={About} />
            </Switch>
        </div>
    </Router>
    )
}

export default App;