/* ajust the height when click the toc the code is from https://github.com/twbs/bootstrap/issues/1768 */
var shiftWindow = function() { scrollBy(0, -50) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }

/*add Bootstrap styles to tables*/
var tables = document.getElementsByTagName("table");
for(var i = 0; i < tables.length; ++i){
	tables[i].className += "table table-bordered table-hover";
}

function loadXML(file, rootObject){
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET",file,false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	if (!xmlDoc) console.error("XML File '"+file+"' is not valid");
	return xmlDoc.getElementsByTagName(rootObject)[0];
}

function format(xmlNode){
	const obj = {};
	obj.id = xmlNode.getAttribute("id");
	obj.icon = xmlNode.getAttribute("icon");
	obj.source = xmlNode.getAttribute("source");
	obj.href = xmlNode.getAttribute("href");
	obj.domain = xmlNode.getAttribute("domain");
	obj.comment = (xmlNode.getAttribute("comment")) ? xmlNode.getAttribute("comment") : "";
	obj.textContent = (xmlNode.firstChild) ? xmlNode.firstChild.textContent : "";
	obj.innerHTML = xmlNode.innerHTML;
	return obj;
}

function encodeHTMLID(...params){
	var str = '';
	params.forEach((element) => str += encodeURI('_'+element.replace(/\s/g,'')));
	return str;
}

function initializeDataObjects(useCaseId){
	domRootDataObjects.querySelectorAll('Category').forEach(categoryNode => {
		var category = format(categoryNode);

		categoryNode.querySelectorAll('DataSubjectArea').forEach(subjectAreaNode => {
			var subjectArea = format(subjectAreaNode);

			subjectAreaNode.querySelectorAll('DataObject, DataRelation').forEach(dataObjectNode => {
				var dataObject = format(dataObjectNode);
				var htmlID = encodeHTMLID(category.id, subjectArea.id, dataObject.id);
				var htmlObject = document.getElementById(htmlID);
				if (htmlObject) {
					if (htmlObject.nodeName == 'BUTTON') htmlObject.className='btn btn-outline-secondary btn-sm';
					else {
						htmlObject.className='list-group-item';
					}
				} else {
					console.log("Unknown data object id:"+htmlID);
				}

				dataObjectNode.querySelectorAll('DataElement').forEach(dataElementNode => {
					var dataElement = format(dataElementNode);
					var dataElement_htmlID = encodeHTMLID(category.id, subjectArea.id, dataObject.id, dataElement.id);
					var dataElement_htmlObject = document.getElementById(dataElement_htmlID);
					if (dataElement_htmlObject) {
						if (dataElement_htmlObject.nodeName == 'BUTTON') dataElement_htmlObject.className='btn btn-outline-secondary btn-sm';
						else {
							dataElement_htmlObject.className='list-group-item';
						}
					} else {
						console.log("Unknown data element id:"+dataElement_htmlID);
					}
				});
			});
		});
	});

	domRootUseCases.querySelectorAll('UseCase').forEach(useCaseNode => {
		if (useCaseNode.getAttribute("id") == useCaseId) {
			useCaseNode.querySelectorAll('DataPort').forEach(dataPort => {
				var htmlID = encodeHTMLID(dataPort.getAttribute("id"));
				var htmlObject = document.getElementById(htmlID);
				if (htmlObject) {
					if (htmlObject.nodeName == 'BUTTON') htmlObject.className='btn btn-primary btn-sm';
					else {
						htmlObject.className='btn btn-primary btn-sm'
					}
				} else {
					console.log("Unknown use case data ref id:"+htmlID);
				}
			});
		}
	});
}

function displayContext(){
	var htmlText = '';
	htmlText += '<div class="col-sm-12 col-md-12" >';
	htmlText += '<div class="row d-block" style="margin:2px">';
	htmlText += '<p>';
	htmlText += 'Context: ' + domRootUseCases.getAttribute("title") + ' - ';
	htmlText += domRootUseCases.getAttribute("date");
	htmlText += '<br/>Stakeholders: ' + domRootUseCases.getAttribute("stakeholders");
	if (domRootUseCases.getAttribute("description"))
		htmlText += '<br/>Description: ' + domRootUseCases.getAttribute("description");
	htmlText += '</p>';
	htmlText += '</div>';
	htmlText += '</div>';
	return htmlText;
}

function displayUseCases(){
	var htmlText = '';

	htmlText += '<div class="col-sm-6 col-md-6" >';
	htmlText += '<div class="row d-block" style="margin:2px">';
	htmlText += '<p>';
	htmlText += '<a class="btn btn-link d-block" data-toggle="collapse" onclick="initializeDataObjects(\'N/A\')" role="button" aria-expanded="false" aria-controls="N/A" style="margin:2px">';
	htmlText += '<i><b>-- Reset --</b></i>';
	htmlText += '</a>';
	htmlText += '</p>';
	htmlText += '<p><u>Business use cases</u></p>';
	htmlText += '</div>';
	htmlText += '</div>';

	domRootUseCases.querySelectorAll('UseCase').forEach(useCaseNode => {
		var useCase = format(useCaseNode);
		var useCaseHTMLTitle = useCase.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim() + (useCase.domain ? (' Domain: '+useCase.domain+'.') : '');

		htmlText += '<div class="col-sm-6 col-md-6" >';
		htmlText += '<div class="row d-block" style="margin:2px">';
		htmlText += '<p>';
		htmlText += '<button class="btn btn-info d-block" data-toggle="collapse" onclick="initializeDataObjects(\''+useCase.id+'\')" role="button" aria-expanded="false" aria-controls="' + useCase.id + '" style="margin:2px" title="' + useCaseHTMLTitle + '">';
		htmlText += useCase.id;
		htmlText += '</button>';
		htmlText += '</p>';
		htmlText += '</div>';
		htmlText += '</div>';
	});
	return htmlText;
}

