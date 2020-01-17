Ext.define("Terrasoft.controls.ICLDateTime", {
	extend: "Terrasoft.controls.Container",
	alternateClassName: "Terrasoft.ICLDateTime",

	// region Properties: Protected
	value: null,

	getValue: function() {
		var dateValue = this.items.items[0].value;
		var timeValue = this.items.items[1].value;
		dateValue.setHours(timeValue.getHours());
		dateValue.setMinutes(timeValue.getMinutes());
		return dateValue;
	}
	// endregion
});