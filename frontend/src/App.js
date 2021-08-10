import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import ClientProfile from './pages/ClientProfile';


function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/me">
                    <ClientProfile/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;