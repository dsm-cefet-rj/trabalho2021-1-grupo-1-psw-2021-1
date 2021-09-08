import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store'

import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientProfile from "./pages/ClientProfile";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import PaymentConfirm from "./pages/PaymentConfirm";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import SignupClient from "./pages/SignupClient";
import SignupTattoo from "./pages/SignupTattoo";
import EditTattoo from "./pages/EditTattoo";
import Scheduling from "./pages/Scheduling";
import Login from "./pages/Login";
import "./styles/Global.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/me/paymentId/confirm">
            <PaymentConfirm />
          </Route>
          <Route path="/:id_tattoo/payment">
            <Payment />
          </Route>
          <Route
            path="/profile/:id_tatuador/newTattoo"
            component={SignupTattoo}
          >
            <SignupTattoo />
          </Route>
          <Route
            path="/editTattoo/:id_tatuador/:id_tatuagem"
            component={EditTattoo}
          />
          <Route path="/profile/:id_tatuador" component={ProfessionalProfile}>
            <ProfessionalProfile />
          </Route>
          <Route path="/signUp">
            <SignupClient />
          </Route>
          <Route path="/:id_compra/scheduling">
            <Scheduling />
          </Route>
          <Route path="/me">
            <ClientProfile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
