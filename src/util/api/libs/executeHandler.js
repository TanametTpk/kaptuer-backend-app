
const executeHandler = (errorHandler) => {

    return (error) => {

        if (errorHandler) errorHandler(error)

    }

}

export default executeHandler