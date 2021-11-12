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

export const register = async (dataObj) => {
  console.log(dataObj);
  let res = await axios.post(`http://localhost:2345/register`, dataObj);
  console.log(res);
  return res.data;
};

export const login = async (dataObj) => {
  let res = await axios.post(`http://localhost:2345/login`, dataObj);
  console.log(res.data);
  return res.data;
};
// 618e3961951017c8cab7545d

export const update = async (data) => {
  console.log(data);
  let res = await axios.patch(
    `http://localhost:2345/users/${data.id}`,
    data.profile_pic
  );
  return res.data;
};
