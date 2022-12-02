import { Schema, model } from 'mongoose';

const albumSchema = new Schema({
  performer: { type: String },
  title: { type: String },
  cost: { type: Number },
});

// o Mongo vai fazer collection com nome: 'Album'-> 'albums'
const AlbumModel = model('Album', albumSchema);

export default AlbumModel;
