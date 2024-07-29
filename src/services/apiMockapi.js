import axios from 'axios';

const apiMockapi = axios.create({
  baseURL: 'https://65e08b06d3db23f762498d00.mockapi.io',

});


export default apiMockapi;




// axios.defaults.headers.common = { 'content-type': 'application/json' };
// axios.defaults.baseURL = 'https://65ef7128ead08fa78a5074be.mockapi.io';

// export const ITEMS_PER_PAGE = 4;



// export const getCampers = async (page = 1) => {
//   const { data } = await axios.get(`/adverts`, {
//     params: {
//       page,
//       limit: 4,
//     },
//   });

//   return data;
// };

// export const getCamperById = async id => {
//   const { data } = await axios.get(`/adverts/${id}`);

//   return data;
// };

// export const getFilterdCampers = async filter => {
//   const { location, vehicleType, Automatic } = filter;
//   let params = {};

//   if (location) {
//     params.location = location;
//   }

//   if (vehicleType) {
//     params.form = vehicleType;
//   }

//   if (Automatic) {
//     params.transmission = 'automatic';
//   }

//   const { data } = await axios.get(`/adverts`, {
//     params,
//   });

//   return data;
// };