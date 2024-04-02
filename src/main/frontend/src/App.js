import React from 'react';
import MainPage from './main/MainPage';
import Detail from "./main/Detail";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPost from "./main/NewPost";

function App() {
//     const express = require('express');
//     const app = express();
//
// // 루트 경로에 대한 핸들러
//     app.get('/', (req, res) => {
//         res.send('Hello, World!');
//     });
//
// // 서버 시작
//     const port = process.env.PORT || 3000;
//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     });

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
