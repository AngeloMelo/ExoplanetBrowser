const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const discMethodRoutes = require('./routes/discmethods');
const facilityRoutes = require('./routes/facilites');
const hostRoutes = require('./routes/host');
const planetRoutes = require('./routes/planets');
const path = require('path')
const cron = require('node-cron');
const ReloadDbTask = require('./tasks/reloadDbTask')

const app = express();
app.use(bodyParser.json());

const dbUrl = require('./config/keys').mongoURI;

mongoose
	.connect(dbUrl,{useNewUrlParser: true})
	.then(()=> console.log('mongoDb connected.'))
	.catch(err => console.log(err));

app.use('/api/discmethods', discMethodRoutes);
app.use('/api/facilites', facilityRoutes);
app.use('/api/hosts', hostRoutes);
app.use('/api/planets', planetRoutes);


// if(process.env.NODE_ENV === 'production')
// {
	app.use(express.static('frontend/build'));
	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
// }
	
//cron.schedule('* * * * *', ReloadDbTask);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listenning on ${port}`));