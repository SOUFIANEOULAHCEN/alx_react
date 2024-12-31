export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const REINISILASER = "REINISILASER";

export const increment = () =>{
    return {
        type:INCREMENT 
    }
}

export const decrement = () =>{
    return {
        type:DECREMENT 
    }
}
export const reinisialer = () =>{
    return {
        type:REINISILASER 
    }
}