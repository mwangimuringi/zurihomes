import axios from 'axios';

const API_URL = "https://apiwatenant.weiseragencies.com/api";

async function fetchProperties(page = 1, search = '', user_login_id) {
    try {
        const response = await axios.get(`${API_URL}/property/getall`, {
            params: {
                page,
                search,
                user_id: user_login_id
            }
        });

        if (response.status !== 200) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const { properties } = response.data; // Extracting the `data` object from the response
        return {
            properties: properties.data, // The actual properties data
            currentPage: properties.current_page,
            totalPages: properties.last_page,
            totalRecords: properties.total,
        };
    } catch (error) {
        console.error('Error fetching properties:', error);
        return { properties: [], currentPage: 1, totalPages: 0, totalRecords: 0 };
    }
}

export { fetchProperties };


















//import axios from 'axios';

//const API_URL = "https://apiwatenant.weiseragencies.com/api";


//async function fetchProperties(page = 1, search = '',user_login_id) {
    ///try {
    //    const url = await axios.get(`${API_URL}/property/getall?page=${page}&search=${search}&user_id=${user_login_id}`);
  //      const response=await axios.get(url);
//if (response.status !== 200) {
         //   throw new Error(`Network response was not ok: ${response.statusText}`);
       // }
        //const { properties } = response.data; // Extracting the `data` object from the response
        //return {
            //properties: properties.data, // The actual properties data
           // currentPage: properties.current_page,
          //  totalPages: properties.last_page,
        //    totalRecords: properties.total,
      //  };
    //} catch (error) {
      //  console.error('Error fetching properties:', error);
    //    return { properties: [], currentPage: 1, totalPages: 0, totalRecords: 0 };
  //  }
//}

//export { fetchProperties };
