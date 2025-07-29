import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import { BASE_URL, SECRET } from "../global";
import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { sign } from "jsonwebtoken";



const prisma = new PrismaClient({ errorFormat: "pretty" })

export const getAllUsers = async (request: Request, response: Response) => {
    try {
      
        const { search } = request.query

        
        const allUser = await prisma.user.findMany({
            where: { name: { contains: search?.toString() || "" } }
        })

        return response.json({
            status: true,
            data: allUser,
            message: `user has retrieved`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}

export const getUserById = async (request: Request, response: Response) => {
    try {
    
        const { id } = request.body.user

        if (!id) {
            return response
            .json({
                status: false,
                message: `User Not Found`
            })
            .status(400)
        }

       
        const allUser = await prisma.user.findFirst({
            where: { id: Number(id) }
        })

        return response.json({
            status: true,
            data: allUser,
            message: `user has retrieved`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}

export const createUser = async (request: Request, response: Response) => {
    try {
       
        const {name, email, password, role, alamat, telephone } = request.body
        const uuid = uuidv4()

       
        let filename = ""
        if (request.file) filename = request.file.filename 

       
        const newUser = await prisma.user.create({
            data: { uuid, name, email, password: md5(password), role, profile_picture: filename, alamat, telephone }
        })

        return response.json({
            status: true,
            data: newUser,
            message: `New user has created`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}



export const updateUser = async (request: Request, response: Response) => {
    try {
     
        const { id } = request.params
      
        const { name, email, password, role } = request.body

      
        const findUser = await prisma.user.findFirst({ where: { id: Number(id) } })
        if (!findUser) return response
            .status(200)
            .json({ status: false, message: `user is not found` })

       
        let filename = findUser.profile_picture
        if (request.file) {
           
            filename = request.file.filename
          
            let path = `${BASE_URL}/../public/profile_picture/${findUser.profile_picture}`
            let exists = fs.existsSync(path)
           
            if(exists && findUser.profile_picture !== ``) fs.unlinkSync(path)
        }

      
        const updatedUser = await prisma.user.update({
            data: {
                name: name || findUser.name,
                email: email || findUser.email,
                password: password ? md5(password) : findUser.password,
                role: role || findUser.role,
                profile_picture: filename
            },
            where: { id: Number(id) }
        })

        return response.json({
            status: true,
            data: updatedUser,
            message: `user has updated`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}

export const changePicture = async (request: Request, response: Response) => {
    try {
       
        const { id } = request.params

      
        const findUser = await prisma.user.findFirst({ where: { id: Number(id) } })
        if (!findUser) return response
            .status(200)
            .json({ status: false, message: `User is not found` })
        
      
        let filename = findUser.profile_picture
        if (request.file) {
            /** update filename by new uploaded picture */
            filename = request.file.filename
            /** check the old picture in the folder */
            let path = `${BASE_URL}/../public/profile_picture/${findUser.profile_picture}`
            let exists = fs.existsSync(path)
            /** delete the old exists picture if reupload new file */
            if(exists && findUser.profile_picture !== ``) fs.unlinkSync(path)
        }
        
        
        const updatePicture = await prisma.user.update({
            data: { profile_picture: filename },
            where: { id: Number(id) }
        })

        return response.json({
            status: true,
            data: updatePicture,
            message: `Picture has changed`
        }).status(200)
    } catch (error) {
        return response.json({
            status: false,
            message: `There is an error. ${error}`
        }).status(400)
    }
}

export const deleteUser = async (request: Request, response: Response) => {
    try {
        
        const { id } = request.params
    
        const findUser = await prisma.user.findFirst({ where: { id: Number(id) } })
        if (!findUser) return response
            .status(200)
            .json({ status: false, message: `user is not found` })

       
        let path = `${BASE_URL}/public/profile_picture/${findUser.profile_picture}` /** define path (address) of file location */
        let exists = fs.existsSync(path)
        if (exists && findUser.profile_picture !== ``) fs.unlinkSync(path) /** if file exist, then will be delete */

        /** process to delete user's data */
        const deleteduser = await prisma.user.delete({
            where: { id: Number(id) }
        })
        return response.json({
            status: true,
            data: deleteduser,
            message: `user has deleted`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}

export const authentication = async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body /** get requested data (data has been sent from request) */

        /** find a valid admin based on username and password */
        const findUser = await prisma.user.findFirst({
            where: { email, password: md5(password) }
        })

     
        if (!findUser) return response
            .status(200)
            .json({ status: false, logged: false, message: `Email or password is invalid` })

        let data = {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            role: findUser.role,
            profile_picture: findUser.profile_picture,
        }

       
        let payload = JSON.stringify(data)


        let token = sign(payload, SECRET || "joss")

        return response
            .status(200)
            .json({ status: true, logged: true, data: data, message: `Login Success`, token })
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}