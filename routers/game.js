const express =  require("express")
const {game} =  require("../controllers/game") 

router = express.Router()

router.get('/',game)

module.exports = router