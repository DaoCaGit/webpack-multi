const env = process.env.ENVIROMENT.trim();
if (env === 'test') {
    return false;
}
const option = process.env.OPTION ? process.env.OPTION.trim() : "";
const webpackConfigFn = require(`./build/webpack.config.${env}`);
module.exports = webpackConfigFn(env,{ option })
