using Domain.Entities.Users;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context,UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{FirstName="Balkan",LastName="Inal",Email="inalbalkan@gmail.com",UserName="balkaninal"},
                    new AppUser{FirstName="Admin",LastName="Admin",Email="admin@maastakip.com",UserName="admin"},
                };
                foreach(var user in users)
                {
                    await userManager.CreateAsync(user,"Maas123!");
                }
            }
        }
    }
}
