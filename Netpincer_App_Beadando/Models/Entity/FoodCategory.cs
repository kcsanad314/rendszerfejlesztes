using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Netpincer_App_Beadando.Models.Entity
{
    public class FoodCategory
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Kötelező a(z) {0} mezőt kitölteni!")]
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Kategória neve", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string Name { get; set; }
        [NotMapped]
        public Restaurant Restaurant { get; set; }
        public int RestaurantId { get; set; }
        public List<Food> Foods { get; set; }
    }
}
