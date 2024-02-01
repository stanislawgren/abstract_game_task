# abstract_game_task

## Tech stack

Server: Nest.js

Database: MySQL

API: GraphQL

TypeORM

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Task Solution

1. lista meczów

```bash
query{
  games{
    ID_game
    location
    time
  }
}
```

2. lista graczy

```bash
query{
  players{
    first_name
    last_name
    number
  }
}
```

3. lista drużyn

```bash
query{
  teams{
    name
  }
}
```

4. lista graczy dla konkretnej drużyny

```bash
query{
  team(id:1){
    name
    players{
      first_name
      last_name
      number
    }
  }
}
```

5. drużyny dla konkretnego gracza

```bash
query{
  player(id:1){
    first_name
    last_name
    number
    team{
      name
    }
  }
}
```

6. lista drużyn dla konkretnego meczu wraz z graczami

```bash
query{
  game(id:1){
    location
    date
    time
    game_teams{
      team{
        name
      }
      players{
        player{
          first_name
          last_name
        }
      }
    }
  }
}
```

7. lista meczów dla konkretnego gracza wraz z drużyną dla jakiej grał.

```bash
query{
  player_games(id:1){
    first_name
    last_name
    games{
      team{
        name
      }
      game{
        location
        date
        time
      }
    }
  }
}
```
