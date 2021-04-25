﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Netpincer_App_Beadando.Models.Entity
{

    public enum OrderStatus
    {
        New,
        InProgress,
        Delivering,
        Done,
        Cancelled
    }
    //Entity that represents 1 order 
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        [Required(ErrorMessage = "Kötelező a(z) {0} mezőt kitölteni!")]
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Keresztnév", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Kötelező a(z) {0} mezőt kitölteni!")]
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Vezetéknév", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string LastName { get; set; }
        public string City { get; set; }
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Utca", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string Street { get; set; }
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Telefonszám", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string PhoneNumber{ get; set; }
        [MaxLength(255, ErrorMessage = "A(z) {0} maximum {1} karakter lehet.")]
        [Display(Name = "Fizetési típus", AutoGenerateFilter = false, AutoGenerateField = false, Order = 0)]
        public string PaymentType{ get; set; }
        public int OrderSum { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public int RestaurantId { get; set; }
        public List<OrderFood> OrderFoods { get; set; }

        [NotMapped]
        public List<int> FoodIds { get; set; }
    }
}
