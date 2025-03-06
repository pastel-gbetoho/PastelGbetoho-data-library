#!/usr/bin/env python

import pandocfilters

def link(key, value, format, meta):
        # Add .html to links that do not have it
    if key == 'Link' and (format == "html" or format == "html5"):
        # value[0] is the link label (a list of inline elements).
        # value[1] is the "target".  It is itself an array containing URL and
        # title. So, value[1][0] is the URL. value[1][1] is the title. 
        url=value[1][0]
        
        if url == '$mda_userguide_url$':
            # Replace link with expected output     
            value[1][0] = "https://pages.github.axa.com/pastel-gbetoho-emagine/mydata_atlas_doc/mydata_atlas_user_guide.html"
            return pandocfilters.Link(value[0], value[1])
        else:
            return

if __name__ == "__main__":
    pandocfilters.toJSONFilter(link)    