package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello(){
        return "ㅎㅇㅎㅇ. 현재 서버시간은 "+new Date() +"입니다. \n";
    }
}
