

# URL Shortener

This is the node server for Url Shortener

# Installation
```
>npm install
sudo mongod
redis-server
```

# Run Test
```
>npm test
```
`npm run test:check-coverage` for coverage report

# Run for prompt in 3 different terminals 
```
> npm start
> sudo mongod
> redis-server
```

##Stack

* MongoDB
* Node.js

## Features

- [x] Rest api for creating shortUrl from a given longUrl
- [x] Using bluebird promises instead of Async (They are a bit faster )
- [x] Full unit test


#To Do
- [ ] Add Redis caching
- [ ] Change console.log() to winston logger for console
- [ ] Add Loogly to winston logger

https://spion.github.io/posts/why-i-am-switching-to-promises.html
