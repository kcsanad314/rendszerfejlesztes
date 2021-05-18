using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Netpincer_App_Beadando.Models.Entity
{
    public class Food
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public double _price;
        public double Price {
            get
            {
                return _price * DiscountMultiplier;
            }
            set
            {
                _price = value;
            }
        }
        public int PreparationTime { get; set; }
        public string Allergenes { get; set; }
        public double DiscountMultiplier { get; set; } = 1;
        public FoodCategory FoodCategory { get; set; }
        public int FoodCategoryId { get; set; } //TODO: átírni FoodCategoryId-ra és migrálni
        //public int OrderId { get; set; }
        public List<OrderFood> OrderFoods{ get; set; }
    }
}
