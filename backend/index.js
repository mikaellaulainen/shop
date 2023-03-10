require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
let products = [
  {
    id:1,
    name:"Juice",
    price:"2.40",
    instock: "30"
  },
  {
    id:2,
    name:"Coke",
    price:"2.00",
    instock: "30"
  },
  {
    id:3,
    name:"Milk",
    price:"2.30",
    instock: "30"
  },
  {
    id:4,
    name:"Sparkling water",
    price:"1.50",
    instock: "30"
  },
  {
    id:5,
    name:"Tea",
    price:"1.00",
    instock: "30"
  }
]
app.get('/', (req,res) => {
  res.send('<h1>backend aliveee</h1>')
})

app.get('/api/drinks', (req,res) => {
  res.json(products)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`We are live on ${PORT}`)
})