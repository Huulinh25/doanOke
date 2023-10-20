import * as services from "../services";
import { internalServerError, badRequest } from "../middlewares/handle_errors";
import { class_name,status, total_students, teacher_name } from "../helpers/joi_schema";
import joi from 'joi'

export const getClasses= async (req, res) =>{
    try{      
        const response = await services.getClasses(req.query)
        return res.status(200).json(response)

    }catch (error){
        console.log(error)
        return internalServerError(res)
    }
}
//CREATE
export const createNewClass= async (req, res) =>{
    try{      
        const { class_name, status, total_students, teacher_name } = req.body
        const {error} = joi.object({ class_name, status, total_students, teacher_name  }).validate({class_name, status, total_students, teacher_name})
        if (error) {
           
            return badRequest(error.details[0].message, res)
        }
        const response = await services.createNewClass(req.body)
        return res.status(200).json(response)

    }catch (error){
        return internalServerError(res)
    }
}

//UPDATE
export const updateClass= async (req, res) =>{
    try{      
        const { classID } = req.body
        const {error} = joi.object({ classID }).validate( { classID } )
        if (error) {         
            return badRequest(error.details[0].message, res)
        }
        const response = await services.updateClass(req.body)
        return res.status(200).json(response)

    }catch (error){
        return internalServerError(res)
    }
}

//DELETE
export const deleteClass = async (req, res) => {
  try {
    const { classID } = req.params; // Extract classID from URL parameter
    const { error } = joi.object({ classID }).validate({ classID });
    if (error) {
      return badRequest(error.details[0].message, res);
    }
    const response = await services.deleteClass({ classID }); // Pass classID as an object property
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
}