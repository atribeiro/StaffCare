// JavaScript Document

$(document).ready(function(){
  displayResult();
});
 
function loadXMLDoc(filename)
{
	var deferred = $.Deferred();
	var promise = deferred.promise();
     
     $.ajax({
        url: filename,
        type: 'get',
		dataType: 'xml',
        success: function(data) {
			console.log("resolved");
            deferred.resolve(data);
        }, error :function(v1, v2) {
			console.log(v1, v2);
		}
     });
     return promise;
	
}
  
function displayResult()
{
  var xmlPromise = loadXMLDoc("MainPageXML.xml");
  var xslPromise = loadXMLDoc("MainPageXSL.xsl");
  
  $.when(xmlPromise, xslPromise).done(function(xml, xsl){
	  if (document.implementation && document.implementation.createDocument)
	  {
		var xsltProcessor = new XSLTProcessor();
		xsltProcessor.importStylesheet(xsl);
		var resultDocument = xsltProcessor.transformToFragment(xml, document);
		$('#example').append(resultDocument);
	  } else if (window.ActiveXObject)
	  {
		/* IE */
		var ex = xml.transformNode(xsl);
		$('#example').innerHTML = ex;
	  }
  });
}  

function ChangeUrl(){ 
	window.open("http://www.staffcare.net/"); 
	
}


function EnableOnInput(){
	
	if($("#currentvalue").val() == 0 && $("#charityname").val() == "")
	{
		$("#save").attr("disabled", true);
	}
	else{
		$("#save").attr("disabled", false);
	}
	
}


