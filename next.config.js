/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		BASE_URL: "http://localhost:3000",
        API_URL: "http://localhost:3500/api",
	},
};

module.exports = nextConfig;
