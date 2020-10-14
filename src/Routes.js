import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themes from "./Styles/themes";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import CreaterCenter from "./Pages/CreaterCenter/CreatorCenter";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import BasicInfo from "./Pages/CreaterCenter/BasicInfo";
import CreatorsSubject from "./Pages/CreaterCenter/CreatorsSubject";

class Routes extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/productdetail" component={ProductDetail} />
            <Route exact path="/creatercenter" component={CreaterCenter} />
            <Route exact path="/nav" component={Nav} />
            <Route exact path="/footer" component={Footer} />
            <Route exact path="/basicinfo" component={BasicInfo} />
            <Route exact path="/creatorssubject" component={CreatorsSubject} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}
export default Routes;
