const usersApi = ("https://jsonplaceholder.typicode.com/users");
async function fetchUser$() {
    try {
      const reposne = await fetch(usersApi);
      return await reposne.json()
    } catch (error) {
      console.log("Fetch user get error", error);
    }
  }
export {fetchUser$}