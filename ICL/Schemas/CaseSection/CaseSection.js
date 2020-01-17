define("CaseSection", [], function() {
	return {
		entitySchemaName: "Case",
		messages: {
			"AddCommentMessage": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			// Метаданные для добавления на страницу  кнопки Добавить комментарий
			{
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "AddCommentButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {bindTo: "Resources.Strings.AddCommentButtonCaption"},
					"click": {bindTo: "onAddCommentButtonClick"},
					"style": Terrasoft.controls.ButtonEnums.style.BLUE,
					"enabled": true
				}
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			onAddCommentButtonClick: function() {
				this.sandbox.publish("AddCommentMessage", null,  [this.sandbox.id]);
			}
		}
	};
});
