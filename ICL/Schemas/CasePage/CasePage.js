define("CasePage", ["ConfigurationConstants", "ICLConfigurationConstants", "css!ICLInputBoxHelper", "ICLDateTime"], 
	function(ConfigurationConstants, ICLConfigurationConstants) {
	return {
		entitySchemaName: "Case",
		messages: {
			"AddCommentMessage": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			}
		},
		attributes: {
			"Contact":{
				lookupListConfig: {
					columns: ["Phone", "MobilePhone", "Email", "Name"],
				},
				dependencies: [
					{
						columns: ["Contact"],
						methodName: "setContactInforms"
					}
				]
			},
			"Account":{
				dependencies: [
					{
						columns: ["Account"],
						methodName: "accountChanged"
					}
				]
			},
			"ICLVContactPhones": {
				dataValueType: this.Terrasoft.DataValueType.TEXT,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				dependencies: [
					{
						columns: ["Contact"],
						methodName: "setICLVContactPhones"
					}
				]
			},
			"Status":{
				dependencies: [
					{
						columns: ["Status"],
						methodName: "iclStatusChanged"
					}
				]
			},
			"ServiceItem":{
				dependencies: [
					{
						columns: ["ServiceItem"],
						methodName: "setPriotity"
					}
				]
			},
			"Symptoms":{
				isRequired: true
			},
			"ICLContactName":{
				isRequired: true
			},
			"ICLContactEmail":{
				isRequired: true
			},
			"ICLActualResolutionTime": {
				dataValueType: this.Terrasoft.DataValueType.FLOAT,
				dependencies: [
					{
						columns: ["Category"],
						methodName: "setICLActualResolutionTime"
					}
				]
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"Solution": {
				"5ed865ff-096a-452c-8ad1-5970f81dc865": {
					"uId": "5ed865ff-096a-452c-8ad1-5970f81dc865",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "f7b67900-a7b4-421b-829c-762801f9b96c",
								"dataValueType": 10
							}
						}
					]
				},
				"2f53bb22-68d6-4496-8c79-d38c6d93caea": {
					"uId": "2f53bb22-68d6-4496-8c79-d38c6d93caea",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "f7b67900-a7b4-421b-829c-762801f9b96c",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Owner": {
				"74567cc8-75f2-4de1-9d95-3a7c8a5465f6": {
					"uId": "74567cc8-75f2-4de1-9d95-3a7c8a5465f6",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae325399-9da9-492f-8e8a-736d119efcc3",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "a7a8f0aa-ba89-4021-b2cb-ed9a1f7b3eff",
								"dataValueType": 10
							}
						}
					]
				},
				"80a8d6c5-673a-4ec1-8019-bdbf5ffaf9f1": {
					"uId": "80a8d6c5-673a-4ec1-8019-bdbf5ffaf9f1",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "764e1bd0-fb36-43fc-a10e-fa1b64059673",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Group": {
				"ea6cdc6f-877d-448d-a57d-4c6691f0eb82": {
					"uId": "ea6cdc6f-877d-448d-a57d-4c6691f0eb82",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "a7a8f0aa-ba89-4021-b2cb-ed9a1f7b3eff",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"ICLContactWorkPhone": {
				"b32ebb81-18f6-43cc-963b-3eb34d3f10dd": {
					"uId": "b32ebb81-18f6-43cc-963b-3eb34d3f10dd",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Contact"
							}
						}
					]
				}
			},
			"ICLContactMobilePhone": {
				"840b334d-1415-4e59-9057-c820eaaaa212": {
					"uId": "840b334d-1415-4e59-9057-c820eaaaa212",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Contact"
							}
						}
					]
				}
			},
			"ICLContactEmail": {
				"961332d8-76c9-42c2-bfd7-f7440d386c1f": {
					"uId": "961332d8-76c9-42c2-bfd7-f7440d386c1f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Contact"
							}
						}
					]
				}
			},
			"ICLContactName": {
				"02992c79-760f-4f2d-a270-8d84b3cdc7c0": {
					"uId": "02992c79-760f-4f2d-a270-8d84b3cdc7c0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Contact"
							}
						}
					]
				}
			},
			"ICLContactPhones": {
				"a1134f2e-8863-4331-be51-890abf7e7de2": {
					"uId": "a1134f2e-8863-4331-be51-890abf7e7de2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Contact"
							}
						}
					]
				},
				"6f71b243-bd36-4e79-9923-3fe4711cf52c": {
					"uId": "6f71b243-bd36-4e79-9923-3fe4711cf52c",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Contact"
							}
						}
					]
				}
			},
			"ICLSetDate": {
				"e3e34c4d-50a8-4b78-9897-1362d65e5c15": {
					"uId": "e3e34c4d-50a8-4b78-9897-1362d65e5c15",
					"enabled": false,
					"removed": true,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "3e715242-e2f8-49b7-b688-63eb7cf4f9af",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Priority": {
				"BindParameterEnabledCasePriority": {
					"uId": "120dcb8d-80ad-488a-a1ac-f451209a05a3",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Priority"
							},
							"rightExpression": {
								"type": 0,
								"value": false
							}
						}
					]
				}
			},
			"ServiceItem": {
				"BindingServiceItemToOriginalServiceItem": {
					"uId": "4bc3c79e-a9fe-4d44-b233-6f2cebd8cf0c",
					"enabled": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "OriginalServiceItem"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Account"
							}
						}
					]
				},
				"7e1a143f-55a2-4b68-89a5-d8a0b973cc64": {
					"uId": "7e1a143f-55a2-4b68-89a5-d8a0b973cc64",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Account"
							}
						}
					]
				},
				"BindingServiceItemToServicePact": {
					"uId": "4d85d801-a7ab-465b-9a6d-736e3e509db3",
					"enabled": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "ServicePact"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "OriginalServiceItem"
							}
						}
					]
				}
			},
			"ServicePact": {
				"EnableServicePactOnAdd": {
					"uId": "9eb3675f-b886-4772-941a-db1dea2c64d4",
					"enabled": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "OriginalServiceItem"
							}
						},
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Account"
							}
						}
					]
				},
				"81b851eb-fa6a-4eb9-b2eb-3c5a4867f749": {
					"uId": "81b851eb-fa6a-4eb9-b2eb-3c5a4867f749",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "Account"
							}
						}
					]
				},
				"6cf5958b-f382-427b-946a-5917f047c251": {
					"uId": "6cf5958b-f382-427b-946a-5917f047c251",
					"enabled": true,
					"removed": true,
					"ruleType": 1,
					"baseAttributePatch": "ServiceProvider",
					"comparisonType": 3,
					"type": 1,
					"attribute": "Account"
				}
			},
			"SatisfactionLevel": {
				"88751c1a-b448-432b-84d5-fcca79fd33be": {
					"uId": "88751c1a-b448-432b-84d5-fcca79fd33be",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "f7b67900-a7b4-421b-829c-762801f9b96c",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"Symptoms": {
				"c362e942-5611-4f7f-8cdc-ba11d86f6dcf": {
					"uId": "c362e942-5611-4f7f-8cdc-ba11d86f6dcf",
					"enabled": false,
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
			},
			"ICLTimeSpend": {
				"4b80a337-0602-4991-980d-c4e014dadda5": {
					"uId": "4b80a337-0602-4991-980d-c4e014dadda5",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "Status"
							},
							"rightExpression": {
								"type": 0,
								"value": "ae7f411e-f46b-1410-009b-0050ba5d6c38",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onEntityInitialized: function() {
				this.callParent();
				if(!this.isNewMode() && this.$Contact){
					this.setICLVContactPhones();
				}
				if(!this.isAddMode()){
					this.setPriotity();
					this.setICLActualResolutionTime();
				}
				
			},
				
			/**
			 * On get service pacts handler.
			 * @protected
			 * @param {Object} responseObject
			 */
			onGetSuitableServicePacts: function(responseObject) {
				this.hideBodyMask();
				this.set("SuitableServicePacts", responseObject.GetSuitableServicePactsResult || []);
				var mostSuitableServicePact = this.getMostSuitableServicePact();
				this.set("ServicePact", mostSuitableServicePact ? mostSuitableServicePact : null);
			},
				
			/**
			 * Returns determine service pact service config.
			 * @protected
			 * @returns {Object}
			 */
			getCallDetermineServiceConfig: function() {
				if(this.$Contact && !this.$Account){
					return null;
				}
				return this.callParent(arguments);
			},

			accountChanged: function(){
				this.set("OriginalServiceItem", null);
				if(!this.$Account){
					this.set("ServiceItem", null);
					this.set("ServicePact", null);
				}
			},
			
			/**
			 * On service pact field change handler.
			 * @protected
			 */
			onServicePactChanged: function() {
				this.changedValues.ServicePact = this.get("ServicePact");
				this.callParent();
			},

			setICLVContactPhones: function() {
				var contact = this.$Contact;
				if(contact) {
					var esq = this.Ext.create(Terrasoft.EntitySchemaQuery, {
						rootSchemaName: "ContactCommunication"
					});
					esq.addColumn("Number");
					var communicationTypeFilter = esq.createColumnInFilterWithParameters("CommunicationType.Id", 
						ConfigurationConstants.PhonesCommunicationTypes);
					var idFilter = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
						"Contact.Id", this.$Contact.value);
					esq.filters.addItem(communicationTypeFilter);
					esq.filters.addItem(idFilter);
					esq.getEntityCollection(function(response) {
						if (response.success) {
							var phones = "";
							response.collection.each(function(item) {
								phones += item.$Number + ", ";
							});
							this.set("ICLVContactPhones", phones.substring(0, phones.length - 2));
						}
					}, this);
				}
				else {
					this.set("ICLContactPhones", "");
				}
			},

			iclStatusChanged: function() {
				var status = this.$Status;
				//выбранный статус === принят на обработку
				if(status &&
					status.value === ICLConfigurationConstants.CaseStatus.Accepted.value ) {
					this.set("ICLSetDate", null);
				}
			},

			setPriotity: function(){
				var servicePact = this.$ServicePact;
				var serviceItem = this.$ServiceItem;
				var changed = this.changedValues;
				if(serviceItem && servicePact){
					var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", 
						{rootSchemaName: "ServiceInServicePact"});
					esq.addColumn("[TimeToPrioritize:ServiceInServicePact].CasePriority", "CasePriority");

					var esqServiceItemFilter = esq.createColumnFilterWithParameter(
							Terrasoft.ComparisonType.EQUAL, "ServiceItem.Id", serviceItem.value);
					var esqServicePactFilter = esq.createColumnFilterWithParameter(
							Terrasoft.ComparisonType.EQUAL, "ServicePact.Id", servicePact.value);

					esq.filters.add("esqServiceItemFilter", esqServiceItemFilter);
					esq.filters.add("esqServicePactFilter", esqServicePactFilter);
					
					var endDate = esq.addColumn("[TimeToPrioritize:ServiceInServicePact].CasePriority.Name");
					endDate.orderPosition = 0;
					endDate.orderDirection = Terrasoft.OrderDirection.ASC;
					esq.getEntityCollection(function(response) {
						if (response.collection.getCount() > 0) {
							if(changed.ServiceItem){
								this.set("Priority",response.collection.collection.items[0].$CasePriority);
							}
							var column = this.columns.Priority;
							var lookupListConfig = column.lookupListConfig;
							var priorityCollections = [];
							Terrasoft.each(response.collection.getItems(), function(item) {
								priorityCollections.push(item.$CasePriority.value);
							}, this);
							lookupListConfig.filter = function(){
								return this.Terrasoft.createColumnInFilterWithParameters("Id", priorityCollections);
							};
						}
					}, this);
				}
			},

			isVisibleICLVContactPhones: function() {
				var contact = this.$Contact;
				if(contact) {
					return true;
				}
				return false;
			},

			isVisibleICLContactPhones: function() {
				var contact = this.$Contact;
				if(contact) {
					return false;
				}
				return true;
			},

			isICLSetDateRequired: function() {
				var status = this.$Status;
				if(status && (status.value === ICLConfigurationConstants.CaseStatus.Postponed)) {
					return true;
				}
				return false;
			},

			requiredOwnerORgroup: function(column) {
				var status = this.$Status;
				var engineerAppointedStatusId = ICLConfigurationConstants.CaseStatus.EngineerAppointed.value;
				var registeredStatusId = ICLConfigurationConstants.CaseStatus.Registered.value;
				switch (column) {
					case "Owner":
						{
							//Зарегистрирован или Инженер назначен
							if(status && (status.value === engineerAppointedStatusId ||
								status.value === registeredStatusId))
							{
								if(this.$Group){
									return false;
								}
								return true;
							}
							//Состояние обращение принято на обработку
							else if(status && status.value === ICLConfigurationConstants.CaseStatus.Accepted.value) {
								return true;
							}
							return false;
						}
						break;
					case "Group":
						{
							//Зарегистрирован или Инженер назначен
							if(status && (status.value === engineerAppointedStatusId ||
								status.value === registeredStatusId))
							{
								if(this.$Owner){
									return false;
								}
								return true;
							}
							return false;
						}
						break;
					default: {
						return false;
					}
					break;
				}
			},

			//Чтобы не пытался закрывать карточку после сохранения Жизненного цикла обращений
			onCanBeDestroyed: function(cacheKey) {
				if(window.IsCLSavedCasePage) {
					window.IsCLSavedCasePage = false;
				}
				else {
					this.callParent(arguments);
				}
			},

			subscribeSandboxEvents: function() {
				this.callParent(arguments);
				this.sandbox.subscribe("AddCommentMessage", this.onAddCommentButtonClick, this,
					["SectionModuleV2_CaseSection"]);
				this.sandbox.unRegisterMessages("ReloadDashboardItems");
			},

			onSaved: function() {
				this.callParent(arguments);

				var config = this.getConfignotify();
				this.callService(config, this.onsavenotifydetail, this);
				//Выводит ошибки если Стадия предпологает закрытие карточки после сохранения.
				//this.onUpdateCasePage();
			},

			getConfignotify: function() {
				var conditions = this.prepareCaseTermNotifyConditions();
				var registrationTime = this.get("RegisteredOn");
				if (this.Ext.isEmpty(conditions) || !registrationTime) {
					return null;
				}
				var encodedDate = this.encodeDateToJsonFormat(registrationTime);
				return {
					serviceName: "ICLITSMCaseTermCalculationService",
					methodName: "CalculateTerms",
					data: {
						arguments: conditions,
						registrationDate: encodedDate
					}
				};
			},

			onsavenotifydetail: function(response) {
				this.hideBodyMask();
				if (!response || !response.CalculateTermsResult) {
					return;
				}
				var result = this.Terrasoft.decode(response.CalculateTermsResult);
				var reactionTime = result.ReactionTime ? this.Terrasoft.parseDate(result.ReactionTime) : null;
				var solutionTime = result.SolutionTime ? this.Terrasoft.parseDate(result.SolutionTime) : null;
			},

			prepareCaseTermNotifyConditions: function() {
				var conditions = [];
				this.addToConditions(conditions, "ServiceItem");
				this.addToConditions(conditions, "ServicePact");
				this.addToConditions(conditions, "Priority");
				this.addToConditions(conditions, "Id");
				this.addToConditions(conditions, "SolutionOverdue");
				this.addToConditions(conditions, "Account");
				return conditions;
			},

			// Обработчик события получения сообщения UpdateCasePage.
			onUpdateCasePage: function(args) {
				this.reloadEntity();
			},

			onAddCommentButtonClick: function() {
				this.callInputBox(false);
				// this.openCardInChain({
				// 	entitySchemaName: "CaseLifecycle",
				// 	schemaName: "ICLCaseLifecycleDetailPage",
				// 	operation: Terrasoft.ConfigurationEnums.CardOperation.ADD,
				// 	primaryColumnValue: null,
				// 	moduleId: this.sandbox.id + "_ICLCaseLifecycleDetailPage",
				// 	defaultValues: [{
				// 		name: ["Case", "Status", "Priority", "Owner", "Group", 
				// 			"StateDurationInMinutes"],
				// 		value: [this.$Id, this.$Status.value, this.$Priority.value, 
				// 		this.$Owner.value, this.$Group.value, 0]
				// 	}]
				// }, this);
			},

			serviceItemEnabled: function(){
				//Сервисный договор заполнено и $OriginalServiceItem не заполнено
				if(!this.$ServiceItem || /*!this.$OriginalServiceItem ||*/ (this.$ServicePact && !this.$OriginalServiceItem)){
					return true;
				}
				return false;
			},

			/**
			 * @inheritDoc BasePageV2#asyncValidate
			 * @overridden
			 */
			asyncValidate: function(callback, scope) {
				this.callParent([function(response) {
					if (!this.validateResponse(response)) {
						return;
					}
					Terrasoft.chain(
						function(next) {
							this.validateIsPostponedStatus(function(response) {
								if (this.validateResponse(response)) {
									next();
								}
							},this);
						},
						function(next) {
							this.validateIsCommentRequired(function(response) {
								if (this.validateResponse(response)) {
									next();
								}
							}, this);
						},
						function(next) {
							this.validateOwnerORgroup(function(response) {
								if (this.validateResponse(response)) {
									next();
								}
							}, this);
						},
						function(next) {
							callback.call(scope, response);
							next();
						}, this);
				}, this]);
			},

			validateIsCommentRequired: function(callback, scope) {
				var caseId = this.$Id;
				var newStatusId = this.$Status.value;
				var	result = {
					success: true
				};
				if(this.changedValues.Status && !this.isNewMode()){
					var esqCase = this.Ext.create("Terrasoft.EntitySchemaQuery", {rootSchemaName: "Case"});
					esqCase.addColumn("[CaseStatus:Id:Status].ICLRequiredStatus", "ICLRequiredStatus");
					esqCase.addColumn("[CaseStatus:Id:Status].Id", "StatusId");
					esqCase.getEntity(caseId, function(response) {
						if(response.success) {
							var oldStatusId = response.entity.$StatusId;
							var oldStatusIsRequired = response.entity.$ICLRequiredStatus;
							//Статус в БД != выбранному статусу
							if(oldStatusIsRequired && oldStatusId !== newStatusId) {
								var esqLifecycle = this.Ext.create("Terrasoft.EntitySchemaQuery", 
									{rootSchemaName: "CaseLifecycle"});
								esqLifecycle.addColumn("ICLComment");
								var esqCaseIdFilter = esqLifecycle.createColumnFilterWithParameter(
										Terrasoft.ComparisonType.EQUAL, "Case.Id", caseId);
								var esqStatusIdFilter = esqLifecycle.createColumnFilterWithParameter(
										Terrasoft.ComparisonType.EQUAL, "Status.Id", newStatusId);
								esqLifecycle.filters.add("esqCaseIdFilter", esqCaseIdFilter);
								esqLifecycle.filters.add("esqStatusIdFilter", esqStatusIdFilter);
								var endDate = esqLifecycle.addColumn("EndDate");
								endDate.orderPosition = 0;
								endDate.orderDirection = Terrasoft.OrderDirection.DESC;
								esqLifecycle.getEntityCollection(function(response) {
									if (response.collection.getCount() > 0) {
										var lifecycleEntity = response.collection.getByIndex(0);
										//Отсутствует комментарий в жизненном цикле обращений
										if(lifecycleEntity.get("ICLComment") === "" || 
											lifecycleEntity.get("ICLComment") === null) {
											result.success = false;
											this.callInputBox(true);
										}
									}
									else {
										result.success = false;
										this.callInputBox(true);
									}
									callback.call(scope || this, result);
								},this);
							}
							else {
								callback.call(scope || this, result);
							}
						}
						else {
							callback.call(scope || this, result);
						}
					}, this);
				}
				else {
					callback.call(scope || this, result);
				}
			},

			validateIsPostponedStatus: function(callback, scope) {
				var statusId = this.$Status.value;
				var setDate = this.$ICLSetDate;
				var	result = {
					success: true
				};
				//Состояние обращения = Отложен до срока
				if(statusId === ICLConfigurationConstants.CaseStatus.Postponed.value &&
					!setDate){
					result.success = false;
					this.callInputBox(true);
				}
				callback.call(scope || this, result);
			},

			validateOwnerORgroup: function(callback, scope) {
				//Валидация Отвественного и Группы ответственных
				//Стадия Зарегистрирован или Инженер назначен
				var	result = {
					success: true
				};
				if(this.$Status && 
					(this.$Status.value === ICLConfigurationConstants.CaseStatus.EngineerAppointed.value
						|| this.$Status.value === ICLConfigurationConstants.CaseStatus.Registered.value))
				{
					if(this.requiredOwnerORgroup("Owner") && this.$Owner){
						result.success = true;
					}
					else if(this.requiredOwnerORgroup("Group") && this.$Group){
						result.success = true;
					}
					else if(!this.requiredOwnerORgroup("Owner") && !this.requiredOwnerORgroup("Group")) {
						result.success = true;
					}
					else {
						result.success = false;
						result.message = this.get("Resources.Strings.ICLRequiredFieldsValidateMessage");
					}
				}
				//стадия Принято на обработку
				else if(this.$Status && this.$Status.value === 
					ICLConfigurationConstants.CaseStatus.Accepted.value){
					if(this.$Owner){
						result.success = true;
					}
					else{
						result.success = false;
						result.message = this.get("Resources.Strings.ICLRequiredFieldsValidateMessage");
					}
				}
				callback.call(scope || this, result);
			},

			setContactInforms: function() {
				if(this.$Contact) {
					var contact = this.$Contact;
					//this.set("ICLContactWorkPhone", contact.Phone);
					//this.set("ICLContactMobilePhone", contact.MobilePhone);
					this.set("ICLContactEmail", contact.Email);
					this.set("ICLContactName", contact.Name);
				}
				else {
					//this.set("ICLContactWorkPhone", null);
					//this.set("ICLContactMobilePhone", null);
					this.set("ICLContactEmail", null);
					this.set("ICLContactName", null);
				}
			},

			inputBoxConfig: function() {
				return {
					style: {
						borderStyle: "ts-messagebox-border-style-blue icl-visa-action",
						buttonStyle: "blue"
					}
				};
			},

			addCommentInputBoxControls: function(isCommentRequired) {
				return {
					Comment: {
						dataValueType: Terrasoft.DataValueType.RICH_TEXT,
						caption: this.get("Resources.Strings.ICLCommentCaption"),
						customConfig: {
							className: "Terrasoft.MemoEdit",
							height: "150px",
							focused: true
						},
						isRequired: isCommentRequired
					}
				};
			},

			addCommentInputBox: function(isCommentRequired) {
				Terrasoft.utils.inputBox(this.get("Resources.Strings.IsCommentAddedMessage"),
					function(buttonCode, controlData) {
						if (buttonCode === "ok"){
							if(!Ext.isEmpty(controlData.Comment.value)) {
								this.setCommentInCaseLifeCycle(controlData.Comment.value);
								this.updateDetail({detail: "CaseLifecycle"});
								//this.save();
							}
							else if(isCommentRequired){
								this.showConfirmationDialog(this.get("Resources.Strings.ICLRequiredFieldsValidateMessage"),
									function() {
										this.addCommentInputBox(isCommentRequired);
									}, [this.Terrasoft.MessageBoxButtons.OK], null);
								return;
							}
						}
					},
					["ok"],
					this,
					this.addCommentInputBoxControls(isCommentRequired),
					this.inputBoxConfig()
				);
			},

			setCommentInCaseLifeCycle: function(Comment) {
				var insert = this.Ext.create("Terrasoft.InsertQuery", {
					"rootSchemaName": "CaseLifecycle"
				});
				insert.setParameterValue("Case", this.$Id, Terrasoft.DataValueType.GUID);
				insert.setParameterValue("Status", this.$Status.value, Terrasoft.DataValueType.GUID);
				insert.setParameterValue("Priority", this.$Priority.value, Terrasoft.DataValueType.GUID);
				insert.setParameterValue("Owner", this.$Owner.value, Terrasoft.DataValueType.GUID);
				insert.setParameterValue("Group", this.$Group.value, Terrasoft.DataValueType.GUID);
				insert.setParameterValue("StateDurationInMinutes", 0, Terrasoft.DataValueType.INTEGER);
				insert.setParameterValue("EndDate", new Date(), Terrasoft.DataValueType.DATE_TIME);
				insert.setParameterValue("StartDate", new Date(), Terrasoft.DataValueType.DATE_TIME);
				insert.setParameterValue("ICLComment", Comment, Terrasoft.DataValueType.TEXT);
				insert.execute();
				this.updateDetail({detail: "CaseLifecycle"});
				//this.save();
			},

			addCommentAndSetDateInBoxCtrls: function(isCommentRequired) {
				return {
					Comment: {
						dataValueType: Terrasoft.DataValueType.TEXT,
						caption: this.get("Resources.Strings.ICLCommentCaption"),
						customConfig: {
							className: "Terrasoft.MemoEdit",
							height: "150px"
						},
						focused: true,
						isRequired: isCommentRequired
					},
					SetDateTime: {
						dataValueType: Terrasoft.DataValueType.DATE_TIME,
						caption: this.get("Resources.Strings.ICLSetDateCaption"),
						isRequired: isCommentRequired,
						customConfig: {
							className: "Terrasoft.ICLDateTime",
							items: [
								{
									className: "Terrasoft.DateEdit",
									id: "newStartDateEdit",
									value: new Date(),
									width: "50%"
								},
								{
									className: "Terrasoft.TimeEdit",
									id: "newStartTimeEdit",
									value: new Date(),
									width: "50%"
								}
							]
						}
					}
				};
			},

			addCommentAndSetDateInBox: function(isCommentRequired) {
				Terrasoft.utils.inputBox(this.get("Resources.Strings.AddCommAndSetDateInBoxCaption"),
					function(buttonCode, controlData) {
						if (buttonCode === "ok"){
							if(controlData.SetDateTime.value > new Date() && !Ext.isEmpty(controlData.Comment.value)) 
							{
								this.setCommentInCaseLifeCycle(controlData.Comment.value);
								this.set("ICLSetDate", controlData.SetDateTime.value);
								this.updateDetail({detail: "CaseLifecycle"});
								//this.save();
							}
							else if(isCommentRequired){
								var message = "";
								if(controlData.SetDateTime.value < new Date()){
									message = Ext.String.format(this.get("Resources.Strings.NotCorrecICLSetDateMessage"),
										this.get("Resources.Strings.ICLSetDateCaption"));
								}
								else{
									message = this.get("Resources.Strings.ICLRequiredFieldsValidateMessage");
								}
								this.showConfirmationDialog(message,
									function() {
										this.addCommentAndSetDateInBox(isCommentRequired);
									}, [this.Terrasoft.MessageBoxButtons.OK], null);
								return;
							}
						}
					},
					["ok"],
					this,
					this.addCommentAndSetDateInBoxCtrls(isCommentRequired),
					this.inputBoxConfig()
				);
			},

			//Вызов inputbox соответсвующий Статусу обращения
			callInputBox(isCommentRequired) {
				var status = this.$Status;
				//Состояние обращения отложен
				var postponedStatusId = ICLConfigurationConstants.CaseStatus.Postponed.value;
				if(status) {
					switch (status.value) {
						case postponedStatusId:
							{
								this.addCommentAndSetDateInBox(isCommentRequired);
							}
							break;
						default:
							{
								this.addCommentInputBox(isCommentRequired);
							}
							break;
					}
				}
			},

			isTermsControlGroupVisible: function(){
				var caseCategory = this.$Category;
				var changeRequest = ICLConfigurationConstants.CaseCategory.ChangeRequest;
				if(caseCategory){
					//Запрос на изменение
					if(caseCategory.value === changeRequest.value){
						return false;
					}
				}
				return true;
			},

			isICLActualResolutionTimeVisible: function(){
				var caseCategory = this.$Category;
				var changeRequest = ICLConfigurationConstants.CaseCategory.ChangeRequest;
				if(caseCategory){
					//Запрос на изменение
					if(caseCategory.value === changeRequest.value){
						return true;
					}
				}
				return false;
			},

			setICLActualResolutionTime: function(){
				var caseCategory = this.$Category;
				var changeRequest = ICLConfigurationConstants.CaseCategory.ChangeRequest;
				if(caseCategory && !this.isAddMode()){
					//Запрос на изменение
					if(caseCategory.value === changeRequest.value){
						//Фактическая реакция
						var respondedOn = this.$RespondedOn;
						//Фактическое разрешение
						var solutionProvidedOn = this.$SolutionProvidedOn;
						var diffTime = Math.abs(respondedOn - solutionProvidedOn);
						var diffHours = parseFloat(diffTime / (1000 * 60 * 60)).toFixed(2);
						this.set("ICLActualResolutionTime", diffHours);
					}
				}
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "AddCommentButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.AddCommentButtonCaption"
					},
					"click": {
						"bindTo": "onAddCommentButtonClick"
					},
					"enabled": true,
					"style": "blue"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Accounte44f1766-db2f-4698-a77a-f437a32ffb1a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Account"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ServicePact534a7eda-6933-456c-a89a-6395ef3c5d7f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ServicePact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ServiceItem8fb0df43-f156-4fe7-be15-c4ddeaa47af3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ServiceItem",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Contactbdabc17c-1568-4ed7-810c-12c71166ff35",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Contact"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ICLVContactPhones",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.ICLVContactPhonesCaption"
					},
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ICLVContactPhones",
					"visible": {
						"bindTo": "isVisibleICLVContactPhones"
					},
					"isRequired": {
						"bindTo": "isVisibleICLVContactPhones"
					},
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ICLContactPhones2cb5f690-641e-4a66-870d-7c80183e5c39",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ICLContactPhones",
					"enabled": true,
					"visible": {
						"bindTo": "isVisibleICLContactPhones"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ICLContactNamefa58f0e8-2352-4349-b27a-59c0d79c6654",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ICLContactName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ICLContactEmailfcac257d-be49-4669-ad54-d525976d9e3b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 9,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ICLContactEmail",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ICLUsingContactEmail2606edbf-ccaf-468e-a7c9-3693cf2df0b8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 10,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ICLUsingContactEmail"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Category75681006-bcdc-4b46-9776-24dc52e7b065",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 11,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Category"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Prioritye8f53fe3-2a7f-463d-8c9a-73026a09a13f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 12,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Priority",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Owner5f2372d3-dd4b-4858-bd61-850eb3b15ed8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 13,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Owner",
					"isRequired": {
						"bindTo": "requiredOwnerORgroup"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "merge",
				"name": "CaseAssignToMeButton",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 14
					}
				}
			},
			{
				"operation": "insert",
				"name": "Groupf6e5f3db-2622-4318-b4c1-d7b2ccd55e25",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 15,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Group",
					"isRequired": {
						"bindTo": "requiredOwnerORgroup"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "CreatedBy9712a838-1ab3-4bb5-bafc-57f8dcce78dc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 16,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedBy"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "merge",
				"name": "NewCaseProfileInfoContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 17
					}
				}
			},
			{
				"operation": "insert",
				"name": "Solution90d84eaa-d742-4c71-ac98-4767829288ce",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 18,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "Solution",
					"enabled": true,
					"visible": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "Symptomsfaaaa51d-4fc4-4508-b584-8d12f97f1048",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 19,
						"layoutName": "ProfileContainer"
					},
					"visible": false,
					"bindTo": "Symptoms"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 17
			},
			{
				"operation": "merge",
				"name": "CaseInformationTab",
				"values": {
					"order": 0
				}
			},
			{
				"operation": "move",
				"name": "CaseInformationTab",
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SymptomsFieldContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					},
					"wrapClass": [
						"control-width-15 control-left Symptoms-field-container"
					],
					"itemType": 7,
					"items": []
				},
				"parentName": "CaseInformation_gridLayout",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SymptomsFieldLabel_wrap",
				"values": {
					"itemType": 7,
					"wrapClass": [
						"label-wrap"
					],
					"items": []
				},
				"parentName": "SymptomsFieldContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SymptomsLabelValue",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "Resources.Strings.SymptomsCaption"
					},
					"markerValue": "SymptomsLabelValue"
				},
				"parentName": "SymptomsFieldLabel_wrap",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SymptomsFieldControl_wrap",
				"values": {
					"itemType": 7,
					"wrapClass": [
						"control-wrap"
					],
					"items": []
				},
				"parentName": "SymptomsFieldContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Symptoms",
				"values": {
					"generator": "InlineTextEditViewGenerator.generate",
					"bindTo": "Symptoms",
					"markerValue": "Symptoms"
				},
				"parentName": "SymptomsFieldControl_wrap",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "Origin",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3
					}
				}
			},
			{
				"operation": "insert",
				"name": "Status91b40a55-fcba-4943-bc4c-d1386a7d791d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "CaseInformation_gridLayout"
					},
					"bindTo": "Status"
				},
				"parentName": "CaseInformation_gridLayout",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ICLCustomerASURV541b82a4-c154-4a53-837a-551453152e93",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "CaseInformation_gridLayout"
					},
					"bindTo": "ICLCustomerASURV"
				},
				"parentName": "CaseInformation_gridLayout",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ICLProjectASURVdbdf3328-db28-4f6f-86bc-68d727327462",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "CaseInformation_gridLayout"
					},
					"bindTo": "ICLProjectASURV"
				},
				"parentName": "CaseInformation_gridLayout",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPc8205c07-5825-47c7-8bd6-5d9c6d5ef9ca",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "CaseInformation_gridLayout"
					},
					"bindTo": "ICLGroup",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "CaseInformation_gridLayout",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRING5eed1ceb-786c-4b53-b991-8911a2188ab1",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "CaseInformation_gridLayout"
					},
					"bindTo": "ICLString1",
					"enabled": true
				},
				"parentName": "CaseInformation_gridLayout",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "TermsControlGroup",
				"values": {
					"visible": {
						"bindTo": "isTermsControlGroupVisible"
					}
				}
			},
			{
				"operation": "merge",
				"name": "RegisteredOn",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "merge",
				"name": "SolutionDate",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "ICLSetDatead0036cf-c703-4c0f-ac25-704abadc435e",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 0,
						"layoutName": "TermsControlGroup_GridLayout"
					},
					"bindTo": "ICLSetDate",
					"isRequired": {
						"bindTo": "isICLSetDateRequired"
					},
					"enabled": false
				},
				"parentName": "TermsControlGroup_GridLayout",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "ResponseDate",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "FirstSolutionProvidedOn",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "RespondedOn",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 0,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "SolutionProvidedOn",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 8,
						"row": 2
					}
				}
			},
			{
				"operation": "merge",
				"name": "ClosureDate",
				"values": {
					"layout": {
						"colSpan": 8,
						"rowSpan": 1,
						"column": 16,
						"row": 2
					}
				}
			},
			{
				"operation": "move",
				"name": "ClosureDate",
				"parentName": "TermsControlGroup_GridLayout",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "ResponseCaptionContainer",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 2,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "SolutionCaptionContainer",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 10,
						"row": 3
					}
				}
			},
			{
				"operation": "merge",
				"name": "SolutionTab",
				"values": {
					"order": 1
				}
			},
			{
				"operation": "move",
				"name": "SolutionTab",
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT347c490c-50ad-4b71-8034-eadd589d3761",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "SolutionTab_gridLayout"
					},
					"bindTo": "ICLTimeSpend",
					"enabled": true
				},
				"parentName": "SolutionTab_gridLayout",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ICLActualResolutionTimeb2d0eab8-f806-4360-acb5-b758599a1ba3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "SolutionTab_gridLayout"
					},
					"bindTo": "ICLActualResolutionTime",
					"visible": {
						"bindTo": "isICLActualResolutionTimeVisible"
					}
				},
				"parentName": "SolutionTab_gridLayout",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "merge",
				"name": "NotesFilesTab",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "move",
				"name": "NotesFilesTab",
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "ProcessingTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 5
				}
			},
			{
				"operation": "merge",
				"name": "Tab806652a9TabLabel",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "remove",
				"name": "ResoluitonContainer"
			},
			{
				"operation": "remove",
				"name": "ResolutionGridLayout"
			},
			{
				"operation": "remove",
				"name": "SolutionCaptionProfile"
			},
			{
				"operation": "remove",
				"name": "SolutionCaptionValueMinutesProfile"
			},
			{
				"operation": "remove",
				"name": "SolutionCaptionValueMinutesDelimiterProfile"
			},
			{
				"operation": "remove",
				"name": "SolutionCaptionValueProfile"
			},
			{
				"operation": "remove",
				"name": "SolutionDateProfile"
			},
			{
				"operation": "remove",
				"name": "Urgency"
			},
			{
				"operation": "remove",
				"name": "ImpactLevel"
			},
			{
				"operation": "remove",
				"name": "CasePriority"
			},
			{
				"operation": "remove",
				"name": "ServicePact"
			},
			{
				"operation": "remove",
				"name": "CaseContact"
			},
			{
				"operation": "remove",
				"name": "ServiceItem"
			},
			{
				"operation": "remove",
				"name": "ConfItem"
			},
			{
				"operation": "remove",
				"name": "CaseAccount"
			},
			{
				"operation": "remove",
				"name": "CaseCategory"
			},
			{
				"operation": "remove",
				"name": "CaseGroup"
			},
			{
				"operation": "remove",
				"name": "CaseOwner"
			},
			{
				"operation": "remove",
				"name": "Symptoms"
			},
			{
				"operation": "remove",
				"name": "LOOKUP462ffe46-dbbc-48d4-a433-c2b3d3104cb3"
			},
			{
				"operation": "remove",
				"name": "LOOKUPafe6b7a8-fab5-45e6-9052-e84e89a3228e"
			},
			{
				"operation": "remove",
				"name": "SupportLevel"
			},
			{
				"operation": "remove",
				"name": "ConfItemInCase"
			},
			{
				"operation": "remove",
				"name": "Activity"
			},
			{
				"operation": "move",
				"name": "SolutionFieldContainer",
				"parentName": "SolutionTab_gridLayout",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
