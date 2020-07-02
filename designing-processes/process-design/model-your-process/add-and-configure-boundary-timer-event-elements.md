---
description: >-
  Add, copy, delete, change the color, and configure Boundary Timer Event
  elements in your Process model.
---

# Boundary Timer Event Elements

## Permissions Required

{% hint style="info" %}
### Don't Know What a Boundary Timer Event Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Boundary Timer Event](process-modeling-element-descriptions.md#boundary-timer-event) element.
{% endhint %}

Your ProcessMaker user account or group membership must have the following permissions to configure a Boundary Timer Event element in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add a Boundary Timer Event Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-boundary-timer-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to add a Boundary Timer Event element to the Process model:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Add one of the following Process model elements or [connectors](../model-processes-using-connectors/what-is-a-connector.md) to your Process model in which to associate with the Boundary Timer Event element:
   * [Form Task](process-modeling-element-descriptions.md#form-task) element
   * [Manual Task](add-and-configure-manual-task-elements.md#add-a-manual-task-element) element
   * [Script Task](add-and-configure-script-task-elements.md#add-a-script-task-element) element
   * [Sub Process](add-and-configure-sub-process-elements.md#add-a-sub-process-element) element
   * [Actions By Email](../model-processes-using-connectors/available-connectors-from-processmaker/actions-by-email-connector.md) connector \(requires the [Actions By Email package](../../../package-development-distribution/package-a-connector/actions-by-email-package.md)\)
   * [Data Connector](../model-processes-using-connectors/available-connectors-from-processmaker/data-connector-connector.md) connector \(requires the [Data Connector package](../../../package-development-distribution/package-a-connector/data-connector-package.md)\)
   * [PDF Generator](../model-processes-using-connectors/available-connectors-from-processmaker/pdf-generator-connector.md) connector \(requires the [PDF Generator package](../../../package-development-distribution/package-a-connector/pdf-generator-package.md)\)
   * [Send Email](../model-processes-using-connectors/available-connectors-from-processmaker/email-connector.md) connector \(requires the [Send Email package](../../../package-development-distribution/package-a-connector/email.md)\)
4. From the **Boundary Events** drop-down menu, select the **Boundary Timer Event** option. The Boundary Timer Event element displays on the top of its associating element/connector. ![](../../../.gitbook/assets/boundary-timer-event-selection-process-modeler-designer.png) 

![Boundary Timer Event element associated with a Form Task element](../../../.gitbook/assets/boundary-timer-event-element-process-modeler-designer.png)

After placing the Boundary Timer Event element, you may drag it to an adjacent side of its associating element/connector. Since Process Modeler displays labels at the bottom of Process model elements and connectors, the Boundary Timer Event element displays best at the bottom of its associating element.

## Delete a Boundary Timer Event Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-boundary-timer-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to delete a Boundary Timer Event element from your Process model:

1. ​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Boundary Timer Event element to delete. Available options display above the selected element. ![](../../../.gitbook/assets/delete-boundary-timer-event-element-process-modeler-designer.png) 
4. Click the **Delete** icon![](../../../.gitbook/assets/remove-icon.png). The Process model element deletes.

## Settings

The Boundary Timer Event element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-boundary-timer-event-elements.md#edit-the-element-name)
  * [Indicate to interrupt the best-case scenario workflow](add-and-configure-boundary-timer-event-elements.md#indicate-to-interrupt-the-best-case-scenario-workflow)
* **Timing Control** panel
  * [Set the timing controls](add-and-configure-boundary-timer-event-elements.md#set-the-timing-controls)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-boundary-timer-event-elements.md#edit-the-elements-identifier-value)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-boundary-timer-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to edit the name for a Boundary Timer Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Boundary Timer Event element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../.gitbook/assets/boundary-timer-event-configuration-name-process-modeler-designer.png) 
4. In the **Name** setting, edit the selected element's name and then press **Enter**.

#### Indicate to Interrupt the Best-Case Scenario Workflow

Indicate whether the Boundary Timer Event element interrupts the best-case scenario workflow:

* **Interrupting workflow:** When workflow routes through the Boundary Timer Event element, workflow is interrupted and does not route through the best-case scenario. As highlighted in the example below, workflow routes through the Boundary Timer Event element if the Manual Task element does not complete within 30 minutes. ![](../../../.gitbook/assets/boundary-timer-event-interrupting-example.png) 
* **Non-interrupting workflow:** Workflow routes both through the Boundary Timer Event element and the best-case scenario, thereby creating parallel workflow in that Request. As highlighted in the example below, workflow routes through the Boundary Timer Event element if the Manual Task element does not complete within 30 minutes; however, workflow also routes through the best-case scenario when that element completes. ![](../../../.gitbook/assets/boundary-timer-event-non-interrupting-example.png) 

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-boundary-timer-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to indicate if this Boundary Timer Event element interrupts the best-case scenario workflow when it triggers:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Boundary Timer Event element from the Process model in which to indicate if it interrupts the best-case scenario workflow. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded, and then locate the **Interrupting** setting. ![](../../../.gitbook/assets/interrupting-boundary-event-process-modeler-designer.png) 
4. From the **Interrupting** checkbox, indicate whether this Boundary Timer Event element interrupts the best-case scenario workflow when it triggers. When the **Interrupting** checkbox is selected, which is the default setting, this element interrupts the best-case scenario workflow.

### Timing Control Panel Settings

#### Set the Timing Controls

When a Boundary Timer Event element is placed into a Process model, it is set to trigger in one \(1\) hour before workflow routes through it unless its associative element completes before then. If this is not the timing control setting you want, the Boundary Timer Event element must be configured. Set the timer controls for a Boundary Timer Event element using one of the following methods:

* Set an interval in which to delay routing workflow through the Boundary Timer Event element in a specified number of days, weeks, months, or years \(unless its associative element completes before the delay expires\).
* Set the date and hour when the Boundary Timer Event element routes workflow through it \(unless its associative element completes before that date and hour arrives\).

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-boundary-timer-event-elements.md#permissions-required).
{% endhint %}

Follow these steps to set the timer controls for a Boundary Timer Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Boundary Timer Event element from the Process model in which to set its timer controls. Panels to configure this element display.
3. Expand the **Timing Control** panel if it is not presently expanded. The **Type** setting displays.

   ![](../../../.gitbook/assets/intermediate-timer-timing-control-process-modeler-processes.png)

4. Do one of the following to set the timer control:
   * **Set the timer when workflow routes through the Boundary Timer Event element:** From the **Type** drop-down menu, select the **Delay** option. **Delay** is the default setting. From the **Delay** setting, select the delay to route workflow through the Boundary Timer Event element unless its associative element completes. **1** **hour** is the default setting. Then select one of the following time periods for that element to trigger:
     * Minute
     * Hour \(default setting\)
     * Day
     * Month
   * **Set date and time when workflow routes through the Boundary Timer Event element:** From the **Type** drop-down menu, select the **Date/Time** option. The **Wait until specific date/time** setting displays.  

     ![](../../../.gitbook/assets/intermediate-timer-timing-control-wait-process-modeler-processes.png)

     From the **Wait until specific date/time** setting, use the date control to select the date and time to route workflow through the Boundary Timer Event element unless its associative element completes. If this setting has not been previously set, the current date is the default.  

     ![](../../../.gitbook/assets/intermediate-timer-event-date-control-process-modeler-processes.png)

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-boundary-timer-event-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Boundary Timer Event element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Boundary Timer Event element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required setting. ![](../../../.gitbook/assets/boundary-timer-event-configuration-identifier-process-modeler-processes.png) 
4. In the **Node Identifier** setting, edit the Boundary Timer Event element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

