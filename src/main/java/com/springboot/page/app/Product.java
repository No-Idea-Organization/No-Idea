package com.springboot.page.app;

public class Product {
	private String title;
	private int rating;
	private String description;
	private int yearPublished;
	
	public Product(String title, int rating, String description, int yearPublished) {
		super();
		this.title = title;
		this.rating = rating;
		this.description = description;
		this.yearPublished = yearPublished;
	}
		
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getYearPublished() {
		return yearPublished;
	}
	public void setYearPublished(int yearPublished) {
		this.yearPublished = yearPublished;
	}
}
