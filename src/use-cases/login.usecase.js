export default function makeLogin({ usersDb }) {
  return async function login({ username, password }) {
    // TODO: handle salting/decryption etc
    return usersDb.findUser(username, password);
  }
}