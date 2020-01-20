using System;
using System.Collections.Generic;
using System.Data;

using Quartz;
using Quartz.Impl;
using Quartz.Impl.Calendar;
using Quartz.Impl.Triggers;

using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.Configuration;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Factories;
using Terrasoft.Core.Scheduler;

namespace Terrasoft.Configuration {

	#region Class: ICLQuartzProcessManager

	public class ICLQuartzProcessManager {

		#region Constants: Private

		private const string _quartzProcessName = "ICLSendNotificationCaseProcess";

		private const string _quartzJobGroupName = "ICLGroup";

		private const string _quartzQueeuProcess = "ICLSendNotificationCaseProcess";

		private const string _quartzQueeuJobGroupName = "ICLQueueGroup";

		private const string _workspaceName = "Default";

		private const string _userName = "Supervisor";

		private const int _runTriggerDiff = 5;

		#endregion

		#region Fields: Private

		private int _runTriggerTime = 30;

		private string _quartzTablePrefix = "QRTZ_";

		#endregion

		#region Constructors: Public

		public ICLQuartzProcessManager(UserConnection userConnection) {
			UserConnection = userConnection;
			_runTriggerTime = Core.Configuration.SysSettings.GetValue<int>(UserConnection, "ICL_QueueProcessLaunchFrequency", 1);
		}

		#endregion

		#region Properties: Public

		public UserConnection UserConnection{ get; set; }

		#endregion

		#region Methods: Private

		private int GetProcessCount() {
			var result = Core.Configuration.SysSettings.GetValue<int>(UserConnection, "ICLCountProcessQuartz", 1);
			return result;
		}

		#endregion

		#region Methods: Public

		public void CreateQuartzJobPool() {
			var processCount = GetProcessCount();
			RemoveQuartzJobByGroup(_quartzQueeuJobGroupName);
			for (int i = 0; i < processCount; i++) {
				string cronExpression = string.Format("{0} * * 1/1 * ? *", _runTriggerTime + i*_runTriggerDiff); 
				string jobNameSufix = string.Format("{0}_{1}", _quartzQueeuProcess, i); 
				CreateQuartzJob(cronExpression, jobNameSufix, _quartzQueeuJobGroupName, _quartzQueeuProcess);
			}

		}

		public void RemoveQuartzJobByGroup(string jobGroupName) {
			var storedProcedure = new StoredProcedure(UserConnection, "tsp_ICLRemoveQuartzJobByGroup");
			storedProcedure.WithParameter("JobGroupName", jobGroupName);
			storedProcedure.WithParameter("QuartzTablePrefix", _quartzTablePrefix);
			using (var executor = UserConnection.EnsureDBConnection())
			{
				storedProcedure.Execute(executor);
				executor.CommitTransaction();
			}
		}

		public void CreateQuartzJob(string cronExpression, string jobNameSufix,
				string quartzJobGroupName = _quartzJobGroupName, string quartzProcessName = _quartzProcessName) {
			string jobName = string.Format("ICL{0}", jobNameSufix);
			IJobDetail job = AppScheduler.CreateProcessJob(
				jobName + "Job",
				quartzJobGroupName,
				quartzProcessName,
				_workspaceName,
				_userName);
			CronTriggerImpl trigger = new CronTriggerImpl(jobName + "Trigger", quartzJobGroupName,
				cronExpression);
			trigger.TimeZone = TimeZoneInfo.Utc;
			AppScheduler.Instance.ScheduleJob(job, trigger);
		}

		#endregion

	}

	#endregion

}
