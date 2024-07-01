using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Enums
{
    public enum WorkMode
    {
        [Description("WorkMode:Remote")]
        Remote,
        [Description("Workmode:OnSite")]
        OnSite,
        [Description("Workmode:Hybrid")]
        Hybrid
    }
}
