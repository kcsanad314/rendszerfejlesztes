using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Netpincer_App_Beadando.Models;
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
            return new Tuple<UserType, int>(userList[0].Type, userList[0].Id);
            /*
            if(_db.Users.Any(u => u.UserName == user.UserName && u.Password == user.Password))
            {
                return true;
            }
            return false;
            */
        }
    }
}
