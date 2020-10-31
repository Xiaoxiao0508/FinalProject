using System;
using System.Collections.Generic;

namespace WebAPI.model
{
    public class Game
    {
        public Player Player { get; set; }
        public string Result { get; set; }
        List<string> selectionlist = new List<string>();

        int gameplayed = 0;

        int gamewin =2;
        // double winratio = 0;

        public Game(Player player, string result)
        {
            this.Player = player;
            this.Result = result;
        }

        public Game()
        {
        }

        public resultlist getResult(string playerselection)

        {
            gameplayed++;
            resultlist r1 = new resultlist();
            selectionlist.Add("rock");
            selectionlist.Add("paper");
            selectionlist.Add("scissor");
            Player user1 = new Player("user1", playerselection);
            Random rand = new Random();
            int index = rand.Next(selectionlist.Count);
            string sysselection = selectionlist[index];
            Player sys = new Player("admin", sysselection);
            Game g1 = new Game();
            List<string> resultlist = new List<string>();

            if (playerselection == sysselection)
            {
                this.Result = "draw";

            }
            else if ((playerselection == "rock" && sysselection == "scissor") || (playerselection == "paper" && sysselection == "rock") || (playerselection == "scissor" && sysselection == "paper"))
            {
                this.Result = "win";

                gamewin=gamewin+1;

            }

            else
            {
                this.Result = "lose";

            }

            r1.playerchoice = playerselection;
            r1.syschoice = sysselection;
            r1.result = this.Result;
            return r1;
        }
        public Leaderboardline Leaderboard(Player player)

        {
            Leaderboardline leaderboardline = new Leaderboardline();
        
            this.getResult(player.Name);

            leaderboardline.Name = player.Name;
            leaderboardline.Gameplayed=gameplayed;
            leaderboardline.Winratio=gamewin/gameplayed;

            return leaderboardline;
        }

    }


}






