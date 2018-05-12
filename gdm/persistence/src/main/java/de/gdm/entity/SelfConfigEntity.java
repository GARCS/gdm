package de.gdm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name="SELFCONFIG")
public class SelfConfigEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	private String busURI;
	
	private String uploadPath;
	
	private String packagePath;
	
	

	@Column(name="BUSURI")
	public String getBusURI() {
		return busURI;
	}
	
	public void setBusURI(String busURI) {
		this.busURI = busURI;
	}

	@Column(name="UPLOADPATH")
	public String getUploadPath() {
		return uploadPath;
	}
	
	public void setUploadPath(String uploadPath) {
		this.uploadPath = uploadPath;
	}

	@Column(name="PACKAGEPATH")
	public String getPackagePath() {
		return packagePath;
	}
	
	public void setPackagePath(String packagePath) {
		this.packagePath = packagePath;
	}
}