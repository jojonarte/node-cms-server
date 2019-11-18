import { loginUseCase} from '../use-cases/';

const loginController = makeLoginController({ loginUseCase });

export { loginController };