package com.springboot.page.app;

public class Product {
	private String title;
	private String publishDate;
	private String category;
	private String subCategory;
	private String isMultiplayer;
	private String rating;
	private String imageUrl;
	private String description;
	
	public Product(String title, String publishDate, String category, String subCategory, String isMultiplayer, String rating, String imageUrl, String description) {
		super();
		this.title = title;
		this.publishDate = publishDate;
		this.category = category;
		this.subCategory = subCategory;
		this.isMultiplayer = isMultiplayer;
		this.rating = rating;
		this.imageUrl = imageUrl;
		this.description = description;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getPublishDate() {
		return publishDate;
	}
	public void setPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getSubCategory() {
		return subCategory;
	}
	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}
	public String getIsMultiplayer() {
		return isMultiplayer;
	}
	public void setIsMultiplayer(String isMultiplayer) {
		this.isMultiplayer = isMultiplayer;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
