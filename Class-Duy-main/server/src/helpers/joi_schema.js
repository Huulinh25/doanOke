import joi from "joi";

export const email = joi.string().pattern(new RegExp("gmail.com$")).required();
export const password = joi.string().min(6).required();
//CLASS
export const name = joi.string().min(3).max(30).required();
export const class_name = joi.string().required();
export const status = joi.string();
export const total_students = joi.number().required();
export const teacher_name = joi.string().required();
export const classID = joi.number().required();
// export const image = joi.string().required();
// export const bookId = joi.string().required();
// export const bookIds = joi.array().required();
// export const filename = joi.array().required();
// export const refreshToken = joi.string().required();
