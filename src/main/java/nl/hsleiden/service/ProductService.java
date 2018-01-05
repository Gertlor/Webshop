package nl.hsleiden.service;

import com.google.inject.Inject;
import nl.hsleiden.persistence.ProductDAO;

public class ProductService {
	public ProductDAO productDAO;
	@Inject
	public ProductService(ProductDAO productDAO ){
		this.productDAO = productDAO;
	}


}
