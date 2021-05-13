import mongoose, {ConnectionOptions} from "mongoose";
import config from "../config/config";

const mongooseOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(config.DB.MONGODB_URI, mongooseOptions)
    .then(() => console.log("Mongoose Connected"))
    .catch(e => console.log(e))