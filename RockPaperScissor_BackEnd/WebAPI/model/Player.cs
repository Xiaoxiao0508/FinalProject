using System;

namespace WebAPI.model
{
    public class Player
    {


        public string Name { get; set; }
        public string choice { get; set; }

        enum Role { rock, paper, scissor };
        public Player(string name, string choice)
        {
            this.Name = name;
            this.choice = choice;
        }

        public Player()
        {
        }
        // public void setchoice(){
        //     this.choice=Role.paper|Role.rock
        // }


        // ------------BELOW:Create object instance of a class having its name in string variable-----
        //     public void getchoice(string selection)
        //     {
        //         string className = selection;
        //         string namespaceName = "WebAPI.model";
        //         var myObj = Activator.CreateInstance(namespaceName, className);
        //     }

        // }



        // public class rock
        // {

        // }

        // public class paper
        // {

        // }
    }
}
