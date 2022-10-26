// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	const resp = await fetch('https://mydb.vercel.app/api/data');
	const data = await resp.json();
	const dataArr = [
		{ name: 'Vim中注定', id: 0, photo: 'https://cataas.com/cat/cute/says/0' },
		{
			name: '電腦他媽...電腦螢幕',
			id: 1,
			photo: 'https://cataas.com/cat/cute/says/1'
		},
		{
			name: '胡迪死了...盛夏光年',
			id: 2,
			photo: 'https://cataas.com/cat/cute/says/2'
		},
		{
			name: '佛跳牆的英文...God use VPN',
			id: 3,
			photo: 'https://cataas.com/cat/cute/says/3'
		},
		{
			name: '小明：欸小美你超會搭，然後小美就被燒死了',
			id: 4,
			photo: 'https://cataas.com/cat/cute/says/4'
		},
		{
			name: '我跟你們說一件事實...兩件80',
			id: 5,
			photo: 'https://cataas.com/cat/cute/says/5'
		},
		{
			name: '死掉的腎臟，猜一本中國小說...西遊記（台語：死腰子）',
			id: 6,
			photo: 'https://cataas.com/cat/cute/says/6'
		},
		{
			name: '很多離婚的女人，猜一成語...前功盡棄（前公盡棄）',
			id: 7,
			photo: 'https://cataas.com/cat/cute/says/7'
		},
		{
			name: '大象的媽媽為什麼是猩猩??...象由猩生',
			id: 8,
			photo: 'https://cataas.com/cat/cute/says/8'
		},
		{
			name: '和尚下班，猜一地名...關廟',
			id: 9,
			photo: 'https://cataas.com/cat/cute/says/9'
		},
		{
			name: '哪位總統最愛吃零食？...袁世凱，因為他是臨時大總統。',
			id: 10,
			photo: 'https://cataas.com/cat/cute/says/10'
		}
	];
	res.status(200).json(data);
}

