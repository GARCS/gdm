package de.gdm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.validation.constraints.Min;
import javax.persistence.EnumType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Max;
import org.hibernate.validator.constraints.NotBlank;

import de.gdm.entity.enums.Technology;

import javax.persistence.Temporal;
import javax.persistence.Enumerated;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import java.util.Date;

@XmlRootElement
@Entity
@Table(name="DEPLOYMENTPACKAGE", uniqueConstraints= {
		@UniqueConstraint(columnNames = {"uniqueNodeIdentifier", "version"})
})
public class DeploymentPackageEntity extends AbstractEntity {
	
	private static final long serialVersionUID = 1L;
	
	//domain attributes
	@NotNull
	private Date uploadDate;
	
	@NotBlank
	private String uniqueNodeIdentifier;
	
	@NotNull
	@Min(value = 0)
	@Max(value = 10)
	private Integer prio;
	
	@NotNull
	private Technology technology;
	
	@NotBlank
	private String uploadPath;
	
	private String version;
	
	@NotBlank
	private String uploadFileName;
	
	private Integer isInstalled;
	
	private Integer needsRoot;
	
	

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="UPLOADDATE", nullable = false)
	public Date getUploadDate() {
		return uploadDate;
	}
	
	public void setUploadDate(Date uploadDate) {
		this.uploadDate = uploadDate;
	}

	@Column(name="UNIQUENODEIDENTIFIER", nullable = false)
	public String getUniqueNodeIdentifier() {
		return uniqueNodeIdentifier;
	}
	
	public void setUniqueNodeIdentifier(String uniqueNodeIdentifier) {
		this.uniqueNodeIdentifier = uniqueNodeIdentifier;
	}

	@Column(name="PRIO", nullable = false)
	public Integer getPrio() {
		return prio;
	}
	
	public void setPrio(Integer prio) {
		this.prio = prio;
	}

	@Enumerated(EnumType.STRING)
	@Column(name="TECHNOLOGY", nullable = false)
	public Technology getTechnology() {
		return technology;
	}
	
	public void setTechnology(Technology technology) {
		this.technology = technology;
	}

	@Column(name="UPLOADPATH", nullable = false)
	public String getUploadPath() {
		return uploadPath;
	}
	
	public void setUploadPath(String uploadPath) {
		this.uploadPath = uploadPath;
	}

	@Column(name="VERSION")
	public String getVersion() {
		return version;
	}
	
	public void setVersion(String version) {
		this.version = version;
	}

	@Column(name="UPLOADFILENAME", nullable = false)
	public String getUploadFileName() {
		return uploadFileName;
	}
	
	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	@Column(name="ISINSTALLED")
	public Integer getIsInstalled() {
		return isInstalled;
	}
	
	public void setIsInstalled(Integer isInstalled) {
		this.isInstalled = isInstalled;
	}

	@Column(name="NEEDSROOT")
	public Integer getNeedsRoot() {
		return needsRoot;
	}
	
	public void setNeedsRoot(Integer needsRoot) {
		this.needsRoot = needsRoot;
	}
}