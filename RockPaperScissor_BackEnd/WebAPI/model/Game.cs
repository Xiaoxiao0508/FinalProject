using System;
using System.Collections.Generic;

namespace WebAPI.model
{
    public class Game
    {
        public Player Player { get; set; }
        public string Result { get; set; }
        List<string> selectionlist = new List<string>();



        public Game(Player player, string result)
        {
            this.Player = player;
            this.Result = result;
        }

        public Game()
        {
        }

        public List<string> getResult(string selection)

        {
            selectionlist.Add("rock");
            selectionlist.Add("paper");
            selectionlist.Add("scissor");
            Player user1 = new Player("user1", selection);
            Random r1 = new Random();
            int index = r1.Next(selectionlist.Count);
            string selection2 = selectionlist[index];
            Player system = new Player("admin", selection2);
            Game g1 = new Game();
            List<string> resultlist = new List<string>();

            if (selection == selection2)
            {
                this.Result = "draw";

            }
            if ((selection == "rock" & selection2 == "scissor") | (selection == "paper" & selection2 == "rock") | (selection == "scissor" & selection2 == "paper"))
            {
                this.Result = "win";

            }
            else
            {
                this.Result = "lose";

            }
            resultlist.Add(user1.choice);
            resultlist.Add(system.choice);
            resultlist.Add(this.Result);
            return resultlist;
        }

    }


}






