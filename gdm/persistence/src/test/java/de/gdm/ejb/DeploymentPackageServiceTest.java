package de.gdm.ejb;

import org.jboss.arquillian.junit.Arquillian;
import org.junit.Assert;
import org.junit.runner.RunWith;

import de.gdm.ejb.DeploymentPackageService;
import de.gdm.entity.DeploymentPackageEntity;

@RunWith(Arquillian.class)
public class DeploymentPackageServiceTest extends AbstractServiceTest<DeploymentPackageService, DeploymentPackageEntity> {
	
	@Override
	public void setService(DeploymentPackageService service) {
		this.service = service;
	}

	@Override
	public void testCreate() {
		entity = new DeploymentPackageEntity();
		entity = getService().create(entity);
		ID = entity.getId();
		Assert.assertNotNull(entity.getId());
		Assert.fail("Not yet implemented");
		
	}

	@Override
	public void testUpdate() {
		entity = getService().findById(ID);
		entity = getService().update(entity);
		Assert.fail("Not yet implemented");
	}

}