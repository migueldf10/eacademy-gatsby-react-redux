const axios = require('axios');
const get = endpoint => axios.get(`http://localhost:4000${endpoint}`);

exports.createPages = async ({ actions: { createPage } }) => {
	try {
		const response = await get('/course')
		const courses = response.data.rows
		courses.map(course => {

			createPage({
				path: `/courses/${course.id}`,
				component: require.resolve('./src/templates/Course/index.tsx'),
				context: { course }
			});
		})
	} catch (e) {
		console.log('error', e)
	}
};

// Runs on every build page creation.

exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions

	// page.matchPath is a special key that's used for matching pages
	// only on the client. it lets us navigate to whatever comes after account. Separating marketing pages from app and not throwing errors

	if (page.path.match(/^\/account/)) {
		page.matchPath = "/account/*"

		// Update the page.
		createPage(page)
	}
}