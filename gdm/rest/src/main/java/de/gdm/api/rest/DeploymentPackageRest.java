package de.gdm.api.rest;


import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import de.gdm.api.rest.response.EntityResponse;
import de.gdm.ejb.DeploymentPackageService;
import de.gdm.entity.DeploymentPackageEntity;

@Path("/deploymentpackage")
@Consumes("application/json")
@Produces("application/json")
public class DeploymentPackageRest extends AbstractRest<DeploymentPackageEntity> {
	
	@Inject
	protected DeploymentPackageService service;
	
	@Override
	protected DeploymentPackageService getService() {
		return service;
	}
	
	//Create
	@Path("/")
	@PUT
	public EntityResponse<DeploymentPackageEntity> create(DeploymentPackageEntity entity) {
		return super.createGeneric(entity);
	}

	//Update
	@Path("/")
	@POST
	public EntityResponse<DeploymentPackageEntity> update(DeploymentPackageEntity entity) {
		return super.updateGeneric(entity);
	}
}