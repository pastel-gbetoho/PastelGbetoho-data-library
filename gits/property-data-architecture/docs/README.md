# Heplers

**Generating HTML files**

```
pandoc markdown-file/homepage.md --template pandoc/template/toc-sidebar.html -B pandoc/template/nav -o index.html -fmarkdown-implicit_figures
pandoc markdown-file/conceptual_data_model.md --template pandoc/template/toc-sidebar.html -B pandoc/template/nav -o conceptual_data_model.html -fmarkdown-implicit_figures
pandoc markdown-file/logical_data_model.md --template pandoc/template/toc-sidebar.html -B pandoc/template/nav -o logical_data_model.html -fmarkdown-implicit_figures
pandoc markdown-file/axaxl_sov_illustration.md --template pandoc/template/toc-sidebar.html --toc -B pandoc/template/nav -o axaxl_sov_illustration.html -fmarkdown-implicit_figures
pandoc markdown-file/property-data-mapping.md --template pandoc/template/toc-sidebar.html -B pandoc/template/nav -o property-data-mapping.html -fmarkdown-implicit_figures
pandoc markdown-file/BingGeocoder_Outputs_Illustration.md --template pandoc/template/toc-sidebar.html -B pandoc/template/nav -o BingGeocoder_Outputs_Illustration.html -fmarkdown-implicit_figures
pandoc markdown-file/GoogleGeocoder_Outputs_Illustration.md --template pandoc/template/toc-sidebar.html -B pandoc/template/nav -o GoogleGeocoder_Outputs_Illustration.html -fmarkdown-implicit_figures
pandoc markdown-file/providers-list.md --template pandoc/template/toc-sidebar.html -B pandoc/template/nav -o providers-list.html -fmarkdown-implicit_figures
pandoc markdown-file/study-summary.md --template pandoc/template/toc-sidebar.html --toc -B pandoc/template/nav -o study-summary.html -fmarkdown-implicit_figures
pandoc markdown-file/json-schemas.md --template pandoc/template/toc-sidebar.html --toc -B pandoc/template/nav -o json-schemas.html -fmarkdown-implicit_figures 
```

**Export the document as a word document:**

```
pandoc -s README.md -o data-interoperability-reference-model.docx
```