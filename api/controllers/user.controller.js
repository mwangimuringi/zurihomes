export const test = ( req, res) => {
    res.json({
        message: 'Api route is working!'
    })
}
export const updateUser = ( req, res, next) => {
    if(req.user.id !== req.params.id) {
        return next(errorHandler(401, 'Unauthorized', 'You are not authorized to update this user'));
    }
}