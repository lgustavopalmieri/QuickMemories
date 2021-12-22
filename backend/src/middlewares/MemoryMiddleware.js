const { validate:isUuid } = require("uuid")
const Memory = require("../models/Memory")

module.exports = { async validateId(request, response, next){ 
    
    const{id}= request.params

    if(!isUuid(id)){
        return response.status(400).json({ error:"Invalid ID."})
    }

    try {
        const memory = await Memory.findById(id)
        response.memory = memory

        if(!memory){
            return response.status(404).json({ error: "Memory not found."})
        }
    } catch (err) {
        return response.status(500).json({ error: err.message})
    }

    next()

    }
}