<?xml version="1.0" encoding="utf-8"?>

<!DOCTYPE xsl:stylesheet  [
	<!ENTITY nbsp   "&#160;">
	<!ENTITY copy   "&#169;">
	<!ENTITY reg    "&#174;">
	<!ENTITY trade  "&#8482;">
	<!ENTITY mdash  "&#8212;">
	<!ENTITY ldquo  "&#8220;">
	<!ENTITY rdquo  "&#8221;"> 
	<!ENTITY pound  "&#163;">
	<!ENTITY yen    "&#165;">
	<!ENTITY euro   "&#8364;">
]>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="utf-8" doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"/>
<xsl:template match="/">

<head>

</head>

<h2>Give As You Earn</h2>

<table cellpadding="2">
		<tr>
			<td height="28"><xsl:copy-of select="data/options/selectionText"/></td>
			<td><xsl:text>&pound;</xsl:text></td>
			<td width="20"><input type="input" value="0" name="donation"/></td>
		</tr>
	</table

>
<br />
<br />

	<table cellpadding="2">
		<tr>
		<td><xsl:text>Please tell us the charity you wish to donate to</xsl:text></td>
		<td width="50"><input type="input"  value="" name="charityName"/></td>
		</tr>
	</table>

<br />
<br />

<table cellspacing="5" width="40%">
	<td>
	<input type="submit" id="save" value="Save Choice"/>
	</td>

	<td>
	<input type="submit" value="Return to Summary" onclick="return ChangeUrl()"/>
	</td>
</table>

<br />
<br />

<h3>Current Selection</h3>

<br />
<br />

<table cellpadding="10" >
	<tr>
		<td><xsl:text>Scheme Name</xsl:text></td>
		<td><xsl:text>Give As You Earn</xsl:text></td>
	</tr>
	<tr>
		<td><xsl:text>Provider</xsl:text></td>
		<td><xsl:text>Charities Aid Fundation</xsl:text></td>
	</tr>
	<tr>
		<td><xsl:text>Your selection</xsl:text></td>
		<td><xsl:text>No Donation</xsl:text></td>
	</tr>
</table>

<br />
<br />

<table cellpadding="2">
	<tr>
		<td><xsl:text>Choosen Charity</xsl:text></td>
		<td width="50"><xsl:value-of select="//property[@name = 'Choosen Charity']"/></td>
	</tr>

	<tr>
		<td><xsl:text>Cost of your selection</xsl:text></td>
		<td><xsl:text>&pound;</xsl:text></td>
		<td><xsl:value-of select="//property[@name = 'Flex Model Cost']/format/@answer * (365div12)"/></td>
	</tr>

	<tr>

		<td width="35%"><xsl:text>Periodic Cost of your selection</xsl:text></td>
		<td width="1%"><xsl:text>&pound;</xsl:text></td>
		<td width="64%"><xsl:value-of select="//property[@name = 'Flex Model Cost']/format/@answer * (365 + 1div4 - 1div100 + 1div400)"/></td>
	</tr>
</table>


</xsl:template>

</xsl:stylesheet>