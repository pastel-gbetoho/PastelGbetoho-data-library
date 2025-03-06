@echo off

set ZDOCTOOLS_HOME=C:\_\LocalGit\zdoctools

echo ===========================================
echo AXA DATA ARCHITECTURE HUB SITE CONSTRUCTION
echo ===========================================

call :BuildIndex homepage.md, index.html
call :BuildPage            .,                                          data-mgt-dq-check-list.md,           data-mgt-dq-check-list.html
call :BuildPage            .,                                          data-mgt-dq-handbook.md,             data-mgt-dq-handbook.html
call :BuildPage            .,                                          data-mgt-glossary.md,                data-mgt-glossary.html
call :BuildPage            .,                                          data-mgt-activity-map.md,            data-mgt-activity-map.html
call :BuildPage            .,                                          data-mgt-maturity-model.md,          data-mgt-maturity-model.html  
call :BuildPage            .,                                          data-mgt-job-descriptions.md,        data-mgt-job-descriptions.html
call :BuildPage            .,                                          data-mgt-books.md,                   data-mgt-books.html
call :BuildPage            .,                                          data-mgt-articles.md,                data-mgt-articles.html
call :BuildPage            .,                                          data-mgt-architecture.md,            data-mgt-architecture.html
call :BuildPage            .,                                          data-mgt-references.md,              data-mgt-references.html
call :BuildPage            .,                                          data-mgt-information-capital.md,     data-mgt-information-capital.html
call :BuildPage            .,                                          data-mgt-technologies.md,            data-mgt-technologies.html
call :BuildPage            ..\documentation-awareness,                 README.md,                           documentation-awareness.html
call :BuildPageWithMedia   ..\data-ref-metadata,                       README.md,                           metadata-paper.html,                   metadata
call :BuildPage            ..\data-ref-metadata,                       metadata_paper_asset_defs.md,        metadata-paper-asset-defs.html
call :BuildPageWithMedia   ..\data-ref-integration,                    README.md,                           integration-paper.html,                integration
call :BuildPage            ..\data-ref-integration,                    api-maturity-model.md,               api-maturity-model.html
call :BuildPageWithMedia   ..\data-ref-bi-analytics,                   README.md,                           bi-analytics-paper.html,               bia
call :BuildPageWithMedia   ..\data-ref-mdm,                            README.md,                           customer-mdm-paper.html,               cmdm
call :BuildPage            ..\data-study-dhp,                          README.md,                           dhp-data-architecture.html
call :BuildPageWithMedia   ..\data-study-data-mesh,                    README.md,                           data-mesh.html,                        mesh
call :BuildPageWithMedia   ..\data-ref-modeling,                       README.md,                           data-modeling-paper.html,              modeling
call :BuildPage            ..\data-ref-modeling,                       data-modeling-acord.md,              data-modeling-acord.html
call :BuildPage            ..\data-ref-modeling,                       data-modeling-it4it.md,              data-modeling-it4it.html
call :BuildPageWithMedia   ..\data-guide-privacy-preserving,           README.md,                           data-privacy-preserving.html,          anonymization

exit /B %ERRORLEVEL%

:BuildIndex
echo Index__________: %~1 -^> %~2
"%ZDOCTOOLS_HOME%\pandoc" %~1 --template %ZDOCTOOLS_HOME%\pandoc\template\toc-sidebar.html -o docs\%~2 -fmarkdown-implicit_figures
IF EXIST .\docs\media RMDIR /s /Q .\docs\media
MKDIR .\docs\media
XCOPY /s /q .\media\* .\docs\media
exit /B 0

:BuildPage
echo Page___________: %~1 %~2 -^> %~3
"%ZDOCTOOLS_HOME%\pandoc" %~1\%~2 --template %ZDOCTOOLS_HOME%\pandoc\template\toc-sidebar.html --toc -o docs\%~3 -fmarkdown-implicit_figures
exit /B 0

:BuildPageWithMedia
echo PageWithMedia__: %~1 %~2 -^> %~3 media: %~4
"%ZDOCTOOLS_HOME%\pandoc" %~1\%~2 --template %ZDOCTOOLS_HOME%\pandoc\template\toc-sidebar.html --toc -o docs\%~3 -fmarkdown-implicit_figures
IF EXIST .\docs\media\%~4 RMDIR /s /Q .\docs\media\%~4
MKDIR .\docs\media\%~4
XCOPY /s /q %~1\media\%~4\* .\docs\media\%~4
exit /B 0
