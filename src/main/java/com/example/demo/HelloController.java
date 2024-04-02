package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello(){
        return "kjlkjlakjdf. 현재 시간은 "+new Date() +"입니다. \n";
    }
}
