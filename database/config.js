
import mongoose from 'mongoose'

const dbConection = async() => {

    try {
       await mongoose.connect(process.env.MONGODB_CNX , {
           useNewUrlParser: true, 
           useUnifiedTopology: true,
           usecreateindex:true,
           useFindAndModify:false
       });

       console.log('base de datos online');

    } catch (error) {
        throw new error('error al iniciar la BD')
    }

    
}

export default dbConection