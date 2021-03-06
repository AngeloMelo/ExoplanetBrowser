const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const discMethodRoutes = require('./routes/discmethods')
const facilityRoutes = require('./routes/facilites')
const hostRoutes = require('./routes/host')
const planetRoutes = require('./routes/planets')
const dataStatusRoutes = require('./routes/datastatus')
const path = require('path')
const cron = require('node-cron')
const ReloadDbTask = require('./tasks/reloadDbTask')

const app = express()
app.use(bodyParser.json())

let dbUrl = require('./config/keys').mongoURI

if(process.env.NODE_ENV ===	'production' )
{
	console.log('Production mode')
	dbUrl = process.env.DATABASE_URL
}


mongoose
	.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=> console.log('mongoDb connected.'))
	.catch(err => console.log(`Error during DB connection: ${err}`))

app.use('/api/discmethods', discMethodRoutes)
app.use('/api/facilites', facilityRoutes)
app.use('/api/hosts', hostRoutes)
app.use('/api/planets', planetRoutes)
app.use('/api/status', dataStatusRoutes)

if(process.env.NODE_ENV ===	'production' )
{
	app.use(express.static('frontend/build'))

	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	})
}	

cron.schedule('*/50 * * * *', ReloadDbTask)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is listenning on ${port}`))