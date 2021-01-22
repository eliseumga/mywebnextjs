import mongoose from 'mongoose';

const connection = {};

async function initDB() {
    if (connection.isConnected) {
        console.log('Banco conectado com sucesso!');
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default initDB;

/*
import mongoose from 'mongoose';

function initDB() {
    if (mongoose.connections[0].readyState) {
        console.log('Já esta conectado ao mongo...')
        return
    }
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    mongoose.connection.on('connected', () => {
        console.log('Conectado ao mongo...');
    });
    mongoose.connection.on('error', (err) => {
        console.log('Erro ao conectar ao mongo...', err)
    });
}

export default initDB;
*/