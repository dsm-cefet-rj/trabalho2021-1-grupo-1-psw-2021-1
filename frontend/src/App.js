import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ClientProfile from './pages/ClientProfile';
import Home from "./pages/Home";
import Payment from './pages/Payment';
import PaymentConfirm from './pages/PaymentConfirm';
import ProfessionalProfile from './pages/ProfessionalProfile';
import SignupClient from './pages/SignupClient';
import SignupTattoo from './pages/SignupTattoo';



function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/me/paymentId/confirm">
                    <PaymentConfirm/>
                </Route>
                <Route path="/me/paymentId">
                    <Payment/>
                </Route>
                <Route path="/me/newTattoo">
                    <SignupTattoo/>
                </Route>
                <Route path="/tatuadorId">
                    <ProfessionalProfile/>
                </Route>
                <Route path="/signUp">  
                    <SignupClient/>
                </Route>
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