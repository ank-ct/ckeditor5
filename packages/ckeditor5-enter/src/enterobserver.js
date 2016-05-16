/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

import Observer from '../engine/treeview/observer/observer.js';
import DomEventData from '../engine/treeview/observer/domeventdata.js';
import KeyObserver from '../engine/treeview/observer/keyobserver.js';
import { keyCodes } from '../utils/keyboard.js';

/**
 * Enter observer introduce {@link engine.treeView.Document#enter} event.
 *
 * @memberOf enter
 * @extends engine.treeView.observer.Observer
 */
export default class EnterObserver extends Observer {
	constructor( document ) {
		super( document );

		document.addObserver( KeyObserver );

		document.on( 'keydown', ( evt, data ) => {
			if ( this.isEnabled && data.keyCode == keyCodes.enter ) {
				document.fire( 'enter', new DomEventData( document, data.domEvent ) );
			}
		} );
	}
}

/**
 * Event fired when the user presses <kbd>Enter</kbd>.
 *
 * Note: This event is fired by the {@link enter.Enter enter feature}.
 *
 * @event engine.treeView.Document#enter
 * @param {engine.treeView.observer.DomEventData} data
 */
