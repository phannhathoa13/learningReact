const listUsersApi = ("https://jsonplaceholder.typicode.com/users");
async function fetchListUsers$() {
    try {
        const reponse = await fetch(listUsersApi);
        return await reponse.json()
    } catch (error) {
        console.log("Fetch list user ger erorr", error);
    }
}
export { fetchListUsers$ }