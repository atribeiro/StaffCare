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
  var xslPromise = loadXMLDoc("yourselection.xsl");
  
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

function saveDocument(filename){

   {
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    `	var fso = new ActiveXObject("Scripting.FileSystemObject");
		var Filename = 'youselectionOutput.xml';
		
        var file = fso.CreateTextFile(Filename, true);
        file.WriteLine('<?xml version="1.0" encoding="utf-8"?>\n');
        file.WriteLine("<Donation Amount>\n")
		
        for (int i = 0; i < data.length; i++) {
		
            file.Write(' <donation ');
			file.Write('donation="' + data[i][0] + '" ');
			file.WriteLine('></donation>\n')
           } // end for countr

        file.WriteLine('</Donation Amount>\n');
		
		file.WriteLine("<Charity Name>\n")
		
        for (int i = 0; i < data.length; i++) {
		
            file.Write(' <charityName ');
			file.Write('charityName="' + data[i][1] + '" ');
			file.WriteLine('></Charity Name>\n')
           }
		   
        file.WriteLine('</Charity Name>\n');
        file.Close();

	    } 
	   file.saveDocument(filename)
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


