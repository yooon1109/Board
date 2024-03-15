import React from 'react';
import MainPage from './main/MainPage';
import Detail from "./main/Detail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPost from "./main/NewPost";

function App() {
    return (
        <Router>
            <Routes>
                {/* 메인 페이지 */}
                <Route exact path="/" element={<MainPage/>} />
                {/* 다른 페이지 */}
                <Route path="/detail/:id" element={<Detail/>} />
                <Route path="/new-post" element={<NewPost/>}/>
            </Routes>
        </Router>
    );
}

export default App;
