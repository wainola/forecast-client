# forecast-client

This repo contains the client-side code for the forecast-api. 

## Get it.

```bash
git clone https://github.com/wainola/forecast-client.git
cd forecast-client
yarn install
yarn start
```

## How to deploy it to heroku.

Follow this steps to deploy the app to your heroku account:

```bash
heroku create forecast-client --buildpack https://github.com/mars/create-react-app-buildpack.git
```

If you make some changes then

```bash
ga -A
gc -m "your changes"
```

finally,

```bash
git push heroku master
```
