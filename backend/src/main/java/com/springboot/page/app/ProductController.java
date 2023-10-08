package com.springboot.page.app;

import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class ProductController {
	
	private List<String[]> loadDB() {
		String filePath = "db.csv";
		
		List<String[]> db = new ArrayList<>();
		
		try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
			String line;
			while((line = br.readLine()) != null) {
				String[] values = line.split(",");
				db.add(values);
			}
		} catch (IOException e) {
			System.out.println(e);
		}
		
		return db;
	}
	
	//http://localhost:8080
	@GetMapping("/product")
	public Product getProduct() {
		return new Product("Game", "Publish year", "Category", "Sub-Category", "Multiplayer?", "Rating", "Image-Url", "Description");
	}
	
	//http://localhost:8080/product/query?p=test
	@GetMapping("/product/query")
	public Product productQueryParam(@RequestParam(name = "product") String product) {
		List<String[]> db = loadDB();
		
		for(int i = 0; i < db.size(); i++) {
			if(db.get(i)[0].equals(product)) {
				return new Product(db.get(i)[0], db.get(i)[1], db.get(i)[2], db.get(i)[3], db.get(i)[4], db.get(i)[5], db.get(i)[6], db.get(i)[7]);
			}
		}
		return new Product("DOES NOT EXIST","","","","","","","");
	}
}
