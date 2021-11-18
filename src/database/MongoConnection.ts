import { connect} from 'mongoose'
import { config } from '../config/Constants'

export const mongoConnect = async () => {
	try {
		await connect(config.MONGO_CONNECTION)
		console.log('Database connected')
	} catch (error) {
		console.error(error.message)
	}
}
