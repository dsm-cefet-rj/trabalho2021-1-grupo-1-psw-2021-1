import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ClientProfile from './pages/ClientProfile'
import Home from './pages/Home'
import Payment from './pages/Payment'
import PaymentConfirm from './pages/PaymentConfirm'
import ProfessionalProfile from './pages/ProfessionalProfile'
import SignupClient from './pages/SignupClient'
import SignupTattoo from './pages/SignupTattoo'
import EditTattoo from './pages/EditTattoo'
import Scheduling from './pages/Scheduling'
import Login from './pages/Login'
import Tattoo from './pages/Tattoo'
import './styles/Global.css'

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/me/paymentId/confirm" component={PaymentConfirm} />
                <Route path="/:id_tattoo/payment" component={Payment} />
                <Route path="/profile/:id_tatuador/newTattoo" component={SignupTattoo} />
                <Route path="/editTattoo/:id_tatuador/:id_tatuagem" component={EditTattoo} />
                <Route path="/profile/:id_tatuador" component={ProfessionalProfile} />
                <Route path="/signUp" component={SignupClient} />
                <Route path="/:id_compra/scheduling" component={Scheduling} />
                <Route path="/me" component={ClientProfile} />
                <Route path="/login" component={Login} />
                <Route path="/tattoo/:id" component={Tattoo} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App
