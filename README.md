# Project
<h2>Restaurant List</h2>

# Getting Start
<h4>getting start by downloading the project and running below command in teminal.</h4>
<pre><code>
[~/restaurant_list] $ npm run dev
</pre></code>
<h4>open browser, typing localhost:3000 to start </h4>

# Features
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Display All Restaurants </td>
<td>show all restaurants</td>
</tr>
<tr>
<td>Show Restuarant detail </td>
<td>each resturant detail could be shown in presing restaurant photos</td>
</tr>
<tr>
<td>Search Restuarant</td>
<td>searching restuarant by name or category</td>
</tr>
</tbody>
</table>

# Deployment
<h3>Enviorment<h3>
<h4>localhost＠port:3000</h4>
<h4>software framewark: express</h4>
<h4>if there is no express on your laptop pls install it by below command:</h4>
<pre><code>
[~/restaurant_list] $ npm i express
</pre></code>	
  <p><h4>1. app.js</h4></p> <p>is the main js file to control each params actions in each of handlebars.</p>
  <p><h4>2. main.handlebars</h4></p> <p>is a orginal index html, control by app.js setting up on veiw engine and stored in folder       views/layouts, it's mean to display the restaurants in area of {{data}} </p>
  <p><h4>3. index.handlebars</h4></p> <p>this is a framework for each restuarant to apply in and shown in index page(in our prj is localhost:3000), also controled by app.js as below:  </p>
<pre><code>
app.get('/', (req, res) => {
	// past the movie data into 'index' partial template
	res.render('index', { restaurants: restaurantList.results })
})
</code></pre> 

<p><h4>4. show.handlebars</h4></p> <p>If we are looking for more detail about the restaurant, this framewok can retrun a id while user pressing a photo of restaurant, and will route to /restaurants/id , also controled by app.js as below:  </p>
<pre><code>
app.get('/restaurants/:restaurant_id', (req, res) => {
		console.log('restaurant_id', req.params.restaurant_id)
	const restaurant = restaurantList.results.filter(function (item) { return item.id === Number(req.params.restaurant_id) })
		console.log('restaurant', restaurant)
		res.render('show', { restaurant: restaurant[0] })
})
</code></pre> 

<p><h4>5. search restaurant</h4></p> <p> when user want to search an specific restaurant either by restaurant name or category, typing the keyword in search bar, will return to route to http://localhost:3000/search?keyword=keyword, the keyword what user typing will link to "keyword" param of input tage in index.handlebars as below:</P>
<pre>  
			
      <input type="text" name="keyword" class="form-control" placeholder="輸入餐廳、分類" aria-label="Restaurant Name..."
						value="" aria-describedby="search-button">
</pre>  
  
 <p>controled by app.js as below:  </p>
  <pre><code>
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
</code></pre> 

# Authors
  <li>Judy</li> <p>first edited by 2019/0608</p>

<<<<<<< HEAD
=======

>>>>>>> c4398bad1c803eac7796defadb45aefcc772a941
