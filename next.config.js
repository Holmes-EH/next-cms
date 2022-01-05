module.exports = {
	reactStrictMode: true,
	i18n: {
		locales: ['fr'],
		defaultLocale: 'fr',
	},
	images: {
		domains: ['cdn.pixabay.com'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}
