using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            //init foodcategory object
            FoodCategory fc = new FoodCategory() {
                Name = foodCategory.Name,
                RestaurantId = foodCategory.RestaurantId
            };
            //init foodcategory's foodlist and fill it
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
            //search for the correct restaurant and add the previous objects to it
            Restaurant rest = _db.Restaurants.Find(fc.RestaurantId);
            rest.FoodCategories = new List<FoodCategory>();
            rest.FoodCategories.Add(fc);
            _db.Add(fc);
            _db.SaveChanges();
            return Ok();
        }

        //TODO:This 2 method needs to be reorganized to another controller
        //Owner/GetRestaurants
        [HttpGet]
        public IActionResult GetRestaurants()
        {
            //returns with a list of all the restaurants
            var result = _db.Restaurants.ToList();
            return Ok(result);
        }
        //Owner/GetRestaurantFoodlist/{restaurantId}
        [HttpGet]
        public IActionResult GetRestaurantFoodList()
        {
            //returns with a list of foodcategories and its foods of a specific restaurant
            var result = _db.Restaurants.Include(r => r.FoodCategories).ThenInclude(fc => fc.Foods).ToList();
            return Ok(result);
        }

        /*
        [HttpGet]
        [Route("{restaurantId}")]
        public IActionResult GetRestaurantOrderList(int restaurantId)
        {
            //returns with a list of foodcategories and its foods of a specific restaurant
            var result = _db.Orders.Where(o => o.RestaurantId == restaurantId).Include(o => o.Foods).ToList();
            return Ok(result);
        }
        */
    }
}
