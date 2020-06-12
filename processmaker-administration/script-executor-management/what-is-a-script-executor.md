---
description: Understand what a ProcessMaker Script Executor is.
---

# What is a Script Executor?

## Overview

In ProcessMaker, a Script Executor is a [Docker](https://www.docker.com/) container for a specifically supported programming language to run [ProcessMaker Scripts](../../designing-processes/scripts/what-is-a-script.md) developed in that programming language.

When the ProcessMaker instance calls a ProcessMaker Script to run, the ProcessMaker Script Executor for that programming language creates a [Docker container](https://www.docker.com/resources/what-container) corresponding with that programming language, runs the Script, and then destroys the Docker container. This ensures that any malicious script that anyone in your organization might inadvertently introduce to ProcessMaker does not affect the ProcessMaker instance or its hosting environment: Docker containers cannot access them. Furthermore, Docker containers cannot listen for inbound connections; therefore, a Docker container cannot be accessed externally.

When the ProcessMaker Script Executor creates a Docker container to run a ProcessMaker Script, required libraries are already built in that Docker container. Furthermore, all default ProcessMaker Script Executors that run ProcessMaker-supported programming languages also contain the Software Development Kits \(SDKs\) for those languages.

ProcessMaker Script Executors not only manage Docker containers to run ProcessMaker Scripts. Savvy ProcessMaker Administrators may add [Docker commands](https://docs.docker.com/engine/reference/commandline/docker/) and customized code to new or default ProcessMaker Script Executors that adds custom packages that allow Scripts to call sanctioned third-party Application Program Interfaces \(APIs\) and SDKs. ProcessMaker designers who develop ProcessMaker Scripts may make calls and requests to those APIs and SDKs via customized Script Executors. Since the ProcessMaker Administrator must provide the Docker commands and configuration to a customized ProcessMaker Script Executor, that Administrator controls access to sanctioned APIs and SDKs to those ProcessMaker designers to ensure security in that ProcessMaker instance.

See an example in the following video how to use a ProcessMaker Script Executor that includes a Docker RUN command to package the Google Client class provided by Google into that Script Executor, thereby allowing ProcessMaker Scripts using that Script Executor to successfully call the Google API.

* **Intended audience:** ProcessMaker Administrators, software developers, and coding engineers
* **Viewing time:** 3 minutes; contains narration

{% embed url="https://vimeo.com/428147806" caption="Video demonstration how to use a ProcessMaker Script Executor" %}

### Supported Programming Languages

ProcessMaker supports the following programming languages in the open-source edition:

* PHP
* Lua
* JavaScript

ProcessMaker Enterprise edition supports the following additional programming languages:

* C\# \(requires the [C\# package](../../package-development-distribution/package-a-connector/c-package.md) in your ProcessMaker instance\)
* Java \(requires the [Java package](../../package-development-distribution/package-a-connector/java-package.md) in your ProcessMaker instance\)
* Python \(requires the [Python package](../../package-development-distribution/package-a-connector/python-package.md) in your ProcessMaker instance\)
* R \(requires the [R package](../../package-development-distribution/package-a-connector/r-package.md) in your ProcessMaker instance\)

## Related Topics

{% page-ref page="../../designing-processes/scripts/what-is-a-script.md" %}

{% page-ref page="../../package-development-distribution/first-topic.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/c-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/java-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/python-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/r-package.md" %}

