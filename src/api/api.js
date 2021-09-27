import axios from "axios";

const baseUrl = "https://hotelinfoservice.sunwingtravelgroup.com";

//Get all hotel destinations
export const getAllHotelDestinationList = async () => {
  const { data } = await axios.get(`${baseUrl}/en/AllHotelDestinationList`);

  if (data) {
    return data;
  } else {
    console.log("bad req");
  }
};

//Get excursions of destination
export const getDestinationDetail = async (country, destination) => {
  const { data } = await axios.get(
    `${baseUrl}/1/en/excursionsCountryDestination/${country}/${destination}`
  );

  if (data) {
    return data;
  } else {
    console.log("Bad request");
  }
};
