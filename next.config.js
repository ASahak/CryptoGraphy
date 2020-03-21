require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    cssModules: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,
            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ];
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['assets'] = path.join(__dirname, 'public/assets');
        config.resolve.alias['config'] = path.join(__dirname, 'config');
        config.resolve.alias['utils'] = path.join(__dirname, 'utils');
        config.resolve.alias['store'] = path.join(__dirname, 'store');
        return config;
    }
};