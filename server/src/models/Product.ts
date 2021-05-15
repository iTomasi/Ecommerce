import {Schema, model, Document} from "mongoose";

interface IProduct extends Document {
    name: string,
    category: string[],
    price: number,
    oldPrice: number,
    description: string,
    img: string,
    size: any[]
}

const productSchema = new Schema({
    name: {type: String},
    category: {type: Array},
    price: {type: Number},
    oldPrice: {type: Number},
    description: {type: String},
    img: {type: String},
    size: {type: Array}
});

export default model<IProduct>("Product", productSchema);