---
description: >-
  Add, copy, delete, change the color, align, and configure Signal End Event
  elements in your Process model.
---

# Signal End Event Element

## Permissions Required

{% hint style="info" %}
### Don't Know What a Signal End Event Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Signal End Event](process-modeling-element-descriptions.md#signal-end-event) element.
{% endhint %}

Your ProcessMaker user account or group membership must have the following permissions to configure a Signal End Event element in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add a Signal End Event Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-signal-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to add a Signal End Event element to the Process model:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **End Event** element in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **End Event** element's icon![](../../../.gitbook/assets/end-event-icon-process-modeler-processes.png).

   ![](../../../.gitbook/assets/end-event-control-process-modeler-processes.png)

4. Drag the element into the Process model canvas where you want to place it. If a Pool element is in your Process model, the Signal End Event element cannot be placed outside of the Pool element.
5. From the **Elements** drop-down menu, select the **Signal End Event** option. The Signal End Event element displays. ![](../../../.gitbook/assets/signal-end-event-selection-process-modeler-designer.png)  

![Signal End Event element](../../../.gitbook/assets/signal-end-event-element-process-modeler-designer.png)

After the element is placed into the Process model, you may move it by dragging it to the new location.

{% hint style="warning" %}
Moving a Signal End Event element has the following limitations in regards to the following Process model elements:

