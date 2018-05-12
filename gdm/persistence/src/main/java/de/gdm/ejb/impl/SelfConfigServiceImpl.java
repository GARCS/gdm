package de.gdm.ejb.impl;


import javax.ejb.Stateless;

import de.gdm.ejb.SelfConfigService;
import de.gdm.entity.SelfConfigEntity;

@Stateless(name = "SelfConfigService")
public class SelfConfigServiceImpl extends AbstractServiceImpl<SelfConfigEntity> implements SelfConfigService {
	
	private static final long serialVersionUID = 1L;

}



    
