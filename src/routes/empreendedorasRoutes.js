const controller = require('../controller/empreendedorasController')
const express = require('express')  

const router = express.Router()


router.get("/empreendedoras", controller.getAllEmpreendedoras)
router.get("/categoria", controller.getEmpreendedorasPorCategoria)
router.get("/localidade", controller.getEmpreendedorasPorLocalidade)
router.put("/:id", controller.updateEmpreendedoras)
router.patch("/telefone/:id", controller.updateTelefoneEmpreendedoras)
router.post("/cadastro", controller.createEmpreendedoras)
router.delete("/:id", controller.deleteEmpreendedoras)

module.exports = router