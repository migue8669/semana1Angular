export class Model {
    'success': boolean;
    'data': sports;
  }
  export class dataSiteSports {
    [x: string]: any;
  
    'site_key': string;
    'site_nice': string;
    'last_update': string;
    'odds': [odds];
  }
  export class odds {
    [x: string]: any;
  
    'odds': h2h;
  }
  export class h2h {
    [x: string]: any;
  
    'h2h': [string];
  }
  export class sports {
    [x: string]: any;
    'sport_key': string;
    'sport_nice': string;
    'sites_count': number;
    'teams': [teams];
    'commence_time': number;
    'home_team': string;
    'sites': [dataSiteSports];
  }
  export class teams {
    [x: string]: any;

    'team1': string;
    'team2': string;
  }
  

  