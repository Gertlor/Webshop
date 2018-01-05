package nl.hsleiden.resource;

import com.fasterxml.jackson.annotation.JsonView;
import com.google.inject.Inject;
import com.google.inject.Singleton;
import io.dropwizard.auth.Auth;
import nl.hsleiden.ApiConfiguration;
import nl.hsleiden.HttpResponse;
import nl.hsleiden.View;
import nl.hsleiden.model.Account;
import nl.hsleiden.model.Product;
import nl.hsleiden.service.ProductService;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import javax.annotation.security.RolesAllowed;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;

@Singleton
@Path("/product")
@Produces(MediaType.APPLICATION_JSON)
public class ProductResource {

	private final ProductService productService;
	private final ApiConfiguration configuration;

	@Inject
	public ProductResource(ProductService productService, ApiConfiguration configuration) {
		this.productService = productService;
		this.configuration = configuration;
	}
}