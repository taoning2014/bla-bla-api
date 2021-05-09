# metal-bat-api

Expressjs API server 🎉, visit at: https://enigmatic-headland-66658.herokuapp.com/

To get a valid Agroa access token:

https://enigmatic-headland-66658.herokuapp.com/access-token/?channel={channel}&user={bar}

Params:

- channel: channel name
- user: user id. Optional, if not passed it, token will created by the default user id which is `0`.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/mocclubhouseteam/metal-bat-api.git` this repository
* `cd metal-bat-api`
* `yarn install`

## Running locally

**Debug mode**

1. `NODE_ENV=debug node --inspect-brk ./bin/www`
2. The terminal will log out something like: `Debugger listening on ws://127.0.0.1:9229/add69dec-7a8e-4571-bd96-d456cb68159b`
3. Open Chrome debug console, paste the url into the navigation bar.
4. Clikc the green node icon in the debug console

**Hot reload mode**

1. `yarn start`
2. visit http://localhost:3000

**Heroku local mode**

1. `heroku local`
2. http://localhost:5000/
3. Note: the port on heroku local is 5000 instead of 3000

## Useful Links

* [Agora Voice Call Overview](https://docs.agora.io/en/Voice/product_voice?platform=Web)
* [LeanStorage JavaScript Guide](https://docs.leancloud.app/leanstorage_guide-js.html)
* [Expressjs](https://expressjs.com/)
