## Fetch (Browser API)

The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

## SYNTAX

```JS
fetch(resource)
fetch(resource, options)
```

**resource** - This defines the resource that you wish to fetch. This can either be:

- A string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch.
- A Request object.

**options** - Optional. An object containing any custom settings that you want to apply to the request. The possible options are:

Source: [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

## Usage example

1. JSON response:

Let's pretend that we have started the json-server (you will learn about it in json-server.md) with a resource of http://localhost:3000/planets that returns an array of planets:

```JSON
{
  "planets": [
    {
      "id": 1,
      "name": "Earth",
      "hasMoons": true
    },
    {
      "id": 2,
      "name": "Mercury",
      "hasMoons": false
    },
    {
      "id": 2,
      "name": "Saturne",
      "hasMoons": true
    }
  ]
}
```

Once you fetch the url it return a promise that resolves into the [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

To resolve the Response object into the Javascript array developers use the [json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) method that belong to the Response object.

```JS
const url = 'http://localhost:3000/planets/'
const data = fetch(url);
data
  // resolve into JS array after fetch has resolved
  .then(res => res.json())
  // log and return the JS array
  .then(data => {
    console.log(data))
    return data;
  }
  // catch and log the error if occurs
  .catch (e => console.log(e))
```

## Fetching in NodeJS

NodeJS does not support the fetch API by default, so whenever you use it with NodeJS it will throw an error of `ReferenceError: fetch is not defined`.

The "node-fetch" package, which is a A light-weight module that brings Fetch API to Node.js allows us to import the fetch method into our NodeJS project.

To start using it you need to take 2 steps:

1. Install the package with the following command:

`npm install node-fetch`

2. Import the 'fetch' method from the package and use it in the file.

```JS
import fetch from "node-fetch";
const url = 'someURL';
fetch(url)
```

Source: [node-fetch](https://www.npmjs.com/package/node-fetch)
