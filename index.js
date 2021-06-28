const Sequelize = require('sequelize')

// DB
const sequelize = require('./database')

// Define a new model
const Product = sequelize.define('product', {
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
  },
  title : {
    type : Sequelize.STRING,
    allowNull : false
  },
  price : {
    type : Sequelize.DOUBLE,
    allowNull : false
  },
  description : {
    type : Sequelize.STRING,
    allowNull : false
  }
})

async function main(){
  // create new Product
  // await Product.create({
  //   title : 'Laptop',
  //   price : 10,
  //   description : 'some description'
  // })

  // find products
  // const result = await Product.findAll()
  // console.log(result[0])

  // find a single product
  // const result = await Product.findAll({
  //   where: {
  //     id: 1
  //  }
  // })
  // or
  // const result = await Product.findByPk(1)
}

// create table
sequelize.sync().then(result => {  
  main()
}).catch(err => console.log(err))

