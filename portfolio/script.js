const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my-portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema)

module.exports = Portfolio;

const Portfolio = require('./portfolio')

const portfolio = new Portfolio({
  title: '',
  description: '',
  imageUrl: '',
});

portfolio.save()
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
 
  console.log(hi);