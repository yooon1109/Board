import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Link} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
                setData(response.data.map(post => ({
                    ...post,
                    // 작성일 포맷 변경
                    date: new Date(post.date).toISOString().split('T')[0]
                })));
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>NO</TableCell>
                            <TableCell sx={{width:600}} align="left">제목</TableCell>
                            <TableCell align="left">작성자</TableCell>
                            <TableCell align="left">작성일</TableCell>
                            <TableCell align="right">조회수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => handlePostClick(row.id)} style={{fontWeight: selectedPost === row.id ? 'bold' : 'normal'}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.writer}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="right">{row.watcher}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default MainPage;
