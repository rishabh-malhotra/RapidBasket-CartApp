export async function handleResponse(response) {
    //console.log("response",response.data);
    if (response.status===200) 
      return response.data;
    else {
      console.log(response)
      // So, a bad request or server-side error occurred.
      // Server side validation returns a string error message, so parse as text instead of json.  managed by json-server
      const error = await response.text();
      throw new Error(error);
    }
  }
  
// Log error in case encountered
  export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
  }
  