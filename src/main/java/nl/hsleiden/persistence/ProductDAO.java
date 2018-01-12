package nl.hsleiden.persistence;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import nl.hsleiden.HttpResponse;
import nl.hsleiden.model.Account;
import nl.hsleiden.model.Product;
import nl.hsleiden.service.DatabaseService;

import javax.ws.rs.core.Response;
import java.net.HttpRetryException;
import java.sql.*;
import java.util.ArrayList;

@Singleton
public class ProductDAO {

	Connection dbConnection;

	private PreparedStatement getAllProductsStatement;
	private PreparedStatement getProductsInformationStatement;

	@Inject
	public ProductDAO(DatabaseService databaseService) {
		this.dbConnection = databaseService.getConnection();
		prepareStatements();
	}


	private void prepareStatements(){
		try {
			getAllProductsStatement = dbConnection.prepareStatement("SELECT * FROM product");
			getProductsInformationStatement = dbConnection.prepareStatement("SELECT * FROM product WHERE prod_id = ?");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}


	public ArrayList<Product> getAllProducts(){
		ArrayList<Product> products = new ArrayList<>();
		try {
			ResultSet rs = getAllProductsStatement.executeQuery();

			while(rs.next() ){
				Product product = makeProduct(rs);
				if(product == null){
					continue;
				}
				products.add(product);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return products;


	}

	public Product makeProduct(ResultSet rs){
		try {
			return new Product(
					rs.getInt("prod_id"),
					rs.getString("prod_name"),
					rs.getString("prod_description"),
					rs.getString("prod_img_path"),
					rs.getDouble("prod_price")
					);

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

	public Product getProductsInformation(int prodid){
		try {
			getProductsInformationStatement.setInt(1, prodid);
			ResultSet resultSet = getProductsInformationStatement.executeQuery();
			if (resultSet.next()){
				Product product = makeProduct(resultSet);
				return product;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

}
