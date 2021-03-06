package nl.hsleiden.service;

import nl.hsleiden.HttpResponse;
import nl.hsleiden.model.Account;
import nl.hsleiden.persistence.AccountDAO;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.ArrayList;

/**
 * Documentatie...
 *
 * @author Guus
 * @since 1.0, 6-12-2017
 */
@Singleton
public class AccountService {

	private final AccountDAO accountDAO;

	@Inject
	public AccountService(AccountDAO accountDAO) {

		this.accountDAO = accountDAO;
	}

	public HttpResponse createAccount(Account account) {
		return accountDAO.createAccount(account);
	}


	public Account getAccountById(int id) {

		return(accountDAO.getAccountById(id));
	}

	public Boolean attemptToLogin(String username, String password){
		boolean succesfull = accountDAO.authenticateAccount(username,password);
		return succesfull;
	}

	public Account getAccountByEmail(String username){
		return accountDAO.getAccountByEmail(username);
	}




}
