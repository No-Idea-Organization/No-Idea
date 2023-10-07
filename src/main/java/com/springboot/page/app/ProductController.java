package com.springboot.page.app;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class ProductController {
	
	//http://localhost:8080
	@GetMapping("/product")
	public Product getProduct() {
		return new Product("Game", 7, "Retro game", 1997);
	}
	
	//http://localhost:8080/product/query?p=test
	@GetMapping("/product/query")
	public Product productQueryParam(@RequestParam(name = "product") String product) {
		return new Product(product,0,"",0);
	}
}
