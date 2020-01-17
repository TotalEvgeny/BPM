define("PortalCasePage", ["ICLConfigurationConstants"], function(constants) {
	return {
		entitySchemaName: "Case",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"Symptoms": {
				"0e6a9711-82ce-4192-974c-63a0e5793de6": {
					"uId": "0e6a9711-82ce-4192-974c-63a0e5793de6",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onEntityInitialized: function(){
				this.callParent(arguments);
				if(this.isAddMode()){
					this.set("Group", constants.SysAdminUnit.FirstLineEmp);
				}
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "ProcessingTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "merge",
				"name": "SatisfactionLevelComment",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
