
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "**.googleusercontent.com",
            port:'',
        }]
    },
    // webpack: (config, {webpack}) => {
    //     config.plugins.push(new webpack.IgnorePlugin({
    //         resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
    //     }))

    //     return config
    // }
};

export default nextConfig;
