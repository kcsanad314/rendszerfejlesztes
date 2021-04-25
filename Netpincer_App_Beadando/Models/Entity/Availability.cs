using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Netpincer_App_Beadando.Models.Entity
{
    //Courier's availibility. Id is a foreign key to users table
    public class Availability
    {
        [Key, ForeignKey("User")]
        public int UserId { get; set; }
        public string AvailableTime { get; set; }
        public User User { get; set; }
    }
}
