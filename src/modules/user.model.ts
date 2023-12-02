import { Schema, model, connect } from 'mongoose';
import { Name, Orders, Address, User } from './user/user.interface';


const nameSchema = new Schema<Name>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
})

const addressSchema = new Schema<Address>({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
})

const ordersSchema = new Schema<Orders>({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quauntity: {
        type: Number,
        required: true,
    }
    
})

const userSchema = new Schema<User>({
    userId: {type: Number},
    userName: {type: String},
    password: {type: String},
    fullName: nameSchema,
    age: {type: Number},
    email: {type: String},
    isActive: {type: Boolean},
    hobbies: {type: String},
    address: addressSchema,
    orders: ordersSchema,
})

export const UserModel = model<User>('User', userSchema);