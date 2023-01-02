import "swiper/swiper.min.css";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./config/Router";

function App() {
    return (
        <BrowserRouter>
            <Route render={props => {
                <>
                    <Header {...props} />
                    <Router />
                    <Footer />
                </>
            }} />
        </BrowserRouter>
    )
}

export default App;
