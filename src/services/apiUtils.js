export async function handleResponse(response) {
    //console.log(response.json());
    if (response.ok) return response.json();
    if (response.status === 400) {
      // So, a bad request or server-side error occurred.
      // Server side validation returns a string error message, so parse as text instead of json.  managed by json-server
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok.");
  }
  
// Log error in case encountered
  export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
  }
  