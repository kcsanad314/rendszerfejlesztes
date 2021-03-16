using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
        [HttpGet]
        //if user's name and password already in the db, returns true
        public bool Login([FromBody] LoginUser user)
        {
            if(_db.Users.Any(u => u.UserName == user.UserName && u.Password == user.Password))
            {
                return true;
            }
            return false;
        }

    }
}
