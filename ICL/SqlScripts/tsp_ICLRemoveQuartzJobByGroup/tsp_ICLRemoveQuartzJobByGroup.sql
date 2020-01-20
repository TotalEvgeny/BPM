
IF EXISTS ( SELECT * 
            FROM   sysobjects 
            WHERE  id = object_id(N'[dbo].[tsp_ICLRemoveQuartzJobByGroup]') 
                   and OBJECTPROPERTY(id, N'IsProcedure') = 1 )
BEGIN
    DROP PROCEDURE [dbo].[tsp_ICLRemoveQuartzJobByGroup]
END;
go

create PROCEDURE [dbo].[tsp_ICLRemoveQuartzJobByGroup](@JobGroupName NVARCHAR(100), @QuartzTablePrefix NVARCHAR(100)) 
AS
BEGIN

	DECLARE @Cmd NVARCHAR(500) = 'DELETE ' + @QuartzTablePrefix + 'CRON_TRIGGERS WHERE TRIGGER_GROUP = @JobGroupName';
	EXECUTE sp_executesql @Cmd, N'@JobGroupName NVARCHAR(100)', @JobGroupName;

	SET @Cmd = 'DELETE ' + @QuartzTablePrefix + 'TRIGGERS WHERE JOB_GROUP = @JobGroupName';
	EXECUTE sp_executesql @Cmd, N'@JobGroupName NVARCHAR(100)', @JobGroupName;
	
	SET @Cmd = 'DELETE ' + @QuartzTablePrefix + 'JOB_DETAILS WHERE JOB_GROUP = @JobGroupName';
	EXECUTE sp_executesql @Cmd, N'@JobGroupName NVARCHAR(100)', @JobGroupName;

END;