// import axios from "axios";  

// const API_URL = "http://localhost/api/api.php"; 

// const FetchData = async () => {
//   try {
//     const response = await axios.get(API_URL);  
//     return  response.data;
//   } catch (error) {
//     return console.error(error); 
//   }
// };

// export default FetchData ;


import axios from "axios";

const API_URL = "http://localhost:8000/api.php";

const FetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; 
  }
};

export default FetchData;
