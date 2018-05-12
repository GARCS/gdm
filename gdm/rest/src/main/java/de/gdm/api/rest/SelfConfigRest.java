package de.gdm.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.gdm.api.rest.response.EntityResponse;
import de.gdm.ejb.SelfConfigService;
import de.gdm.entity.SelfConfigEntity;

@Path("/selfconfig")
@Consumes("application/json")
@Produces("application/json")
public class SelfConfigRest extends AbstractRest<SelfConfigEntity> {
	
	@Inject
	protected SelfConfigService service;
	
	@Override
	protected SelfConfigService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<SelfConfigEntity> create(SelfConfigEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<SelfConfigEntity> update(SelfConfigEntity entity) {
		return super.updateGeneric(entity);
	}
}