﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Netpincer_App_Beadando.Models.Entity
{
    public class Restaurant
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Kötelező a(z) {0} mezőt kitölteni!")]
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Étterem neve", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string Name { get; set; }
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Város", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string City { get; set; }
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Utca", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string Street { get; set; }
        [MaxLength(32, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Házszám", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string HouseNumber { get; set; }
        [MaxLength(1000, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Étterem neve", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string Description { get; set; }
        public int UserId { get; set; }
        public List<FoodCategory> FoodCategories { get; set; }
    }

}
