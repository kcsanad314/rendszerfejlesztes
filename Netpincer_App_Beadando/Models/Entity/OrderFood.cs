using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Netpincer_App_Beadando.Models.Entity
{
    public class OrderFood
    {
        [Key]
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int FoodId { get; set; }
        public Order Order { get; set; }
        public Food Food { get; set; }
    }
}
