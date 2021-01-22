import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: false
    }
});

export default mongoose.model.product || mongoose.model('product', productsSchema);