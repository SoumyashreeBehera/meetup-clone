import axios from "axios";

export const loadData = async ({
  eventCatagory,
  eventLocationType,
  eventType,
}) => {
  let res = await axios.get(
    `http://localhost:2345/product/eventType/${eventType}`,
    {
      params: {
        eventCatagory: eventCatagory,
        eventLocationType: eventLocationType,
      },
    }
  );
  return res.data.data;
};

export const postData = async (dataObj) => {
  let res = await axios.post(`http://localhost:2345/product`, dataObj);
  return res.data;
};
