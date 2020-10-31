using System;

namespace WebAPI.model
{
    public class Leaderboardline
    {
        public Leaderboardline()
        {
        }

        public Leaderboardline(string name, int gameplayed, double winratio)
        {
            Name = name;
            Gameplayed = gameplayed;
            Winratio = winratio;
        }

        public string Name { get; set; }
        public int Gameplayed { get; set; }
        public double Winratio { get; set; }
    }
}
