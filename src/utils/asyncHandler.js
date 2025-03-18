// with promises

const asyncHandler = (requestHandler) => {
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}


export {asyncHandler}

/* doing it with try catch type

const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await frameElement(req,res,next)
    } catch (err) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
    */