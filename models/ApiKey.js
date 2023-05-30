import mongoose from 'mongoose';

const ApiKeySchema = new mongoose.Schema({
    key: String,
    owner: String
});

// Establish a new connection to the 'keys' database
const keysDb = mongoose.connection.useDb('db');

// Define the model on the new connection
export default keysDb.model('ApiKey', ApiKeySchema);
