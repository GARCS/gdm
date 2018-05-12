package de.gdm.api.packagedata;

import java.util.List;

import de.gdm.entity.enums.Technology;

public class PackageMetaData {
	private String uniqueNodeIdentifier;
	private String version;
	private int prio;
	private Technology technology;
	private List<String> depends;
	private JavaRuntimeData runtimeData;
	private List<ServiceNodeData> serviceNodes;

	public String getUniqueNodeIdentifier() {
		return uniqueNodeIdentifier;
	}

	public void setUniqueNodeIdentifier(String uniqueNodeIdentifier) {
		this.uniqueNodeIdentifier = uniqueNodeIdentifier;
	}

	public int getPrio() {
		return prio;
	}

	public void setPrio(int prio) {
		this.prio = prio;
	}

	public Technology getTechnology() {
		return technology;
	}

	public void setTechnology(Technology technology) {
		this.technology = technology;
	}

	public List<String> getDepends() {
		return depends;
	}

	public void setDepends(List<String> depends) {
		this.depends = depends;
	}

	public JavaRuntimeData getRuntimeData() {
		return runtimeData;
	}

	public void setRuntimeData(JavaRuntimeData runtimeData) {
		this.runtimeData = runtimeData;
	}

	public List<ServiceNodeData> getServiceNodes() {
		return serviceNodes;
	}

	public void setServiceNodes(List<ServiceNodeData> serviceNodes) {
		this.serviceNodes = serviceNodes;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

}
