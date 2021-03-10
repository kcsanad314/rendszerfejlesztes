using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Netpincer_App_Beadando.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Netpincer_App_Beadando.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _db;
        //public User user { get; set; }

        public UserController(ApplicationDbContext db)
        {
            _db = db;
        }
        // POST: UserController/Create
        [HttpPost]
        public ActionResult Create([FromBody] User user)
        {
            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok();
        }
        [HttpGet]
        public ActionResult test()
        {
            return Ok("asd");
        }

        // GET: UserController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }


        // GET: UserController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

    }
}
