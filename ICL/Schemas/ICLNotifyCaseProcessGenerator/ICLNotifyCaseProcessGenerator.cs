using System;
using System.Collections.Generic;
using Terrasoft.Core;
using Terrasoft.Common;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration {

	class ICLNotifyCaseProcessGenerator : IAppEventListener {
		
		public void OnAppEnd(AppEventContext context)
		{
		}

		public void OnAppStart(AppEventContext context) {
			var appCon = (AppConnection)context.Application["AppConnection"];
            ICLQuartzProcessManager manager = new ICLQuartzProcessManager(appCon.SystemUserConnection);
            manager.CreateQuartzJobPool();
        }

        public void OnSessionEnd(AppEventContext context)
		{
		}

		public void OnSessionStart(AppEventContext context)
		{
		}
		
	}
}
