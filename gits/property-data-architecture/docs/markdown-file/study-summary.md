% PROPERTY DATA AT AXA
% GETD Data Management Team
% June, 2022

# Summary

+ Property data exists beyond the insurance world like a party (person or organization). 
+ We need to make the difference between property master data and aggregate data specifically collected in addition for insurance purpose.
+ Identification of the structure is challenging as there is no natural business key. At AXA CH, it’s easier because the government provides a national ID for each building. There is related initiative in France but not yet rolled out.
+ Very few structure data are currently collected based on the different use cases surveyed.
+ The scope, granularity and level of quality of the data depend on the use cases (real estate asset management, insurance underwriting, pricing modeling...). Example from real estate:
	+ Reference data like country iso list may change over time but not always maintained. The data provided by the business users is sometimes still based on the previous version and there is no need to improve
	+ For asset management, detailed GPS coordinate is not mandatory except for data visualization
	+ Structure assesssment results may vary :
		+ depending on the context of valuation (ex building area : legal vs actual)
		+ depeding on the expertise and methodology of the expert doing the valuation
+ Some use cases require to have a good knwoledge of the lifecycle of the structure by keeping an history of the data:
	+ Tenants over time
	+ Renovations, extensions, destruction
	+ Dimensions (area) valuation overtime
	+ Building valuation overtime
	+ Occupancy overtime
	+ Operations overtime
	+ ...

