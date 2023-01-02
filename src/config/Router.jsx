import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Catalog from "../views/Catalog";
import Detail from "../views/Detail";

export default function Router() {
    return (
        <>
            <Routes>
                <Route
                    path="/:category/search/:keyword"
                    element={Catalog} />
                <Route
                    path="/:category/:id"
                    element={Detail} />
                <Route
                    path="/:category"
                    element={Catalog} />
                <Route
                    path="/"
                    exact
                    element={Home} />
            </Routes>
        </>
    )
}
