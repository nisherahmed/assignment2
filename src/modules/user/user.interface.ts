import { Schema, model, connect } from 'mongoose';


export type Name = {
        firstName: string;
        lastName: string;
        };

export type Address = {
        street: string;
        city: string;
        country: string;
        };

export type Orders = {
    productName: string;
    price: number;
    quauntity: number;
};        

export type User = {
    userId: number;
    userName: string;
    password: string;
    fullName: Name;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string;
    address: Address;
    orders: Orders;
};

