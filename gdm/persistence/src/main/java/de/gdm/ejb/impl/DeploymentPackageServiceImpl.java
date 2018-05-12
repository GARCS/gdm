package de.gdm.ejb.impl;


import javax.ejb.Stateless;

import de.gdm.ejb.DeploymentPackageService;
import de.gdm.entity.DeploymentPackageEntity;

@Stateless(name = "DeploymentPackageService")
public class DeploymentPackageServiceImpl extends AbstractServiceImpl<DeploymentPackageEntity> implements DeploymentPackageService {
	
	private static final long serialVersionUID = 1L;

}



    
