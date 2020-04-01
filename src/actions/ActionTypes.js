import { createActions } from 'reduxsauce'
export default { Types, Creators } = createActions({
    getCodeRequest: null,
    getCodeSuccess: ['codeSuccess'],
    getCodeFailure: ['error']
})

