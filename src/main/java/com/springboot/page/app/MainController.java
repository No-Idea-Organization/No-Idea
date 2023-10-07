package com.springboot.page.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	
	//http://localhost:8080/main
	
	@GetMapping("/main")
	public String request() {
		return "Hello World";
	}
}
