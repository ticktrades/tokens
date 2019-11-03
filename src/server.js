import sirv from 'sirv';
import polka from 'polka';
import bodyParser from 'body-parser';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const app = polka();
app.use( // You can also use Express
	bodyParser.json(),
	compression({ threshold: 0 }),
	sirv('static', { dev, dotfiles: true }),
	sapper.middleware()
)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

export default app.handler;
