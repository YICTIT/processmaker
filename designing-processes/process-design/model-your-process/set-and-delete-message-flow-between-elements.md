---
description: >-
  Indicate messaging in your Process model by setting Message Flows elements
  between elements in separate Pool elements.
---

# Message Flow Element

## Overview

In a Process model, Message Flow elements represent messaging between elements of \(or within\) one [Pool](process-modeling-element-descriptions.md#pool) element to elements of \(or within\) another Pool element. Message Flow elements cannot connect to Process model elements within the same Pool element. Message Flow elements are not to be confused with [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) elements.

Use Message Flow elements to represent collaboration and transfer Request data from one Pool to another. Since each Pool element in a Process uses its own [Request](../../../using-processmaker/requests/what-is-a-request.md) and Request data, use Message Flow elements to exchange data and information between separate Pool elements and/or elements within those Pool elements.

These messages indicate the transfer of Request data between separate Process model elements. Use a [Text Annotation](process-modeling-element-descriptions.md#text-annotation) element to add descriptive information about the nature of the data transfer.

In Process Modeler, Flow indicators display when you click an element in the Process model. The dotted-line Flow indicator is for Message Flow elements \(highlighted below\).

![Message Flow indicator \(highlighted\) on a selected Process model element](../../../.gitbook/assets/message-flow-indicator-process-modeler-designer.png)

### Incoming and Outgoing Message Flow

From the context of a Process model element associated with a Message Flow element, that Message Flow element can be "incoming" or "outgoing." Consider the following Process model example to demonstrate their differences.

![Message Flow element is outgoing for Task 1, but incoming for Task 2](../../../.gitbook/assets/message-flow-between-pool-elements-process-model-designer.png)

Below are the differences between incoming and outgoing Message Flow elements:

* **Incoming:** An incoming Message Flow element comes from its connecting element. In the Process model example above, the Message Flow element is incoming to the "Task 2" element.
* **Outgoing:** An outgoing Message Flow element goes to the connecting element. In the Process model example above, the Message Flow element is outgoing from the "Task 1" element. The outgoing Message Flow element must originate from a separate Pool element than from where it connects.

### Restrictions on Message Flow Elements

The following BPMN 2.0 elements do not use outgoing Message Flow elements:

* ​[Start Timer Event](process-modeling-element-descriptions.md#start-timer-event) element
* [Message Start Event](process-modeling-element-descriptions.md#message-start-event) element
* [Intermediate Timer Event](process-modeling-element-descriptions.md#intermediate-timer-event) element
* [Intermediate Signal Catch Event](process-modeling-element-descriptions.md#intermediate-signal-catch-event) element
* [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event) element
* [End Event](process-modeling-element-descriptions.md#end-event) element
* [Message End Event](process-modeling-element-descriptions.md#message-end-event) element
* [Error End Event](process-modeling-element-descriptions.md#error-end-event) element
* [Signal End Event](process-modeling-element-descriptions.md#signal-end-event) element
* [Terminate End Event](process-modeling-element-descriptions.md#terminate-end-event) element
* [Boundary Timer Event](process-modeling-element-descriptions.md#boundary-timer-event) element
* [Boundary Error Event](process-modeling-element-descriptions.md#boundary-error-event) element
* [Boundary Signal Event](process-modeling-element-descriptions.md#boundary-signal-event) element
* [Boundary Message Event](process-modeling-element-descriptions.md#boundary-message-event) element
* [Script Task](process-modeling-element-descriptions.md#script-task) element
* [Manual Task](process-modeling-element-descriptions.md#manual-task) element
* [Sub Process](process-modeling-element-descriptions.md#sub-process) element
* [Exclusive Gateway](process-modeling-element-descriptions.md#exclusive-gateway) element
* [Inclusive Gateway](process-modeling-element-descriptions.md#inclusive-gateway) element
* [Parallel Gateway](process-modeling-element-descriptions.md#parallel-gateway) element
* [Event-Based Gateway](process-modeling-element-descriptions.md#event-based-gateway) element
* [Text Annotation](process-modeling-element-descriptions.md#text-annotation) element
* [Association](process-modeling-element-descriptions.md#association) element

## Permissions Required

Your ProcessMaker user account or group membership must have the following permissions to configure Message Flow elements in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Connect the Message Flow Element Between Elements in Separate Pool Elements

{% hint style="info" %}
[Permissions are required to do this](set-and-delete-message-flow-between-elements.md#permissions-required).
{% endhint %}

Follow these steps to set the Message Flow element between elements in separate Pool elements:

1. ​[View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays. Ensure that the Process model has at least two \(2\) Pool elements from which to establish Message Flow between them.
3. From one Pool element, select the Process model element to which to establish messaging via the Message Flow element. Available options display to the right of the selected element. Process model element types that [do not support the Message Flow element](set-and-delete-message-flow-between-elements.md#restrictions-on-message-flow-elements) do not have the Message Flow indicator as highlighted below.  

   ![](../../../.gitbook/assets/message-flow-indicator-process-modeler-designer.png)

4. Click the **Message Flow** icon![](../../../.gitbook/assets/message-flow-icon-process-modeler-processes.png).
5. Do one of the following:
   * Click the second Pool element to indicate messaging between the two elements.  

     ![](../../../.gitbook/assets/message-flow-to-pool-element-process-modeler-designer.png)

   * Click an element inside the second Pool element to indicate messaging between the two elements.  

     ![](../../../.gitbook/assets/message-flow-between-pool-elements-process-model-designer.png)

## Settings

The Message Flow element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](set-and-delete-message-flow-between-elements.md#edit-the-element-name)
* **Advanced** panel
  * [Edit the element's identifier value](set-and-delete-message-flow-between-elements.md#edit-the-elements-identifier-value)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element.

{% hint style="info" %}
[Permissions are required to do this](set-and-delete-message-flow-between-elements.md#permissions-required).
{% endhint %}

Follow these steps to enter or edit the name for a Message Flow element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Sequence Flow element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../.gitbook/assets/message-flow-configuration-name-process-modeler-designer.png)
4. In the **Name** setting, enter or edit the selected element's name and then press **Enter**.

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="info" %}
[Permissions are required to do this](set-and-delete-message-flow-between-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Message Flow element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Message Flow element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. ![](../../../.gitbook/assets/message-flow-configuration-identifier-name-process-modeler-processes.png)
4. In the **Node Identifier** setting, edit the Message Flow element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="the-quick-toolbar.md" %}

