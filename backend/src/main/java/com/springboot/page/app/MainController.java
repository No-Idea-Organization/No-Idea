package com.springboot.page.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RestController
public class MainController {
	
	//http://localhost:8080/main
	
	@GetMapping("/main")
	public String request() {
		return "Hello World";
	}
}
