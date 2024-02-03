/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.atrucks.su"
            }
        ]
    }
};

export default nextConfig;
