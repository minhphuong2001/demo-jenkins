const asyncHandle = require('../middlewares/asyncHandle')
const Author = require('../models/Author')

module.exports = {
    create: asyncHandle(async(req, res, next) => {
        const author = await Author.create(req.body);
        res.json({
            success: true,
            data: author
        });
    }),

    getAll: async(req, res, next) => {
        try {
            const author = await Author.findOne().select("+pass");
            res.json({
                success: true,
                data: author 
            })    
        } catch (error) {
            console.log("Error: ", error.message)
        }
        
    }
}