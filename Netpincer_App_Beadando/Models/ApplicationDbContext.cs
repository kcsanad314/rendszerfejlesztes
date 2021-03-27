using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Netpincer_App_Beadando.Models.Entity;

namespace Netpincer_App_Beadando.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
    public DbSet <User> Users { get; set; }
    public DbSet<Restaurant> Restaurants { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Restaurant>()
                .HasMany<FoodCategory>(r => r.FoodCategories)
                .WithOne(fc => fc.Restaurant)
                .HasForeignKey(fc => fc.RestaurantId)
                .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<FoodCategory>()
                .HasMany<Food>(fc => fc.Foods)
                .WithOne(f => f.FoodCategory)
                .HasForeignKey(f => f.FoodId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}