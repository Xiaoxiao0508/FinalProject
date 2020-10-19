using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.model;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {

Player p1=new Player();
Game g1=new Game();
        [HttpGet("{selection}")]
        public string getResult(string selection)
        {
            return this.g1.getResult(selection);
        }
    }
}
