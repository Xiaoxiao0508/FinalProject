export interface roundresult {
    playerchoice:string;
    syschoice:string;
    result:string;
    turnsplayed:number;
    gamewin:number;
    gameratio:number;
}
export interface gameresult{
    result:string;
    allresult:roundresult[];
}


export interface playerroundrequest{
    Name:string;
   numberofrounds:number; 
    choices:string[];
}
export interface leaderboardline {
    name:string;
    winratio:number;
    gamesplayed:number;
    lastfive:string;
}
export interface leaderboard{
  leaderboardlist:leaderboardline[];
  
}
