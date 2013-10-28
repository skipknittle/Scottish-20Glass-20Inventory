
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var cityCombobox = {};	// @combobox
	var documentEvent = {};	// @document
	var dataGrid4 = {};	// @dataGrid
	var changeLocation = {};	// @button
	var button7 = {};	// @button
	var locationQueryString = {};	// @combobox
	var symbolQuery1String = {};	// @textField
	var glassQueryString = {};	// @textField
	var combobox1 = {};	// @combobox
	var colorQueryString = {};	// @textField
	var symbolQueryStr = {};	// @textField
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	cityCombobox.change = function cityCombobox_change (event)// @startlock
	{// @endlock
		theCity = $$('cityCombobox').getValue();
		sources.locations.query('city = :1', {params: [theCity + "*"]});
		

	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
//		debugger
		sources.inventory.query('glassType.symbol = "*" order by glassType.symbol');
	};// @lock

	dataGrid4.onRowClick = function dataGrid4_onRowClick (event)// @startlock
	{// @endlock
		// This code get the value from a data grid and moves 
		// the value of the numbered column to a variable
		
			var vGetSymbol= $$("dataGrid4").column(5).getFormattedValue();	
			$$('vSymbol').setValue(vGetSymbol)
	
//		
		
	};// @lock

	changeLocation.click = function changeLocation_click (event)// @startlock
	{// @endlock
//		sources.inventory.location.set( sources.locations ); 
//		sources.inventory.save();
	};// @lock
//	$$('locationQueryString').setValue("");
	button7.click = function button7_click (event)// @startlock
	{// @endlock
		// Clear the other text fields
		$$('locationQueryString').setValue("");
		$$('colorQueryString').setValue("");
		$$('symbolQuery1String').setValue("");
		
		// Now we select all the items sorted by symbol
		sources.inventory.query('glassType.symbol = "*" order by glassType.symbol');
	};// @lock

	locationQueryString.click = function locationQueryString_click (event)// @startlock
	{// @endlock
		// This initiates a query for the glass 
//		var theGlassLocation = $$("locationQueryString").getValue();
//		sources.inventory.query('location.bin = :1', {params: [theGlassLocation + "*"]});
	};// @lock

	locationQueryString.change = function locationQueryString_change (event)// @startlock
	{// @endlock
		// This initiates a query for the glass 
		var theLocation = $$("locationQueryString").getValue();
		sources.inventory.query('location.bin = :1', {params: [theLocation]});
	};// @lock

	locationQueryString.focus = function locationQueryString_focus (event)// @startlock
	{// @endlock
		// First clear the other fields
		$$('colorQueryString').setValue("");
		$$('symbolQuery1String').setValue("");
				
		// This initiates a query for the glass by location
		var theLocation = $$("locationQueryString").getValue();
		sources.inventory.query('location.bin = :1', {params: [theLocation + "*"]});
	};// @lock

	symbolQuery1String.focus = function symbolQuery1String_focus (event)// @startlock
	{// @endlock
//		 Clear the color field text
		$$('colorQueryString').setValue("");
		$$('locationQueryString').setValue("");

	};// @lock


	symbolQuery1String.keyup = function symbolQuery1String_keyup (event)// @startlock
	{// @endlock
		// This initiates a query for the glass by symbol
		var theGlassSymbol = $$("symbolQuery1String").getValue();
		sources.inventory.query('glassType.symbol = :1 order by glassType.symbol', {params: [theGlassSymbol + "*"]});
	};// @lock

	glassQueryString.keyup = function glassQueryString_keyup (event)// @startlock
	{// @endlock
		$$('locationQueryString').setValue("");
		var theSymbol = $$("glassQueryString").getValue();
		sources.glass.query('symbol = :1 order by symbol', {params: [theSymbol + "*"]});
	};// @lock

	combobox1.click = function combobox1_click (event)// @startlock
	{// @endlock
		sources.location.query('bin = "*" order by bin');
	};// @lock

	colorQueryString.focus = function colorQueryString_focus (event)// @startlock
	{// @endlock
		
		// This clears the other search field values
		$$('symbolQuery1String').setValue("");
		$$('locationQueryString').setValue("");
	};// @lock

	colorQueryString.keyup = function colorQueryString_keyup (event)// @startlock
	{// @endlock
		// This initiates a query for the glass by color
		var theColor = $$("colorQueryString").getValue();
		sources.inventory.query('glassType.color = :1', {params: [theColor + "*"]});
	};// @lock

	symbolQueryStr.keyup = function symbolQueryStr_keyup (event)// @startlock
	{// @endlock
		var theSymbol = $$("symbolQueryStr").getValue();
		sources.glass.query('symbol = :1 order by symbol', {params: [theSymbol + "*"]});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.inventory.glassType.set( sources.glass );
		sources.inventory.location.set( sources.locations ); 
		sources.inventory.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("cityCombobox", "change", cityCombobox.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("dataGrid4", "onRowClick", dataGrid4.onRowClick, "WAF");
	WAF.addListener("changeLocation", "click", changeLocation.click, "WAF");
	WAF.addListener("locationQueryString", "click", locationQueryString.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("colorQueryString", "focus", colorQueryString.focus, "WAF");
	WAF.addListener("symbolQuery1String", "focus", symbolQuery1String.focus, "WAF");
	WAF.addListener("locationQueryString", "change", locationQueryString.change, "WAF");
	WAF.addListener("locationQueryString", "focus", locationQueryString.focus, "WAF");
	WAF.addListener("symbolQuery1String", "keyup", symbolQuery1String.keyup, "WAF");
	WAF.addListener("glassQueryString", "keyup", glassQueryString.keyup, "WAF");
	WAF.addListener("combobox1", "click", combobox1.click, "WAF");
	WAF.addListener("colorQueryString", "keyup", colorQueryString.keyup, "WAF");
	WAF.addListener("symbolQueryStr", "keyup", symbolQueryStr.keyup, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
