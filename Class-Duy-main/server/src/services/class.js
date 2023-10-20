import db from "../models";
import {Op} from 'sequelize'

//READ
export const getClasses = ({page, limit, order, name, available, ...query}) => new Promise( async(resolve, reject) =>{
    try{
        const queries = {raw: true, nest: true}
        
        

        if (order) queries.order = [order]
        if (name) query.title = {[Op.substring]: name}
        if (available) query.available = {[Op.between]: available}
        const response= await db.Class.findAndCountAll({
            where: query,
            ...queries,
            attributes:{
                exclude: ['teacher_name']
            },
            include: [
                {model: db.Teacher, attributes: {exclude: ['createdAt', 'updatedAt']}, as: 'teacherData'}
            ]
        })         
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got' : 'Cannot found class',
            classData: response
        })      
    }catch (error){
        reject(error)
    }
})

//CREATE
export const createNewClass = (body) => new Promise( async(resolve, reject) =>{
    try{
        const response= await db.Class.findOrCreate({
            where: { class_name: body?.class_name  },
            defaults: { ...body  }
        })    
        console.log(response)
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created' : 'Cannot create class',
        })        
    }catch (error){
        reject(error)       
    }
})

//UPDATE
export const updateClass = ({classID, ...body}) => new Promise( async(resolve, reject) =>{
    try{
        
        const response= await db.Class.update(body,{
            where : { id : classID }        
        })    
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} class updated` : 'Cannot update class/ ClassID not found',
        })       
    }catch (error){
        reject(error)  
    }
})

//DELETE
export const deleteClass = ( {classID} ) => new Promise( async(resolve, reject) =>{
    try{
        const response= await db.Class.destroy({
            where : { id : classID }
        })    
        resolve({
            err: response > 0 ? 0 : 1,
            mes: `${response} class deleted`
        }) 
         
    }catch (error){
        reject(error)
    }
})