* **Pool element:** If the Signal End Event element is inside of a [Pool](process-modeling-element-descriptions.md#pool) element, it cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places the Signal End Event element inside the Pool element closest to where you attempt to move it.
* **Lane element:** If the Signal End Event element is inside of a Lane element, it can be moved to another Lane element in the same Pool element. However, the Signal End Event element cannot be moved outside of the Pool element.
{% endhint %}

## Delete a Signal End Event Element

Deleting a Process model element also deletes any [Sequence Flow](process-modeling-element-descriptions.md#sequence-flow) and/or [Message Flow](process-modeling-element-descriptions.md#message-flow) elements incoming to or outgoing from that element. For example, if a Process model element is deleted that has both incoming and outgoing Sequence Flow elements, the Sequence Flow elements must be reconnected for the remaining elements/[connectors](../model-processes-using-connectors/what-is-a-connector.md).

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-error-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to delete a Signal End Event element from your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Signal End Event element to delete. Available options display above the selected element. ![](../../../.gitbook/assets/delete-signal-end-event-element-process-modeler-designer.png) 
4. Click the **Delete** icon![](../../../.gitbook/assets/remove-icon.png). The Process model element deletes.

## Settings

The Signal End Event element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-signal-end-event-elements.md#edit-the-element-name)
  * [Select the signal the element broadcasts](add-and-configure-signal-end-event-elements.md#select-the-signal-the-element-broadcasts)
  * [Edit the name of a signal](add-and-configure-signal-end-event-elements.md#edit-the-name-of-a-signal)
  * [Delete a signal from the ProcessMaker instance](add-and-configure-signal-end-event-elements.md#delete-a-signal-from-the-processmaker-instance)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-signal-end-event-elements.md#edit-the-elements-identifier-value)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-signal-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to edit the name for a Signal End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Signal End Event element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../.gitbook/assets/intermediate-signal-throw-event-configuration-name-process-modeler-designer.png) 
4. In the **Name** setting, edit the selected element's name and then press **Enter**.

#### Select the Signal The Element Broadcasts

A Signal End Event element broadcasts a specific signal and its Request data when it triggers to all elements throughout that ProcessMaker instance listening for that signal. The Signal End Event element triggers when its Request completes. The element that listens for the broadcast signal does not need to be in the same Process model as the Signal End Event element. Select the signal that this element broadcasts.

You may create a signal from this setting that this element broadcasts if necessary. This signal becomes available throughout your ProcessMaker instance for all Process designers to use after you [save your Process model](../toolboxes.md#save-your-process-model). Therefore, the attributes that define a signal, the signal ID and signal name, must be unique.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-signal-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to select the signal that the Signal End Event element broadcasts:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Signal End Event element from the Process model in which to select the signal that it broadcasts. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Signal** setting. ![](../../../.gitbook/assets/intermediate-signal-catch-event-configuration-signal-process-modeler-designer.png) 
4. Do one of the following:
   * **The signal exists that this element broadcasts:**
     1. From the **Signal** drop-down menu, select the signal that this element broadcasts. This setting is required.
   * **The signal does not exist that this element broadcasts:**
     1. Click the menu icon![](../../../.gitbook/assets/signal-menu-icon-process-modeler-designer.png)beside the **Signal** drop-down menu. The **+Signal** button displays.
     2. Click the **+Signal** button. The **ID** and **Name** settings display to configure the new signal's ID and name, respectively. ![](../../../.gitbook/assets/signal-id-name-process-modeler-designer.png) 
     3. In the **ID** setting, enter the unique ID of this signal. The signal ID may only contain non-special characters and without spaces. This signal ID must be unique from all other signal IDs in this ProcessMaker instance. If the entered signal ID already exists, the following text displays below the setting: **Signal ID is duplicated**. Note that the signal ID cannot be edited after the signal is created. This is a required setting.
     4. In the **Name** setting, enter the unique alphanumeric name of this signal. This signal name must be unique from all other signal names in this ProcessMaker instance. This signal name displays when selecting a signal from other elements that can broadcast or listen for a signal. If the entered signal name already exists, the following text displays below the setting: **Signal Name is duplicated**. This is a required setting.
     5. Click **Save**. The signal is created.
     6. From the **Signal** drop-down menu, select the signal that this element broadcasts. This setting is required.

#### Edit the Name of a Signal

Editing the name of a signal changes that signal's name in your ProcessMaker instance. This signal name displays when selecting a signal from other elements that can broadcast or listen for a signal.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-signal-end-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to edit the name of a signal:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select any element from the Process model that broadcasts or listens for a signal. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Signal** setting. The **Signal** setting may have a selection unlike the image below indicates. ![](../../../.gitbook/assets/signal-start-event-configuration-signal-process-modeler-designer.png) 
4. Click the menu icon![](../../../.gitbook/assets/signal-menu-icon-process-modeler-designer.png)beside the **Signal** drop-down menu. All signals configured in your ProcessMaker instance display below the **+Signal** button. The signal ID displays in a gray border; the signal name displays to the right of the signal ID. ![](../../../.gitbook/assets/signal-edit-delete-process-modeler-designer.png) 
5. Click the **Edit** icon![](../../../.gitbook/assets/edit-icon%20%281%29.png)that displays beside each signal to edit that signal. The **Name** setting displays the name of that signal. ![](../../../.gitbook/assets/signal-name-edit-process-modeler-designer.png) 
6. In the **Name** setting, edit the name of the signal as necessary.
7. Click **Save**.
8. [Save your Process model](../toolboxes.md#save-your-process-model).

#### Delete a Signal from the ProcessMaker Instance

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-signal-end-event-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
Carefully consider whether to delete a signal. Deleting a signal makes that signal unavailable when configuring all elements that broadcast or listen to signals throughout your ProcessMaker instance. However, those elements already configured with a deleted signal are not affected, nor are any started Requests affected.

Deleting a signal from the ProcessMaker instance cannot be undone.
{% endhint %}

Follow these steps to delete a signal from the ProcessMaker instance:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select any element from the Process model that broadcasts or listens for a signal. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Signal** setting. The **Signal** setting may have a selection unlike the image below indicates. ![](../../../.gitbook/assets/signal-start-event-configuration-signal-process-modeler-designer.png) 
4. Click the menu icon![](../../../.gitbook/assets/signal-menu-icon-process-modeler-designer.png)beside the **Signal** drop-down menu. All signals configured in your ProcessMaker instance display below the **+Signal** button. The signal ID displays in a gray border; the signal name displays to the right of the signal ID. ![](../../../.gitbook/assets/signal-edit-delete-process-modeler-designer.png) 
5. Click the **Delete** icon![](../../../.gitbook/assets/delete-icon.png)that displays beside each signal to delete that signal. A message displays to confirm deletion of this signal. ![](../../../.gitbook/assets/delete-signal-message-process-modeler-designer.png) 
6. Click **Delete**.
7. [Save your Process model](../toolboxes.md#save-your-process-model).

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-signal-end-event-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Signal End Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Signal End Event element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required setting. ![](../../../.gitbook/assets/intermediate-signal-throw-event-configuration-identifier-process-modeler-designer.png) 
4. In the **Node Identifier** setting, edit the Signal End Event element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../../../using-processmaker/requests/what-is-a-request.md" %}

{% page-ref page="../copy-process-model-elements-or-connectors.md" %}

