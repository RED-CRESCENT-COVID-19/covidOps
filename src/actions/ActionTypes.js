export default { Types, Creators } = createActions({
    getCodeRequest: null,
    getCodeSuccess: ['codeSuccess'],
    getCodeFailure: ['error']
})

