const mongoose = require('../database');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    user:{
        type: String,
        require: true,
        unique: true
    },
    sobrenome:{
        type:String,
        require: true,
    },
    senha:{
        type: String,
        require: true,
        select: false
    },
    email:{
        type:String,
        require: true,
        unique: true,
        lowercase: true
    },
    sexo:{
        type: String
    },
    estado:{
        type: String,
        require:true
    },
    createdAt:{
        type: Date,
        default:Date.now,
    }
});

const User = mongoose.model('usuario', userSchema);

module.exports = User;