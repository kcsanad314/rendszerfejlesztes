using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Netpincer_App_Beadando.Models.Entity
{
    public class Food
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        //public int PreparationTime { get; set; }
        public string Allergenes { get; set; }
        //public bool isOnSale { get; set; }
        public FoodCategory FoodCategory { get; set; }
        public int FoodId { get; set; } //TODO: átírni FoodCategoryId-ra és migrálni
    }
}
