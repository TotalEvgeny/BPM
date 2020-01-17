define("ICLCaseLifecycleDetailPage", [], function() {
		return {
			entitySchemaName: "CaseLifecycle",
			messages: {},
			attributes: {
			},
			modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
			details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
			businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
			methods: {
				onEntityInitialized: function() {
					this.callParent(arguments);
					//Чтобы после сохранении комментария не переключал стадию на предыдущую 
					this.sandbox.unRegisterMessages("ReloadDashboardItems");
				},

				onICLDiscardChangesClick: function() {
					this.showConfirmationDialog(this.get("Resources.Strings.IsDontSaveMessage"),
					function(returnCode) {
						if (returnCode === this.Terrasoft.MessageBoxButtons.YES.returnCode) {
							window.IsCLSavedCasePage = true;
							window.IsCLSavedDashboard = true;
							this.onDiscardChangesClick();
							
						}
					},
					[this.Terrasoft.MessageBoxButtons.YES.returnCode,
						this.Terrasoft.MessageBoxButtons.NO.returnCode],
					null);
				},

				/**
				* @inheritdoc Terrasoft.BaseEntityPage#save
				* @override
				*/
				save: function() {
					this.set("EndDate", new Date());
					this.set("StartDate", new Date());
					this.callParent(arguments);
					window.IsCLSavedCasePage = true;
					window.IsCLSavedDashboard = true;
				}
			},
			dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
			diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "DiscardChangesButton",
				"values": {
					"click": {
						"bindTo": "onICLDiscardChangesClick"
					}
				}
			},
			{
				"operation": "insert",
				"name": "ICLComment41d3f97d-8908-42fe-9f84-2bd3d497a1c0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ICLComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
		};
	}
);
