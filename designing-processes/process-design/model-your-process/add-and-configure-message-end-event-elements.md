---
description: >-
  Add, copy, delete, change the color, align, and configure Message End Event
  elements in your Process model.
---

# Message End Event Element

## Permissions Required

{% hint style="info" %}
### Don't Know What a Message End Event Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Message End Event](process-modeling-element-descriptions.md#message-end-event) element.
{% endhint %}

Your ProcessMaker user account or group membership must have the following permissions to configure a Message End Event element in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add a Message End Event Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-message-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to add a Message End Event element to the Process model:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **End Event** element in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **End Event** element's icon![](../../../.gitbook/assets/end-event-icon-process-modeler-processes.png).

   ![](../../../.gitbook/assets/end-event-control-process-modeler-processes.png)

4. Drag the element into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Message End Event element cannot be placed outside of the Pool element.
5. From the **Elements** drop-down menu, select the **Message End Event** option. The Message End Event element displays.  ![](../../../.gitbook/assets/message-end-event-selection-process-modeler-designer.png) 

![Message End Event element](../../../.gitbook/assets/message-end-event-process-modeler-processes.png)

After the element is placed into the Process model, you may adjust its location in the following ways:

* Move the element by dragging it to a new location.
* [Select the element with other elements and/or connectors](../select-multiple-process-model-elements-and-connectors.md#select-multiple-process-model-objects), and then move them collectively by dragging them to new locations in relation to one another.
* [Align](../align-and-distribute-process-model-elements-and-connectors.md#align-process-model-objects) and/or [distribute](../align-and-distribute-process-model-elements-and-connectors.md#distribute-process-model-objects) the element in relation to other selected elements and/or [connectors](../model-processes-using-connectors/what-is-a-connector.md).

{% hint style="warning" %}
Moving a Message End Event element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Message End Event element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Message End Event element inside the Pool element closest to where you attempt to move it.
* **Lane element:** If the Message End Event element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Message End Event element cannot be moved outside of the Pool element.
{% endhint %}

## Copy a Message End Event Element

Copying a Message End Event element copies the original along with its current settings, making it easier and faster to continue designing without adding default elements or [connectors](../model-processes-using-connectors/what-is-a-connector.md) with their default settings.

The copied Message End Event element displays below the original. Any [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from the original are not copied.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-message-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to copy a Message End Event element in your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Message End Event element to copy. Available options display above the selected element. ![](../../../.gitbook/assets/copy-message-end-event-element-process-modeler-designer.png) 
4. Click the **Copy Element** icon![](../../../.gitbook/assets/remove-icon.png). The Process model element copies. ![](../../../.gitbook/assets/copied-message-end-event-element-process-modeler-designer.png) 

## Delete a Message End Event Element

Deleting a Process model element also deletes any [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from that element. For example, if a Process model element is deleted that has both incoming and outgoing Sequence Flow elements, the Sequence Flow elements must be reconnected for the remaining elements/[connectors](../model-processes-using-connectors/what-is-a-connector.md).

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-message-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to delete a Message End Event element from your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Message Event element to delete. Available options display above the selected element. ![](../../../.gitbook/assets/delete-message-end-event-element-process-modeler-designer.png) 
4. Click the **Delete** icon![](../../../.gitbook/assets/remove-icon.png). The Process model element deletes.

## Settings

The Message End Event element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-message-end-event-elements.md#edit-the-element-name)
  * [Edit the message name](add-and-configure-message-end-event-elements.md#edit-the-message-name)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-message-end-event-elements.md#edit-the-elements-identifier-value)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-message-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to edit the name for a Message End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Message End Event element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../.gitbook/assets/message-end-event-configuration-name-process-modeler-processes.png) 
4. In the **Name** setting, edit the selected element's name and then press **Enter**.

#### Edit the Message Name

The Message End Event element uses a message name as a placeholder for the Request data that this element sends to a catching element. When a [Message Start Event](process-modeling-element-descriptions.md#message-start-event) element or an [Intermediate Message Catch Event](process-modeling-element-descriptions.md#intermediate-message-catch-event) element listens for a message, it references the Message End Event element's message name.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-message-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to configure how to trigger a Message End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Message End Event element from the Process model in which to configure its message name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Message Name** setting. ![](../../../.gitbook/assets/message-end-event-configuration-message-name-process-modeler-processes.png) 
4. In the **Message Name** setting, edit the message name that a catching element references to listen for the Message End Event's message.

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-message-end-event-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Message End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Message End Event element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required setting. ![](../../../.gitbook/assets/message-end-event-configuration-identifier-process-modeler-processes.png) 
4. In the **Node Identifier** setting, edit the Message End Event element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../../../using-processmaker/requests/what-is-a-request.md" %}

