import express from 'express';
import AlbumModel from '../models/album.model.js';
// Rotas
const albumRoute = express.Router();
//
// rota, do index: /album/....
//
// 2.1 Crie a rota POST /albums
//
albumRoute.post('/albums', async (req, res) => {
  try {
    const newAlbum = await AlbumModel.create(req.body);
    return res.status(201).json(newAlbum);
    //
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});
//
// 2.2 Crie a rota GET /albums
//
albumRoute.get('/albums', async (req, res) => {
  try {
    const allAlbum = await AlbumModel.find({});
    return res.status(201).json(allAlbum);
    //
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});
//
// 2.3 Crie a rota GET /albums/:albumId
//
albumRoute.get('/albums/:albumId', async (req, res) => {
  try {
    //
    const { albumId } = req.params;
    const oneAlbum = await AlbumModel.findById(albumId);
    return res.status(200).json(oneAlbum);
    //
  } catch (error) {
    onsole.log(error);
    return res.status(400).json(error.errors);
  }
});
//
// 2.4 Crie a rota PUT /albums/:albumId
//
albumRoute.get('/edit/:albumId', async (req, res) => {
  try {
    //
    const { albumId } = req.params;
    const updatedAlbum = await AlbumModel.findOneAndUpdate(
      { albumId: albumId },
      { ...req.body },
      { new: true, runValidators: true }
    );
    //
    return res.status(200).json(updatedAlbum);
    //
  } catch (error) {
    onsole.log(error);
    return res.status(400).json(error.errors);
  }
});
//

export default albumRoute;
