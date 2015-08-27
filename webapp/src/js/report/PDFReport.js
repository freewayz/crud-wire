/**
 * Created by peter on 8/27/15.
 */

// Report is created in a wide format with the default margin
var oReport = new Report([0,459, 659, 0]);

// Set up Report Title
oReport.style = "NoteTitle";
oReport.size = 2.5;
oReport.writeText("Form Field Report for:");
oReport.indent();
oReport.writeText(this.documentFileName);
oReport.outdent();
oReport.divide();

// Now build a summary of field info
oReport.size = 1.2;
oReport.style = "DefaultNoteText";

var fieldTypes = {}; // Create new Object to hold field summary
oReport.writeText("Form Fields by type: ");
oReport.indent();
for(var i=0;i<this.numFields;i++) {
    // Loop through all fields on document
    var fldName = this.getNthFieldName(i);
    var oFld = this.getField(fldName);
    if(fieldTypes[oFld.type] == null) fieldTypes[oFld.type] = [fldName];
    else fieldTypes[oFld.type].push(fldName);
}
// Write Field Report
for(var ftype in fieldTypes) {
    var fldList = fieldTypes[ftype];
    oReport.writeText(ftype + ": " + fldList.length + " fields");
    oReport.indent();
    for(var i=0;i<fldList.length;i++) oReport.writeText(fldList[i]); oReport.outdent();
}
// Open report into a PDF oReport.open("Form Field Report");