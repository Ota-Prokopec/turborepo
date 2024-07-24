/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'cloudinary',
		path: '/',
		domains: ['res.cloudinary.com'],
	},
}

export default nextConfig
