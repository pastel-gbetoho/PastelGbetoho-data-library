---
title: "AXA DATA ARCHITECTURE HUB"
author: "Data Management Team"
date: "Feb 05, 2021"
description: "REFERENCE DATA CODIFICATIONS"
---


# AI Frameworks

Category                                     | Sub-Category                 | Norm                                | Owner                         | Comment
---------------------------------------------|------------------------------|-------------------------------------|-------------------------------|-----------------------------------------------------
AI Governance                                | AI Governance Life Cycle     | [AIGA](https://ai-governance.eu/about-aiga/)                                         | [The AIGA AI Governance Framework](https://ai-governance.eu/)    |
AI Governance                                | AI in Society                | [OECD](https://en.wikipedia.org/wiki/OECD)                                           | [OECD Artificial Intelligence](https://www.oecd-ilibrary.org/sites/8b303b6f-en/index.html?itemId=/content/component/8b303b6f-en)    |
AI Governance                                | AI Risk Management           | [NIST](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology) | [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)  |

# Metadata

Category                                     | Sub-Category                 | Norm                                | Owner                         | Comment
---------------------------------------------|------------------------------|-------------------------------------|-------------------------------|-----------------------------------------------------
Types           | Dates and times                                           | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)                                           | [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)
Structures      | CSV|[RFC 4180](https://tools.ietf.org/html/rfc4180)       | [IETF](https://www.ietf.org/)                                                                |                                                                                     
Metadata        | Geospacial metadata standards                             | [ISO 191** SUITE](https://www.fgdc.gov/metadata/iso-suite-of-geospatial-metadata-standards)  | [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)    
Metadata        | Common Warehouse Metamodel                                | [Common Warehouse Metamodel (CWM)](https://www.omg.org/spec/CWM/)                            | [Object Management Group (OMG)](https://en.wikipedia.org/wiki/Object_Management_Group) 
Metadata        | Data Catalog Vocabulary                                   | [Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat-2/)                        | [Object Management Group (OMG)](https://en.wikipedia.org/wiki/Object_Management_Group) 
Metadata        | Open metadata and governance automation                   | [Egeria Type System](https://egeria-project.org/types/)                                      | [Linux Foundation](https://en.wikipedia.org/wiki/Linux_Foundation)                     

# Log formats

|Log format                           | Description                                                                                                                                                               
|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
|JavaScript Object Notation (JSON)    | With JSON, logs can nest data into different layers while keeping the format easy to read by humans. JSON also provides a way of maintaining data types, such as string, number, boolean, null/empty, object, or array.
|Windows Event logs                   | Windows Event logs are often used by system administrators for troubleshooting system or application errors, investigating security incidents, or tracking user logins.
|Common Event Format (CEF)            | Open, text-based log format used by security-related devices and applications. Developed by ArcSight Enterprise Security Manager, CEF is used when collecting and aggregating data by SIEM and log management systems.
|NCSA Common Log Format (CLF)         | One of the oldest log formats used by web servers. It’s a standardized, text-based log file with a fixed format, which means you can’t customize the fields.
|Extended Log Format (ELF)            | Similar to CLF but contains more information and flexibility over which fields are used. ELF logs contain data relating to a single HTTP transaction. Fields are separated by white space, and a hyphen represents a missing field.
|W3C Extended Log File Format         | Highly customizable log format used by Windows IIS servers. 

# Reference data

Category                                     | Sub-Category                 | Norm                                | Owner                         | Comment
---------------------------------------------|------------------------------|-------------------------------------|-------------------------------|-----------------------------------------------------
Geography                 | Countries                                                                | [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)                     | [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)                            |
Geography                 | Risk zones                                                               | [CRESTA Zones](https://www.cresta.org/#/explore)                                             | [CRESTA](https://about.cresta.org/)                                                                            |
Geography                 | Currencies                                                               | [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)                                           | [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)                            |
Geography                 | Languages                                                                | [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)                             | [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)                            |
Health - Diagnostic       | Diseases classification                                                  | [ICD-10](https://en.wikipedia.org/wiki/ICD-10)                                               | [WHO](https://en.wikipedia.org/wiki/World_Health_Organization)                                                 |
Health - Diagnostic       | Patient data for clinical purposes and EHRs (Electronic Health Records)  | [SNOMED-CT](https://en.wikipedia.org/wiki/SNOMED_CT)                                         | [IHTSDO](https://en.wikipedia.org/wiki/International_Health_Terminology_Standards_Development_Organisation)    |
Health - Diagnostic       | Diagnostic and Statistical Manual of Mental Disorders (DSM)              | [DSM-5-TR](https://www.psychiatry.org/psychiatrists/practice/dsm)                            | [APA](https://en.wikipedia.org/wiki/American_Psychiatric_Association)                                          | DSM is the most popular diagnostic system for mental disorders in the US, ICD is used more widely in Europe and other parts of the world. ICD is more often used for clinical diagnosis while DSM is more valued for research.
Health - Procedural       | Medical, surgical, and diagnostic services                               | [CPT](https://en.wikipedia.org/wiki/Current_Procedural_Terminology)                          | [AMA](https://en.wikipedia.org/wiki/American_Medical_Association)                                              |
Health - Procedural       | Medical procedures and services                                          | [HCPCS](https://en.wikipedia.org/wiki/Healthcare_Common_Procedure_Coding_System)             | [CMS](https://en.wikipedia.org/wiki/Centers_for_Medicare_%26_Medicaid_Services)                                |
Health - Procedural       | Specific surgical, medical, or diagnostic interventions                  | [ICHI](https://en.wikipedia.org/wiki/International_Classification_of_Health_Interventions)   | [WHO](https://en.wikipedia.org/wiki/World_Health_Organization)                                                 |
Health - Pharmaceutical   | Drug classification                                                      | [ATC](https://en.wikipedia.org/wiki/Anatomical_Therapeutic_Chemical_Classification_System)   | [WHO](https://en.wikipedia.org/wiki/World_Health_Organization)                                                 |
Health - Laboratory       | Medical observations                                                     | [LOINC](https://en.wikipedia.org/wiki/LOINC)                                                 | [IUSM](https://en.wikipedia.org/wiki/Indiana_University_School_of_Medicine)                                    |

# Compliance (legal, security)

Category                                     | Sub-Category                 | Norm                                | Owner                         | Comment
---------------------------------------------|------------------------------|-------------------------------------|-------------------------------|-----------------------------------------------------
Health                                       | Health informatics                                     | [ISO/TC 215](https://www.iso.org/committee/54960.html)                                                 | [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)
Health                                       | Medical devices                                        | [ISO 13485:2016](https://www.iso.org/standard/59752.html)                                              | [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)
Health                                       | Health data                                            | [HIPAA](https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/audit/protocol/index.html)  | [104th United States Congress](https://en.wikipedia.org/wiki/104th_United_States_Congress)
Health                                       | Medicine                                               |                                                                                                        | [European Medicines Agency (EMA)](https://en.wikipedia.org/wiki/European_Medicines_Agency)
Health                                       | Medicine                                               |                                                                                                        | [Food and Drug Administration (FDA)](https://en.wikipedia.org/wiki/Food_and_Drug_Administration)
Paymment                                     | Payment Card Industry Data Security (PCI DSS)          | [PCI DSS](https://www.pcisecuritystandards.org/document_library/)                                      | [Payment Card Industry Security Standards Council](https://en.wikipedia.org/wiki/Payment_Card_Industry_Security_Standards_Council)
Person                                       | Consumer protection                                    | [ISO 31700](https://www.iso.org/obp/ui/#iso:std:iso:31700:-1:ed-1:v1:en)                               | [International Organization for Standardization](https://en.wikipedia.org/wiki/International_Organization_for_Standardization)
Person                                       | General Data Protection (EU)                           | [GDPR Articles](https://gdpr-info.eu/)                                                                 | [European Union law](https://en.wikipedia.org/wiki/European_Union_law)
Person                                       | California Consumer Privacy Act (CCPA)                 | [CCPA Articles](https://oag.ca.gov/privacy/ccpa)                                                       | [State of California](https://leginfo.legislature.ca.gov/)
Person                                       | Personal Information Protection Law (PIPL China)       | [PIPL Law](http://www.npc.gov.cn/npc/c30834/202108/a8c4e3672c74491a80b53a172bb753fe.shtml)             | [Replublic of China](https://en.wikipedia.org/wiki/13th_National_People%27s_Congress)


# Open Data

Name                           | Source                                                      
-------------------------------|--------------------------------------------------------------
New York City Data                    | [New York City Data](https://data.cityofnewyork.us)   
Data Gov India                        | [Data Gov India](https://data.gov.in)                 
Data Gov France                       | [Data Gov France](https://www.data.gouv.fr)           
Kaggle (Open Data for Data Science)   | [Kaggle](https://www.kaggle.com/)                     

# Data models

Category                                     | Sub-Category                 | Norm                                | Owner                         | Comment
---------------------------------------------|------------------------------|-------------------------------------|-------------------------------|-----------------------------------------------------
General                                      | General                      | [Commen Data Model(CDM)](https://learn.microsoft.com/en-us/common-data-model/)                                                                                                                    | [Microsoft](https://en.wikipedia.org/wiki/Microsoft)
Sales & Marketing                            | General                      | [Salesforce Data Model](https://architect.salesforce.com/diagrams/template-gallery/sales-cloud-overview-data-model)                                                                               | [Salesforce](https://en.wikipedia.org/wiki/Salesforce)
Party/Customer                               | General                      | [IBM Party Data Model](https://www.ibm.com/docs/en/imdm/10.1?topic=overview-party-domain-model)                                                                                                   | [IBM](https://en.wikipedia.org/wiki/IBM)
Insurance                                    | General                      | [ACORD Reference Architecture](https://www.acord.org/standards-architecture/reference-architecture)                                                                                               | [ACORD](https://en.wikipedia.org/wiki/ACORD)
Insurance                                    | P&C                          | [Object Management Group (OMG) PC](https://www.omg.org/spec/PC/About-PC/)                                                                                                                         | [Object Management Group (OMG)](https://en.wikipedia.org/wiki/Object_Management_Group)
Insurance                                    | General                      | [Salesforce Insurance and Financial Services Data Model](https://help.salesforce.com/s/articleView?id=ind.v_data_models_vlocity_insurance_and_financial_services_data_model_667142.htm&type=5)    | [Salesforce](https://en.wikipedia.org/wiki/Salesforce)
Health                                       | General                      | [FHIM](https://fhim.org/fhim-model), [FHIM UML](https://fhims.org/content/420A62FD03B6_root.html): superset of all the standards (primarily from HL7, NCPDP, and ASC X12)                         | U.S. Government Federal Health Architecture (FHA) Program
Health                                       | General                      | [FHIR](https://www.hl7.org/fhir/overview.html)                                                                                                                                                    | [HL7](https://en.wikipedia.org/wiki/Health_Level_Seven_International)
Health                                       | General                      | [OHDSI](https://www.ohdsi.org/data-standardization/), [OHDSI DDL](https://github.com/OHDSI/CommonDataModel/tree/main/ddl): standard data model focusing on observations                           | [OHDSI](https://en.wikipedia.org/wiki/Observational_Health_Data_Sciences_and_Informatics)
Health                                       | General                      | [Salesforce Health](https://developer.salesforce.com/docs/atlas.en-us.232.0.health_cloud_object_reference.meta/health_cloud_object_reference/map_fhir_overview.htm)                               | [Salesforce](https://en.wikipedia.org/wiki/Salesforce)                           
General (event, building, etc.)              | General                      | [Fiware](https://www.fiware.org/developers/data-models/), [Fiware Smart Data Models](https://github.com/smart-data-models)                                                                        | Fiware
Data Governance                              | General                      | [Collibra Data Governance Model](https://cdn-university.collibra.com/wp-content/COOK/Structural-Concepts_360597.html)                                                                             | Collibra                        
Financial industry business ontology (FIBO)  | Finance                      | [Finance FIBO](https://datalanguage.com/blog/visualising-fibo)                                                                                                                                    | [EDM Council](https://spec.edmcouncil.org/fibo/)
Information Technology                       | Service Management           | [ServiceNow CSDM](https://docs.servicenow.com/bundle/washingtondc-servicenow-platform/page/product/csdm-implementation/concept/csdm-conceptual-model.html)                                        | [ServiceNow](https://en.wikipedia.org/wiki/ServiceNow)
Information Technology                       | CMDB                         | [ServiceNow CMDB](https://docs.servicenow.com/bundle/washingtondc-servicenow-platform/page/product/configuration-management/reference/cmdb-tables-details.html)                                   | [ServiceNow](https://en.wikipedia.org/wiki/ServiceNow)
Information Technology                       | IT4IT                        | [IT4IT Meta Model](https://pubs.opengroup.org/it4it/3.0/snapshot/Metamodel.html)                                                                                                                  | [The Open Group](https://en.wikipedia.org/wiki/The_Open_Group)
Information Technology                       | Architecture                 | [Archimate](https://pubs.opengroup.org/architecture/archimate3-doc/)                                                                                                                              | [The Open Group](https://en.wikipedia.org/wiki/The_Open_Group)

# Data models mapping

FHIR                    | Salesforce                                      
------------------------|-------------------------------------------------
Address                 | Contact Point Address                           
Allergy Intolerance     | Allergy Intolerance, PatientHealthReaction      
Annotation              | AuthorNote                                      
Attachment              | Attachment                                      
Codeable Concept        | CodeSet BundleBundle                            
Coding                  | CodeSet                                         
Condition               | Health Condition                                
ContactPoint            | Contact Point Phone                             
Device                  | Asset, Care Registered Device                   
Diagnostic Report       | Diagnostic Summary                              
Document Reference      | Diagnostic Summary, Diagnostic SummaryDetail    
Dosage                  | Patient Medication Dosage                       
Encounter               | Clinical Encounter                              
Flag                    | Clinical Alert                                  
Human Name              | Person Name                                     
Identifier              | Identifier                                      
Immunization            | Patient Immunization, Patient Health Reaction   
Location                | Healthcare Facility                             
Medication              | Medication                                      
Medication Request      | Medication Request                              
Medication Statement    | Medication Statement                            
Observation             | Care Observation, Care Observation Component    
Organization            | Account                                         
Patient                 | Account, Contact                                
Practitioner            | Healthcare Provider, Person Accounts            
PractitionerRole        | Healthcare Practitioner Facility, Care Provider Facility Specialty  
Procedure               | Patient Medical Procedure, Patient Medical Procedure Detail         
RelatedPerson           | Account, Contact, Contact Contact Relation                          
Service Request         | Clinical Service Request, Clinical Service Request Detail           
Timing                  | ActivityTiming                                  

# Protocols

Category                              | Owner                                          | Comment
--------------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------------------
BI & Analytics                        | [Data Mining Group (DMG)](https://dmg.org/)    | [Predictive Model Markup Language (PMML)](https://dmg.org/pmml/v4-1/GeneralStructure.html)
BI & Analytics                        | [Data Mining Group (DMG)](https://dmg.org/)    | [Portable Format for Analytics (PFA)](https://dmg.org/pfa/)
BI & Analytics                        | [Open Neural Network Exchance (ONNX) community](https://onnx.ai/about.html)    | [Open Neural Network Exchange (ONNX)](https://github.com/onnx/onnx)
Metadata Management                   | [Object Management Group (OMG)](https://www.omg.org/about/)    | [Common Warehouse Metamodel (CWM)](https://www.omg.org/spec/CWM/1.1/About-CWM)
Metadata Management                   | [ODPi Egeria (Linux Foundation Project)](https://egeria-project.org/)    | [ODPi Egeria](https://github.com/odpi/egeria)
Content Management                    | [OASIS](https://www.oasis-open.org/org/)       | [Content Management Interoperability Services (CMIS)](https://docs.oasis-open.org/cmis/CMIS/v1.1/CMIS-v1.1.html)


