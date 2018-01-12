package nl.hsleiden.service;

import com.google.inject.Inject;
import nl.hsleiden.model.Product;
import nl.hsleiden.persistence.ProductDAO;

import java.util.ArrayList;

public class ProductService {
	public ProductDAO productDAO;
	@Inject
	public ProductService(ProductDAO productDAO ){
		this.productDAO = productDAO;
	}

	public ArrayList<Product> getAllProducts(){

		return this.productDAO.getAllProducts();
	}



}
