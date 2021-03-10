using Microsoft.EntityFrameworkCore;
using Netpincer_App_Beadando.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using System.Data.Entity;



namespace Netpincer_App_Beadando.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
    public DbSet <User> Users { get; set; }

    }
}