import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux"
import Header from "./components/Header";
import Parking from "./components/Parking";
import CurrentParking from "./components/CurrentParking";
import About from "./components/About";
import {store} from "./components/store";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter basename="/">
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <h1>Паркуйтесь с удовольствием!</h1>
                        <Parking/>
                    </Route>

                    <Route exact path="/about">
                        <About/>
                    </Route>

                    <Route exact path="/parking/:parking_pk">
                        <CurrentParking/>
                    </Route>

                </Switch>
            </BrowserRouter>
        </Provider>

    );
}
export default App;
