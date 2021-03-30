const express = require('express')

const router = express.Router();
router.get('*', (req,res) => {
    res.send('Hello World!')
})

const app = express();
app.use('*', router)
module.exports = app