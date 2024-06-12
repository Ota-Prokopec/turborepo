export default async ({ req, res, log, error }) => {
	const apiUrl = 'https://graphql.mypets.cz';

	const responseFromGraphql = await fetch(apiUrl, { method: 'GET' });

	return res.json({
		response: responseFromGraphql,
	});
};
