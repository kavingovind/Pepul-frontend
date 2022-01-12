const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#1890ff",
                            "@border-radius-base": "4px",
                            "@card-radius": "10px",
                            "@font-family": "'Hind', sans-serif",
                            "@layout-body-background": "#fff",
                            "@layout-header-background": "#fff",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
