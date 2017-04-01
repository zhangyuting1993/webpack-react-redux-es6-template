module.exports = {
    path: 'page3',
    // getChildRoutes(partialNextState, cb) {
    //     require.ensure([], (require) => {
    //         cb(null,
    //             require('./routes/search').default)
    //     })
    // },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('containers/conPage3/index').default)
        }, 'Page3')
    },


}
