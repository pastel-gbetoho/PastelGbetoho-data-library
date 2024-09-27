  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **ITIL Category**           **NFR**                       **Mandatory?   **What is it?**      **Why is it          **Measurement**   **Included in     
                                                            (Y or TBD)**                        important?**                           Requirements?**   
  --------------------------- ----------------------------- -------------- -------------------- -------------------- ----------------- ----------------- ----------------
  ** **                       ** **                         ** **          ** **                ** **                ** **             **Yes(Y)/No (N)** **Comments - For
                                                                                                                                                         Mandatory NFRs -
                                                                                                                                                         if not included
                                                                                                                                                         then why not?**

  **Availability**            ** **                         ** **          **The time the       **Key criteria of    ** **             ** **             ** **
                                                                           solution is fully    online systems                                           
                                                                           operational, as a    because when systems                                     
                                                                           percentage of total  are down - users,                                        
                                                                           time**               productivity, and                                        
                                                                                                critical business                                        
                                                                                                processes are                                            
                                                                                                negativity                                               
                                                                                                impacted.**                                              

  **Availability**            **Service Hours**             **Y**          Have you specified   This could affect                      ** **              
                                                                           Service Hours -      the high level of                                        
                                                                           these are the hours  the solution -- for                                      
                                                                           of operation of the  example if there are                                     
                                                                           service covered by   batch windows                                            
                                                                           this set of          available or does                                        
                                                                           requirements? This   the solution have to                                     
                                                                           is for each          be 24x7.                                                 
                                                                           location. There may                                                           
                                                                           be different hours                                                            
                                                                           of operation for                                                              
                                                                           different parts of                                                            
                                                                           the Service and for                                                           
                                                                           different locations                                                           
                                                                           (e.g. India).                                                                 

  **Availability**            **Peak Hours / Critical       **Y**          Have you specified   This will affect the                   ** **              
                              Periods**                                    any hours where the  design and may have                                      
                                                                           service / system     an impact on other                                       
                                                                           will be most used?   systems which                                            
                                                                           Also have you        interface with this                                      
                                                                           specified any        one. For example                                         
                                                                           particular business  Finance month end &                                      
                                                                           critical period      year end processing                                      
                                                                           (e.g. Finance EOY)   are important                                            
                                                                           where special        factors to consider.                                     
                                                                           arrangements may be                                                           
                                                                           required. Core (when                                                          
                                                                           most users are going                                                          
                                                                           to use it in the                                                              
                                                                           location for example                                                          
                                                                           based on staffing                                                             
                                                                           patterns) & non-Core                                                          
                                                                           hours may also need                                                           
                                                                           to be captured here                                                           
                                                                           if relevant. No                                                               
                                                                           changes, no                                                                   
                                                                           maintenance unless                                                            
                                                                           clear and imminent                                                            
                                                                           risk. In case of                                                              
                                                                           need, try to defer                                                            
                                                                           to next non-critical                                                          
                                                                           period and if not                                                             
                                                                           possible to next                                                              
                                                                           critical period.                                                              

  **Availability**            **Availability Percentage of  **Y**          The Availability     This may be used by                    ** **              
                              Service Hours**                              Target defines the   Solution Consultants                                     
                                                                           minimum time span    to determine the                                         
                                                                           the application      type of                                                  
                                                                           should be available  infrastructure                                           
                                                                           during the agreed    solution required,                                       
                                                                           Service hours. Have  for example if high                                      
                                                                           you specified        availability is                                          
                                                                           availability         required for an                                          
                                                                           requirements -for    on-line system the                                       
                                                                           example target % of  project needs to                                         
                                                                           Service Hours?       design for it & more                                     
                                                                                                than one clustered                                       
                                                                                                application and / or                                     
                                                                                                database server may                                      
                                                                                                be required - this                                       
                                                                                                will result in                                           
                                                                                                additional cost to                                       
                                                                                                the project.                                             
                                                                                                Additionally this                                        
                                                                                                includes business                                        
                                                                                                impact e.g. by lost                                      
                                                                                                business per hour or                                     
                                                                                                by process or                                            
                                                                                                function.                                                

  **Availability**            **Maximum Expectable          **Y**          Have you specified   This includes                          ** **              
                              outages/hours**                              how many \"outages\" unscheduled &                                            
                                                                           over a defined       scheduled downtime &                                     
                                                                           period of time &     maintenance - so                                         
                                                                           maximum length of    that we can                                              
                                                                           any outage that the  understand when                                          
                                                                           business would find  routine maintenance                                      
                                                                           acceptable for this  can be scheduled.                                        
                                                                           service / system?    This would affect                                        
                                                                                                the design - if the                                      
                                                                                                business could not                                       
                                                                                                accept any outages                                       
                                                                                                then the design                                          
                                                                                                would need to allow                                      
                                                                                                for this -                                               
                                                                                                potentially                                              
                                                                                                expensive! There are                                     
                                                                                                2 targets in one                                         
                                                                                                here, the first is                                       
                                                                                                how many outages,                                        
                                                                                                which is the                                             
                                                                                                reliability (e.g.                                        
                                                                                                less than 5 a month)                                     
                                                                                                and the second is                                        
                                                                                                maximum time to                                          
                                                                                                restore service, or                                      
                                                                                                target to restore                                        
                                                                                                service (e.g. within                                     
                                                                                                4 hours)                                                 

  **Availability**            **Maintenance Windows**       **Y**          Maintenance windows  Maintenance windows                    ** **              
                                                                           are foreseen and     are planned in for                                       
                                                                           agreed downtimes in  each system /                                            
                                                                           order to run         application and any                                      
                                                                           changes,             impact on service                                        
                                                                           housekeeping works,  hours can be                                             
                                                                           specific tests (e.g. assessed and avoided                                     
                                                                           DR) and full         where possible.                                          
                                                                           back-ups...                                                                   

  **Availability**            **Sanity Check Measurement**  **TBD**        Aims at verifying    Helps with ensuring                    ** **              
                                                                           the availability of  components are at an                                     
                                                                           the applications by  expected state                                           
                                                                           checking both                                                                 
                                                                           infrastructural                                                               
                                                                           components and                                                                
                                                                           overall functioning                                                           

  **Operation & Tech          ** **                         ** **          **Day-to-day         **Has direct impact  ** **             ** **             ** **
  Services**                                                               supervision and      on how a solution or                                     
                                                                           technical support    service is delivered                                     
                                                                           for the AXA IT       to the business.                                         
                                                                           infrastructure.**    Operations can also                                      
                                                                                                have an impact on                                        
                                                                                                the total cost of                                        
                                                                                                running a                                                
                                                                                                solution.**                                              

  **Operation & Tech          **Business Criticality**      **Y**          Have you specified   Has different uses                     ** **              
  Services**                                                               whether the system / but mainly an AXA GO                                     
                                                                           service is business  term -- affects                                          
                                                                           critical or not - is level of support,                                        
                                                                           it one of the AXA GO priority, monitoring                                     
                                                                           Strategic Monitored  & DR. See Analysis &                                     
                                                                           Services?            Design help for more                                     
                                                                                                explanation.                                             

  **Operation & Tech          **Application Supported       **Y**          Have you specified   Supported hours are                    ** **              
  Services**                  Hours**                                      the hours where      the hours that the                                       
                                                                           support is required  business require                                         
                                                                           by application       various IT teams &                                       
                                                                           support teams? Also  suppliers to provide                                     
                                                                           any out hours        or be available to                                       
                                                                           support required.    provide support to                                       
                                                                           This may be          them, for example in                                     
                                                                           different to the     the event of a                                           
                                                                           Service Hours and it problem. This is                                         
                                                                           also may be          often \"standard\" &                                     
                                                                           different by         it will be important                                     
                                                                           different types of   to highlight any                                         
                                                                           support needed.      differences as this                                      
                                                                                                will likely involve                                      
                                                                                                a cost to the                                            
                                                                                                business. This info                                      
                                                                                                will be used to                                          
                                                                                                \"design\" the                                           
                                                                                                support solution                                         
                                                                                                (documented in the                                       
                                                                                                Statement of                                             
                                                                                                Support) and may                                         
                                                                                                affect ongoing                                           
                                                                                                support costs.                                           

  **Operation & Tech          **Infrastructure Supported    **Y**          Have you specified   Supported hours are                    ** **              
  Services**                  Hours**                                      the hours where      the hours that the                                       
                                                                           support is required  business require                                         
                                                                           by both the          various IT teams &                                       
                                                                           applications support suppliers to provide                                     
                                                                           and any underlying   or be available to                                       
                                                                           infrastructure       provide support to                                       
                                                                           support teams? Also  them, for example in                                     
                                                                           any out hours        the event of a                                           
                                                                           support required.    problem. This is                                         
                                                                           This may be          often \"standard\" &                                     
                                                                           different to the     it will be important                                     
                                                                           Service Hours        to highlight any                                         
                                                                           because of planned   differences as this                                      
                                                                           maintenance          will likely involve                                      
                                                                           requirements and it  a cost to the                                            
                                                                           also may be          business. This info                                      
                                                                           different by         will be used to                                          
                                                                           different types of   \"design\" the                                           
                                                                           support needed.      support solution                                         
                                                                                                (documented in the                                       
                                                                                                Statement of                                             
                                                                                                Support) and may                                         
                                                                                                affect ongoing                                           
                                                                                                support costs.                                           

  **Operation & Tech          **Prioritization /            **TBD**        Have you specified   The business may                       ** **              
  Services**                  Dependencies**                               any business         require that a                                           
                                                                           requirements for     process has been                                         
                                                                           prioritization or    completed before                                         
                                                                           dependencies of      another one starts.                                      
                                                                           processing that may  For example they may                                     
                                                                           affect the solution? require that certain                                     
                                                                                                rates have been                                          
                                                                                                updated before users                                     
                                                                                                are allowed to                                           
                                                                                                produce quotes for                                       
                                                                                                new business or fund                                     
                                                                                                prices calculated                                        
                                                                                                for that day before                                      
                                                                                                claims are processed                                     
                                                                                                or may require that                                      
                                                                                                information is                                           
                                                                                                delivered to a third                                     
                                                                                                party by 5 a.m.                                          

  **Operation & Tech          **Extensibility &             **TBD**        Have you specified   The solution will                      ** **              
  Services**                  Scalability**                                any other            need to work after                                       
                                                                           requirements         day 1 - but we may                                       
                                                                           covering the ability need to design of it                                     
                                                                           for the solution to  & there could be an                                      
                                                                           grow in the future   additional cost to                                       
                                                                           (this is separate    the project.                                             
                                                                           but related to                                                                
                                                                           capacity                                                                      
                                                                           requirements), for                                                            
                                                                           example as more                                                               
                                                                           users are required                                                            
                                                                           can additional                                                                
                                                                           capacity easily be                                                            
                                                                           accommodated & do                                                             
                                                                           system resources                                                              
                                                                           increase linearly in                                                          
                                                                           line with no of                                                               
                                                                           users (rather than                                                            
                                                                           for example                                                                   
                                                                           exponentially)?                                                               

  **Operation & Tech          **Support**                   **Y**          Have you defined     If the service is                      ** **              
  Services**                                                               what support will be not supported - then                                     
                                                                           required once this   what happens when                                        
                                                                           service has gone     there is an issue                                        
                                                                           into production?     when the project no                                      
                                                                                                longer exists? The                                       
                                                                                                cost to the project                                      
                                                                                                & ongoing depends on                                     
                                                                                                the level of support                                     
                                                                                                needed - These costs                                     
                                                                                                are in the IT                                            
                                                                                                Project Service                                          
                                                                                                Variation & the                                          
                                                                                                equivalent AXA GO &                                      
                                                                                                other third party                                        
                                                                                                documents.                                               

  **Operation & Tech          **Maintainability**           **Y**          Have you specified   For example what                       ** **              
  Services**                                                               anything required    aspects do the                                           
                                                                           from the project to  business want to be                                      
                                                                           maintain the service able to maintain or                                      
                                                                           / system (or part    configure                                                
                                                                           of) - specify any    themselves - this                                        
                                                                           requirements about   may affect the                                           
                                                                           who should maintain  design & cost.                                           
                                                                           the service although                                                          
                                                                           the actual teams                                                              
                                                                           involved would be                                                             
                                                                           documented in the                                                             
                                                                           Statement of                                                                  
                                                                           Support.                                                                      

  **Operation & Tech          **Work Request Management**   **TBD**        Have you specified   Are there any                          ** **              
  Services**                                                               any requirements     components such as                                       
                                                                           that will affect the certain devices,                                         
                                                                           work request process e.g. laptops that                                        
                                                                           or need work         are not part of the                                      
                                                                           requests raised for  current WR                                               
                                                                           BAU tasks after the  offering/catalogue                                       
                                                                           service is live?     but need to be                                           
                                                                                                included for this                                        
                                                                                                services so that                                         
                                                                                                users can use WR to                                      
                                                                                                request items such                                       
                                                                                                as installation of                                       
                                                                                                new software - this                                      
                                                                                                may incur additional                                     
                                                                                                costs.                                                   

  **Operation & Tech          **Training**                  **TBD**        Have you specified   Delivering training                    ** **              
  Services**                                                               requirements for     or facilities for                                        
                                                                           training both people training as part of                                      
                                                                           who will use the     a project has a cost                                     
                                                                           service & people who but can be essential                                     
                                                                           will support the     to ensure the                                            
                                                                           service? This        success of the                                           
                                                                           includes the         project.                                                 
                                                                           \"who\", \"what\" &                                                           
                                                                           \"when\" of                                                                   
                                                                           training. It should                                                           
                                                                           also specify any                                                              
                                                                           facilities or                                                                 
                                                                           material. For                                                                 
                                                                           example are on-line                                                           
                                                                           demos required?                                                               

  **Operation & Tech          **Operational Documentation** **TBD**        Have you specified   There is usually a                     ** **              
  Services**                                                               any non-project      cost associated with                                     
                                                                           documentation that   producing                                                
                                                                           needs to be          non-project                                              
                                                                           produced? This       documentation,                                           
                                                                           includes support,    therefore any                                            
                                                                           maintenance, manuals requirements need to                                     
                                                                           & user documents -   captured & agreed so                                     
                                                                           what it is, what the that they can be                                         
                                                                           project should       prioritized &                                            
                                                                           produce / update &   estimated.                                               
                                                                           who is responsible                                                            
                                                                           for maintaining it -                                                          
                                                                           where stored &                                                                
                                                                           processes used to                                                             
                                                                           maintain it.                                                                  

  **Operation & Tech          **Online Help**               **TBD**        Have you specified   If needed then will                    ** **              
  Services**                                                               any required help    need to be built                                         
                                                                           facilities - these   into the solution.                                       
                                                                           can lead to                                                                   
                                                                           additional                                                                    
                                                                           functional                                                                    
                                                                           requirements?                                                                 

  **Operation & Tech          **Setup Process**             **TBD**        How easy is it to    Providing packaged                     ** **              
  Services**                                                               install? For example installs may affect                                      
                                                                           does the solution    the cost --                                              
                                                                           need to be           additional software                                      
                                                                           installable by end   may need to be                                           
                                                                           users downloading it built.                                                   
                                                                           or by non-IT field                                                            
                                                                           staff at remote                                                               
                                                                           locations.                                                                    

  **Operation & Tech          **Network Latency             **Y**          Have you specified   For example you need                   ** **              
  Services**                  Consideration**                              any requirements     to consider for                                          
                                                                           that are of          offshoring - it                                          
                                                                           significant impact   needs to be design                                       
                                                                           to network - for     in, tested & will                                        
                                                                           example new country  have an additional                                       
                                                                           to connect to?       cost.                                                    
                                                                           However do not                                                                
                                                                           confuse this with                                                             
                                                                           the network design.                                                           

  **Operation & Tech          **Telephony**                 **TBD**        Have you specified   For example may have                   ** **              
  Services**                                                               any specific         additional needs for                                     
                                                                           Telephony            a new call center or                                     
                                                                           requirements?        different staffing                                       
                                                                                                patterns as a result                                     
                                                                                                of the project -                                         
                                                                                                this needs to be                                         
                                                                                                designed & will have                                     
                                                                                                a cost.                                                  

  **Operation & Tech          **Environmental & Physical**  **Y**          Have you specified   E.g. for Physical                      ** **              
  Services**                                                               any requirements for requirements such as                                     
                                                                           the physical         buildings - strength                                     
                                                                           environment that     of flooring for IT                                       
                                                                           need to be met e.g.  kit etc.? Is there                                       
                                                                           must be housed in    physical space for                                       
                                                                           waterproof area?     additional                                               
                                                                           This would also      equipment? This may                                      
                                                                           include safety       have a cost for                                          
                                                                                                project & needs to                                       
                                                                                                be designed &                                            
                                                                                                considered before                                        
                                                                                                the solution is                                          
                                                                                                delivered.                                               

  **Operation & Tech          **Platform**                  **Y**          Have you specified   This needs to be                       ** **              
  Services**                                                               any platform         clearly defined as                                       
                                                                           specific             may need additional                                      
                                                                           requirements such as testing - it may be                                      
                                                                           will the solution    relevant for                                             
                                                                           need to work under   different ways of                                        
                                                                           Citrix?              working such as                                          
                                                                                                offshore.                                                

  **Operation & Tech          **Integration / Interfaces**  **Y**          Have you specified   For example certain                    ** **              
  Services**                                                               interfaces or        information may need                                     
                                                                           integration with 3rd to be available to                                       
                                                                           parties or areas     different third                                          
                                                                           within the AXA       parties or customer                                      
                                                                           landscape.           data may need to be                                      
                                                                                                the same on more                                         
                                                                                                than one system.                                         
                                                                                                This will need to be                                     
                                                                                                designed & may have                                      
                                                                                                additional costs.                                        

  **Operation & Tech          **System Environments**       **Y**          Have you specified   These are not                          ** **              
  Services**                                                               requirements for     usually environments                                     
                                                                           development,         required to carry                                        
                                                                           support, testing,    out the projects                                         
                                                                           pre-production &     which are covered in                                     
                                                                           production           an ARK document that                                     
                                                                           environments to      specifically covers                                      
                                                                           support the service  this, but cover the                                      
                                                                           / system.            actual delivered                                         
                                                                                                solution and how it                                      
                                                                                                is expected to be                                        
                                                                                                maintained after                                         
                                                                                                implementation.                                          

  **Operation & Tech          **Decommission**              **Y**          Have you specified   There may be savings                   ** **              
  Services**                                                               requirements for any to be made by                                            
                                                                           decommission of      decommissioning                                          
                                                                           software or hardware software or                                              
                                                                           as a result of this  hardware. Any                                            
                                                                           project?             service components                                       
                                                                                                can be eligible for                                      
                                                                                                decommissioning in                                       
                                                                                                different cases:\                                        
                                                                                                - when an                                                
                                                                                                application                                              
                                                                                                infrastructure or                                        
                                                                                                service is changed\                                      
                                                                                                - when the                                               
                                                                                                application itself                                       
                                                                                                is decommissioned\                                       
                                                                                                - when an                                                
                                                                                                application no                                           
                                                                                                longer requires data                                     
                                                                                                or services from                                         
                                                                                                another                                                  

  **Operation & Tech          **Reusability & Convergence** **Y**          Have you specified   This is because we                     ** **              
  Services**                                                               any requirements     should be looking to                                     
                                                                           relating to the      re-use wherever                                          
                                                                           reuse of existing    possible to simplify                                     
                                                                           solutions that       our landscape & not                                      
                                                                           enable convergence   buy in additional                                        
                                                                           within IT?           systems that do the                                      
                                                                                                same as those that                                       
                                                                                                we already use.                                          

  **Operation & Tech          **Implementation              **Y**          Languages, Operating Supported versions                     ** **              
  Services**                  Constraints**                                Systems, Standard,   of 3^rd^ party                                           
                                                                           System Interfaces,   software                                                 
                                                                           Legacy Systems,                                                               
                                                                           Databases                                                                     

  **Operation & Tech          **Portability**               **Y**          Have you specified   For example does the                   ** **              
  Services**                                                               any requirements     solution need the                                        
                                                                           that the solution    ability to move                                          
                                                                           must meet in terms   across operating                                         
                                                                           of being portable    systems as there is                                      
                                                                           from one environment planned change in                                        
                                                                           to another?          strategic direction?                                     

  **Operation & Tech          **Operability**               **Y**          Specify anything     For example if we                      ** **              
  Services**                                                               required from the    are not looking for                                      
                                                                           project to operate   AXA GO to operate                                        
                                                                           the service / system the service then who                                     
                                                                           (or part of) -       would it be?                                             
                                                                           specify any                                                                   
                                                                           requirements about                                                            
                                                                           who should operate                                                            
                                                                           the service.                                                                  

  **Operation & Tech          **Ownership - Business & IT** **Y**          Have you specified   Information owners                     ** **              
  Services**                                                               who will own the     are need for                                             
                                                                           service /            security, new &                                          
                                                                           applications from an amended services /                                       
                                                                           IT & Business        systems will need an                                     
                                                                           perspective?         IT & Business owner                                      
                                                                                                for sign off &                                           
                                                                                                responsibility.                                          

  **Operation & Tech          **Implementation/Deployment   **TBD**        Specify if there are There may be legal                     ** **              
  Services**                  Approach**                                   any requirements for or regulatory                                            
                                                                           the way that the     reasons why everyone                                     
                                                                           solution must be     must use a certain                                       
                                                                           implemented -for     solution or version                                      
                                                                           example must be big  of software from a                                       
                                                                           bang (everyone must  certain date. Or the                                     
                                                                           have new software at business may want to                                     
                                                                           the same time) or    control the rollout                                      
                                                                           must be phased       to fit alongside the                                     
                                                                           rollout              training of users.                                       

  **Security**                ** **                         ** **          **Security covers    **You should         ** **             ** **             ** **
                                                                           both the security of consider both                                            
                                                                           our data & systems   internal and                                             
                                                                           plus may also        external users,                                          
                                                                           include physical     transferring data                                        
                                                                           security such as     between locations,                                       
                                                                           access to            access to systems,                                       
                                                                           buildings.**         how data is                                              
                                                                                                stored.**                                                

  Security                    Security (Data & Physical)    Y              Have you specified   This is important                      ** **             Country or
                                                                           security             for example to                                           region specific
                                                                           requirements for the ensure that only the                                     policies may be
                                                                           project including    right people can                                         recorded in
                                                                           changes of access    access the service /                                     standards
                                                                           rights (both         system and that data                                     documentation
                                                                           business & IT),      AXA stores &                                             for that country
                                                                           encryption and other processes are                                            or region\
                                                                           data or system       protected in the                                         i.e. UK Group
                                                                           security aspects?    right way.                                               Security Risk
                                                                           Note this may lead                                                            Policy is
                                                                           to further                                                                    embedded within
                                                                           functional                                                                    the ARK Policies
                                                                           requirements which                                                            section\
                                                                           should be documented                                                          i.e. UK Project
                                                                           under the functional                                                          Delivery
                                                                           tab. The IT &                                                                 Standards are
                                                                           Business Security                                                             embedded within
                                                                           Managers should be                                                            the ARK
                                                                           engaged for                                                                   Standards
                                                                           assistance. This                                                              section
                                                                           should include                                                                
                                                                           conformance to Group                                                          
                                                                           Security Risk Policy                                                          
                                                                           of which Secure                                                               
                                                                           Application Delivery                                                          
                                                                           forms a part.\                                                                
                                                                           (I) See Group                                                                 
                                                                           Security Risk                                                                 
                                                                           Policy\                                                                       
                                                                           (ii) See Country or                                                           
                                                                           region specific                                                               
                                                                           information risk                                                              
                                                                           policies                                                                      

  **Security**                Standard Security Management  **Y**          Is a set of measures Information security As recommended:\  ** **             Should be a
                                                                           to ensure protection is crucial in        - 24/7 antivirus,                   default
                                                                           against IT threats   defending the        antimalware and                     infrastructure
                                                                           in accordance with   information assets   spam filtering                      related
                                                                           the specifications   of the AX Tech       protection is                       requirement -
                                                                           of the Group         infrastructure and   guaranteed\                         possibly not
                                                                           Information Security reassuring the       - Systems are                       visible to
                                                                           Policy & Standards   Operating Companies  patched against                     business unless
                                                                           (GISPS)              that their           vulnerability in                    deemed to be
                                                                                                information is safe  a timely manner.                    appropriate, but
                                                                                                guarded.             For Windows &                       always discussed
                                                                                                                     Linux systems the                   by project teams
                                                                                                                     patches are                         in IT and AXA GO
                                                                                                                     applied on a                        
                                                                                                                     timely manner\                      
                                                                                                                     - Network                           
                                                                                                                     security is                         
                                                                                                                     monitored against                   
                                                                                                                     potential attacks                   
                                                                                                                     and virus                           
                                                                                                                     outbreaks\                          
                                                                                                                     - Set policies                      
                                                                                                                     and standards for                   
                                                                                                                     user                                
                                                                                                                     administration                      

  **Security**                Vulnerability Management      **Y**          Is the constant      Helps manage         As recommended:\  ** **             Should be a
                                                                           assessment of the    security with        - Systems are                       default
                                                                           systems protection   centralized reports, weekly scanned;\                    infrastructure
                                                                           and vulnerability.   verified remedies,   - Vulnerabilities                   related
                                                                           Provides continuous  and full remediation are assessed;\                      requirement -
                                                                           protection against   workflow             - When needed, a                    possibly not
                                                                           the latest worms and capabilities.        trigger to                          visible to
                                                                           security threats.                         security patch                      business unless
                                                                                                                     management                          deemed to be
                                                                                                                     process is raised                   appropriate, but
                                                                                                                     or remediation\'s                   always discussed
                                                                                                                     actions are                         by project teams
                                                                                                                     triggered\                          in IT and AXA GO
                                                                                                                     \                                   
                                                                                                                     Results are                         
                                                                                                                     documented in                       
                                                                                                                     monthly \"Key                       
                                                                                                                     Risk Indicators\"                   
                                                                                                                     report.                             

  **Security**                **Security Monitoring**       **Y**          Process used to      Security monitoring                    ** **             Should be a
                                                                           detect attacks that  ensures that                                             default
                                                                           originate from       security logs or                                         infrastructure
                                                                           internal or external events that may                                          related
                                                                           sources.             indicate an attempt                                      requirement -
                                                                                                (successful or not)                                      possibly not
                                                                                                to bypass controls                                       visible to
                                                                                                in order to gain                                         business unless
                                                                                                unauthorized access                                      deemed to be
                                                                                                or data or systems                                       appropriate, but
                                                                                                are reviewed.                                            always discussed
                                                                                                                                                         by project teams
                                                                                                                                                         in IT and AXA GO

  **Security**                **Compliance with Credit Card **TBD**        Have you specified   \- Network security                    ** **             Will be specific
                              payment Industry Standards                   PCI DSS requirements is monitored against                                     to countries or
                              (PCI DSS)**                                  for the project? The potential attacks                                        regions that
                                                                           IT & Business        and virus outbreaks                                      take payment
                                                                           Security Managers                                                             through cards
                                                                           must be engaged for                                                           
                                                                           assistance to                                                                 
                                                                           identify any PCI DSS                                                          
                                                                           impact (people,                                                               
                                                                           process, application                                                          
                                                                           or environment).\                                                             
                                                                           Impact on PCI DSS                                                             
                                                                           compliance is not                                                             
                                                                           just restricted to                                                            
                                                                           credit card data but                                                          
                                                                           must be considered                                                            
                                                                           where any project                                                             
                                                                           involves                                                                      
                                                                           users/teams,                                                                  
                                                                           applications or                                                               
                                                                           locations covered by                                                          
                                                                           PCI DSS.\                                                                     
                                                                           Payment Card                                                                  
                                                                           Industry (PCI) Data                                                           
                                                                           Security Standard                                                             
                                                                           (DSS) is a global                                                             
                                                                           standard developed                                                            
                                                                           by the PCI Security                                                           
                                                                           Standards Council.                                                            
                                                                           This council was                                                              
                                                                           founded by the main                                                           
                                                                           card issuing                                                                  
                                                                           brands.\                                                                      
                                                                           The goal of the PCI                                                           
                                                                           Data Security                                                                 
                                                                           Standard (PCI DSS)                                                            
                                                                           is to protect                                                                 
                                                                           cardholder data                                                               
                                                                           wherever it is                                                                
                                                                           processed, stored or                                                          
                                                                           transmitted. The                                                              
                                                                           security controls                                                             
                                                                           and processes                                                                 
                                                                           required by PCI DSS                                                           
                                                                           are vital for                                                                 
                                                                           protecting                                                                    
                                                                           cardholder account                                                            
                                                                           data, including the                                                           
                                                                           PAN -- the primary                                                            
                                                                           account number                                                                
                                                                           printed on the front                                                          
                                                                           of a payment card.                                                            
                                                                           Merchants and any                                                             
                                                                           other service                                                                 
                                                                           providers involved                                                            
                                                                           with payment card                                                             
                                                                           processing must                                                               
                                                                           never store                                                                   
                                                                           sensitive                                                                     
                                                                           authentication data                                                           
                                                                           after                                                                         
                                                                           authorization.\                                                               
                                                                           The PCI DSS applies                                                           
                                                                           to all entities that                                                          
                                                                           store, process,                                                               
                                                                           and/or transmit                                                               
                                                                           cardholder data. It                                                           
                                                                           covers technical\                                                             
                                                                           and operational                                                               
                                                                           system components                                                             
                                                                           included in or                                                                
                                                                           connected to                                                                  
                                                                           cardholder data. If                                                           
                                                                           you are a merchant                                                            
                                                                           who accepts or                                                                
                                                                           processes payment                                                             
                                                                           cards (AXA is), you                                                           
                                                                           must comply with the                                                          
                                                                           PCI DSS.                                                                      

  **Capacity**                                                             **Capacity &         **Projected Growth   ** **             ** **             ** **
                                                                           Throughput covers    is also very                                             
                                                                           the requirements     important -- it may                                      
                                                                           needed to handle the be that day 1                                            
                                                                           volume of business   volumes are very low                                     
                                                                           usage & data. This   but over 6-12 months                                     
                                                                           may also include     predicted increase                                       
                                                                           \"don\'t degrade\"   may be large -- the                                      
                                                                           type requirements    solution needs to be                                     
                                                                           where this is likely built to cope with                                       
                                                                           to be an issue, need predicted volumes -                                      
                                                                           verification (e.g.   or highlight issues                                      
                                                                           Tech Test) or to     where it will not. A                                     
                                                                           require investment   good question to                                         
                                                                           to achieve.**        find out is what the                                     
                                                                                                current business                                         
                                                                                                levels are & how                                         
                                                                                                much will the                                            
                                                                                                business grow over                                       
                                                                                                the next 12                                              
                                                                                                months?**                                                

  **Capacity**                **Number of Users &           **Y**          Have you specified   This is a key                          ** **              
                              Locations**                                  by location the      requirement and will                                     
                                                                           number of users that used together with                                       
                                                                           the business expect  the design to                                            
                                                                           the service / system identify items such                                      
                                                                           / process to         as:\                                                     
                                                                           support? Different   - Licenses required\                                     
                                                                           aspects of the       - Capacity of                                            
                                                                           service may have     Infrastructure\                                          
                                                                           different numbers of - Additional                                             
                                                                           users & locations.   Infrastructure                                           
                                                                           Specify this at      required\                                                
                                                                           implementation date  - Additional                                             
                                                                           & also the growth    connections to                                           
                                                                           (for example after 6 locations                                                
                                                                           months & after 12                                                             
                                                                           months). This may                                                             
                                                                           also be broken down                                                           
                                                                           further by type of                                                            
                                                                           function if this is                                                           
                                                                           a variable that                                                               
                                                                           affects the number                                                            
                                                                           of users. Also                                                                
                                                                           specify the type of                                                           
                                                                           user (for example                                                             
                                                                           Internal or                                                                   
                                                                           External).                                                                    

  **Capacity**                **Max users running in        **Y**          Have you specified   This could affect                      ** **              
                              parallel at a point in time**                the maximum          the number of                                            
                                                                           concurrent users or  licenses required                                        
                                                                           user sessions that   (depending on the                                        
                                                                           the business expect  solution) & also the                                     
                                                                           the service to       infrastructure                                           
                                                                           support at any point design.                                                  
                                                                           in time (this could                                                           
                                                                           be at system or                                                               
                                                                           other aspect of the                                                           
                                                                           service level) at                                                             
                                                                           implementation date                                                           
                                                                           & growth (for                                                                 
                                                                           example after 6                                                               
                                                                           months & after 1                                                              
                                                                           year)?                                                                        

  **Capacity**                **Data Storage Requirements   **Y**          Have you specified   This may be used to                    ** **              
                              (current and projected)**                    the volume of data   calculate storage                                        
                                                                           to be stored &       requirements by, for                                     
                                                                           processed that the   example, AXA GO &                                        
                                                                           service / system is  Solution Consultants                                     
                                                                           required to handle   which may result in                                      
                                                                           at the project       additional costs                                         
                                                                           implementation date  depending on what is                                     
                                                                           & the growth (say    required.                                                
                                                                           after 6 months &                                                              
                                                                           after 1 year)? For                                                            
                                                                           example number of                                                             
                                                                           customers or number                                                           
                                                                           of claim records.                                                             

  **Capacity**                **Capacity Forecast\          **Y**          The process used to  The output builds                      ** **              
                              - Network\                                   forecast the         the capacity plan                                        
                              - Distributed Systems\                       capacity required by which is                                                 
                              - Mainframe**                                the entity to meet   communicated to all                                      
                                                                           demands.             relevant                                                 
                                                                                                stakeholders.                                            

  **Capacity**                **Capacity Management\        **Y**          The process used to  Used to optimize                       ** **              
                              - Network\                                   ensure that IT       performance and                                          
                              - Distributed Systems\                       capacity meets       efficiency and plan                                      
                              - Mainframe**                                current and future   for and justify                                          
                                                                           business             financial                                                
                                                                           requirements.        investments.                                             

  **Capacity**                **Thresholds\                 **Y**          Thresholds are       Position operations                    ** **              
                              - Network\                                   pre-defined points   to be proactive                                          
                              - Distributed Systems\                       on capacity usage    before a negative                                        
                              - Mainframe**                                where from AXA GO is impact to the                                            
                                                                           expected to take     application or                                           
                                                                           action               platform.                                                

  **Capacity**                **External Interface          **Y**          Have you specified   This ensures we                        ** **              
                              Volumes**                                    the business volumes build a scalable                                         
                                                                           at implementation    solution to meet                                         
                                                                           date & the growth    what the business                                        
                                                                           (for example after 6 plan to do in the                                        
                                                                           months & after 1     future. For example                                      
                                                                           year) for any        if the business need                                     
                                                                           business interface   the service to send                                      
                                                                           external to the      or receive                                               
                                                                           Service / System?    information to                                           
                                                                                                organizations such                                       
                                                                                                as HMRC or                                               
                                                                                                contracted out NI                                        
                                                                                                contributions.                                           

  **Capacity**                **Data Retention**            **Y**          Have you specified   For example there                      ** **              
                                                                           the length of time   may be legal or                                          
                                                                           that data (Including regulatory                                               
                                                                           databases &          requirements to keep                                     
                                                                           interface files) is  data for 7 years -                                       
                                                                           to be retained for   this would need to                                       
                                                                           and why?             be designed in & may                                     
                                                                                                have an associated                                       
                                                                                                cost.                                                    

  **Performance**             ** **                         ** **          **A measure of what  **It is vital to     ** **             ** **             ** **
                                                                           is achieved or       understand how the                                       
                                                                           delivered by the     solution is meeting                                      
                                                                           solution.**          its objectives and                                       
                                                                                                helps with                                               
                                                                                                documenting issues                                       
                                                                                                which can be used to                                     
                                                                                                assess future                                            
                                                                                                development or                                           
                                                                                                enhancements.**                                          

  **Performance**             **Performance**               **y**          Have you specified   This is often a key                    ** **              
                                                                           the required         requirement for the                                      
                                                                           response times? This business (Speed of                                       
                                                                           should include       use) and can be the                                      
                                                                           responses during     difference between                                       
                                                                           data entry &         what you deliver                                         
                                                                           background batch     being usable or                                          
                                                                           processing initiated unusable. This may                                       
                                                                           online. A range      affect design and                                        
                                                                           could be specified - result in additional                                     
                                                                           for example a        infrastructure &                                         
                                                                           minimum, average &   costs to achieve an                                      
                                                                           maximum. This could  acceptable response                                      
                                                                           include areas such   time - it will be                                        
                                                                           as Telephony (no of  used to test against                                     
                                                                           calls answered in a  to ensure that the                                       
                                                                           certain time) if     project has                                              
                                                                           relevant for the     delivered something                                      
                                                                           project. You should  that the business                                        
                                                                           specify the start &  can use. An example                                      
                                                                           end points for the   would that new                                           
                                                                           response time target business quotes need                                     
                                                                           & volumes (load)     to be returned to an                                     
                                                                           over which the       external website                                         
                                                                           response times need  within 2 seconds to                                      
                                                                           to be met. An        be considered - if                                       
                                                                           example could be     we don\'t meet this,                                     
                                                                           complete a           then AXA has no                                          
                                                                           transaction within x chance of getting                                        
                                                                           seconds starting     the business.                                            
                                                                           with a particular                                                             
                                                                           user action & ending                                                          
                                                                           when the control is                                                           
                                                                           back with the user.                                                           

  **Performance**             **Performance - Batch**       **TBD**        Have you specified   This may affect the                    ** **             Depends on
                                                                           the required batch   design - for example                                     application or
                                                                           performance,         if there is key                                          solution.
                                                                           turnaround times or  batch processing                                         
                                                                           deadlines? Should    that must be within                                      
                                                                           include batch window certain timescales                                       
                                                                           requirements, batch  then may need to                                         
                                                                           schedule             design it be run                                         
                                                                           requirements         concurrently or                                          
                                                                           including timing,    against a copy of                                        
                                                                           target completion    the data.                                                
                                                                           time and                                                                      
                                                                           dependencies                                                                  

  **Performance**             **End-to-end Performance**    **TBD**        The end-to-end       End to end                             ** **             Depends on
                                                                           performance          performance                                              application or
                                                                           measurement aims at  measuring helps in                                       solution.
                                                                           holistic checking of estimating how many                                      
                                                                           all layers regarding users an environment                                     
                                                                           the expected and     can handle. It can                                       
                                                                           agreed targets with  also prevent                                             
                                                                           the customer.        unpleasant                                               
                                                                                                situations when the                                      
                                                                                                application reaches                                      
                                                                                                a threshold.                                             

  **Performance**             **Performance - Output /      **TBD**        Have you specified   Ensures users or                       ** **             Depends on
                              Print**                                      the required print / customers get the                                        application or
                                                                           outputs performance, outputs they need,                                       solution.
                                                                           turnaround times or  when they need them                                      
                                                                           deadlines? This may  & where they need                                        
                                                                           include locations &  them.                                                    
                                                                           volumes of print                                                              
                                                                           output.                                                                       

  **Performance**             **Throughput**                **TBD**        Have you specified   This ensures we                        ** **              
                                                                           the required         build a scalable                                         
                                                                           business transaction solution to meet                                         
                                                                           volumes to be        what the business                                        
                                                                           handled over a       plan to do in the                                        
                                                                           defined time period  future.                                                  
                                                                           at implementation                                                             
                                                                           date & the growth                                                             
                                                                           (after 6 months &                                                             
                                                                           after 1 year)? For                                                            
                                                                           example number of                                                             
                                                                           quotes or number of                                                           
                                                                           claims. Focused on                                                            
                                                                           performance based on                                                          
                                                                           capacity.                                                                     

  **Event**                                                                **Is the process     **Effective service  ** **             ** **              
                                                                           that monitors all    operations is                                            
                                                                           events that occur    dependent on knowing                                     
                                                                           through the AXA GO   the status of the                                        
                                                                           infrastructure.**    infrastructure and                                       
                                                                                                detecting any                                            
                                                                                                deviation from the                                       
                                                                                                normal or expected                                       
                                                                                                operations.**                                            

  **Event**                   **Performance Monitoring &    **Y**          Have you specified   Ensures we can                         ** **              
                              Reporting**                                  any requirements     monitor service                                          
                                                                           that are needed for  levels and ensure                                        
                                                                           the system / service that the system                                          
                                                                           for manual or        meets expectations.                                      
                                                                           automated monitoring If not defined then                                      
                                                                           to highlight         a risk may need to                                       
                                                                           existing or upcoming be raised to say                                         
                                                                           issues with capacity that IT will know                                        
                                                                           or response times?   when                                                     
                                                                           This could include   thresholds/limits                                        
                                                                           end to end           have been exceeded                                       
                                                                           monitoring or        until availability,                                      
                                                                           specific areas.      reliability,                                             
                                                                                                performance will be                                      
                                                                                                impacted. Having                                         
                                                                                                performance                                              
                                                                                                monitoring helps to                                      
                                                                                                avoid availability                                       
                                                                                                issues by                                                
                                                                                                highlighting before                                      
                                                                                                they happen that                                         
                                                                                                action is needed -                                       
                                                                                                but building in this                                     
                                                                                                monitoring will have                                     
                                                                                                a cost.                                                  

  **Event**                   **Application Monitoring**    **Y**          Based upon           Preventive measures                    ** **              
                                                                           pre-agreed           can then be                                              
                                                                           indicators the       implemented thereby                                      
                                                                           application behavior increasing the                                           
                                                                           is monitored.        stability,                                               
                                                                                                reliability and                                          
                                                                                                availability of the                                      
                                                                                                IT infrastructure.                                       

  **Service Continuity**                                                   **This section       **See separate ARK   ** **             ** **              
                                                                           covers any           template (Business &                                     
                                                                           continuity           IT Service                                               
                                                                           requirements for the Continuity Plan) for                                     
                                                                           service or system.   this where more                                          
                                                                           The Business & IT    details should be                                        
                                                                           Continuity managers  covered. However the                                     
                                                                           should be engaged to requirements should                                      
                                                                           assist with these    be documented in the                                     
                                                                           requirements.**      Requirements                                             
                                                                                                Definition                                               
                                                                                                Document.**                                              

  **Continuity**              **IT Service Continuity**     **Y**          Have you specified   This is very                           ** **              
                                                                           any requirements for important - in the                                       
                                                                           IT for Service       event of a disaster                                      
                                                                           Continuity? This     does the service                                         
                                                                           would include any    have provision to                                        
                                                                           Disaster Recovery    recover from the                                         
                                                                           requirements, level, disaster in the                                          
                                                                           plans, invocation    required                                                 
                                                                           criteria, tests &    timescales - have we                                     
                                                                           timescales.          may arrangements for                                     
                                                                                                testing this? This                                       
                                                                                                all comes at an                                          
                                                                                                often significant                                        
                                                                                                cost to the project.                                     

  **Continuity**              **Business Service            **Y**          Have you specified   It is important that                   ** **              
                              Continuity**                                 any requirements for any service has also                                     
                                                                           the Business for     addressed the people                                     
                                                                           Service Continuity?  & business aspects                                       
                                                                           As for IT but        (if part of the                                          
                                                                           business aspects     project scope) so                                        
                                                                           where relevant to    that it is not only                                      
                                                                           the project (for     the IT systems that                                      
                                                                           example Physical     are considered.                                          
                                                                           Location). Work area                                                          
                                                                           recovery.                                                                     

  **Continuity**              **Back-ups**                  **Y**          Have you specified,  There could be                         ** **              
                                                                           from a business      regulatory or other                                      
                                                                           point if view, the   business reasons &                                       
                                                                           frequency and any    may result in                                            
                                                                           special requirements additional cost or                                       
                                                                           such as off-site     alternative design.                                      
                                                                           storage for Back-ups                                                          
                                                                           of data or code or a                                                          
                                                                           data restore test?                                                            
                                                                           Also include any                                                              
                                                                           restore of backups                                                            
                                                                           targets.                                                                      

  **Continuity**              **Restore from Backup**       **Y**          In case of data      Ensures customer is                    ** **              
                                                                           corruption or other  able to resume work                                      
                                                                           data problems the    after restore of                                         
                                                                           customer can request required data.                                           
                                                                           a restore from                                                                
                                                                           backup to a certain                                                           
                                                                           time stamp                                                                    

  **Continuity**              **Archiving**                 **Y**          Have you specified   There could be                         ** **              
                                                                           the requirements for regulatory or other                                      
                                                                           archiving - when &   business reasons &                                       
                                                                           under what           may result in                                            
                                                                           conditions will data additional cost or                                       
                                                                           be archived? Also    alternative design.                                      
                                                                           specify why & when                                                            
                                                                           the archived data is                                                          
                                                                           to be used.                                                                   

  **Continuity**              **Restore from Archive**      **Y**          Process used to      Some platforms have                    ** **              
                                                                           restore archive      unique archiving                                         
                                                                           files.               requirements in                                          
                                                                                                order to meet                                            
                                                                                                regulatory                                               
                                                                                                requirements.                                            

  **Continuity**              **DRP Test**                  **Y**          The frequency and    Help with                              ** **              
                                                                           level of DR tests    coordinating the                                         
                                                                           for the application  resources required                                       
                                                                           or platform.         to conduct a DRP                                         
                                                                                                test and ensure                                          
                                                                                                manageability of the                                     
                                                                                                portfolio of                                             
                                                                                                platforms which                                          
                                                                                                require DRP testing.                                     

  **Continuity**              **Disaster Recovery (RTO)**   **Y**          On entry of a        Help with                              ** **              
                                                                           disaster case for an expectation levels                                       
                                                                           affected application and identifying                                          
                                                                           (e.g. damage of a    viable strategies                                        
                                                                           data site by HW      for inclusion in the                                     
                                                                           failure) the         business continuity                                      
                                                                           recovery of the      plan.                                                    
                                                                           services is                                                                   
                                                                           guaranteed within                                                             
                                                                           the Recovery Time                                                             
                                                                           Objective (RTO)                                                               

  **Continuity**              **Disaster Recovery (RPO)**   **Y**          The maximum amount   Help with                              ** **              
                                                                           of data that may be  expectation levels                                       
                                                                           lost when Service is and ensuring                                             
                                                                           Restored after an    resources are                                            
                                                                           interruption.        properly allocated                                       
                                                                           Recovery Point       to meet capacity and                                     
                                                                           Objective is         performance                                              
                                                                           expressed as a       requirements.                                            
                                                                           length of time                                                                
                                                                           before the Failure.                                                           

  **Continuity**              **DR Capacity**               **Y**          The provided         Help with                              ** **              
                                                                           capacity and         expectation levels                                       
                                                                           performance on the   and identifying                                          
                                                                           failover             viable strategies                                        
                                                                           infrastructure in    for inclusion in the                                     
                                                                           case of a disaster   business continuity                                      
                                                                           as expected and      plan.                                                    
                                                                           agreed with customer                                                          

  **Incident Management**                                                  **The process used   **It is the most     ** **             ** **              
                                                                           to minimize          visible customer                                         
                                                                           disruption to the    facing process so                                        
                                                                           business by          why it\'s important                                      
                                                                           restoring service    to be able to                                            
                                                                           operation to agreed  identify the                                             
                                                                           level as quickly as  business impact and                                      
                                                                           possible.**          apply the                                                
                                                                                                appropriate                                              
                                                                                                resources.**                                             

  **Incident**                **Target Response Times       **Y**          Have you specified   This would be used                     ** **              
                              (Incident Management)**                      The response time,   when agreeing                                            
                                                                           i.e. the time taken  contracts with third                                     
                                                                           to respond to the    party supplier -                                         
                                                                           user when an         this is often                                            
                                                                           incident of a        \"standard\" (see                                        
                                                                           certain severity is  Analysis & Design                                        
                                                                           raised (usually with Help) when via AXA                                       
                                                                           the Service Desk)?   GO but may affect                                        
                                                                           The response time is whether a service is                                     
                                                                           the time taken to    considered business                                      
                                                                           respond to the user  critical or not if                                       
                                                                           when an incident of  the shortest                                             
                                                                           a certain severity   available response                                       
                                                                           is raised (usually   time is required.                                        
                                                                           with the Service                                                              
                                                                           Desk). And the                                                                
                                                                           response time for                                                             
                                                                           support teams to                                                              
                                                                           respond from their                                                            
                                                                           notification.                                                                 

  **Incident**                **Major Incident Handling**   **TBD**        Possibility to       Helps with                             ** **              
                                                                           appoint one Single   centralizing                                             
                                                                           Point Of Contact     communication and                                        
                                                                           (SPOC) for the       addressing incidents                                     
                                                                           following activities in a timing manner.                                      
                                                                           related to Incident                                                           
                                                                           Management\                                                                   
                                                                           - Communication                                                               
                                                                           (method and level)\                                                           
                                                                           - Coordination\                                                               
                                                                           - Escalation\                                                                 
                                                                           \                                                                             
                                                                           The contact person                                                            
                                                                           is named as Major                                                             
                                                                           Incident Manager                                                              
                                                                           (MIM) or on                                                                   
                                                                           international level                                                           
                                                                           as Super-MIM.                                                                 

  **Incident**                **Incident reaction target    **TBD**        Time span (inside    Helps address                          ** **              
                              inside L1 standard support                   the L1 Standard      expectation.                                             
                              hours**                                      Support Hours) to                                                             
                                                                           provide a first                                                               
                                                                           qualified                                                                     
                                                                           communication to                                                              
                                                                           end-users                                                                     

  **Incident**                **Incident reaction target    **TBD**        Is the time span     Helps address                          ** **              
                              outside L1 standard support                  (outside the L1      expectation.                                             
                              hours**                                      Standard Support                                                              
                                                                           Hours) to provide a                                                           
                                                                           first qualified                                                               
                                                                           communication to                                                              
                                                                           end-users                                                                     

  **Problem Management**                                                   **Process used to    **Instrumental in    ** **             ** **              
                                                                           minimize both the    reducing the number                                      
                                                                           number and severity  of incidents that                                        
                                                                           of incidents and     interrupts the                                           
                                                                           potential problems   business.**                                              
                                                                           to the business.**                                                            

  **Problem**                 **Target Resolution/          **TBD**        Have you specified   This has close ties                    ** **              
                              Restoration Times**                          the resolution is    with                                                     
                                                                           the time, i.e. the   \"reliability\" -                                        
                                                                           time taken to        but if defining a                                        
                                                                           resolve the incident new level of support                                     
                                                                           of a certain         with a third party,                                      
                                                                           severity?            this may need to be                                      
                                                                                                considered so that                                       
                                                                                                it can be documented                                     
                                                                                                in a contract.                                           

  **Problem**                 **Problem Management**        **TBD**        Have you specified   If this service                        ** **              
                                                                           any requirements for needs to proactive                                       
                                                                           problem management - problem management                                       
                                                                           the investigation of capability, there ma                                     
                                                                           underlying problems  y be an additional                                       
                                                                           & prevention of      cost or some                                             
                                                                           incidents?           facilities need to                                       
                                                                                                be built in to allow                                     
                                                                                                this.                                                    

  **Problem**                 **Escalation**                **TBD**        Have you specified   Used for major                         ** **              
                                                                           any requirement      incident                                                 
                                                                           relating to business management - needed                                      
                                                                           escalation of high   if the service if                                        
                                                                           severity incidents   deemed business                                          
                                                                           in terms of timing & critical                                                 
                                                                           level of people?                                                              

  **Problem**                 Problem Solution Target       TBD            It is the time span                                         ** **              
                                                                           to analyze the                                                                
                                                                           problem, to find and                                                          
                                                                           document the                                                                  
                                                                           solution to be                                                                
                                                                           applied in order to                                                           
                                                                           fix it.                                                                       

  **Problem**                 **Problem Resolution Target** **TBD**        It is the time span                                         ** **              
                                                                           to fix the problem                                                            
                                                                           by implementing the                                                           
                                                                           agreed solution                                                               

  **Service Level**                                                        **Process used to    **Helps provide a    ** **             ** **              
                                                                           ensure agreed        clear expectation of                                     
                                                                           services are         the level of service                                     
                                                                           delivered when and   to the business.**                                       
                                                                           where they are                                                                
                                                                           supposed to be                                                                
                                                                           delivered.**                                                                  

  **Support**                 **Support Agreements**        **Y**          Have you specified   Although this is                       ** **              
                                                                           any changes to       getting close to                                         
                                                                           existing or new      design of the                                            
                                                                           agreements needed as support model it is                                      
                                                                           a result of the      important to                                             
                                                                           project (for example identify anything as                                     
                                                                           Third Parties -      it may incur a cost                                      
                                                                           support is changing  to the project                                           
                                                                           so a contract needs                                                           
                                                                           renegotiating).                                                               

  **Support**                 **Usability**                 **TBD**        This is how well     This is usually only ** **             ** **              
                                                                           service / system     relevant for direct                                      
                                                                           supports the user.   user interaction                                         
                                                                           This is often the    (such as on-line                                         
                                                                           most difficult area  systems). Other                                          
                                                                           of NFRs to define    requirements such as                                     
                                                                           objective & testable Performance                                              
                                                                           requirements.        documented under                                         
                                                                                                capacity will also                                       
                                                                                                greatly affect the                                       
                                                                                                usability of a                                           
                                                                                                solution                                                 

  **Support**                 **Service Desk**              **TBD**        The L1 Resolution    Helps address        ** **             ** **              
                                                                           Target indicates the expectation.                                             
                                                                           number of incident                                                            
                                                                           tickets                                                                       
                                                                           (interactions),                                                               
                                                                           which are solved by                                                           
                                                                           the L1 Service Desk                                                           
                                                                           during L1 Support                                                             
                                                                           Hours.                                                                        

  **Support**                 L1 Communication              TBD            The communication    Helps address                                             
                                                                           describes the way,   expectation.                                             
                                                                           content and                                                                   
                                                                           frequency how the                                                             
                                                                           Service Desk                                                                  
                                                                           communicates with                                                             
                                                                           the customer.                                                                 

  **Change Management**                                                    **The process used   **Solutions and IT   ** **             ** **              
                                                                           when introducing     infrastructure are                                       
                                                                           change to the        constantly changing                                      
                                                                           infrastructure, it   so it\'s important                                       
                                                                           will ensure the use  to have a structured                                     
                                                                           of standardized      process to keep up                                       
                                                                           methods and          to date with the                                         
                                                                           procedures for the   latest                                                   
                                                                           handling of any      technologies.**                                          
                                                                           changes.**                                                                    

  **Change Management**       **Change Management**         **Y**          Specify any          This is not which                      ** **              
                                                                           requirements for     change management                                        
                                                                           introducing or       processes will a                                         
                                                                           amending the change  project follow but                                       
                                                                           management process   any changes needed                                       
                                                                           in relation to       to change management                                     
                                                                           future changes to    as a result of this                                      
                                                                           this service.        project or how this                                      
                                                                                                service will be                                          
                                                                                                change managed once                                      
                                                                                                in production if it                                      
                                                                                                is non-standard. May                                     
                                                                                                require new or                                           
                                                                                                amended procedures.                                      

  **Release & Deployment                                                   **The process used   **Ensure that        ** **             ** **              
  Management**                                                             to build, test and   integrity of a                                           
                                                                           deliver services to  release package and                                      
                                                                           the customers        its constituent                                          
                                                                           specified by service components is                                            
                                                                           design.\             maintained                                               
                                                                           The goal of release  throughout the                                           
                                                                           and deployment       transition                                               
                                                                           management is to     activities and                                           
                                                                           deploy releases into recorded accurately                                      
                                                                           operation and        in the configuration                                     
                                                                           establish effective  management system**                                      
                                                                           use of\                                                                       
                                                                           the service in order                                                          
                                                                           to deliver value to                                                           
                                                                           the customer.**                                                               

  **Release Management**      **Release Management**        **Y**          Have you specified   From a project point                   ** **              
                                                                           any new requirements of view, this will                                       
                                                                           or changes need to   probably be                                              
                                                                           release management   documented in the                                        
                                                                           facilities,          Project Initiation                                       
                                                                           processes or         Document, but we                                         
                                                                           procedures as a      need to ensure that                                      
                                                                           result of this       any changes to the                                       
                                                                           project? If it is a  release management                                       
                                                                           new system are there system for example                                       
                                                                           any requirements as  for a whole new                                          
                                                                           to how releases      platform are                                             
                                                                           would be managed in  documented.                                              
                                                                           the future.                                                                   

  **Reporting for IT**        ** **                         ** **          **Process used to    **It provides        ** **             ** **              
                                                                           report on the        information to both                                      
                                                                           results achieved     IT and business in                                       
                                                                           operationally.**     order to make                                            
                                                                                                appropriate                                              
                                                                                                decisions.**                                             

  **Reporting**               **Reporting on SLA**          **Y**          Reporting on SLA's   The reporting aims                     ** **              
                                                                           provides reports     at presenting the                                        
                                                                           calculating the      result of the SLA's                                      
                                                                           SLA's, according to  calculation, based                                       
                                                                           the agreed           on the raw data                                          
                                                                           calculation method.  collected during the                                     
                                                                                                reference period. It                                     
                                                                                                highlights SLA                                           
                                                                                                achievement and                                          
                                                                                                failure as well.                                         

  **Reporting**               **Reporting on service**      **Y**          Reporting on Service Based on the                           ** **              
                                                                           provides reports to  analysis of such                                         
                                                                           ATS Service          reports, the Service                                     
                                                                           Management teams in  Improvement Plan                                         
                                                                           order to allow them  (SIP) is updated                                         
                                                                           proper monitoring of                                                          
                                                                           the service and                                                               
                                                                           preparing Service                                                             
                                                                           meetings and service                                                          
                                                                           reviews.                                                                      

  **Reporting**               **Reporting on Capacity**     **Y**          This service task    This is done in                        ** **              
                                                                           aims at bringing     order to regularly                                       
                                                                           together the         check how our                                            
                                                                           capacity forecasts   infrastructure is                                        
                                                                           and the consumed     shaped against                                           
                                                                           capacity.            future needs.                                            

  **Compliance/Governance**   ** **                         ** **          **The process to     **Ensuring solutions ** **             ** **              
                                                                           ensure solution is   meet technical                                           
                                                                           adhering to          standards will help                                      
                                                                           technical standards  with organization                                        
                                                                           which align with     strategic goals.**                                       
                                                                           regulatory                                                                    
                                                                           requirements.**                                                               

  **Compliance**              **Legal & Regulatory & TCF**  **Y**          Have you specified   It is important to                     ** **              
                                                                           any requirements     identify specific                                        
                                                                           that are to do with  regulations that the                                     
                                                                           meeting regulatory   solution needs to                                        
                                                                           or legal             comply with. This                                        
                                                                           considerations such  may need                                                 
                                                                           as Data Protection   interpretation by                                        
                                                                           Act.? Have you also  Compliance, Business                                     
                                                                           considered AXA       Risk or other                                            
                                                                           specific initiatives business experts.                                        
                                                                           such as TCF?         This then may result                                     
                                                                                                in additional                                            
                                                                                                functional                                               
                                                                                                requirements. This                                       
                                                                                                may include                                              
                                                                                                processing & storing                                     
                                                                                                sensitive & personal                                     
                                                                                                data requirements.                                       

  **Compliance**              **User Interface & Branding   **TBD**        Have you specified   So that the systems                    ** **              
                              Consistency**                                any requirements to  meet AXA Standard -                                      
                                                                           make service /       external websites                                        
                                                                           system consistent    look like they part                                      
                                                                           with other systems   of AXA                                                   
                                                                           e.g. look & feel of                                                           
                                                                           AXA Website?                                                                  

  **Compliance**              **Conformity with Standards** **Y**          Have you ensured     This could                             ** **              
                                                                           that the service /   compliance with                                          
                                                                           system has to comply architectural                                            
                                                                           with any documented  standards or                                             
                                                                           standards? What are  business brand                                           
                                                                           the standards &      guidelines.                                              
                                                                           where are they                                                                
                                                                           documented.                                                                   

  **Compliance**              **Compliance Consulting**     **TBD**        Process in which you A Compliance Officer                   ** **              
                                                                           involve a compliance is sometimes                                             
                                                                           expert in order to   required in order to                                     
                                                                           address specific     ensure complaisance                                      
                                                                           laws and             against laws and                                         
                                                                           regulations.         regulations.                                             

  **Compliance**              **Compliance\                 **TBD**        Procedures used to   Ensure that related                    ** **              
                              Follow Up**                                  verify adherence to  applications or                                          
                                                                           compliance           platforms stay                                           
                                                                           requirements.        compliant towards                                        
                                                                                                laws and regulations                                     
                                                                                                during their                                             
                                                                                                lifecycle                                                

  **Miscellaneous**           ** **                         ** **          **These are key      **For some projects, ** **             ** **              
                                                                           requirements that do complying with                                           
                                                                           not fall under the   legislation may be                                       
                                                                           other categories but the main reason                                          
                                                                           may be vital ones    behind the project &                                     
                                                                           that we need to      this area could be                                       
                                                                           document to ensure   the basis of all the                                     
                                                                           that the correct     functional &                                             
                                                                           solution is          non-function                                             
                                                                           estimated, designed  requirements.**                                          
                                                                           & delivered to meet                                                           
                                                                           the business need.**                                                          

  **Miscellaneous**           Training                      **TBD**        Have you specified   This is influenced                     ** **              
                                                                           what level of user   by the expected use                                      
                                                                           skill & knowledge    of the system e.g.                                       
                                                                           will be needed -     broker systems may                                       
                                                                           does it need to be   have very                                                
                                                                           intuitive?           differently skilled                                      
                                                                                                users compared to a                                      
                                                                                                Customer Service                                         
                                                                                                person. So this                                          
                                                                                                would affect the                                         
                                                                                                design & rollout of                                      
                                                                                                the system.                                              

  **Miscellaneous**           Software Testability          **TBD**        Have you specified   A lower degree of                                         
                                                                           any factors that     testability results                                      
                                                                           will assist with the in increased test                                        
                                                                           testability of the   effort. In extreme                                       
                                                                           software or system   cases a lack of                                          
                                                                           component or         testability may                                          
                                                                           components:\         hinder or actually                                       
                                                                           controllability: The prevent testing of                                       
                                                                           degree to which it   significant parts of                                     
                                                                           is possible to       the software or                                          
                                                                           control the state of system                                                   
                                                                           the component under                                                           
                                                                           test\                                                                         
                                                                           observability: The                                                            
                                                                           degree to which it                                                            
                                                                           is possible to                                                                
                                                                           observe                                                                       
                                                                           (intermediate and                                                             
                                                                           final) test                                                                   
                                                                           results.\                                                                     
                                                                           isolateability: The                                                           
                                                                           degree to which the                                                           
                                                                           component can be                                                              
                                                                           tested in                                                                     
                                                                           isolation.\                                                                   
                                                                           separation of                                                                 
                                                                           concerns: The degree                                                          
                                                                           to which the                                                                  
                                                                           component has a                                                               
                                                                           single, well defined                                                          
                                                                           responsibility.\                                                              
                                                                           understandability:                                                            
                                                                           The degree to which                                                           
                                                                           the component is                                                              
                                                                           documented or                                                                 
                                                                           self-explaining.\                                                             
                                                                           automatability: The                                                           
                                                                           degree to which it                                                            
                                                                           is possible to                                                                
                                                                           automate testing of                                                           
                                                                           the component under                                                           
                                                                           test.\                                                                        
                                                                           heterogeneity: The                                                            
                                                                           degree to which the                                                           
                                                                           use of diverse                                                                
                                                                           technologies                                                                  
                                                                           requires to use                                                               
                                                                           diverse test methods                                                          
                                                                           and tools in                                                                  
                                                                           parallel.                                                                     
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
