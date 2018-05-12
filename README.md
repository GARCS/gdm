# Introduction
This project implements a deployment manager for nodes of a [GARCS](https://github.com/GARCS) system. It is a JEE application using the [LireJarp](https://github.com/witchpou/lirejarp) project template. See reference if you want to know more.

# What does it do?
Managing deployment means, that you can upload a structured component (see package format) to a robot system. GDM analyzes uploaded package, transports it to a destination environment, prepares execution as a Systemd service and eventually runs it. It also provides an overview of running nodes and their version information.  

# How does it work?

## Package format

```json
{
  "uniqueNodeIdentifier":"de.starwit.sample",
  "version":"0.0.1",
  "prio":"10",
  "depends": [],
  "technology": "JAVA",
  "runtimeData": {
         "javaVersion": 8
       },
  "serviceNodes" : [
    {
      "nodeName" : "sampleNode",
      "linuxServiceScript" : "sample-node.service",
      "startScript" : "startup.sh",
      "stopScript" : "shutdown.sh"
    }
  ]
}

```

# Installation
How to run this software.

## Prerequisites ##
* Java 8 SE Development Kit (binaries on PATH, JAVA_HOME set)
* Maven (mvn on PATH)
* Ant (on PATH)
* Passion for software development ;)

## Quick Introduction ##

* git clone whole repo
* run ```ant setup_project```
* browse to http://localhost:8080/flosdeploymentmanager

# Base Architecture
This application makes use of LireJarp, so here is some detail how that works.

## LireJarp

Yet still a lot of boiler plate code needs to be written and creating JEE application quickly remains a challenge. Therefore approach described here shall provide a guide in how to setup an architecture implementing persistence and a RESTful interface layer. To do that properly a (reusable) pattern of inheritance + generic data types is proposed. This (yet unnamed) pattern is applied in persistence, Enterprise Java Beans and in RESTful web service implementation and therefore proved to be quite flexible. If you want to build an web-application, Project Builder provides you a platform to fulfill your ideas. Nevertheless, you have all flexibility to change your application. If you want to have a software which is easy to implement and easy to change, you should use standards. You will find these standards in the flosdeploymentmanager project template.

LireJarp is the template for [LireJarp Project Builder](https://github.com/witchpou/lj-projectbuilder) and enables you to setup JEE projects quickly. It is driven by the idea to provide a project template 
covering:
* rapid project setup
* code standardization and naming conventions
* possibility to individually adopt code 
* create your own codetemplates
* rapid GUI design
** designer friendly HMTL and AngularJS frontend
** fast one-click deployment of UI changes

## Further Information: 
* [LireJarp Project Builder](https://wp.fdm.de/ljprojectbuilder/de/)
* [article in german](https://wp.fdm.de/wp-content/uploads/2017/02/03-2016-Java-aktuell-Anett-Hübner_Java-Enterprise-Anwendungen-effizient-...-4.pdf)
