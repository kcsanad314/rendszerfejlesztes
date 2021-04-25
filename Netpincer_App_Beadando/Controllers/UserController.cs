using Microsoft.AspNetCore.Http;
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
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _db;
        //private readonly IMapper _mapper;
        //public User user { get; set; }

        public UserController(ApplicationDbContext db)
        {
            _db = db;
           //_mapper = mapper;
        }

        [HttpPost]
        //Creates a user record to the db from json
        public ActionResult Create([FromBody] User user)
        {
            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok();
        }
        [HttpPost]
        //if user's name and password already in the db, returns true
        public Tuple<UserType, int> Login([FromBody] LoginUser user)
        {
            
            var userList = _db.Users.Where(u => u.UserName == user.UserName && u.Password == user.Password).ToList();
            if (userList.Count < 1) throw new ArgumentException("Nincs ilyen felhasználó!");
            return new Tuple<UserType, int>(userList[0].Type, userList[0].UserId);
            /*
            if(_db.Users.Any(u => u.UserName == user.UserName && u.Password == user.Password))
            {
                return true;
            }
            return false;
            */
        }
        [HttpGet]
        [Route("{userId}")]
        public IActionResult GetUser(int userId)
        {
            //returns with a list of foodcategories and its foods of a specific restaurant
            var result = _db.Users.Find(userId);
            return Ok(result);
        }

        [HttpPost]
        public IActionResult CreateOrder([FromBody] Order order)
        {
            Order _order = new Order()
            {
                Timestamp = order.Timestamp,
                FirstName = order.FirstName,
                LastName = order.LastName,
                City = order.City,
                Street = order.Street,
                PhoneNumber = order.PhoneNumber,
                PaymentType = order.PaymentType,
                OrderSum = order.OrderSum,
                RestaurantId = order.RestaurantId
            };
            _order.OrderFoods = new List<OrderFood>();
            List<Food> foods = GetFoodListFromFc(order.RestaurantId, order.FoodIds);
            foreach (var food in foods)
            {
                OrderFood of = new OrderFood()
                {
                    FoodId = food.Id,
                    OrderId = _order.Id,
                    Order = _order,
                    Food = food
                };
                _order.OrderFoods.Add(of);
            }
            _db.Orders.Add(_order);
            _db.SaveChanges();
            return Ok();
        }
        private List<Food> GetFoodListFromFc(int restId, List<int> foodIds)
        {
            List<Food> temp = new List<Food>();
            Restaurant rest = _db.Restaurants
                .Where(r => r.Id == restId)
                .Include(r => r.FoodCategories)
                .ThenInclude(fc => fc.Foods.Where(f => foodIds.Contains(f.Id))).FirstOrDefault();
            foreach(var fc in rest.FoodCategories)
            {
                foreach (var f in fc.Foods) temp.Add(f);
            }
            return temp;
        }
    }
}
