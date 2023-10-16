import { axiosInstanceInfoDesign } from "./Instance"

export const getAllSections = (data : any) => {
    return axiosInstanceInfoDesign.post('tramos', data);
}

export const getAllSectionsForUsers = (data : any) => {
    return axiosInstanceInfoDesign.post('cliente', data);
}

export const getAllWorstSections = (data : any) => {
    return axiosInstanceInfoDesign.post('tramos-cliente', data);
}