---
description: >-
  Add, resize, delete, and configure Pool and Lane elements in your Process
  model.
---

# Pool and Lane Elements

## Permissions Required

{% hint style="info" %}
### Don't Know What a Pool Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Pool](process-modeling-element-descriptions.md#pool) element.
{% endhint %}

Your ProcessMaker user account or group membership must have the following permissions to configure a Pool or Lane element in the Process model unless your user account has the **Make this user a Super Admin** setting selected:

* Processes: Edit Processes
* Processes: View Processes

See the [Process](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#processes) permissions or ask your ProcessMaker Administrator for assistance.

## Add a Pool Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to add a Pool element to the Process model:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. [Create a new Process](../../viewing-processes/view-the-list-of-processes/create-a-process.md) or click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Locate the **Pool** element in the **Elements and Connectors** palette that is to the left of the Process Modeler canvas. If the [**Hide Menus** button](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view)![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is enabled, the **Elements and Connectors** palette displays the **Pool** element's icon![](../../../.gitbook/assets/pool-icon-process-modeler-processes.png). ![](../../../.gitbook/assets/pool-control-process-modeler-processes.png) 
4. Drag the element into the Process model canvas where you want to place it. If non-Pool/[Lane](process-modeling-element-descriptions.md#lane) elements or [controls](../model-processes-using-connectors/what-is-a-connector.md) are in your Process model when you place the Pool element, those elements are automatically placed into the Pool element. A Pool element cannot be placed into another Pool element, though the most recently placed Pool element can overlap another such that only the recent Pool element and its contents is visible.

![Pool element](../../../.gitbook/assets/pool-process-modeler-designer.png)



After the element is placed into the Process model, you may adjust its location in the following ways:

* [Resize the Pool element](add-and-configure-pool-and-lane-elements.md#resize-a-pool-element).
* Move the element by dragging it to a new location. Any elements and [connectors](../model-processes-using-connectors/what-is-a-connector.md) within the Pool element move as well.
* [Select the element with other elements and/or connectors](../select-multiple-process-model-elements-and-connectors.md#select-multiple-process-model-objects), and then move them collectively by dragging them to new locations in relation to one another.
* [Align](../align-and-distribute-process-model-elements-and-connectors.md#align-process-model-objects) and/or [distribute](../align-and-distribute-process-model-elements-and-connectors.md#distribute-process-model-objects) the element in relation to other selected elements and/or connectors.

{% hint style="warning" %}
### Elements Placed Into a Pool Element Cannot Be Moved Out of It

If a non-Pool element is placed into a Pool element, that element cannot be moved outside of the Pool element. If you attempt to do so, Process Modeler places that element inside the Pool element closest to where you attempt to move it.

### Deleting a Pool Element Also Deletes All Elements Within It

When a Pool element is [deleted](), all elements within it are also deleted. If you want to keep the elements within a Pool element, you must add those elements outside of the Pool element prior to deleting the Pool element.

If you accidentally delete a Pool element with other elements you want to keep, then click the **Undo** button.
{% endhint %}

## Change the Color of a Pool Element

The Pool element outline and label are black-colored by default with a gray-colored background. After a Pool element is [added to a Process model](add-and-configure-pool-and-lane-elements.md#add-a-pool-element), its shape, label, and background color can be changed. Element and [connector](../model-processes-using-connectors/what-is-a-connector.md) colors may only be changed individually.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to change the color of the outline, label, and background for a Pool element:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Pool element to change its color. Available options display above the selected element. ![](../../../.gitbook/assets/change-color-pool-element-process-modeler-designer.png) 
4. Click the **Open Color Palette** icon![](../../../.gitbook/assets/open-color-palette-icon-process-modeler-designer.png). The color palette displays.
5. Do one of the following:
   * **Select a color swatch:** Select one of the color swatches from the color palette. The Pool element outline, label, and background change to that color.
   * **Specify a custom color:** Click the![](../../../.gitbook/assets/color-selector-swatch-process-modeler-designer.png)icon to display the color selector, and then select a color, enter the [Hex color code](https://www.color-hex.com/), or enter the red, green, blue, and alpha color values for the custom color. The Pool element outline, label, and background change to that color. ![](../../../.gitbook/assets/color-selector-process-modeler-designer.png) 
   * **Reset to the default color:** Click the![](../../../.gitbook/assets/reset-color-icon-process-modeler-designer.png)icon to reset the Pool element to its default colors.

## Resize a Pool Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to resize a Pool element:

1. [Add a Pool element to your Process model](add-and-configure-pool-and-lane-elements.md#add-a-pool-element).
2. Select the Pool element from the Process model to resize. Anchors display on each corner of the Pool element.  

   ![](../../../.gitbook/assets/pool-element-lane-message-anchor-icons-process-modeler-designer.png)

3. Click one of the anchors on the Pool element![](../../../.gitbook/assets/pool-element-anchor-process-modeler-processes.png), hold your cursor, and then adjust the size of the Pool element on the Process model canvas. If the Pool element contains elements within it prior to resizing, the Pool element only resizes to contain all elements within it. Lane elements automatically adjust to the width of the Pool element, though [Lane elements can be resized](add-and-configure-pool-and-lane-elements.md#resize-a-lane-element) separately.

## Delete a Pool Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
When a Pool element is deleted, all elements and connectors within it are also deleted. If you want to keep the elements/controls within a Pool element, you must add those elements/controls outside of the Pool element prior to deleting the Pool element.

If you accidentally delete a Pool element with other elements/connectors you want to keep, then select the **Undo** button.
{% endhint %}

Follow these steps to delete a Pool element from a Process model:

1. ​​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Pool name in the Pool element to delete, thereby selecting the Pool element. Available options display to the right of the selected element.
4. Click the **Delete** icon![](../../../.gitbook/assets/remove-icon.png). The Pool element is deleted. All non-Pool elements and connectors within the Pool element also delete.

## Pool Element Settings

The Pool element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-pool-and-lane-elements.md#edit-the-element-name-1)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-pool-and-lane-elements.md#edit-the-elements-identifier-value-1)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element. Process Modeler automatically assigns the name of a Process element with its element type. However, an element's name can be changed.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to edit the name for a Pool element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Pool element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../.gitbook/assets/pool-configuration-name-process-modeler-designer.png)
4. In the **Name** setting, edit the selected element's name and then press **Enter**.

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique to all other elements in the Process model, including the Process model's identifier value.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Pool element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Pool element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required setting. ![](../../../.gitbook/assets/pool-configuration-identifier-name-process-modeler-processes.png)
4. In the **Node Identifier** setting, edit the Pool element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Add a Lane Element to a Pool Element

{% hint style="info" %}
### Don't Know What a Lane Element Is?

See [Process Modeling Element Descriptions](process-modeling-element-descriptions.md) for a description of the [Lane](process-modeling-element-descriptions.md#lane) element.
{% endhint %}

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to add a Lane element to a Pool element:

1. [View your Processes](../../viewing-processes/view-the-list-of-processes/view-your-processes.md#view-all-active-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)for edit the selected Process model. Process Modeler displays.
3. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
4. Click the Pool element from the Process model into which to add a Lane element. Icons to add a Lane to a Pool element display.  

   ![](../../../.gitbook/assets/pool-element-lane-message-anchor-icons-process-modeler-designer.png)

5. Do one of the following:
   * **Add a Lane element above existing Lane elements:** Click the **Lane Above** icon![](../../../.gitbook/assets/lane-above-icon-pool-process-modeler-processes.png)to add a Lane element above all existing Lane elements. If only the Pool element exists, two Lane elements display.
   * **Add a Lane element below existing Lane elements:** Click the **Lane Below** icon![](../../../.gitbook/assets/lane-below-icon-pool-process-modeler-processes.png)to add a Lane element below all existing Lane elements. If only the Pool element exists, two Lane elements display.

## Change the Color of a Lane Element

The Lane element outline and label are black-colored by default with a gray-colored background. After a Lane element is [added to a Process model](add-and-configure-pool-and-lane-elements.md#add-a-lane-element-to-a-pool-element), its shape, label, and background color can be changed. Element and [connector](../model-processes-using-connectors/what-is-a-connector.md) colors may only be changed individually.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to change the color of the outline, label, and background for a Lane element:

1. [View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Lane element to change its color. Anchors display on each corner of the Lane element![](../../../.gitbook/assets/pool-element-anchor-process-modeler-processes.png). Available options display above the selected element. ![](../../../.gitbook/assets/change-color-lane-element-process-modeler-designer.png) 
4. Click the **Open Color Palette** icon![](../../../.gitbook/assets/open-color-palette-icon-process-modeler-designer.png). The color palette displays.
5. Do one of the following:
   * **Select a color swatch:** Select one of the color swatches from the color palette. The Lane element outline, label, and background change to that color.
   * **Specify a custom color:** Click the![](../../../.gitbook/assets/color-selector-swatch-process-modeler-designer.png)icon to display the color selector, and then select a color, enter the [Hex color code](https://www.color-hex.com/), or enter the red, green, blue, and alpha color values for the custom color. The Lane element outline, label, and background change to that color. ![](../../../.gitbook/assets/color-selector-process-modeler-designer.png) 
   * **Reset to the default color:** Click the![](../../../.gitbook/assets/reset-color-icon-process-modeler-designer.png)icon to reset the Lane element to its default colors.

## Resize a Lane Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to resize a Lane element:

1. [Add a Lane element to a Pool element](add-and-configure-pool-and-lane-elements.md#add-a-lane-element-to-a-pool-element).
2. Select the Lane element from the Pool element to resize. Anchors display on each corner of the Lane element![](../../../.gitbook/assets/pool-element-anchor-process-modeler-processes.png).

   ![](../../../.gitbook/assets/lane-element-resize-anchor-process-modeler-designer.png)

3. Click one of the anchors on the Lane element, hold your cursor, and then adjust the size of the Lane element in the Pool element. If the Lane element contains elements within it prior to resizing, the Lane element only resizes to contain all elements within it. The Pool element automatically adjusts to the width of the resized Lane element so far as all elements contained within the Pool element remain contained in it. [Pool elements can be resized](add-and-configure-pool-and-lane-elements.md#resize-a-pool-element) separately.

## Delete a Lane Element from a Pool Element

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to delete a Lane element from a Pool element:

1. ​​[View your Processes](https://processmaker.gitbook.io/processmaker-4-community/-LPblkrcFWowWJ6HZdhC/~/drafts/-LRhVZm0ddxDcGGdN5ZN/primary/designing-processes/viewing-processes/view-the-list-of-processes/view-your-processes#view-all-processes). The **Processes** page displays.
2. Click the **Open Modeler** icon![](../../../.gitbook/assets/open-modeler-edit-icon-processes-page-processes.png)to edit the selected Process model. Process Modeler displays.
3. Select the Lane element in the Pool element to delete. Available options display above the selected element.
4. Click the **Delete** icon![](../../../.gitbook/assets/remove-icon.png). The Pool element is deleted. All non-Pool elements and connectors that were within the deleted Lane element stay in their current positions within the Pool element.

## Lane Element Settings

The Lane element has the following panels that contain settings:

* **Configuration** panel
  * [Edit the element name](add-and-configure-pool-and-lane-elements.md#edit-the-element-name-1)
* **Advanced** panel
  * [Edit the element's identifier value](add-and-configure-pool-and-lane-elements.md#edit-the-elements-identifier-value-1)

### Configuration Panel Settings

#### Edit the Element Name

An element name is a human-readable reference for a Process element.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

Follow these steps to enter or edit the name for a Lane element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Lane element from the Process model in which to edit its name. Panels to configure this element display.
3. Expand the **Configuration** panel if it is not presently expanded. The **Name** setting displays. This is a required setting. ![](../../../.gitbook/assets/lane-configuration-name-process-modeler-designer.png)
4. In the **Name** setting, enter or edit the selected element's name and then press **Enter**.

### Advanced Panel Settings

#### Edit the Element's Identifier Value

Process Modeler automatically assigns a unique value to each Process element added to a Process model. However, an element's identifier value can be changed if it is unique.

{% hint style="info" %}
[Permissions are required to do this](add-and-configure-pool-and-lane-elements.md#permissions-required).
{% endhint %}

{% hint style="warning" %}
All identifier values for all elements in the Process model must be unique.
{% endhint %}

Follow these steps to edit the identifier value for a Lane element:

1. Ensure that the **Hide Menus** button![](../../../.gitbook/assets/hide-menus-button-process-modeler-processes.png)is not enabled. See [Maximize the Process Modeler Canvas View](../navigate-around-your-process-model.md#maximize-the-process-modeler-canvas-view).
2. Select the Lane element from the Process model in which to edit its identifier value. Panels to configure this element display.
3. Expand the **Advanced** panel if it is not presently expanded. The **Node Identifier** setting displays. This is a required setting. ![](../../../.gitbook/assets/lane-configuration-identifier-name-process-modeler-processes.png)
4. In the **Node Identifier** setting, edit the Lane element's identifier to a unique value from all elements in the Process model and then press **Enter**.

## Related Topics

{% page-ref page="process-modeling-element-descriptions.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/view-your-processes.md" %}

{% page-ref page="../../viewing-processes/view-the-list-of-processes/create-a-process.md" %}

{% page-ref page="../model-processes-using-connectors/what-is-a-connector.md" %}

