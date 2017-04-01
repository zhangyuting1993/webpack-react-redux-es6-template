module.exports = {
    path: 'page2',
    // getChildRoutes(partialNextState, cb) {
    //     require.ensure([], (require) => {
    //         cb(null,
    //             require('./routes/search').default)
    //     })
    // },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('containers/conPage2/index').default)
        }, 'Page2')
    },


}
