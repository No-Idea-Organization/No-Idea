package com.springboot.page.app;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class lab00 {
	public static void main(String[] args) {
		String filePath = "db.csv";
		
		List<String[]> db = new ArrayList<>();
		
		try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
			String line;
			while((line = br.readLine()) != null) {
				String[] values = line.split(",");
				db.add(values);
			}
			
			for(int i = 0; i < db.size(); i++) {
				for(int j = 0; j < db.get(i).length; j++) {
					System.out.print(db.get(i)[j] + " ");
				}
				System.out.println();
			}
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}
