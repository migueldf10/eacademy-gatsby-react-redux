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
