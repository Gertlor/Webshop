package nl.hsleiden.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;

import javax.security.auth.Subject;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.security.Principal;


public class Account implements Principal{

	@JsonProperty
	private int id;

	@JsonProperty
	private boolean isadmin;

	@JsonProperty
	private String firstname;

	@JsonProperty
	private String prefix;

	@JsonProperty
	private String lastname;

	@JsonProperty
	private String email;

	@JsonProperty
	private String street;

	@JsonProperty
	private int house_nr;

	@JsonProperty
	private String zipcode;

	@JsonProperty
	private String town;

	@JsonProperty
	private String password;

	public Account(){

	}

	public Account(String firstname, String lastname, String prefix, String email, String password, Boolean isadmin, String street, int house_nr, String zipcode, String town){
		this.firstname = firstname;
		this.lastname = lastname;
		this.prefix = prefix;
		this.email = email;
		this.password = password;
		this.isadmin = isadmin;
		this.street = street;
		this.house_nr = house_nr;
		this.zipcode = zipcode;
		this.town = town;

	}
	public Account(int id, String firstname, String lastname, String prefix, String email, String password, Boolean isadmin, String street, int house_nr, String zipcode, String town){
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.prefix = prefix;
		this.email = email;
		this.password = password;
		this.isadmin = isadmin;
		this.house_nr = house_nr;
		this.zipcode = zipcode;
		this.town = town;
		this.street = street;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isIsadmin() {
		return isadmin;
	}

	public void setIsadmin(boolean isadmin) {
		this.isadmin = isadmin;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getHouse_nr() {
		return house_nr;
	}

	public void setHouse_nr(int house_nr) {
		this.house_nr = house_nr;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String getName() {
		return email;
	}

	public boolean equals(Account account) {
		return email.equals(account.getEmail());
	}


}
