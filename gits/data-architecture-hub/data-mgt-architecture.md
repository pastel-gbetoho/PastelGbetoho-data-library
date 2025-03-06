---
title: "AXA DATA ARCHITECTURE HUB"
author: "Data Management Team"
date: "June 06, 2021"
description: "DATA ARCHITECTURE"
---

## Data Architecture need assessment and first recommendations

### Pre-requisite:

+ Business context: why? what? for who? with who?
+ Data story: what is expected from data?, what is the user experience with data?, what is the competitive advantage to achieve?
+ Existing architecture: business, data, IT context, princples
+ Key success factors
+ Need for inference or prediction from data
+ Already existing or identifed data sources, any challenge identified (technical, legal, etc.) to collect the data?
+ What are the levers or blockers identified?

Key outcomes: data structures and integration flows are well defined (quality, agility, sustainability ...).

### Contributions

**Strategic data consulting** - We help formalize business goals, business requirements and data requirements to align with your objectives
**Funding value-driven initiatives** – we finance selected business initiatives that demonstrate strong data-driven impact and ROI
**Functional design and oversight** – we define functional specifications and hand over the build to an external partners while overseeing the implementation
**Co-building data solutions** – we provide technical resources and data experts to develop data solutions in collaboration with your team


### Data focusing areas:

+ Data components or products with clear business value identified
+ Data input ports and output ports
+ Data volume (nb of clients, claims, cars, ...)
+ Data quality requirements and business impact of non quality?
+ Data governance: Business Data Ownership? Governance KPIs and SLAs?
+ Data security and compliance: Regulation? Personal data/SII, ...

------------------------------------------------------------

## Data architecture statement of work

## Inputs

+ Business architecture (actors, roles, business services)
+ Business objectives
+ Businss glossary
+ Data security and governance requirements

## Outputs

+ Data objects and data elements
+ Grouping of data objects (logical design)
+ XREF data objects with IT services
+ IT solution data requirements (IT services, technology, location, ...)
+ Implementation guidelines

## Activities

+ With projet stakeholders, identify the context and why data will improve the business
+ Check if any data strategy, data policy, business glossary that can be leveraged
+ Define the list of data elements and validate concepts and relations with stakeholders
+ Add classifications to data elements related to data confidentiality and data quality requirements


1-Setting the scene                | 2-Identify the extra business value to achieve                  | 3-What essential information will make the difference?                 | 4-What is the data needed?             | 5-What levers do we need to execute and scale? |
---------------------------------- | ---------------------------------------------------- | ------------------------------- | ---------------------- | ----------------------------------------------- |
What is your business context?     | What need to be done differently?<br/><br/>What is the expected business value?<br/><br/>What is the competitive advantage to achieve?<br/><br/>Why is the problem not yet solved?<br/><br/>Which activities have been started in the past to solve the problem?    | What is the desired outcome?<br/><br/>What insights and predictions do you need?   | What are the required underlying data and associated sources?<br/><br/>Is this data accessible and of sufficient quality?| Do we have the right level of business ownership over data ?<br/><br/>How do we ease data accessibility and quality across business functions and entities?<br/><br/>What is the adoption strategy?<br/><br/>What is(are) the potential Business Impact(s)? 
*Improve technical and operational excellence*<br/><br/>*Comprehensive view of claims management processes*   | *Secure execution through automation of claims & payment processes*<br/><br/>*Business performance KPIs  : e.g., rate of claims automatically treated / time to reimburse customer* | *Probability of fraudulent health claims*<br/><br/>*Triage recommendation*<br/><br/>*Claims costs predictions* | *Patient medical history (e.g., diagnoses, treatments, codification)*<br/><br/>*Coverage clause*<br/><br/>*Claim document*<br/><br/>*First diagnostic of data accessibility and  quality* | *Established business ownership in a federated model*<br/><br/>*Prioritized and deployed data resources* |



## Deliverables illustration

### Domains and data products

Domain       | Product                  | Business Value Proposition                                 | Business Sponsor      
------------ | ------------------------ | ---------------------------------------------------------- | ----------------------
Princing     | Location Footprinter     | The location footprinter will allow underwriters to...     | John Doe              
...          | ...                      | ...                                                        | ...


Example for Property data: [Propety data domaon and concepts](https://pages.github.axa.com/AXA-GO/property-data-architecture/conceptual_data_model.html).

Dimensional Modeling approach: [Kimball Group](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/).

### Data elements

List of data elements with the domain, name, description, source (business, international standard, etc.), data confidentiality classification, data quality classification

Domain       | Data Element          | Description                                                                                                                            | Source         
------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------
Agreement    | Account Agreement     | An agreement between a financial services provider and an account holder related to the management of a financial account.             | ACORD	
Agreement    | PaymentMethod         | This represents a payment method of some type utilized for source, destination, money in, or money out purposes.                       | ACORD
Agreement    | Policy                | A legal agreement between an insurer and the insured, describing the contract terms, coverages, premiums, deductibles, limits, [...]   | ACORD
Agreement    | ...                   | ....                                                                                                                                   | ...

Example for Property data: [Propety data elements](https://pages.github.axa.com/AXA-GO/property-data-architecture/property-data-mapping.html).


### Data flows

Data Element                 |Claim Handling  | XXX       
---------------------------- | -------------- | ----------
Agreement-Account Agreement  | C              | R         
Agreement-PaymentMethod      | R              | .         
Agreement-Policy             | R              | .         
Agreement-...                | R              | .         

Example for Claim Analytics (Sherlock) collaboration contract: [Claim Analytics collaboration contract](https://pages.github.axa.com/AXA-GO/sherlock-data-architecture/collaboration_contract.html).

### Data models (internal, external) and interoperability

Example for Claim Analytics (Sherlock) data model : [Claim Analytics data model](https://pages.github.axa.com/AXA-GO/sherlock-data-architecture/model_html_report/index.html).


### Data governance


Example: risk management for data.

Risk            | Level        
--------------- | -------------------------------------------------------------------------------------
Low risk        | Data structures and data volumes are well identified. Data owners are identified and members of AXA data governance
Medium risk     | One the four dimensions is not satisfied: data structure, data volumes, data owners identification, accountability in data governance
High risk       | Critical data elements are not identified for the project or several dimensions above are not satisfied


### Data security


### Data IT infrastructure services

Data Infrastructure                | Requirements                                     | SLA           
---------------------------------- | ------------------------------------------------ | -------------- 
Master Data Management Platform    | Matching, Stewardship, Web APIs                  | 24x7          
BI and analytics                   | Data curation, machine learning, deep learning   | .             
Data integration                   | .                                                | .             
Metadata management                | .                                                | .             

