const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
        name: String,
        age: String,
        pass: {
            type: String,
            select: false,
        },
    },
    {
        timestamps: true
    }
);

authorSchema.pre("save",function(){
    this.name = this.name.toUpperCase();
    next();
})

authorSchema.methods.getName = function() {
    return this.name;
};

// tạo ra phương thức để thao tác với 1 document
//schema.mmethods.abc = func
authorSchema.methods.toJSON = function () {
  let author = this;
  author = author.toObject();
//   delete author.pass;
  return author;
};

module.exports = mongoose.model("author", authorSchema);