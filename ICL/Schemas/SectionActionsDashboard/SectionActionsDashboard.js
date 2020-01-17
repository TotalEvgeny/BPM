define("SectionActionsDashboard", [], function() {
	return {
		attributes: {},
		messages: {},
		methods: {
			/**
			 * @inheritdoc Terrasoft.BaseActionsDashboard#onReloadDashboardItems
			 * @override
			 */
			onReloadDashboardItems: function() {
				//Если сохранился новый Жизненный цикл обращений
				if(window.IsCLSavedDashboard) {
					window.IsCLSavedDashboard = false;
				}
				else {
					this.callParent(arguments);
				}
			}
		},
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
	};
});
