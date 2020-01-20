namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text;
	using System.Web;
	using Common;
	using Core;
	using Core.Entities;
	using Web.Common;
	using SystemSettings = Core.Configuration.SysSettings;

	#region Class: ICLEstimateLinksGenerator

	/// <summary>
	/// Satisfaction level image links generator.
	/// </summary>
	public class ICLEstimateLinksGenerator : EstimateLinksGenerator
	{

        #region Constants

        /// <summary>
        /// The magic numbers.
        /// </summary>
        private const int RowLengthLimit = 10;
        private const string LinkFormat = "{0}/ServiceModel/CaseRatingManagementService.svc/RateCase/{1}/{2}";
        private const string TokenLinkFormat = "{0}/ServiceModel/CaseRatingManagementService.svc/SecureRateCase/[?CaseId={1}?]/{2}";

        #endregion

        #region Methods : Protected

        	/// <summary>
        	/// Builds an HTML table cell (<td>) containing image link.
        	/// </summary>
        	/// <param name="id">Record id.</param>
        	/// <param name="point">Point.</param>
        	/// <param name="imageData">Binary image data.</param>
        	/// <param name="mimeType">Image mime-type.</param>
        	/// <param name="divStyle">Custom div style.</param>
        	/// <returns>Table cell HTML-code.</returns>
        	protected override string GetLinkCell(Guid id, int point, byte[] imageData, string mimeType,
        		string divStyle = null) {
        		string appRootUrl = GetApplicationUrl();
        		string linkFormat = UserConnection.GetIsFeatureEnabled("SecureEstimation") ? TokenLinkFormat : LinkFormat;
        		string link = string.Format(linkFormat, appRootUrl, id, point);
        		string encodedData = Convert.ToBase64String(imageData);
        		var sb = new StringBuilder(1024);
        		
        		string tdColor = "";
        		string satisfactionCaption = "";
        		switch(point)
        		{
        			case 1:
        			{
        				tdColor = "#FFCCCC";
        				satisfactionCaption = LocalizableStringHelper.GetValue(UserConnection,
							"ICLEstimateLinksGenerator", "FirstLevelSatisfaction");
        			} break;
        			case 2:
        			{
        				tdColor = "#FF9966";
        				satisfactionCaption = LocalizableStringHelper.GetValue(UserConnection,
							"ICLEstimateLinksGenerator", "SecondLevelSatisfaction");;
        			} break;
        			case 3:
        			{
        				tdColor = "#FFCC99";
        				satisfactionCaption = LocalizableStringHelper.GetValue(UserConnection,
							"ICLEstimateLinksGenerator", "ThirdLevelSatisfaction");;
        			} break;
        			case 4:
        			{
        				tdColor = "#CCFFFF";
        				satisfactionCaption = LocalizableStringHelper.GetValue(UserConnection,
							"ICLEstimateLinksGenerator", "FourthLevelSatisfaction");;
        			} break;
        			case 5:
        			{
        				tdColor = "#CCFFCC";
        				satisfactionCaption = LocalizableStringHelper.GetValue(UserConnection,
							"ICLEstimateLinksGenerator", "FifthLevelSatisfaction");;
        			} break;
        			default: break;
        		}
        		sb.AppendFormat("<tr><td style=\"padding: 5px 10px 5px 5px; border: 1px solid black;\" bgcolor=\"{0}\">", tdColor)
        			//.AppendFormat(DivFormat, point, divStyle ?? DefaultDivStyle)
        				.AppendFormat("<a href=\"{0}\">{1}</a>", link, satisfactionCaption)
        					//.AppendFormat(ImgFormat, mimeType, encodedData, CellSize, point)
        				.Append("</a>")
        			//.Append("</div>")
        		.Append("</td></tr>");
        		return sb.ToString();
        	}

        #endregion

        #region Methods : Public

        /// <summary>
        /// Returns string value for macros.
        /// </summary>
        /// <param name="arguments">Arguments object.</param>
        /// <returns>Result string.</returns>
        public override string GetMacrosValue(object arguments)
        {
            var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SatisfactionLevel");
            EntitySchemaQueryColumn pointColumn = esq.AddColumn("Point");
            pointColumn.OrderDirection = OrderDirection.Descending;
            string pointColumnName = pointColumn.Name;
            string dataColumnName = esq.AddColumn("Image.Data").Name;
            string mimeTypeColumnName = esq.AddColumn("Image.MimeType").Name;
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "IsActive", true));
            EntityCollection satisfactionLevels = esq.GetEntityCollection(UserConnection);
            if (!satisfactionLevels.Any())
                return string.Empty;
            Guid id = GetRecordId(arguments);
            var count = satisfactionLevels.Count;
            var rows = (count + RowLengthLimit - 1) / RowLengthLimit;
            var rowLenght = count / rows;
            var remainder = count % rows;
            var result = new StringBuilder(1024);
            result.Append("<table style=\"border-collapse: collapse; border: 1px outset black;\">");
            int index = 0;
            for (var i = 0; i < rows && index < count; i++, remainder--)
            {
                //result.Append("<tr>");
                for (var j = 0; j < rowLenght + (remainder > 0 ? 1 : 0) && index < count; j++, index++)
                {
                    var satisfactionLevel = satisfactionLevels[index];
                    var image = satisfactionLevel.GetStreamValue(dataColumnName);
                    if (image != null)
                    {
                        var point = satisfactionLevel.GetTypedColumnValue<int>(pointColumnName);
                        var imageBinaryData = image.ReadAllBytes();
                        var mimeType = satisfactionLevel.GetTypedColumnValue<string>(mimeTypeColumnName);
                        result.Append(GetLinkCell(id, point, imageBinaryData, mimeType));
                    }
                }
                //result.Append("</tr>");
            }
            result.Append("</table>");
            return result.ToString();
        }

        #endregion

    }

	 #endregion

}