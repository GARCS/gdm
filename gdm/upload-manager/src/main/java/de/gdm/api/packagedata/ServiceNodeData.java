package de.gdm.api.packagedata;

public class ServiceNodeData {
	private String nodeName;
	private String linuxServiceScript;
	private String startScript;
	private String stopScript;

	public String getNodeName() {
		return nodeName;
	}

	public void setNodeName(String nodeName) {
		this.nodeName = nodeName;
	}

	public String getLinuxServiceScript() {
		return linuxServiceScript;
	}

	public void setLinuxServiceScript(String linuxServiceScript) {
		this.linuxServiceScript = linuxServiceScript;
	}

	public String getStartScript() {
		return startScript;
	}

	public void setStartScript(String startScript) {
		this.startScript = startScript;
	}

	public String getStopScript() {
		return stopScript;
	}

	public void setStopScript(String stopScript) {
		this.stopScript = stopScript;
	}
}
