import express from 'express';
const Router = express.Router();
import { verifySuperAdmin } from '../../middlewares/verifySuperAdmin';
import { deleteAdmin, getAllAdmins } from './adminController';
import { verifyAdmin } from '../../middlewares/verifyAdmin';

Router.get('/all', verifyAdmin, getAllAdmins);
Router.delete('/delete/:id', verifySuperAdmin, deleteAdmin);

export const adminRoute = Router;
