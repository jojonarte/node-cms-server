import makeLoginUseCase from './login.usecase';

const usersDb = ({
  findUser: (username, password) => true,
});
const loginUseCase = makeLoginUseCase({ usersDb })

export {
  loginUseCase,
};