import {Schema, model, connection} from 'mongoose'

type Url = {
	hash: string,
	shortURL: string,
	originURL: string
}

const schema = new Schema<Url>({
	hash: {type: String, required: true},
	shortURL: {type: String, required: true},
	originURL: {type: String, required: true}
})

const modelName: string = "Url"

export default (connection && connection.models[modelName]) ? 
	connection.models[modelName]
	:
	model<Url>(modelName, schema)
	;
