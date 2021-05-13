import {Schema, model, Document} from "mongoose";

interface IAccountSchema extends Document {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    country: string,
    address: string,
    province: string,
    city: string,
    postal_code: string,
    phone_code: string,
    phone_number: string,
    img: string
}

const accountSchema = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    password: {type: String},
    country: {type: String},
    address: {type: String},
    province: {type: String},
    city: {type: String},
    postal_code: {type: String},
    phone_code: {type: String},
    phone_number: {type: String},
    img: {type: String}
});

export default model<IAccountSchema>("Account", accountSchema);