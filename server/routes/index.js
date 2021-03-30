const express = require('express')
const {euSouUmaVariavelHelper} = require('../helpers/index')

const router = express.Router();

router.get('*', (req,res) => {
    res.send(euSouUmaVariavelHelper)
})

module.exports = router