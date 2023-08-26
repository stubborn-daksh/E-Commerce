import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";


import jwt from 'jsonwebtoken';

export const registerController = async (req, res) => {
    try {
        console.log('Hello')
        //validations
        const { name, email, password, phone, address, answer } = req.body
        if (!name) {
            return res.send({ message: 'Name is Required' })
        }
        if (!email) {
            return res.send({ message: 'Email is Required' })
        }
        if (!password) {
            return res.send({ message: 'Password is Required' })
        }
        if (!phone) {
            return res.send({ message: 'Phone is Required' })
        }
        if (!address) {
            return res.send({ message: 'Address is Required' })
        }
        if (!answer) {
            return res.send({ message: 'Answer is Required' })
        }

        //check existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Register Please Login',
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({
            name, email, phone, address, password: hashedPassword, answer
        }).save()

        res.status(201).send({
            success: true,
            message: 'User Register Successfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validations
        if (!email && !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password"
            })
        }
        //check user 
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not Registered"
            })
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(404).send({
                success: false,
                message: "Invalid Password"
            })
        }
        //token
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })
        res.status(200).send({
            message: "Login Sucessfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        })
    }
};

export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body;
        if (!email) {
            res.status(500).send({ message: 'Email is required' })
        }
        if (!answer) {
            res.status(500).send({ message: 'Answer is required' })
        }
        if (!newPassword) {
            res.status(500).send({ message: 'New Password is required' })
        }
        //check email and password
        const user = await userModel.findOne({ email, answer })
        if (!user) {
            res.status(404).send({
                success: false,
                message: 'Wrong Email Or Answer'
            })
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            success: false,
            message: 'Password Reset Successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(404).send({
            success: false,
            message: 'Something went wrong',
            error
        })
    }
};

//test Controller 
export const testController = (req, res, next) => {
    res.send({
        message: 'Protected Route'
    })

}