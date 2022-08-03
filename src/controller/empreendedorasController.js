const empreendedorasModel = require('../models/empreendedorasModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const getAllEmpreendedoras = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('onde está autorização?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Voce não tem autorização para acessar isso")
      }
      const allEmpreendedoras = await empreendedorasModel.find()
      res.status(200).json(allEmpreendedoras)
    })


  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }

}

const getEmpreendedorasPorCategoria = async (req, res) => {
  try {
    const authHeader = req.get('authorization')

    if (!authHeader) {
      return res.status(401).json({ message: "Você precisa estar logado para editar o post!" })
    }
    const token = authHeader.split(" ")[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("erro de autenticação")
      }
      const { categoria } = req.query
      const findEmpreendedoras = await empreendedorasModel.find({ categoria: categoria })
      if (findEmpreendedoras == null) {
        return res.status(404).json({ message: "nenhuma categoria foi encontrada" })
      }
      res.status(200).json(findEmpreendedoras)
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getEmpreendedorasPorLocalidade = async (req, res) => {
  try {
    const authHeader = req.get('authorization')

    if (!authHeader) {
      return res.status(401).json({ message: "Você precisa estar logado para editar o post!" })
    }
    const token = authHeader.split(" ")[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("erro de autenticação")
      }
      const { bairro } = req.query
      const findEmpreendedoras = await empreendedorasModel.find({ bairro: bairro })
      if (findEmpreendedoras == null) {
        return res.status(404).json({ message: "nenhum endereco foi encontrado" })
      }
      res.status(200).json(findEmpreendedoras)
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateEmpreendedoras = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('Onde está a autorização?')
    }
    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Voce não tem autorização para acessar isso')
      }
      const { name, telefone, endereco, bairro, categoria } = req.body
      await empreendedorasModel.findByIdAndUpdate(req.params.id, {
        name, telefone, endereco, categoria, bairro
      })
      const updatedEmpreendedoras = await empreendedorasModel.findById(req.params.id)
      res.status(200).json(updatedEmpreendedoras)

    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updateTelefoneEmpreendedoras = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('onde está a autorização?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Voce não tem autorizção para acessar isso')
      }
      const { telefone } = req.body
      await empreendedorasModel.findByIdAndUpdate(req.params.id, {
        telefone
      })
      const updatedTelefoneEmpreendedoras = await empreendedorasModel.findById(req.params.id)
      res.status(200).json(updatedTelefoneEmpreendedoras)

    })

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const createEmpreendedoras = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('onde está a autorização?')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Você não está autorizado a acessar isso!')
      }

      const { name, telefone, endereco, bairro, categoria } = req.body

      const newEmpreendedora = new empreendedorasModel({
        name, telefone, endereco, bairro, categoria
      })

      const savedEmpreendedora = await newEmpreendedora.save()

      res.status(201).json(savedEmpreendedora)
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const deleteEmpreendedoras = async (req, res) => {
  try {
    const authHeader = req.get('authorization')
    if (!authHeader) {
      return res.status(401).send('onde está a autorização')
    }

    const token = authHeader.split(' ')[1]
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send('Voce não tem autorização para acessar isso')
      }
      const { id } = req.params
      await empreendedorasModel.findByIdAndDelete(id)
      const message = "Empreendedora com esse id foi excluída com sucesso."
      res.status(200).json({ message })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}



module.exports = {

  getAllEmpreendedoras,
  getEmpreendedorasPorCategoria,
  getEmpreendedorasPorLocalidade,
  updateEmpreendedoras,
  updateTelefoneEmpreendedoras,
  createEmpreendedoras,
  deleteEmpreendedoras


}

