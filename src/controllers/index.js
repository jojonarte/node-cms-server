import { loginUseCase } from '../use-cases/';

import makeLoginController from './login.controller';

const loginController = makeLoginController({ loginUseCase });

export { loginController };