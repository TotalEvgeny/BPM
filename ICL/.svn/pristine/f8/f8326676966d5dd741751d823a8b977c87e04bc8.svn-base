namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using System.Threading.Tasks;
	using System.Data;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	public class ICLCalendarServiceUtils
	{
		private UserConnection _userConnection;

		public ICLCalendarServiceUtils(UserConnection userConnection)
		{
			_userConnection = userConnection;
		}

		private DateTime nextDayOff;
		private bool nextDayOffType;
		private List<string> weekEndsList;
		private Guid calendarId;

		public DateTime AddWorkingDays(DateTime date, int days, Guid incomingCalendarId)
		{
			calendarId = incomingCalendarId;
			GetWeekEnds();
			GetNextDayOff(date);

			int cntDays = days;
			DateTime endDate = date;
			while (cntDays != 0)
			{
				endDate = endDate.AddDays(1);
				if (!checkDayOff(endDate))
				{
					cntDays--;
				}
			}
			return endDate;
		}

		public int GetWorkingDays(DateTime startDate, DateTime endDate, Guid incomingCalendarId)
		{
			int workingDays = 0;
			calendarId = incomingCalendarId;
			GetWeekEnds();
			GetNextDayOff(startDate.AddDays(-1));

			foreach (DateTime day in EachDay(startDate, endDate.AddDays(-1)))
			{
				if (!checkDayOff(day))
				{
					workingDays++;
				}
			}
			return workingDays;
		}

		public int GetWorkingMinutes(DateTime startDate, DateTime endDate, Guid incomingCalendarId)
		{
			int workingMinutes = 0;
			calendarId = incomingCalendarId;
			List<TimeInterval> intervalList = new List<TimeInterval>();

			if (startDate > endDate || startDate == new DateTime() || endDate == new DateTime())
			{
				return workingMinutes;
			}

			var dayOfWeekSelect = GetDayOfWeekSelect();
			var dayOffSelect = GetDayOffSelect(startDate, endDate);
			var selectDays = dayOfWeekSelect.UnionAll(dayOffSelect) as Select;
			using (var dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (var reader = selectDays.ExecuteReader(dbExecutor))
				{
					while (reader.Read())
					{
						intervalList.Add(new TimeInterval
						{
							Date = reader["Date"] == DBNull.Value ? (DateTime?)null : (DateTime)reader["Date"],
							DayOfWeek = reader.GetColumnValue<string>("DayOfWeek"),
							From = reader.GetColumnValue<string>("From"),
							To = reader.GetColumnValue<string>("To"),
							DiffTime = reader.GetColumnValue<int>("DateDiff"),
							IsWeekend = reader.GetColumnValue<bool>("IsWeekend")
						});
					}
				}
			}

			if (startDate.Date.Equals(endDate.Date))
			{
				List<TimeInterval> result = intervalList.FindAll(item => item.Date == startDate.Date);
				if (result.Count() == 0)
				{
					result = intervalList.FindAll(item => item.DayOfWeek == startDate.DayOfWeek.ToString() && item.Date == null);
				}
				if (result[0].From != null && result[0].To != null && !result[0].IsWeekend)
				{
					foreach (TimeInterval item in result)
					{
						DateTime _start = Convert.ToDateTime(startDate.ToShortDateString() + " " + item.From);
						DateTime _end = Convert.ToDateTime(startDate.ToShortDateString() + " " + item.To);
						TimeSpan span = new TimeSpan();
						if (_start >= startDate && _end <= endDate)
						{
							span = _end.Subtract(_start);
						}
						else if (_start < startDate && _end > endDate)
						{
							span = endDate.Subtract(startDate);
						}
						else if (_start <= startDate && _end > startDate)
						{
							span = _end.Subtract(startDate);
						}
						else if (_start < endDate && _end >= endDate)
						{
							span = endDate.Subtract(_start);
						}
						workingMinutes += (int)span.TotalMinutes;
					}
				}
			}
			else
			{
				foreach (DateTime day in EachDay(startDate.AddDays(1), endDate.AddDays(-1)))
				{
					if (intervalList.Find(item => item.Date == day) != null)
					{
						workingMinutes += intervalList.Where(item => item.Date == day && !item.IsWeekend).Sum(item => item.DiffTime);
					}
					else
					{
						workingMinutes += intervalList.Where(item => item.DayOfWeek == day.DayOfWeek.ToString() && item.Date == null && !item.IsWeekend).Sum(item => item.DiffTime);
					}
				}
				List<TimeInterval> startResult = intervalList.FindAll(item => item.Date == startDate.Date);
				if (startResult.Count() == 0)
				{
					startResult = intervalList.FindAll(item => item.DayOfWeek == startDate.DayOfWeek.ToString() && item.Date == null);
				}
				if (startResult[0].From != null && startResult[0].To != null && !startResult[0].IsWeekend)
				{
					foreach (TimeInterval item in startResult)
					{
						DateTime _start = Convert.ToDateTime(startDate.ToShortDateString() + " " + item.From);
						DateTime _end = Convert.ToDateTime(startDate.ToShortDateString() + " " + item.To);
						TimeSpan span = new TimeSpan();
						if (_start >= startDate)
						{
							span = _end.Subtract(_start);
						}
						else if (_end >= startDate)
						{
							span = _end.Subtract(startDate);
						}
						workingMinutes += (int)span.TotalMinutes;
					}
				}

				List<TimeInterval> endResult = intervalList.FindAll(item => item.Date == endDate.Date);
				if (endResult.Count() == 0)
				{
					endResult = intervalList.FindAll(item => item.DayOfWeek == endDate.DayOfWeek.ToString() && item.Date == null);
				}
				if (endResult[0].From != null && endResult[0].To != null && !endResult[0].IsWeekend)
				{
					foreach (TimeInterval item in endResult)
					{
						DateTime _start = Convert.ToDateTime(endDate.ToShortDateString() + " " + item.From);
						DateTime _end = Convert.ToDateTime(endDate.ToShortDateString() + " " + item.To);
						TimeSpan span = new TimeSpan();
						if (_end <= endDate)
						{
							span = _end.Subtract(_start);
						}
						else if (_start <= endDate)
						{
							span = endDate.Subtract(_start);
						}
						workingMinutes += (int)span.TotalMinutes;
					}
				}
			}

			return workingMinutes;
		}

		private bool checkDayOff(DateTime curDate)
		{
			if (curDate.Date == nextDayOff.Date)
			{
				bool result = nextDayOffType;
				GetNextDayOff(curDate.AddDays(1));
				return result;
			}
			return weekEndsList.Contains(curDate.DayOfWeek.ToString());
		}

		private void GetWeekEnds()
		{
			weekEndsList = new List<string>();
			var selectQuery = new Select(_userConnection)
					.Column("dow", "Code").As("Code")
				.From("DayOfWeek").As("dow")
					.InnerJoin("DayInCalendar").As("dic").On("dow", "Id").IsEqual("dic", "DayOfWeekId")
					.InnerJoin("DayType").As("dt").On("dic", "DayTypeId").IsEqual("dt", "Id")
				.Where("dt", "IsWeekend").IsEqual(Column.Parameter(1))
					.And("dic", "CalendarId").IsEqual(Column.Parameter(calendarId)) as Select;

			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (IDataReader reader = selectQuery.ExecuteReader(dbExecutor))
				{
					while (reader.Read())
					{
						weekEndsList.Add(reader["Code"].ToString());
					}
				}
			}
		}

		private void GetNextDayOff(DateTime curDate)
		{
			var selectWeekDaysQuery = new Select(_userConnection)
					.Top(1)
					.Column("do", "Date").As("Date")
					.Column("dt", "IsWeekend").As("isWeekend")
				.From("DayOff").As("do")
					.InnerJoin("DayType").As("dt").On("do", "DayTypeId").IsEqual("dt", "Id")
				.Where("do", "CalendarId").IsEqual(Column.Parameter(calendarId))
					.And("do", "Date").IsGreater(Column.Parameter(curDate))
				.OrderByAsc("do", "Date")as Select;

			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection())
			{
				using (IDataReader reader = selectWeekDaysQuery.ExecuteReader(dbExecutor))
				{
					while (reader.Read())
					{
						nextDayOff = (DateTime)reader["Date"];
						nextDayOffType = (bool)reader["isWeekend"];
					}
				}
			}
		}

		private Select GetDayOfWeekSelect()
		{
			var select = new Select(_userConnection)
				.Column(Column.Const(null)).As("Date")
				.Column("DOW", "Code").As("DayOfWeek")
				.Column("WTI", "From").As("From")
				.Column("WTI", "To").As("To")
				.Column(Func.DateDiff(DateDiffQueryFunctionInterval.Minute,
					Column.SourceColumn("WTI", "From"),
					Column.SourceColumn("WTI", "To")
				)).As("DateDiff")
				.Column("DT", "IsWeekend").As("IsWeekend")
			.From("DayOfWeek").As("DOW")
				.InnerJoin("DayInCalendar").As("DIC").On("DOW", "Id").IsEqual("DIC", "DayOfWeekId")
				.InnerJoin("DayType").As("DT").On("DIC", "DayTypeId").IsEqual("DT", "Id")
				.LeftOuterJoin("WorkingTimeInterval").As("WTI").On("DIC", "Id").IsEqual("WTI", "DayInCalendarId")
			.Where("DIC", "CalendarId").IsEqual(Column.Parameter(calendarId)) as Select;
			return select;
		}

		private Select GetDayOffSelect(DateTime startDate, DateTime endDate)
		{
			var select = new Select(_userConnection)
				.Column("DO", "Date").As("Date")
				.Column(Column.Const(null)).As("DayOfWeek")
				.Column("WTI", "From").As("From")
				.Column("WTI", "To").As("To")
				.Column(Func.DateDiff(DateDiffQueryFunctionInterval.Minute,
					Column.SourceColumn("WTI", "From"),
					Column.SourceColumn("WTI", "To")
				)).As("DateDiff")
				.Column("DT", "IsWeekend").As("IsWeekend")
			.From("DayOff").As("DO")
				.InnerJoin("DayType").As("DT").On("DO", "DayTypeId").IsEqual("DT", "Id")
				.LeftOuterJoin("WorkingTimeInterval").As("WTI").On("DO", "Id").IsEqual("WTI", "DayOffId")
			.Where("DO", "CalendarId").IsEqual(Column.Parameter(calendarId))
				.And("DO", "Date").IsBetween(Column.Parameter(startDate.Date)).And(Column.Parameter(endDate.Date)) as Select;
			return select;
		}

		private IEnumerable<DateTime> EachDay(DateTime from, DateTime thru)
		{
			for (var day = from.Date; day.Date <= thru.Date; day = day.AddDays(1))
				yield return day;
		}

		private class TimeInterval
		{
			public DateTime? Date { get; set; }

			public string DayOfWeek { get; set; }

			public string From { get; set; }

			public string To { get; set; }

			public int DiffTime { get; set; }

			public bool IsWeekend { get; set; }
		}
	}
}
