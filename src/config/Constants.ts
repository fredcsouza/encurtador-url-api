import 'dotenv/config'

export const config = {
	API_URL: process.env.API_URL,
	MONGO_CONNECTION:
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@encurtador-url.m3ysv.mongodb.net/encurtador-url?retryWrites=true&w=majority`,
}
