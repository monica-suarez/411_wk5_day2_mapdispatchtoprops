export const addCar = (car) =>{
    return{
        type: "ADD_CAR", 
        value: car
    }
}

export const removeCar = (idx) => {
    return {
        type: 'REMOVE_CAR',
        value: idx
    }
}