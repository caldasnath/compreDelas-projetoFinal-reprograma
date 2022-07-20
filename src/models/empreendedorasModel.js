const mongoose = require ('mongoose')

const empreendedorasSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name:{
        type: String, 
        required: true,
    },

    telefone:{
        type: Number,
        required: true
    },

    endereco:{
        type: String,
        required: true
    },
    
    bairro:{
        type: String,
        required: true
    },

    categoria:{
        type: Array,
        required: true 

    }
    
},{timestamps:true})

const Model = mongoose.model('empreendedoras', empreendedorasSchema)

module.exports = Model