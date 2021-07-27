const express = require('express');
const path = require('path');
const prod_repo = require('./product-repo');

const port = 8081

const app = express()

// to server static pages
app.use(express.static(path.join(__dirname, '/')))

// for POST json 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


// get all recordnin db
app.get('/product', async(req, res) => {
    const products = await prod_repo.getAllProducts() // .where("id", 1)
    res.status(200).json({ products })
});

app.get('/product/:prod_id', async(req, res) => {
   let id = req.params.prod_id
    const products = await prod_repo.getSingleProducts(id)
    res.status(200).json({ products })
});


//delete an item for db
app.delete('/product/:prod_id', async (req, res) => {
    try
    {
        let id = req.params.prod_id
        const result = await prod_repo.deleteSingleProducts(id)
        res.status(201).json({
            res: 'deleted successed',
            url: `localhost:8080/product/${id}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
})


// /// update recrod
app.put('/product/:prod_id', async (req, res) => {
    try
    {
        let id = req.params.prod_id
        console.log(id);
        emp = req.body
        const result = await prod_repo.updateRecord(id, emp);
        res.status(201).json({
            res: 'update successed',
            url: `localhost:8080/product/${id}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
})

//adding an items to db
app.post('/product', async (req, res) => {
    try
    {
        prod = req.body //  { "ID":6 , "TITLE": "Mango", "PRICE": 6,"RATING": 85}
        const result = await prod_repo.addRecord(prod);
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/product/${prod.ID}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
})

app.post('/product', async (req, res) => {
    try
    {
        let prod = req.body
        const result = await prod_repo.addRecord(prod);
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/product/${prod.ID}`,
            result
        })
    }
    catch(e) {
        res.status(400).send({
            status: 'fail',
            message: e.message
        })
    }
})

app.listen(port, () => console.log(`Listening to port ${port}`));