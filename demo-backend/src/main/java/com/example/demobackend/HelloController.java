package com.example.demobackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String sayHello() {
        return "안녕하세요! 스프링 부트 연동 성공입니다 🎉";
    }
}