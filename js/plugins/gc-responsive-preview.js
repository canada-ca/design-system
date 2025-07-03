/**
 * @title WET-BOEW Responsive Preview
 * @overview A class switcher utility for demonstrating responsive components.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/License-fr.html
 * @author delisma
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "gc-responsive-preview",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc;

/**
 * @method init
 * @param {jQuery Event} event Event that triggered the function call
 */
function init( event ) {

	// Start initialization
	// returns DOM object = proceed with init
	// returns undefined = do not proceed with init (e.g., already initialized)
	var elm = wb.init( event, componentName, selector ),
		$elm,
		settings;

	if ( elm ) {
		$elm = $( elm );

		// ... Do the plugin initialisation
		settings = wb.getData( $elm, componentName );

		// Trigger the custom event
		$elm.trigger( "responsive-preview.wb", settings );

		// Mark the plugin as initialized
		wb.ready( $elm, componentName );
	}
}

/**
 * @method responsivePreviewHandler
 * @param {jQuery event} event
 * @param {object} data The configuration object for the plugin
 */
function responsivePreviewHandler( event, data ) {
	var $elm = $( event.target ),
		$container = $( data.container ),
		$mobileBtn = $( data.mobileBtn ),
		$tabletBtn = $( data.tabletBtn ),
		$desktopBtn = $( data.desktopBtn );

	// Validation
	if ( !$container.length ) {
		wb.log( "Warning", componentName + " configured on " + $elm.get( 0 ) + " but container selector '" + data.container + "' not found." );
		return;
	}
	if ( !$mobileBtn.length || !$tabletBtn.length || !$desktopBtn.length ) {
		wb.log( "Warning", componentName + " configured on " + $elm.get( 0 ) + " but one or more button selectors could not be found." );
		return;
	}

	// Event Binding
	$mobileBtn.on( "click", function() {
		$container.removeClass( "table-t table-d" ).addClass( "table-m" );
	} );

	$tabletBtn.on( "click", function() {
		$container.removeClass( "table-m table-d" ).addClass( "table-t" );
	} );

	$desktopBtn.on( "click", function() {
		$container.removeClass( "table-m table-t" ).addClass( "table-d" );
	} );
}
// Bind the custom event handler
$document.on( "responsive-preview.wb", selector, responsivePreviewHandler );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );
