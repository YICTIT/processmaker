---
description: >-
  See examples of the different chart types you can create for your Saved
  Searches.
---

# Overview of Saved Search Charts

## Overview

Charts help visualize your Saved Search results. Though you can customize in tabular format the data details for your Saved Searches, nothing distills that data like a customized chart. Create and configure charts to visualize Saved Search results after selecting a Saved Search. Create customized charts regardless of whether you created the Saved Search or if it was shared with you.

Charts use the data results from the Saved Search to visualize those results in a variety of chart types and styles. Chart data may be filtered by using an optional [ProcessMaker Query Language \(PMQL\)](../../search-processmaker-data-using-pmql.md) query that further filters the data from that Saved Search to visualize minute data.

Customize charts to include the series and/or categories from the both PMQL query parameters and the columns configured in the detailed data view of that Saved Search. For example, if your Saved Search included a custom column called Countries to display how many Requests have started based on a Request variable value called `Countries`, that Request variable may also be used as a series or category in a chart in that Saved Search.

![Saved Search results for Requests of the Account Opening Process showing charts](../../../.gitbook/assets/request-type-charts-tab-saved-search-package.png)

### See What a Data Point or Marker Represents

Hover your cursor over a data point to see what that data represents.

![Hover your cursor over a data point to see what that data represents](../../../.gitbook/assets/bar-chart-vertical-stacked-example-saved-searches-package.png)

### Filter Data That Displays in a Saved Search Chart

Filter data that displays in a chart by hiding attributes of that data via the chart's legend. Consider the following chart that shows the number of Requests by status type per day of the week to visualize how many Requests exist for the "Account Process". This chart contains three keys in the legend that displays at the top of the chart.

![Saved Search chart showing all key attributes](../../../.gitbook/assets/line-chart-request-all-attributes-example-saved-searches-package.png)

To not display the Requests that have an error, click the **Error** key in the chart's legend. The strike-through text style displays over the **Error** key in the chart legend that indicates this chart attribute is hidden from the chart. The other chart attributes automatically adjust to show their data using the chart's current units of measurement. Click the **Error** key again to show this chart attribute again.

![Saved Search chart hiding the &quot;Error&quot; key attribute](../../../.gitbook/assets/line-chart-request-hide-attribute-example-saved-searches-package.png)

### Types of Saved Search Charts

See the following Saved Search chart types:

* [Bar chart \(horizontal\)](overview-of-saved-search-charts.md#bar-chart-horizontal)
* [Bar chart \(vertical\)](overview-of-saved-search-charts.md#bar-chart-vertical)
* [Line chart](overview-of-saved-search-charts.md#line-chart)
* [Pie chart](overview-of-saved-search-charts.md#pie-chart)
* [Doughnut chart](overview-of-saved-search-charts.md#doughnut-chart)
* [Count](overview-of-saved-search-charts.md#count)

#### Bar Chart \(Horizontal\)

The horizontal-style bar chart display data values in horizontal bars. The following horizontal-style bar chart shows the number of [Requests](../../requests/what-is-a-request.md) that start for the Account Process per day of the week.

![Number of Requests that start for the Account Process by day of the week](../../../.gitbook/assets/bar-chart-horizontal-example-saved-searches-package.png)

#### Bar Chart \(Vertical\)

The vertical-style bar chart display data values in vertical bars. The following vertical-style bar chart shows the number of Requests by status per agency. In this example, data points are stacked such that all Requests display on each other for each agency. Furthermore, this example displays the data value a marker represents when hovering the cursor over that marker.

![Number of Requests by status per agency](../../../.gitbook/assets/bar-chart-vertical-stacked-example-saved-searches-package.png)

#### Line Chart

The following line chart shows the number of Requests by status type per day of the week.

![Number of Requests by status type per day of the week](../../../.gitbook/assets/line-chart-request-all-attributes-example-saved-searches-package.png)

#### Pie Chart

The following pie chart shows the number of Requests by status type for the Loan Process.

![Number of Requests by status type for the Loan Process](../../../.gitbook/assets/pie-chart-example-saved-searches-package.png)

#### Doughnut Chart

The following doughnut chart shows the number of Requests by status type for the Loan Process.

![Number of Requests by status type for the Loan Process](../../../.gitbook/assets/doughnut-chart-example-saved-searches-package.png)

#### Count

The following count chart shows how many records are in the "Department" [ProcessMaker Collection](../../../collections/what-is-a-collection.md).

![Number of records in the &quot;Department&quot; ProcessMaker Collection.](../../../.gitbook/assets/count-chart-example-saved-searches-package.png)

## Related Topics

