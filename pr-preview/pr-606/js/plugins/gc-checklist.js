/**
 * @title GCWeb Checklist plugin
 * @overview Plugin contained to show an example of a custom GCWeb checklist plugin
 * @license wet-boew.github.io/gcweb/License-en.html / wet-boew.github.io/gcweb/Licence-fr.html
 * @author @delisma
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "gc-checklist",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm;

			// settings;

		if ( elm ) {
			var $elm = $( elm );
			wb.ready( $elm, componentName );
		}
	};

	// Add your plugin event handler for dynamically generated checkboxes
$document.on( "click change", ".checkbox input[type=checkbox]", function( event ) {
	var $checkbox = $( event.target ),
		$fieldset = $checkbox.closest( "fieldset[data-wb-fieldflow-source]" ),
		sourceId;

	if ( $fieldset.length ) {
		sourceId = $fieldset.attr( "data-wb-fieldflow-source" );
		var $sourceElement = $( "#" + sourceId );

		// Only process if the source element has the gc-checklist class
		if ( $sourceElement.hasClass( componentName ) ) {
			// Find all checkboxes in this fieldset
			var $checkboxes = $fieldset.find( "input[type=checkbox]" );
			var allChecked = $checkboxes.length > 0 && !$checkboxes.filter( ":not(:checked)" ).length;

			// Toggle the completion message visibility
			var completionMessage = document.getElementById( "completion-message" );
			if ( completionMessage ) {
				if ( allChecked ) {
					completionMessage.classList.remove( "hidden" );
				} else {
					completionMessage.classList.add( "hidden" );
				}
			}
		}
	}
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
} )( jQuery, window, wb );
