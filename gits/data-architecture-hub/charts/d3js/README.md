# Description
This paper is released with a number of charts built with [D3js](https://d3js.org/). There is one folder per project. Each project contains:

+ An *index.html* which embeds d3js script
+ Data files used to generate the chart

## Data maturity assessment charts

This chart displays for each maturity dimension/section related to metadata management, the percentage of entities below and above a certain threshold. This chart is inspired by the [Diverging Stacked Bar Chart](http://bl.ocks.org/wpoely86/e285b8e4c7b84710e463) from the d3js examples. 

** Data file structure**

The data to generate the chart are described in a csv file with the following structure:

+ Question: contains the index of the maturity dimension/section
+ 1 : contains for a given dimension/section the total number of entities that have reached the **level L1 No/Does not exist**
+ 2 : contains for a given dimension/section the total number of entities that have reached the level **L2 Initial**
+ 3 : contains for a given dimension/section the total number of entities that have reached the level **L3 Ad hoc**
+ 4 : contains for a given dimension/section the total number of entities that have reached the level **L4 Managed**
+ 5 : contains for a given dimension/section the total number of entities that have reached the level **L5 Institutionalized**
+ N : contains the sum of columns 1,2,3,4 & 5.

These data can be obtained by applying a pivot table to the data maturity raw results.

## Metadata management tools evaluation charts

This chart displays for each application component type and category, the average rating of all the components evaluated. Example for the application type *Application Function* and the category *Metadata access* the average rating of all the components evaluated is 1.75 for Informatica Enterprise Information Catalog.

The data are generated from the Excel files available in the folder *d3js/dendogram/RFI*.

This chart is inspired by the [Dendrogram + Grouped Horizontal Bar Chart](https://bl.ocks.org/dahis39/f28369f0b17b456ac2f1fa9b937c5002) from the d3js examples. 

# How to generate the charts

An http server is required to render the d3js charts. The easiest approach is to run a local server from the folder *d3js*. Using python, you can run for instance an http server on the port 8888 with the following command:

`python -m http.server 8888`

*This is the syntax for python 3*.

Then you can browse the *index.html* page in the dedicated project folder to see the result. Example:

`http://localhost:8888/dendogram/index.html` 