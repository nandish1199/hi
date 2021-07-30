import React, { lazy, Suspense } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Menu = lazy(() => import("./Menu"));
const Footer = lazy(() => import("./Footer"));
const Scroll = lazy(() => import("./Scroll"));
const Contact = lazy(() => import("./Contact"));
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const Video = lazy(() => import("./Video"));
const Chapter1 = lazy(() => import("./Chapter1"));
const Chapter2 = lazy(() => import("./Chapter2"));
const Chapter3 = lazy(() => import("./Chapter3"));
const Chapter4 = lazy(() => import("./Chapter4"));
const Rajayoga = lazy(() => import("./Rajayoga"));
const Human_anatomy = lazy(() => import("./Human_anatomy"));
const Workout = lazy(() => import("./Workout"));
const Nutrition = lazy(() => import("./Nutrition"));
const Ayurveda = lazy(() => import("./Ayurveda"));
const Products = lazy(() => import("./Products"));
const A2ghee = lazy(() => import("./A2ghee"));
const Butter = lazy(() => import("./Butter"));
const Chocolete = lazy(() => import("./Chocolete"));
const Noodles = lazy(() => import("./Noodles"));
const Hairoil = lazy(() => import("./Hairoil"));
const Paste = lazy(() => import("./Paste"));
const Facemoisturiser = lazy(() => import("./Facemoisturiser"));
const Tea = lazy(() => import("./Tea"));
const Water = lazy(() => import("./Water"));
const Snacks = lazy(() => import("./Snacks"));
const Colddrink = lazy(() => import("./Colddrink"));
const Biscuits = lazy(() => import("./Biscuits"));
const Soap = lazy(() => import("./Soap"));
const Shampoo = lazy(() => import("./Shampoo"));
const Essentialoil = lazy(() => import("./Essentialoil"));
const Handwash = lazy(() => import("./Handwash"));

const App = () => {
  return (
    <div className="appcontainer">
      <React.Suspense fallback={<CircularProgress />}>
        {/* add every tag inside suspense otherwise it will not work  */}
        <Menu />
      </React.Suspense>
      <React.Suspense fallback={<CircularProgress />}>
        <Scroll />
      </React.Suspense>
      {/* <Router> */}
      <React.Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Chapter1" component={Chapter1} />
          <Route exact path="/Chapter2" component={Chapter2} />
          <Route exact path="/Chapter3" component={Chapter3} />
          <Route exact path="/Chapter4" component={Chapter4} />
          <Route exact path="/Rajayoga" component={Rajayoga} />
          <Route exact path="/Human_anatomy" component={Human_anatomy} />
          <Route exact path="/Workout" component={Workout} />
          <Route exact path="/Nutrition" component={Nutrition} />
          <Route exact path="/Ayurveda" component={Ayurveda} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/A2ghee" component={A2ghee} />
          <Route exact path="/Chocolete" component={Chocolete} />
          <Route exact path="/Noodles" component={Noodles} />
          <Route exact path="/Hairoil" component={Hairoil} />
          <Route exact path="/Paste" component={Paste} />
          <Route exact path="/Facemoisturiser" component={Facemoisturiser} />
          <Route exact path="/Tea" component={Tea} />
          <Route exact path="/Water" component={Water} />
          <Route exact path="/Snacks" component={Snacks} />
          <Route exact path="/Colddrink" component={Colddrink} />
          <Route exact path="/Biscuits" component={Biscuits} />
          <Route exact path="/Soap" component={Soap} />
          <Route exact path="/Shampoo" component={Shampoo} />
          <Route exact path="/Essentialoil" component={Essentialoil} />
          <Route exact path="/Handwash" component={Handwash} />
          <Route exact path="/Video" component={Video} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Butter" component={Butter} />
          <Route component={Home} />
        </Switch>
      </React.Suspense>

      <React.Suspense fallback={<CircularProgress />}>
        {/* add every tag inside suspense otherwise it will not work  */}
        <Footer />
      </React.Suspense>
    </div>
  );
};
export default App;
