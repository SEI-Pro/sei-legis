$.getScript(chrome.extension.getURL("js/lib/jquery-3.4.1.min.js"));

function loadScriptLegis() {
	if ( $('#frmEditor').length ) {
        setTimeout(function () {
        	$(document).ready(function () {
                $.getScript(chrome.extension.getURL("js/sei-legis.js"));
                $.getScript(chrome.extension.getURL("js/lib/jmespath.min.js"));
                console.log('loadScriptLegis');
        	});
	    },500);
	}
}
loadScriptLegis();
