package nl.hsleiden.persistence;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.*;
import java.util.ArrayList;
import javax.inject.Singleton;
import javax.ws.rs.core.Response;

import com.google.inject.Inject;
import nl.hsleiden.HttpResponse;
import nl.hsleiden.model.Account;

import nl.hsleiden.service.DatabaseService;

@Singleton
public class AccountDAO
{
	private PreparedStatement createStatement;
	private PreparedStatement authenticateStatement;
	private PreparedStatement getAccountByIdStatement;

	public DatabaseService databaseService;
	@Inject
	public AccountDAO(DatabaseService databaseService) {
		this.databaseService = databaseService;
		prepareStatements();

	}

	private void prepareStatements(){
		try{
			createStatement = databaseService.getConnection().prepareStatement("INSERT INTO account(acc_isadmin,acc_firstname, acc_prefix, acc_lastname, acc_psw, acc_email, acc_house_nr, acc_street, acc_zipcode, acc_town) VALUES (false, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
			authenticateStatement = databaseService.getConnection().prepareStatement("SELECT geb_id, geb_voornaam, geb_tussenvoegsel, geb_achternaam, geb_gebruikersnaam, geb_wachtwoord, geb_isadmin, geb_deaclient, geb_deaprod FROM gebruiker WHERE geb_gebruikersnaam = ? AND geb_wachtwoord = ?");
			getAccountByIdStatement = databaseService.getConnection().prepareStatement("SELECT * FROM account WHERE acc_id = ?");
		}
		catch(SQLException e){
			System.out.println("Error in the Prepare Statements (in AccountDao" + e.getStackTrace());
		}
	}

	public HttpResponse createAccount(Account account){
		try {
			createStatement.setString(1,account.getFirstname());
			createStatement.setString(2,account.getPrefix());
			createStatement.setString(3,account.getLastname());
			createStatement.setString(4,account.getPassword());
			createStatement.setString(5,account.getEmail());
			createStatement.setInt(6,account.getHouse_nr());
			createStatement.setString(7,account.getStreet());
			createStatement.setString(8, account.getZipcode());
			createStatement.setString(9,account.getTown());

			createStatement.executeUpdate();
			return new HttpResponse(Response.Status.OK, "Account succesvol toegevoegd");
		} catch (SQLException e) {
			e.printStackTrace();
			return new HttpResponse(Response.Status.INTERNAL_SERVER_ERROR, "Er is iets mis gegaan bij het aanmaken van een account");
		}
	}


	public boolean authenticateAccount(String username, String password){
		try {

			authenticateStatement.setString(1, username);
			authenticateStatement.setString(2, password);

			ResultSet authenicate = authenticateStatement.executeQuery();

			if(authenicate.next()){
				return true;
			} else {
				return false;
			}


		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}

	public Account getAccountById(int id){
		try{
			getAccountByIdStatement.setInt(1, id);

			ResultSet resultSet = getAccountByIdStatement.executeQuery();

			if (!resultSet.next()) {
				return null;
			}

			Account account = new Account();
			account.setFirstname(resultSet.getString("acc_firstname"));
			account.setPrefix(resultSet.getString("acc_prefix"));
			account.setLastname(resultSet.getString("acc_lastname"));
			account.setEmail(resultSet.getString("acc_email"));
			account.setIsadmin(resultSet.getBoolean("acc_isadmin"));
			account.setId(resultSet.getInt("acc_id"));
			account.setStreet(resultSet.getString("acc_street"));
			account.setHouse_nr(resultSet.getInt("acc_house_nr"));
			account.setTown(resultSet.getString("acc_town"));
			account.setZipcode(resultSet.getString("acc_zipcode"));

			return account;
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		return null;
	}

}
