import apisauce from 'apisauce'
import config from '../config'
 const verifyPhone = (baseURL = config.ROOT_URL, number) => {
    const api = apisauce.create({
        baseURL,
        timeout: 15000
    })
    const getCode = () => api.post(
        '/v1/auth/phone',
        {
            phone: number
        }
    )
    return {
        getCode,
    }
}
 const verifyCode = (baseURL = config.ROOT_URL, pin) => {
    const api = apisauce.create({
        baseURL,
        timeout: 15000
    })
    const getToken = () => api.post(
        '/v1/auth/pin-validation',
        {
            phone: param.number,
            pin: pin
        }
    )
    return {
        getToken
    }
}
export default {
    verifyPhone,
    verifyCode
}