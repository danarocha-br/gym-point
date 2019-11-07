import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationContoller from './app/controllers/RegistrationContoller';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import AdminHelpOrderController from './app/controllers/AdminHelpOrderController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.get('/students/:studentId', StudentController.show);
routes.put('/students/:studentId', StudentController.update);
routes.delete('/students/:studentId', StudentController.delete);

routes.get('/students/:studentId/checkins', CheckinController.index);
routes.post('/students/:studentId/checkins', CheckinController.store);

routes.get('/help-orders', AdminHelpOrderController.index);
routes.post('/help-orders/:orderId/answer', AdminHelpOrderController.store);
routes.get('/students/:studentId/help-orders', HelpOrderController.index);
routes.post('/students/:studentId/help-orders', HelpOrderController.store);
routes.delete(
  '/students/:studentId/help-orders/:orderId',
  HelpOrderController.delete
);

routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.index);
routes.get('/plans/:planId', PlanController.show);
routes.put('/plans/:planId', PlanController.update);
routes.delete('/plans/:planId', PlanController.delete);

routes.post('/enrollments', RegistrationContoller.store);
routes.get('/enrollments', RegistrationContoller.index);
routes.get('/enrollments/:enrollmentId', RegistrationContoller.show);
routes.put('/enrollments/:enrollmentId', RegistrationContoller.update);
routes.delete('/enrollments/:enrollmentId', RegistrationContoller.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
