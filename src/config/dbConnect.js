const mongoose = require ("mongoose");

//0kKVPzJXOTMJGYwh
//mongodb+srv://salihshalums:0kKVPzJXOTMJGYwh@cluster0.a27zgf0.mongodb.net/expenses-tracker-db?retryWrites=true&w=majority"

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`DB connected successfully`);
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};
module.exports = dbConnect;