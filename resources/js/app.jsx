import './bootstrap';
import './bootstrap';
import '../css/app.css';

import {Suspense} from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import MeterPage from "./pages/MeterPage.jsx";
import ResultatenPage from "./pages/ResultatenPage.jsx";
import GegevensPage from "./pages/GegevensPage.jsx";
import SamenvattingPage from "./pages/SamenvattingPage.jsx";
import UitlegPage from './pages/UitlegPage.jsx';

ReactDOM.createRoot(document.getElementById('app')).render(
    <Suspense fallback={<div></div>}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/gegevens" element={<GegevensPage />}></Route>
                <Route path="/uitleg" element={<UitlegPage />}></Route>
                <Route path="/meter" element={<MeterPage />}></Route>
                <Route path="/samenvatting" element={<SamenvattingPage />}></Route>
                <Route path="/resultaten" element={<ResultatenPage />}></Route>

            </Routes>
        </BrowserRouter>
    </Suspense>
);

