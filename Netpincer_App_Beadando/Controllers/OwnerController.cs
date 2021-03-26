using Microsoft.AspNetCore.Mvc;
using Netpincer_App_Beadando.Models;
using Netpincer_App_Beadando.Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Netpincer_App_Beadando.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OwnerController : Controller
    {
        private readonly ApplicationDbContext _db;
        public OwnerController(ApplicationDbContext db)
        {
            _db = db;
            //_mapper = mapper;
        }
        [HttpPost]
        public IActionResult RegisterRestaurant([FromBody] Restaurant restaurant)
        {
            //TODO: check if User has Owner or Admin UserType
            //TODO: check if restaurant already exists
            _db.Restaurants.Add(restaurant);
            _db.SaveChanges();
            return Ok();
        }

        [HttpPost]
        public IActionResult AddFoodCategory(FoodCategory foodCategory)
        {
            
            FoodCategory fc = new FoodCategory() {  
                Name = foodCategory.Name,
                RestaurantId = foodCategory.RestaurantId
            };
            fc.Foods = new List<Food>();
            foodCategory.Foods.ForEach(food =>
            {
                Food _food = new Food()
                {
                    Name = food.Name,
                    Price = food.Price,
                    Allergenes = food.Allergenes
                };
                fc.Foods.Add(_food);
            });
            Restaurant rest = _db.Restaurants.Find(fc.RestaurantId);
            rest.FoodCategories = new List<FoodCategory>();
            rest.FoodCategories.Add(fc);
            _db.Add(fc);
            _db.SaveChanges();
            return Ok();
        }
    }
}
