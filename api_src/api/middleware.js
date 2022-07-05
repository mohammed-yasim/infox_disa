import * as jwt from 'jsonwebtoken';
const infox_secret = "2CgRp_6PNpb"
function generateToken(data) {
    return jwt.sign(data, infox_secret, { expiresIn: '7d' })
}
let Middleware = (request, response, next) => {
    const token = request.headers.authorization
    if (!token) {
        response.status(401).send("Authentication failed")
    } else {
        jwt.verify(token, infox_secret, (err, value) => {
            if (!err) {
                request.token = token;
                request.user = value;
                next()
            } else {
                response.status(401).send(err.name + '-' + err.message)
            }
        })
    }
}
let rootMiddleware = (request, response, next) => {
    const token = request.headers.authorization
    if (!token) {
        response.status(401).send("Authentication failed")
    } else {
        jwt.verify(token, infox_secret, (err, value) => {
            if (!err) {
                request.token = token;
                request.user = value;
                if(value.u_type === 'root'){
                    next()
                }else{
                    response.status(403).send("Unauthorized");
                }
            } else {
                response.status(401).send(err.name + '-' + err.message)
            }
        })
    }
}
let adminMiddleware = (request, response, next) => {
    const token = request.headers.authorization
    if (!token) {
        response.status(401).send("Authentication failed")
    } else {
        jwt.verify(token, infox_secret, (err, value) => {
            if (!err) {
                request.token = token;
                request.user = value;
                if(value.u_type === 'admin' || value.u_type === 'root'){
                    next()
                }else{
                    response.status(403).send("Unauthorized");
                }
            } else {
                response.status(401).send(err.name + '-' + err.message)
            }
        })
    }
}
export { generateToken, Middleware,rootMiddleware,adminMiddleware }