package de.gdm.ejb;

import java.io.InputStream;

import javax.ejb.Local;

import de.gdm.entity.AbstractEntity;
import de.gdm.exception.ImportException;

@Local
public interface DataImportExportService {
	
	void importAll();

	void importEntityData(Class<? extends AbstractEntity> entityClass,
			InputStream in) throws ImportException;
}
