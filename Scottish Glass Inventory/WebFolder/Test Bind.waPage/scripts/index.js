
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.inventory.query('color = :1 order by symbol', {params : [queryString + '*']}); 
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.inventory.glassType.set( sources.glass );
	
		sources.inventory.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
