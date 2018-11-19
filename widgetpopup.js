/* widget.js */
(function(window, document) {
	'use strict' /* Wrap code in an IIFE */;

	var jQuery, $; // Localize jQuery variables

	function loadScript(url, callback) {
		/* Load script from url and calls callback once it's loaded */
		var scriptTag = document.createElement('script');
		scriptTag.setAttribute('type', 'text/javascript');
		scriptTag.setAttribute('src', url);
		if (typeof callback !== 'undefined') {
			if (scriptTag.readyState) {
				/* For old versions of IE */
				scriptTag.onreadystatechange = function() {
					if (
						this.readyState === 'complete' ||
						this.readyState === 'loaded'
					) {
						callback();
					}
				};
			} else {
				scriptTag.onload = callback;
			}
		}
		(
			document.getElementsByTagName('head')[0] || document.documentElement
		).appendChild(scriptTag);
	}

	function main() {
		/* The main logic of our widget */
		$('#hello').html('This content comes from our widget');
	}

	/* Load jQuery */
	loadScript('../jquery.js', function() {
		/* Restore $ and window.jQuery to their previous values and store the
     new jQuery in our local jQuery variables. */
		$ = jQuery = window.jQuery.noConflict(true);
		main(); /* Execute the main logic of our widget once jQuery is loaded */
	});
})(window, document); /* end IIFE */
