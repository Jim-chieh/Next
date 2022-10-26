export default async function handler(req, res) {
	const { dataId } = req.query;
	const resp = await fetch('https://mydb.vercel.app/api/data');
	const data = await resp.json();

	const resObj = data.filter(data => data.id.toString() === dataId);
	res.send(resObj[0]);
}
