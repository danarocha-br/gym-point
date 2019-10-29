import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationContoller from './app/controllers/RegistrationContoller';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);
routes.get('/students', StudentController.index);
routes.get('/students/:studentId', StudentController.show);
routes.put('/students/:studentId', StudentController.update);
routes.delete('/students/:studentId', StudentController.delete);

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

export default routes;
