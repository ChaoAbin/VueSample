module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            return {
                resolve: {
                    alias: {
                        'vue$': 'vue/dist/vue.esm.js'
                    }
                }
            };
        } else {
            // 为开发环境修改配置...
            return {
                resolve: {
                    alias: {
                        'vue$': 'vue/dist/vue.esm.js'
                    }
                }
            };
        }
    }
}