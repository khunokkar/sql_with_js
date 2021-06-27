// database
const db = require('./database')

// Fetching data Example
// db.execute('SELECT * FROM products').then(data => {
//   // console.log(data)
//   console.log(data[0])
// }).catch(err => {
//   console.log(err)
// }); 

// PRODUCT Class
// class Product {
//   constructor(title, price, description){
//     this.title = title
//     this.price = price
//     this.description = description
//   }
//   save(){
//     return db.execute('INSERT INTO products (title,price,description) VALUES (?,?,?)',
//     [this.title, this.price, this.description]
//     )
//   }
//   static fetchData(){
//     return db.execute('SELECT * FROM products')
//   }
//   static fetchById(id){
//     return db.execute('SELECT * FROM products WHERE id = ?', [id])
//   }
// }

async function main(){
  // FETCHING DATA
  // const [data,...FieldPacket] = await db.execute('SELECT * FROM products')
  // const [data,...FieldPacket] = await Product.fetchData()
  
  // FETCH BY ID
  // const [data,...FieldPacket] = await Product.fetchById(2)
  // console.log(data)  

  // Saving Data
  // const product = new Product('Laptop', 1200, 'Dell work station')
  // const response = await product.save()
  // console.log(response)
}

main()