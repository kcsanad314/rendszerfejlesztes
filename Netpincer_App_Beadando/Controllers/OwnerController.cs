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
        public IActionResult AddFoodCategory2(FoodCategory fc)
        {
            var restaurant = _db.Restaurants.Where(r => r.Id == fc.RestaurantId).Include(r => r.FoodCategories).ThenInclude(fc => fc.Foods).FirstOrDefault();
            if (restaurant.FoodCategories.Any(sfc => sfc.Name == fc.Name))
            {
                var savedFc = restaurant.FoodCategories.Where(sfc => sfc.Name == fc.Name).FirstOrDefault();
                fc.Foods.ForEach(food =>
                {
                    Food _food = new Food()
                    {
                        Name = food.Name,
                        Price = food.Price,
                        Allergenes = food.Allergenes,
                        PreparationTime = food.PreparationTime
                    };
                    savedFc.Foods.Add(_food);
                });
            }
            else
            {
                    restaurant.FoodCategories.Add(fc);
                    _db.Add(fc);
            }
            _db.SaveChanges();
            return Ok();
        }
        [HttpGet]
        [Route("{userId}")]
        public IActionResult GetRestaurantByUserId(int userId)
        {
            //returns with a list of all the restaurants
            var result = _db.Restaurants.Where(r => r.UserId == userId).Select(r => r.Id);
            return Ok(result);
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

        [HttpGet]
        [Route("{restaurantId}")]
        public IActionResult GetOwnerRestaurant(int restaurantId)
        {
            var result = _db.Restaurants.Where(r => r.Id == restaurantId).Include(r => r.FoodCategories).ThenInclude(fc => fc.Foods);
            return Ok(result);
        }

        
        [HttpGet]
        [Route("{restaurantId}")]
        public IActionResult GetRestaurantOrderList(int restaurantId)
        {
            List<Order> result = _db.Orders.Where(o => o.RestaurantId == restaurantId).ToList();
            return Ok(result);
        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            var result = _db.Orders.Where(o => o.OrderStatus == OrderStatus.InProgress || o.OrderStatus == OrderStatus.Delivering).OrderBy(o => o.DeliveryTime).ToList();
            return Ok(result);
        }

        [HttpGet]
        [Route("{orderId}")]
        public IActionResult GetListFoodForOrder(int orderId)
        {
            List<Food> temp = new List<Food>();
            List<int> foodIds = new List<int>();
            foodIds = _db.OrderFood.Where(of => of.OrderId == orderId).Select(of => of.FoodId).ToList();
            var rest = _db.Restaurants.Include(r => r.FoodCategories).ThenInclude(fc => fc.Foods.Where(f => foodIds.Contains(f.Id))).ToList();
            foreach(var r in rest)
            {
                foreach(var fc in r.FoodCategories)
                {
                    foreach(var f in fc.Foods)
                    {
                        temp.Add(f);
                    }
                }
            }
            return Ok(temp);
        }

        //restaurant -> manage order menüponthoz a státusz frissítéséhez
        //futárnak is jó az rendelés elfogadásához/kiszállítás teljesítésének jelzéséhez
        [HttpPut]
        public IActionResult ChangeOrderStatus(Order order)
        {
            var o = _db.Orders.Where(o => o.Id == order.Id).FirstOrDefault();
            o.OrderStatus = order.OrderStatus;
            _db.SaveChanges();
            return Ok(o);
        }

        //restaurant -> list foods -> kaják mellett egyesével lehessen akciózni. 1. alkalommal százalékosan leértékel, ha már le volt értékelve akkor pedig visszaállíttja az eredeti árat.
        [HttpPut]
        public IActionResult MakeDiscount(Food food)
        {
            var rest = _db.Restaurants.Include(r => r.FoodCategories).ThenInclude(fc => fc.Foods);
            foreach (Restaurant r in rest)
            {
                foreach (FoodCategory fc in r.FoodCategories)
                {
                    foreach(Food f in fc.Foods)
                    {
                        if(f.Id == food.Id)
                        {
                            if(f.DiscountMultiplier == 1)
                            {
                                f.DiscountMultiplier = food.DiscountMultiplier;
                            }
                            else
                            {
                                f._price /= f.DiscountMultiplier;
                                f.DiscountMultiplier = 1;
                            }
                            
                        }
                    }
                }
            }
            _db.SaveChanges();
            return Ok(food);
        }
    }
}
