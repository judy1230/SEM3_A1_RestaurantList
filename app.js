// require packages used in the project
const express = require('express')
const app = express()
// require express-handlebars here
const exphbs = require('express-handlebars')
const port = 3000
const restaurantList = require('./restaurant.json')

//express template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))


// routes setting
app.get('/', (req, res) => {
	// past the movie data into 'index' partial template
	res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
		console.log('restaurant_id', req.params.restaurant_id)
	const restaurant = restaurantList.results.filter(function (item) { return item.id === Number(req.params.restaurant_id) })
		console.log('restaurant', restaurant)
		res.render('show', { restaurant: restaurant[0] })
})

app.get('/search', (req, res) => {
	const keyword = req.query.keyword
	console.log(keyword)
	const restaurantSearch = restaurantList.results.filter(restaurant => {
		if (restaurant.name.toLowerCase().includes(keyword.toLowerCase()))
			return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
		else if (restaurant.category.toLowerCase().includes(keyword.toLowerCase())) 
		return restaurant.category.toLowerCase().includes(keyword.toLowerCase()) 
	})
	res.render('index', { restaurants: restaurantSearch, keyword: keyword })
})
// start and listen on the Express server
app.listen(port, () => {
	console.log(`Express is listening on localhost:${port}`)
})