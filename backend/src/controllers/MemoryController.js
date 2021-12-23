const { response } = require("express")
const Memory = require("../models/Memory")

const {v4: uuid} = require("uuid")

module.exports = {
    async index (request, response){
        try {
            const memories = await Memory.find ()
            return response.status(200).json({memories})
        } catch (err){
            response.status(500).json({ error: err.message})
        }
    },
    
    
    async store (request, response){
        const { title, text } = request.body

        if (!title || !text) {
            return response.status(400).json({ error: "Missing title or text."})
        }

        const memory = new Memory ({
            _id: uuid(),
            title,
            text,
            favorite: true,
        })

        try {
            await memory.save()

            return response.status(201).json({message: "Memory added!"})
        } catch (err) {
            response.status(400).json({ error: err.message})
        }
    },

    async update(request, response){
        const {title, text} = request.body

        if(!title && !text){
            return response.status(400).json({ error:"Inform title or text."})
        }

        if(title) response.memory.title = title
        if(text) response.memory.text = text

        try {
            await response.memory.save()
            return response.status(200).json({ message: "Memory updated!"})
        } catch (err) {
            response.status(500).json({ error: err.message})
        }
    },

    async delete(request, response){

        try {
            await response.memory.remove();
            return response.status(200).json({ message:"Memory deleted."})
        } catch (err) {
            return response.status(500).json({ error: err.message })
        }
    },

    async updateFavorite(request, response) {
        response.memory.favorite = response.memory.favorite

        try {
            await response.memory.save()
            return response.status(200).json({ message:`${response.memory.favorite ? "favorite" : "unfavorite"}`})
        } catch (err){
            response.status(400).json({ error: err.message})
        }
    }

}