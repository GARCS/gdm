package de.gdm.ejb;

import java.io.Serializable;
import javax.ejb.Local;

import de.gdm.entity.SelfConfigEntity;

@Local
public interface SelfConfigService extends Serializable, AbstractService<SelfConfigEntity> {

}