import * as Yup from "yup"

export const formSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("please enter value"),
    fatherName:Yup.string().min(2).max(25).required("please enter value"),
    passportNo:Yup.string().min(2).max(25).required("please enter value"),
    nationality:Yup.string().min(2).max(25).required("please enter value"),
    trade:Yup.string().min(2).max(25).required("please enter value"),
    careOf:Yup.string().min(2).max(25).required("please enter value"),
    status:Yup.string().min(2).max(25).required("please enter value"),
    dateOfBirth:Yup.date().required("please enter DOB").nullable().default(undefined),
    passportExpiryDate:Yup.date().required("please enter PP Exp. Date").nullable().default(undefined)
})