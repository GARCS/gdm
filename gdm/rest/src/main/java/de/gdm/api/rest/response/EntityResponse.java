package de.gdm.api.rest.response;

import javax.xml.bind.annotation.XmlRootElement;

import de.gdm.entity.AbstractEntity;

@XmlRootElement
public class EntityResponse<E extends AbstractEntity> extends Response<E>{
	
	public EntityResponse() {
		//default constructor
	}
	
	public EntityResponse(E result) {
		super(result);
	}
		
}
