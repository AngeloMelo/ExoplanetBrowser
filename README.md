# Exoplanets Browser

Since 1992 over 4,000 exoplanets have been discovered outside our solar
system. The United States National Aeronautics and Space Administration (NASA)
maintains a publicly accessible archive of the data collected available by API.

This application allows users to easily search and get data from Exoplanets provided by the Nasa Exoplanet Science Institute.

This is an app suggestion from [App Ideas](https://github.com/florinpop17/app-ideas) implemented with the  MERN stack. It uses a Mongodb database to store data fetched daily from the Nasa Exoplanet Archive API to speed up the user queries.

## Build and configuration

Create a MongoDB database called 'exoplanets' or edit the connection string on config/keys.js file

npm install

cd ./frontend

npm install

cd . ./

npm run dev

### 3rd party documentation

[NASA Exoplanet Archive API](https://exoplanetarchive.ipac.caltech.edu/index.html) 

[node-cron](https://www.npmjs.com/package/cron)

### Requirements & Constraints

[NASA exoplanets query](https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/NASA-Exoplanet-Query.md)

[Data columns](https://exoplanetarchive.ipac.caltech.edu/docs/API_combined_table_columns.html)