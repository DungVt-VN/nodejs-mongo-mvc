module.exports = {
    mutipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose.toObject());
    },

    mongoonseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
