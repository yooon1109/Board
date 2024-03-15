import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Link} from "@mui/material";

function MainPage() {
    const instance = axios.create({
        baseURL: 'http://localhost:8080'
    });
    const [hello, setHello] = useState('');
    const [data, setData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const columns = [
        { field: 'id', headerName: 'NO', width: 90 },
        { field: 'title', headerName: '제목', width: 350 },
        { field: 'writer', headerName: '작성자', width: 150 },
        { field: 'watcher', headerName: '조회수', width: 90 }
    ];

    useEffect(() => {
        instance.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error));
        instance.get('/api/board')
            .then(response => {
                setData(response.data);
            })
            .catch(error => console.log("실패"));
    }, []);

    const handleButtonClick = (event) => {
        window.location.href = '/new-post';
    };
    const handlePostClick = (postId) => {
        console.log(postId);
        setSelectedPost(postId);
        window.location.href = `/detail/${postId}`
    }

    return (
        <div>
            백엔드에서 가져온 데이터입니다: {hello}
            <div>
                <Button style={{marginTop:10}} onClick={handleButtonClick}>
                    새글작성
                </Button>
            </div>
            <div>
                <h2>게시글 리스트</h2>
                <table>
                    <thead>
                    <tr>
                        <th>NO</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(post => (
                        <tr key={post.id} onClick={() => handlePostClick(post.id)} style={{fontWeight: selectedPost === post.id ? 'bold' : 'normal'}}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.writer}</td>
                            <td>{post.watcher}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MainPage;
