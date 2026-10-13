/**
 * @title WET-BOEW Responsive Preview
 * @overview A generic utility for demonstrating responsive components using container queries.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/License-fr.html
 * @author delisma
 *
 * @description
 * This plugin allows developers to create responsive previews for any component by:
 * - Using CSS Container Queries instead of viewport media queries
 * - Loading component-specific CSS files via data attributes
 * - Supporting flexible button configurations for different breakpoints
 *
 * @example
 * <div data-gc-responsive-preview='{
 *   "container": "#preview-container",
 *   "cssPath": "/css/responsive-preview-tables.css",
 *   "buttons": {
 *     "mobile": "#mobile-btn",
 *     "tablet": "#tablet-btn",
 *     "desktop": "#desktop-btn"
 *   },
 *   "breakpointWidths": {
 *     "mobile": "495px",
 *     "tablet": "768px",
 *     "desktop": "100%"
 *   }
 * }'></div>
 *
 * @configuration
 * - container: CSS selector for the container element to apply responsive classes to
 * - cssPath: (optional) Path to component-specific CSS file with container queries
 * - css: (alternative to cssPath) Alias for cssPath
 * - buttons: Object mapping breakpoint names to button selectors
 * - breakpointWidths: (optional) Object mapping breakpoint names to max-width values
 *
 * CSS Classes Applied:
 * - gc-responsive-preview-container: Base container class with container-type: inline-size
 * - gc-responsive-preview-{breakpoint}: Applied when corresponding button is clicked
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
		buttons = data.buttons || {},
		buttonKeys = Object.keys( buttons ),
		allClasses = [],
		i, key, $button;

	// Validation
	if ( !$container.length ) {
		console.log( "Warning", componentName + " configured on " + $elm.get( 0 ) + " but container selector '" + data.container + "' not found." );
		return;
	}

	// Backward compatibility: support old format (mobileBtn, tabletBtn, desktopBtn)
	if ( data.mobileBtn || data.tabletBtn || data.desktopBtn ) {
		if ( data.mobileBtn ) buttons.mobile = data.mobileBtn;
		if ( data.tabletBtn ) buttons.tablet = data.tabletBtn;
		if ( data.desktopBtn ) buttons.desktop = data.desktopBtn;
		buttonKeys = Object.keys( buttons );
	}

	if ( buttonKeys.length === 0 ) {
		console.log( "Warning", componentName + " configured on " + $elm.get( 0 ) + " but no button selectors found in 'buttons' object or legacy button properties." );
		return;
	}

	// Collect all CSS classes that will be used
	for ( i = 0; i < buttonKeys.length; i++ ) {
		key = buttonKeys[i];
		allClasses.push( "gc-responsive-preview-" + key );
	}

	// Set up container query support
	if ( !$( "#gc-responsive-preview-base-styles" ).length ) {
		// Load component-specific CSS if specified in data attributes
		var cssPath = data.cssPath || data.css || null;
		if ( cssPath && !$( 'link[href*="' + cssPath + '"]' ).length ) {
			var linkElement = document.createElement( 'link' );
			linkElement.rel = 'stylesheet';
			linkElement.href = cssPath;
			document.head.appendChild( linkElement );
		}

		// Create base styles dynamically based on configured breakpoints
		var baseStyles = ".gc-responsive-preview-container { container-type: inline-size; width: 100%; }";

		// Default breakpoint widths - can be overridden via data attributes
		var defaultWidths = {
			"mobile": "495px",
			"tablet": "768px",
			"desktop": "100%"
		};

		// Use custom widths if provided, otherwise fall back to defaults
		var breakpointWidths = data.breakpointWidths || defaultWidths;

		// Add styles for each configured breakpoint
		for ( i = 0; i < buttonKeys.length; i++ ) {
			key = buttonKeys[i];
			var width = breakpointWidths[key] || "100%";
			baseStyles += ".gc-responsive-preview-" + key + " { ";
			baseStyles += "max-width: " + width + "; ";
			baseStyles += "container-name: gc-" + key + "-preview; ";
			baseStyles += "}";
		}

		var style = document.createElement( "style" );
		style.id = "gc-responsive-preview-base-styles";
		style.textContent = baseStyles;
		document.head.appendChild( style );
	}	// Add base container class if not present
	if ( !$container.hasClass( "gc-responsive-preview-container" ) ) {
		$container.addClass( "gc-responsive-preview-container" );
	}

	// Event Binding for each button
	for ( i = 0; i < buttonKeys.length; i++ ) {
		key = buttonKeys[i];
		$button = $( buttons[key] );

		if ( !$button.length ) {
			console.log( "Warning", componentName + " button selector '" + buttons[key] + "' for breakpoint '" + key + "' not found." );
			continue;
		}

		// Create closure to capture the current key and classes
		( function( breakpoint, classesToRemove ) {
			$button.on( "click", function() {
				var targetClass = "gc-responsive-preview-" + breakpoint;
				// Remove all responsive classes and add the target one
				$container.removeClass( classesToRemove.join( " " ) ).addClass( targetClass );
			} );
		} )( key, allClasses.filter( function( cls ) {
			return cls !== "gc-responsive-preview-" + key;
		} ) );
	}
}
// Bind the custom event handler
$document.on( "responsive-preview.wb", selector, responsivePreviewHandler );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, document, wb );
