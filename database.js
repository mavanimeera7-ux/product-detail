import mongoose from 'mongoose';

const databaseConnection = ()=>{
    mongoose.connect('mongodb://localhost:27017/productDB')

    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch((err)=>{
        console.log('Database connection error', err);
    })
}
export default databaseConnection;