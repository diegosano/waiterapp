import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { createCategory } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, callback) => {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (_req, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);

router.get('/orders', (req, res) => {
  res.send('OK');
});
router.post('/orders', (req, res) => {
  res.send('OK');
});
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});