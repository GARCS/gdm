package de.gdm.ejb;

import java.io.Serializable;
import javax.ejb.Local;

import de.gdm.entity.DeploymentPackageEntity;

@Local
public interface DeploymentPackageService extends Serializable, AbstractService<DeploymentPackageEntity> {

}