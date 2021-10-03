const BASE_URL="https://41dd3398-899c-435b-841a-43a643d979b1.mock.pstmn.io";

  
  const apiSettings = {
    fetchTodos: async () => {
        const data =await (await fetch(`${BASE_URL}/gettodos`)).json();  
        console.log(data);
        return data;
      }
}
  
  export default apiSettings;
  