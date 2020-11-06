export interface resultlist {
    playername:string;
    playerchoice:string;
    syschoice:string;
    result:string;
    turnsplayer:number;
    gamewin:number;
    gameratio:number;
}
export interface resultSum{
    allresult:resultlist[];
}
export interface playerchoice {
    playerchoice:string;
}

export interface Player{
    Name:string;
    Choice:string;
}
export interface leaderboardline {
    name:string;
    turnsplayed:number;
    winratio:number;
}
export interface leaderboard{
  leaderboardlist:leaderboardline[];
  
}
