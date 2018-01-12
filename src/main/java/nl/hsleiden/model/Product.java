package nl.hsleiden.model;


import com.fasterxml.jackson.annotation.JsonProperty;

public class Product {

	@JsonProperty
	private int id;

	@JsonProperty
	private String name;

	@JsonProperty
	private String description;

	@JsonProperty
	private String path;

	@JsonProperty
	private double price;

	public Product(int id, String name, String description, String path, double price) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.path = path;
		this.price = price;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

	public String getPath() {
		return path;
	}

	public double getPrice() {
		return price;
	}

	public Product() {

	}


}