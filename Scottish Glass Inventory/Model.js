
guidedModel =// @startlock
{
	Inventory :
	{
		glassArea :
		{
			onGet:function()
			{// @endlock
				return this.glassWidth * this.glassLength / 144 * this.quantity;
				sources.inventory.serverRefresh();
			}// @startlock
		}
	}
};// @endlock
