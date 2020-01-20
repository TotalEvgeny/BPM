IF EXISTS ( SELECT * 
            FROM   sysobjects 
            WHERE  id = object_id(N'[dbo].[iclFindAndUpdateNotifyCaseForTempStatus]') 
                   and OBJECTPROPERTY(id, N'IsProcedure') = 1 )
BEGIN
    DROP PROCEDURE [dbo].iclFindAndUpdateNotifyCaseForTempStatus
END;
go

create PROCEDURE [dbo].iclFindAndUpdateNotifyCaseForTempStatus

AS
BEGIN
	update top (10) ICLCaseReminder with(rowlock)
	set ICLStatusId = '3DF9F986-42F9-449C-B315-BD2E43A85E0F' --отправляется
	OUTPUT INSERTED.Id, INSERTED.ICLCaseId , INSERTED.ICLOverTimeSolution
	from ICLCaseReminder r
	Join [Case] c
		on c.id = r.ICLCaseId
	where r.ICLStatusId = 'BE9C92CA-B092-4950-8548-BB2160A61F8B' --не начата
	and r.ICLTimeSend<= GETUTCDATE()
	and c.CategoryId<>'05CA88B8-50CE-4B2F-ACCE-C34C9AC781D7'

END;