function displayDataObjects(){
	var htmlText = '';

domRootDataObjects.querySelectorAll('Category').forEach(categoryNode => {
	var category = format(categoryNode);
	var categoryUID = encodeHTMLID(category.id);

	htmlText += '<div class="row d-block" style="margin:2px">';
	htmlText += '<p>';
	htmlText += '<a class="btn btn-secondary d-block" data-toggle="collapse" href="#' + categoryUID + '" role="button" aria-expanded="false" aria-controls="' + categoryUID + '" style="margin:2px">';
	if (category.icon) htmlText += '<span class="fa fa-'+category.icon+'">&nbsp;<span>';
	htmlText += category.id;
	htmlText += '</a>';
	htmlText += '</p>';

	htmlText += '<div class="collapse show" id="' + categoryUID + '">';
	htmlText += '<div class="row">';

<!-- Category content here -------------------------------------- -->
categoryNode.querySelectorAll('DataSubjectArea').forEach(subjectAreaNode => {
	var subjectArea = format(subjectAreaNode);
	var subjectAreaUID = encodeHTMLID(category.id, subjectArea.id);
	var subjectAreaHTMLTitle = subjectArea.comment.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();

  if (categoryNode.querySelectorAll('DataSubjectArea').length == 1) {
	htmlText += '<div class="col-sm-12 col-md-12" >';
  }
  else {
	htmlText += '<div class="col-sm-6 col-md-6">';
  }

  htmlText += '<div class="card-header bg-light">';
  htmlText += '<h5 class="mb-0">';
  
  htmlText += '<button class="btn btn-link" data-toggle="collapse" data-target="#collapse_' + subjectAreaUID + '" title="' + subjectAreaHTMLTitle + '">';
  if (subjectArea.icon) htmlText += '<span class="fa fa-'+subjectArea.icon+'">&nbsp;<span>';
  htmlText += subjectArea.id;
  htmlText += '</button>';
  htmlText += '</h5>';
  htmlText += '</div>';  <!-- DIV card header end here  -->

  htmlText += '<div id="collapse_' + subjectAreaUID + '" class="collapse show" data-parent="#' + subjectAreaUID + '">';
  htmlText += '<div class="card-body">';
  subjectAreaNode.querySelectorAll('DataObject, DataRelation').forEach(dataObjectNode => {
	var dataObject = format(dataObjectNode);
	var dataObjectUID = encodeHTMLID(category.id, subjectArea.id, dataObject.id);
	var dataObjectHTMLTitle = dataObject.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim() + (dataObject.source ? (' Source: '+dataObject.source+'.') : '');

	// htmlText += '<div id="' + dataObjectUID + '" type="button" class="btn btn-outline-secondary btn-sm" data-toggle="tooltip" data-html="true" style="margin:2px" title="' + dataObjectHTMLTitle + '"';
	htmlText += '<button id="' + dataObjectUID + '" class="btn btn-outline-secondary btn-sm" data-toggle="collapse" data-target="#collapse_' + dataObjectUID + '" style="margin:2px" title="' + dataObjectHTMLTitle + '"';
	if (dataObject.href) htmlText += ' href="'+dataObject.href+'" target="_blank"';
	htmlText += ' >';
	if (dataObject.icon) htmlText += '<span class="fa fa-'+dataObject.icon+'">&nbsp;<span>';
	htmlText += dataObject.id;

	htmlText += '<div id="collapse_' + dataObjectUID + '" class="collapse hide" data-parent="#' + dataObjectUID + '">';
	htmlText += '<ul class="list-group list-group-flush w-100 align-items-stretch">';
	dataObjectNode.querySelectorAll('DataElement').forEach(dataElementNode => {
		var dataElement = format(dataElementNode);
		var dataElementUID = encodeHTMLID(category.id, subjectArea.id, dataObject.id, dataElement.id);
		var dataElementHTMLTitle = dataElement.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim() + (dataElement.source ? (' Source: '+dataElement.source+'.') : '');			
		// class="list-group-item"
		// htmlText += '<li id="' + dataElementUID + '" class="btn btn-outline-secondary btn-sm">'+dataElement.id+'</li>';
		htmlText += '<li id="' + dataElementUID + '" class="list-group-item" style="text-align:left;font-size:10px;" title="' + dataElementHTMLTitle + '">'+dataElement.id+'</li>';
	});
	htmlText += '</ul>';
	htmlText += '</div>';
	htmlText += '</button>';

  });
  htmlText += '</div>'; <!-- DIV card body end here  -->
  htmlText += '</div>'; <!-- DIV collapse body end here  -->  

  htmlText += '</div>'; <!-- DIV col end here  --> 
});

<!-- Category end here -------------------------------------- -->
htmlText += '</div>';
htmlText += '</div>';
htmlText += '</div>';

});
	return htmlText;
}

var htmlText = '';

var domRootDataObjects = loadXML(domRootDataObjectsFile, "DataObjectsReference");
if (domRootUseCasesFile != null) {
	var domRootUseCases = loadXML(domRootUseCasesFile, "DataUsesCaseReference");
	htmlText += '<div class="col-sm-12 col-md-12">';
	htmlText += displayContext();
	htmlText += '</div>';
	htmlText += '<div class="col-sm-9 col-md-9">';
	htmlText += displayDataObjects();
	htmlText += '</div>';
	htmlText += '<div class="col-sm-3 col-md-3">';
	htmlText += displayUseCases();
	htmlText += '</div>';
}
else {
	htmlText += '<div class="col-sm-12 col-md-12">';
	htmlText += displayDataObjects();
	htmlText += '</div>';
}

document.getElementById("anchor").innerHTML = htmlText;
