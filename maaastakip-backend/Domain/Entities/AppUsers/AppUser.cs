using Domain.Entities.Enums;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities.Users
{
    public class AppUser :IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Industry { get; set; }
        public WorkMode WorkMode { get; set; }
    }
}
