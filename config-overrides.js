//配置按需加载
const { injectBabelPlugin } = require('react-app-rewired');
//配置修改less文件
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config,
    );
    //修改全局配色
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#61DAFB" },
        javascriptEnabled: true,
    })(config, env);
    return config;
};