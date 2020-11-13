import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Navlink from "./components/Navlink";
import Banner from "./components/Banner";
import Ads from "./components/Ads";
import Topdiv from "./components/Topdiv";
import Products from "./components/Products";
import Mobileapp from "./components/Mobileapp";
import Megamenu from "./components/Megamenu";
import Footer from "./components/Footer";
import SellPage from "./components/SellPage";
import SellForm from "./components/SellForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history/history";

import { firebaseApp } from "./config/firebase_setup";
import { connect } from "react-redux";
import { userData } from "./storage/action/loginAction";

function App(props) {
  firebaseApp.auth().onAuthStateChanged((result) => {
    if (result !== null) {
      props.userData(result);
    } else {
      props.userData(null);
    }
  });

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Header />
            <Navlink />
            <Banner />
            <Ads />
            {/* <Topdiv /> */}
            <Products />
            <Ads />
            <Mobileapp />
            <Megamenu />
            <Footer />
          </Route>
          <Route exact path="/sell">
            <SellPage />
          </Route>
          <Route exact path="/sell/sellForm">
            <SellForm />
          </Route>
          <Route>
            <Topdiv />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userData: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
