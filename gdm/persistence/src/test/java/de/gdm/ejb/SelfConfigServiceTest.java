package de.gdm.ejb;

import org.jboss.arquillian.junit.Arquillian;
import org.junit.Assert;
import org.junit.runner.RunWith;

import de.gdm.ejb.SelfConfigService;
import de.gdm.entity.SelfConfigEntity;

@RunWith(Arquillian.class)
public class SelfConfigServiceTest extends AbstractServiceTest<SelfConfigService, SelfConfigEntity> {
	
	@Override
	public void setService(SelfConfigService service) {
		this.service = service;
	}

	@Override
	public void testCreate() {
		entity = new SelfConfigEntity();
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