//���ð������
const { injectBabelPlugin } = require('react-app-rewired');
//�����޸�less�ļ�
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config,
    );
    //�޸�ȫ����ɫ
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#61DAFB" },
        javascriptEnabled: true,
    })(config, env);
    return config;
};