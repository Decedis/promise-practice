# JSON-SERVER

"json-server" package is a fake-API generator package that can be set in 30 seconds.
To start using it you need to make just a couple of steps:

1. Install json-server with the following command:

`npm install -g json-server`

**NOTE: json-server package is already installed in this exercise, you do NOT need to do it to have e11 successfully resolved.**

2. Create a db.json file with a valid JSON syntax of the following pattern:

```JSON
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

**NOTE: In this exercise you already have the db.json file created in the /data/ folder. No need to create/edit it.**

2. Run json-server watcher for db.json file with the following command.

`npx json-server --watch <path_to_db.json_file>`

**NOTE: The path to db.json file in this exercise is "data/db.json".**

## Fetching data from fake endpoint

Once the package is all installed and set you can open the browser at 'http://localhost:3000/users/'. If all the setup steps were made correctly you will see a valid JSON returned.

It means that you can now fetch users data (send a Get HTTP request) with:

```JS
const url = 'http://localhost:3000/users/'
const getData = (url) => return fetch(url);
```

Remember that fetch returns a Promise, so you can start consuming the getData function return value to have the exercise successfully solved.

Please make sure to watch the video with json-server observed live

[Click me to watch the video](https://www.loom.com/share/a39c4481a5e54ccdb148833277cd4a6a)

Source: [json-server](https://github.com/typicode/json-server)
