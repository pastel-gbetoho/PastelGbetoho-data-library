#!/bin/bash
 
# full sync remote function
syncforce(){
   # t stores $1 argument passed to syncforce()
   t=$1
   echo "***************************************************"
   echo "SYNCFORCE: $t"
   echo "***************************************************"
   git -C "$t" pull
   git -C "$t" add .
   git -C "$t" commit -m "Update"
   git -C "$t" push
}

syncforce ../data-ref-bi-analytics
syncforce ../data-ref-mdm
syncforce ../data-ref-modeling
syncforce ../data-ref-metadata
syncforce ../data-ref-integration

syncforce ../data-guide-privacy-preserving

syncforce ../data-study-dhp
syncforce ../data-study-property-data
# syncforce ../data-study-sherlock
syncforce ../data-study-data-mesh
syncforce ../data-study-go-entity

syncforce ../data-architecture-hub
syncforce ../documentation-awareness

