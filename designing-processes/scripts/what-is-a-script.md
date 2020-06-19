---
description: Understand what a Script does in ProcessMaker.
---

# What is a Script?

## Overview

In ProcessMaker, Scripts allow Process Owners and ProcessMaker Developers to write self-contained programmatic actions that can be called from any Process [Request](../../using-processmaker/requests/what-is-a-request.md) at run-time. The same ProcessMaker Script can be deployed in any [Process model](../process-design/). In other words, "write once, use anywhere."

See an example in the following video how ProcessMaker integrates with third-party services Amazon Textract and UiPath Robotic Process Automation \(RPA\) so a loan application workflow scans, analyzes, and intelligently routes a Request and provision a bot accordingly.

* **Intended audience:** Process designers and business analysts
* **Viewing time:** 11 minutes; contains narration

{% embed url="https://vimeo.com/383574552" caption="Script Tasks integrate with third-party services and RPAs in a Process demonstration" %}

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

### ProcessMaker Scripts Run in Short-Lived Docker Containers for Security

ProcessMaker Scripts run securely and in isolation from within [Docker](https://www.docker.com/) containers called ProcessMaker [Script Executors](../../processmaker-administration/script-executor-management/what-is-a-script-executor.md). The ProcessMaker Script Executor for each supported programming language contains the ProcessMaker Software Development Kit \(SDK\) that supports extensibility to provide programmatic interaction with ProcessMaker. When the ProcessMaker instance calls a ProcessMaker Script to run, the ProcessMaker Script Executor for that programming language creates a [Docker container](https://www.docker.com/resources/what-container) corresponding with that programming language, runs the Script, and then destroys the Docker container. This ensures that any malicious script that anyone in your organization might inadvertently introduce to ProcessMaker does not affect the ProcessMaker instance or its hosting environment: Docker containers cannot access them. Furthermore, Docker containers cannot listen for inbound connections; therefore, a Docker container cannot be accessed externally.

When the ProcessMaker Script Executor creates a Docker container to run a ProcessMaker Script, required libraries are already built in that Docker container. Furthermore, all default ProcessMaker Script Executors that run ProcessMaker-supported programming languages also contain the Software Development Kits \(SDKs\) for those languages.

See an example in the following video how to use a ProcessMaker Script Executor that includes a Docker RUN command to package the Google Client class provided by Google into that Script Executor, thereby allowing ProcessMaker Scripts using that Script Executor to successfully call the Google API.

* **Intended audience:** ProcessMaker Administrators, software developers, and coding engineers
* **Viewing time:** 3 minutes; contains narration

{% embed url="https://vimeo.com/428147806" %}

### Design and Test ProcessMaker Scripts in One Environment

ProcessMaker Scripts are designed and tested in [Scripts Editor]().

While designing a ProcessMaker Script, test it before you deploy it. ProcessMaker Scripts are tested within the authoring environment to ensure they function as intended. While testing, do the following:

* Use the JSON data model that you can [preview from your ProcessMaker Screens](../design-forms/screens-builder/preview-a-screen.md) to ensure that variables designed from a ProcessMaker Screen function as intended in your ProcessMaker Script.
* [Incorporate other JSON-formatted data](), such as API keys, to ensure your ProcessMaker Script uses them correctly during your testing.

## Related Topics

{% page-ref page="what-is-a-script.md" %}

{% page-ref page="../../processmaker-administration/script-executor-management/what-is-a-script-executor.md" %}

{% page-ref page="manage-scripts/manage-script-categories/" %}

{% page-ref page="manage-scripts/create-a-new-script.md" %}

{% page-ref page="manage-scripts/search-for-a-script.md" %}

{% page-ref page="manage-scripts/edit-a-script.md" %}

{% page-ref page="manage-scripts/edit-script-configuration.md" %}

{% page-ref page="manage-scripts/duplicate-a-script.md" %}

{% page-ref page="manage-scripts/remove-a-script.md" %}

{% page-ref page="../../package-development-distribution/first-topic.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/c-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/java-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/python-package.md" %}

{% page-ref page="../../package-development-distribution/package-a-connector/r-package.md" %}

