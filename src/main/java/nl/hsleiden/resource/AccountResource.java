package nl.hsleiden.resource;

import com.google.inject.Singleton;
import io.dropwizard.auth.Auth;
import nl.hsleiden.model.Account;
import nl.hsleiden.service.AccountService;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Singleton
@Path("/account")
@Produces(MediaType.APPLICATION_JSON)
public class AccountResource
{
	private final AccountService accountService;


	@Inject
	public AccountResource(AccountService accountService) {
		this.accountService = accountService;

	}

	@POST
	@Path("register")
	public Response createAccount(Account account) {
		try {
			return accountService.createAccount(account).send();
		} catch(javax.validation.ValidationException e){
			ValidationExceptionMapper validationExceptionMapper = new ValidationExceptionMapper();
			return validationExceptionMapper.toResponse(e);
		}
	}

	@GET
	@Path("me")
	public Account getAuthenticatedAccount(@Auth Account account){
		return account;
	}
}