package de.gdm.api.restapp;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import de.gdm.api.rest.DeploymentPackageRest;
import de.gdm.api.rest.SelfConfigRest;


@ApplicationPath("/api")
public class RestfulApplication extends Application {

	@Override
	public Set<Class<?>> getClasses() {
		final Set<Class<?>> classes = new HashSet<Class<?>>();
		// register root resource
		classes.add(SelfConfigRest.class);
		classes.add(DeploymentPackageRest.class);

		return classes;
	}

}