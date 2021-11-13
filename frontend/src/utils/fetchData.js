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

export const getSIngleData = async (id) => {
  let res = await axios.get(`http://localhost:2345/product/${id}`);
  return res.data;
};

export const postData = async (dataObj) => {
  let res = await axios.post(`http://localhost:2345/product`, dataObj);
  return res.data;
};

export const register = async (dataObj) => {
  let res = await axios.post(`http://localhost:2345/register`, dataObj);
  return res.data;
};

export const login = async (dataObj) => {
  let res = await axios.post(`http://localhost:2345/login`, dataObj);
  return res.data;
};
// 618e3961951017c8cab7545d

export const update = async (data) => {
  let res = await axios.patch(
    `http://localhost:2345/users/${data.id}`,
    data.profile_pic
  );
  return res.data;
};
