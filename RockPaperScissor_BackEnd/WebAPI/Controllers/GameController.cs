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

        Player p1 = new Player();
        Game g1 = new Game();


        [HttpPost("result")]
        public resultlist Result([FromBody] Playerchoice choice)
        {


            return this.g1.getResult(choice.playerchoice);

        }
        [HttpPost("leaderboard")]
        public Leaderboard getleaderboard([FromBody] Player player)
        {

            Leaderboard leaderboard = new Leaderboard();
            List<Leaderboardline> leaderboardlinelist = new List<Leaderboardline>();
            Leaderboardline leaderboardline = new Leaderboardline();
            leaderboardline = g1.Leaderboard(player);
            leaderboardlinelist.Add(leaderboardline);
            leaderboard.LeaderboardList = leaderboardlinelist;
            return leaderboard;

        }

    }
}
