export default function makeLoginController({ loginUseCase }) {
  return async function login(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const { username, password } = httpRequest.params;
      const userFound = await loginUseCase({ username, password });

      return {
        headers,
        statusCode: userFound ? 200 : 404,
        body: { status: 'ok' }
      }
    } catch(err) {
      console.error(err);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}