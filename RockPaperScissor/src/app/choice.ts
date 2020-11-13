export interface roundresult {
    playername:string;
    playerchoice:string;
    syschoice:string;
    result:string;
    turnsplayed:number;
    gamewin:number;
    gameratio:number;
}
export interface gameresult{
    gameresult:string;
    allresult:roundresult[];
}


export interface playerroundrequest{
    Name:string;
   numberofrounds:number; 
    choices:string[];
}
export interface leaderboardline {
    name:string;
    turnsplayed:number;
    winratio:number;
}
export interface leaderboard{
  leaderboardlist:leaderboardline[];
  
}
