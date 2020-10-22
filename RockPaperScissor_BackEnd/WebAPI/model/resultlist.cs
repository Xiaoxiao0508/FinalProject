using System;

namespace WebAPI.model
{
    public class resultlist
    {
        public resultlist()
        {
        }

        public resultlist(string playerchoice, string syschoice, string result)
        {
            this.playerchoice = playerchoice;
            this.syschoice = syschoice;
            this.result = result;
        }

        public string playerchoice { get; set; }
     public string syschoice { get; set; }
            public string result { get; set; }


    }
}
