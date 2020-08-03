const axios = require('axios');
const get = endpoint => axios.get(`http://localhost:4000${endpoint}`);

exports.createPages = async ({ actions: { createPage } }) => {
	try {
		const response = await get('/course')
		const courses = response.data.rows
		if (courses && courses.length > 0) {

			courses.map(course => {

				createPage({
					path: `/courses/${course.id}`,
					component: require.resolve('./src/templates/Course/index.tsx'),
					context: { course }
				});
			})
		} else {
			const dummyCourse = {
				id: 1,
				title: 'dummyCourse',
				description: 'description',
				price: 1,
				createdAt: new Date(),
				published: true,
				updatedAt: new Date(),
				videoUrl: 'asdfasdf',
				lessons: [{
					description: '',
					id: 1,
					priority: 1,
					published: true,
					title: 'title',
					updatedAt: new Date(),
					videoUrl: 'asdfasdf',
					createdAt: new Date(),
					courseId: 1,
				}]

			}
			createPage({
				path: `/courses/${dummyCourse.id}`,
				component: require.resolve('./src/templates/Course/index.tsx'),
				context: { course: dummyCourse }
			});
		}
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
	if (page.path.match(/^\/my-courses/)) {
		page.matchPath = "/my-courses/*"

		// Update the page.
		createPage(page)
	}
	if (page.path.match(/^\/lessons/)) {
		page.matchPath = "/lessons/*"

		// Update the page.
		createPage(page)
	}
}



exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /auth0-js/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}