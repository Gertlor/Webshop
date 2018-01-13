package nl.hsleiden.service;

import com.google.inject.Inject;
import nl.hsleiden.HttpResponse;
import nl.hsleiden.model.Account;
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

	public HttpResponse createProduct(Product product) {
		return productDAO.createProduct(product);
	}

	public Product getProductsInformation(int prodid) {
		return productDAO.getProductsInformation(prodid);
	}



}
