Set of tools to generate content.

Used for reference documentation:

+ https://github.axa.com/AXA-GO/data-architecture-hub
+ https://github.axa.com/AXA-GO/it4it-architecture-hub

Tools:
+ pandoc: to generate html content (locally from Git Client)
+ axa-data-map-viz: data visualization based on xml + javascript (parsing) + bootstrap

**Contacts: [Guillaume HERVOUIN](mailto:guillaume.hervouin@axa.com) | [Pastel GBETOHO](mailto:pastel.gbetoho.imagine@axa.com).**

## Pandoc

**pandoc.exe** must be provided separately and added at the root location of this project.

This project local location must be referenced (environment variable) as "ZDOCTOOLS_HOME".

Example to generate documentation from the README.md:

```

Add metadata to every input document.

---
title: "AXA IT4IT ARCHITECTURE HUB"
author: "IT4IT Management Team"
date: "Jan 2, 2024"
description: "IT SERVICE MANAGEMENT"
---


set ZDOCTOOLS_HOME=C:\_\LocalGit\zdoctools
"%ZDOCTOOLS_HOME%\pandoc" README.md --template %ZDOCTOOLS_HOME%/pandoc/template/toc-sidebar.html --toc --toc-depth=5 -o index.html
```

## Data Map Viz


Icons: Font Awesome icons, cf. https://fontawesome.com/v4/icons/

```

https://pages.github.axa.com/AXA-GO/zdoctools/axa-data-map-viz.html?title={title}&amp;dataobjects={data-object-xml-file-location}&amp;usecases={data-usecases-xml-file-location}


```