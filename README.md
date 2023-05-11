# Ark Web Map API
This is used in conjunction with [Ark Web Map](https://github.com/GlobalGamer2015/ArkWebMap) on the same server.

## Features
- Gathers Player data from Ark: Survival Evolved Servers.

## Data folder
This folder is used to host Player Data so that it can be accessed from Ark Web Map without requesting the data from the Ark: Survival Evolved Servers multiple times per User accessing the Map.

## .env File
Be sure to rename "example.env" to ".env".
This only contains the IP and Port.

## config.json
Be sure to rename "example.config.json" to "config.json". 
This file contains information needed about each Ark: Survival Evolved server. 
If you use multiple servers of the same Map then you will need to customize Ark Web Map and API to your needs.

Example:
```
"Aberration": {
      "Active": true,
      "IP": "127.0.0.1",
      "RconPort": 12345,
      "Password": "12345"
    }
```

- Active, if you do not use this map then leave it as "false" or else change to "true" without quotes.
- IP, this is the IP of where the Dedicated server is located, do NOT include the port.
- RconPort, this is the RCON port that your Dedicated server uses.
- Password, this is the Admin Password that your Dedicated server uses.


# How to use

In terminal or command prompt:

npm install

npm start