
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button16 = {};	// @button
	var richText9 = {};	// @richText
	var image3 = {};	// @image
	var dataGrid5 = {};	// @dataGrid
	var locationFilter = {};	// @textField
	var button8 = {};	// @button
	var textField3 = {};	// @textField
	var textField2 = {};	// @textField
	var textField1 = {};	// @textField
	var button15 = {};	// @button
	var richText7 = {};	// @richText
	var checkbox1 = {};	// @checkbox
	var container7 = {};	// @container
	var glassFilter = {};	// @textField
	var button10 = {};	// @button
	var button9 = {};	// @button
	var richText6 = {};	// @richText
	var button7 = {};	// @button
	var symbolFilter = {};	// @textField
	var citySelect = {};	// @combobox
	var button6 = {};	// @button
	var button1 = {};	// @button
	var dataGrid1 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		$$("textField18").setValue(sources.locations.bin).toUpperCase();
		
	};// @lock

	richText9.click = function richText9_click (event)// @startlock
	{// @endlock
		$$("tabView1").selectTab(5);
	};// @lock

	image3.mouseout = function image3_mouseout (event)// @startlock
	{// @endlock
		$$("image5").hide();
	};// @lock

	image3.mouseover = function image3_mouseover (event)// @startlock
	{// @endlock
		$$("image5").show();
	};// @lock

	dataGrid5.onRowDblClick = function dataGrid5_onRowDblClick (event)// @startlock
	{// @endlock
		$$('textField12').setValue(sources.inventory.quantity);
//		$$("glassFilter").getValue(sources.glassType.symbol);
		$$("locationFilter").getValue(sources.location.bin);
		sources.glass.query('symbol = :1', {params: [sources.glassType.symbol + "*"]});
		sources.locations.query('bin = :1', {params: [sources.location.bin + "*"]});
	};// @lock

	dataGrid5.onRowClick = function dataGrid5_onRowClick (event)// @startlock
	{// @endlock
		

		$$("glassFilter").getValue(sources.glassType.symbol);
		$$("locationFilter").getValue(sources.location.bin);
		sources.glass.query('symbol = :1', {params: [sources.glassType.symbol + "*"]});
		sources.locations.query('bin = :1', {params: [sources.location.bin + "*"]});
		
		
//		var newGlassType = $$("dataGrid5").column(5).getFormattedValue();
//		var newLocation = $$("dataGrid5").column(6).getFormattedValue();
		
//		$$("glassFilter").getValue(newGlassType);
//		$$("locationFilter").getValue(newLocation);
//		sources.glass.query('symbol = :1', {params: [newGlassType]});
//		sources.locations.query('bin = :1', {params: [newLocation]});
	};// @lock

	locationFilter.change = function locationFilter_change (event)// @startlock
	{// @endlock
		$$("button7").enable();
	};// @lock

	locationFilter.keyup = function locationFilter_keyup (event)// @startlock
	{// @endlock
		// This let's us query for our glass location
		sources.locations.query('bin = :1', $$('locationFilter').getValue() + "*");
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		$$("button1").enable();
	};// @lock

	textField3.change = function textField3_change (event)// @startlock
	{// @endlock
		$$("button7").enable();
	};// @lock

	textField2.change = function textField2_change (event)// @startlock
	{// @endlock
		$$("button7").enable();
	};// @lock

	textField1.change = function textField1_change (event)// @startlock
	{// @endlock
		$$("button7").enable();
	};// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		// First we need to load the right page
		$$("tabView1").selectTab(2);
		
		
	};// @lock

	richText7.click = function richText7_click (event)// @startlock
	{// @endlock
		$$("tabView1").selectTab(1);
	};// @lock

	checkbox1.click = function checkbox1_click (event)// @startlock
	{// @endlock

	 	 
		$$("fileUpload1").toggle();
		
	};// @lock

	checkbox1.change = function checkbox1_change (event)// @startlock
	{// @endlock
		


	};// @lock

	container7.dblclick = function container7_dblclick (event)// @startlock
	{// @endlock
		$$("tabView1").selectTab(4);
	};// @lock

	glassFilter.change = function glassFilter_change (event)// @startlock
	{// @endlock
		$$("button7").enable();
	};// @lock

	glassFilter.keyup = function glassFilter_keyup (event)// @startlock
	{// @endlock
		// This let's us query for our glass ID
		sources.glass.query('symbol = :1 order by symbol', $$('glassFilter').getValue() + "*");
	};// @lock

	button10.click = function button10_click (event)// @startlock
	{// @endlock
//		$$("tabView1").selectTab(2);
		$$("dataGrid2").hide();
		$$("dataGrid3").hide();
		$$("button1").enable();
		$$("button2").enable();  // First Button
		$$("button3").enable();  // Previous Button
		$$("button4").enable();  // Next Button
		$$("button5").enable();  // Last Button
		$$("button6").enable();  // New Button
		$$("button9").enable();  // Edit Button
		$$("button7").disable(); // Save Button
		$$("container4").disable();
		$$("glassFilter").hide();
		$$("locationFilter").hide();
		sources.glass.query('symbol = :1', {params: [sources.glassType.symbol + "*"]});
		sources.locations.query('bin = :1', {params: [sources.location.bin + "*"]});
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		// I don't think we really need this, since we are already on tab #2
		$$("container4").enable();
		
		// I'm assigning some variables the values of the entity's glass type and location
		// this will help if we implement a transaction datastore
		
		$$('textField12').setValue(sources.inventory.quantity);
		$$('glassFilter').setValue(sources.glassType.symbol);
		$$('locationFilter').setValue(sources.location.bin);
		
		// Then we disable the buttons
		$$("button1").disable();
		$$("button2").disable();  // First Button
		$$("button3").disable();  // Previous Button
		$$("button4").disable();  // Next Button
		$$("button5").disable();  // Last Button
		$$("button6").disable();  // New Button
		$$("button7").disable();  // Save Button
		$$("button9").disable();  // Edit Button
		$$("button10").enable();  // Cancel Button
		// Now we show the Glass and Location grid
		$$("dataGrid2").show();
		$$("dataGrid3").show();
//		$$("dataGrid5").disable();
		$$("glassFilter").show();
		$$("locationFilter").show();
		sources.glass.query('symbol = :1', {params: [sources.glassType.symbol + "*"]});
		sources.locations.query('bin = :1', {params: [sources.location.bin + "*"]});
		$$("textField1").focus(true); // Sets focus to the first enterable field
		
	};// @lock

	richText6.click = function richText6_click (event)// @startlock
	{// @endlock
		$$("tabView1").selectTab(3);
		sources.glass.query('symbol = "*"');
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
//		var inventoryID = sources.inventory.getAttributeValue("inventory.ID);
//		if (sources.glass.ID != inventoryID){
			
		sources.inventory.glassType.set(sources.glass);
		sources.inventory.location.set(sources.locations);
		sources.inventory.save();
		$$("button7").disable(); // Save Button
		$$("button1").enable();
		$$("button6").enable();  // New Button
		$$("button9").enable();  // Edit Button
		$$("dataGrid5").enable();
	};// @lock

	symbolFilter.keyup = function symbolFilter_keyup (event)// @startlock
	{// @endlock
//		var theGlassSymbol = $$("symbolFilter").getValue();
//		sources.inventory.query('glassType.symbol = :1 order by glassType.symbol', {params: [theGlassSymbol + "*"]});
		sources.inventory.query('glassType.symbol = :1 order by glassType.symbol', $$('symbolFilter').getValue() + "*");

	};// @lock

	citySelect.change = function citySelect_change (event)// @startlock
	{// @endlock
		// Chooses our City
		theCity = $$("citySelect").getValue();
		sources.inventory.query('location.city = :1 order by bin', {params: [theCity + "*"]});
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		// First we disable the four buttons
		$$("button1").disable();
		$$("button2").disable();  // First Button
		$$("button3").disable();  // Previous Button
		$$("button4").disable();  // Next Button
		$$("button5").disable();  // Last Button
		$$("button6").disable();  // New Button
		$$("button7").disable();  // Save Button
		$$("button9").disable();  // Edit Button
		$$("button10").enable();  // Cancel Button
		
		// Now we show the Glass list and Locations
		$$("dataGrid2").show();
		$$("dataGrid3").show();
//		$$("dataGrid5").disable();
		$$("glassFilter").show();
		$$("locationFilter").show();
		$$("container4").enable();
		$$("glassFilter").setValue("");
		$$("locationFilter").setValue("");
		sources.glass.query('symbol = :1', {params: [glassFilter + "*"]});
		sources.locations.query('bin = :1', {params: [locationFilter + "*"]});
		$$("textField1").focus(true); // Sets focus to the first enterable field
		// Now we send focus to the Quantity field - but I don't think this code works
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Reset all the stuff
		$$("dataGrid2").hide();
		$$("dataGrid3").hide();
//		$$("button2").enable();  // First Button
//		$$("button3").enable();  // Previous Button
//		$$("button4").enable();  // Next Button
//		$$("button5").enable();  // Last Button
//		$$("button6").enable();  // New Button
//		$$("button9").enable();  // Edit Button
		$$("button7").disable(); // Save Button
		$$("glassFilter").hide();
		$$("locationFilter").hide();
//		sources.glass.query('symbol = :1', {params: [sources.glassType.symbol + "*"]});
//		sources.locations.query('bin = :1', {params: [sources.location.bin + "*"]});
		// Now go back to page 1
		$$("tabView1").selectTab(1);
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		inventoryQty = $$("dataGrid1").column(1).getFormattedValue();
		inventoryWidth = $$("dataGrid1").column(2).getFormattedValue();
		inventoryLength = $$("dataGrid1").column(3).getFormattedValue();
		inventoryGlassID = $$("dataGrid1").column(5).getFormattedValue();
		inventoryLocation = $$("dataGrid1").column(6).getFormattedValue();
	};// @lock

	dataGrid1.onRowDblClick = function dataGrid1_onRowDblClick (event)// @startlock
	{// @endlock
		$$("tabView1").selectTab(2);
		$$("container4").disable();
		$$("button2").enable();  // First Button
		$$("button3").enable();  // Previous Button
		$$("button4").enable();  // Next Button
		$$("button5").enable();  // Last Button
		$$("button6").enable();  // New Button
		$$("button9").enable();  // Edit Button
		$$("button10").disable();  // Cancel Button
//		$$("dataGrid5").disable();
		$$("glassFilter").getValue(sources.glass.symbol);
		$$("locationFilter").getValue(sources.locations.bin);
	};// @lock
