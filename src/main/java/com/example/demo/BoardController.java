package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
public class BoardController {
    @Autowired
    BoardRepository boardRepository;
    @GetMapping("/api/board")
    public ResponseEntity<List<Board>> getBoardList(){
        List<Board> boardList = boardRepository.findAll();
        return ResponseEntity.ok(boardList);
    }

    @GetMapping("/api/detail")
    public ResponseEntity<Board> getBoardDetail(@RequestParam Long id){
        Board board = boardRepository.findById(id).get();

        board.setWatcher(board.getWatcher()+1);
        boardRepository.save(board);
        return ResponseEntity.ok(board);
    }

    @PostMapping("/api/wirte")
    public ResponseEntity<Board> putBoard(@RequestBody Board board){
        LocalDateTime localDateTime = LocalDateTime.now();
        // LocalDateTime을 Instant로 변환
        java.time.Instant instant = localDateTime.atZone(java.time.ZoneId.systemDefault()).toInstant();
        // Instant를 Date로 변환
        Date createdDate = java.util.Date.from(instant);
        board.setDate(createdDate);

        Board savedBoard = boardRepository.save(board);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBoard);
    }
}
