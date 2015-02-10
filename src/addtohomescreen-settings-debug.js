addToHomescreen.removeSession();     	// use this to remove the localStorage variable
	var ath = addToHomescreen({
	    debug: 'ios',           		// activate debug mode in ios emulation
	    skipFirstVisit: false,			// show at first access
	    startDelay: 0,          		// display the message right away
	    lifespan: 0,            		// do not automatically kill the call out
	    displayPace: 0,         		// do not obey the display pace
	    privateModeOverride: true,		// show the message in private mode
	    maxDisplayCount: 0      		// do not obey the max display count
	});
ath.clearSession();      				// reset the user session