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
        [HttpPost("Result")]
        public List<string> Result([FromBody] Playerchoice choice)
        {
               string playerchoice=choice.playerchoice;
            return this.g1.getResult(playerchoice);
            
        }

        
    }
}
