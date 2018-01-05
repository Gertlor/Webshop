package nl.hsleiden.persistence;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import nl.hsleiden.HttpResponse;
import nl.hsleiden.model.Account;
import nl.hsleiden.model.Product;
import nl.hsleiden.service.DatabaseService;

import javax.ws.rs.core.Response;
import java.net.HttpRetryException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@Singleton
public class ProductDAO {

	Connection dbConnection;

	@Inject
	public ProductDAO(DatabaseService databaseService) {
		this.dbConnection = databaseService.getConnection();
	}

}