//	$$('locationQueryString').setValue("");


// @region eventManager// @startlock
	WAF.addListener("dataGrid5", "onRowDblClick", dataGrid5.onRowDblClick, "WAF");
	WAF.addListener("button16", "click", button16.click, "WAF");
	WAF.addListener("richText9", "click", richText9.click, "WAF");
	WAF.addListener("image3", "mouseout", image3.mouseout, "WAF");
	WAF.addListener("image3", "mouseover", image3.mouseover, "WAF");
	WAF.addListener("dataGrid5", "onRowClick", dataGrid5.onRowClick, "WAF");
	WAF.addListener("locationFilter", "change", locationFilter.change, "WAF");
	WAF.addListener("locationFilter", "keyup", locationFilter.keyup, "WAF");
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("glassFilter", "change", glassFilter.change, "WAF");
	WAF.addListener("textField3", "change", textField3.change, "WAF");
	WAF.addListener("textField2", "change", textField2.change, "WAF");
	WAF.addListener("textField1", "change", textField1.change, "WAF");
	WAF.addListener("button15", "click", button15.click, "WAF");
	WAF.addListener("richText7", "click", richText7.click, "WAF");
	WAF.addListener("checkbox1", "click", checkbox1.click, "WAF");
	WAF.addListener("checkbox1", "change", checkbox1.change, "WAF");
	WAF.addListener("container7", "dblclick", container7.dblclick, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("glassFilter", "keyup", glassFilter.keyup, "WAF");
	WAF.addListener("button10", "click", button10.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("richText6", "click", richText6.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("symbolFilter", "keyup", symbolFilter.keyup, "WAF");
	WAF.addListener("citySelect", "change", citySelect.change, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("dataGrid1", "onRowDblClick", dataGrid1.onRowDblClick, "WAF");
// @endregion
};// @endlock
