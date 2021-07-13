import { customAxios } from "lib/CustomAxios";

export const GETCOMMENTPOSTS = async () => {
  const url = `/hotplace/all?option=comment`;
  const { data } = await customAxios.get(url);
  console.log(data);
  return data;
};

export const GETSTARPOSTS = async () => {
  const url = `/hotplace/all?option=star`;
  const { data } = await customAxios.get(url);
  console.log(data);
  return data;
};

export const ADDPOSTS = async (a) => {
  const url = "/hotplace";
  const { data } = await customAxios.post(url, a);
  console.log(data);
  return data;
};

export const GETRECENTPOSTS = async () => {
  const url = `/hotplace/search?keyword`;
  const { data } = await customAxios.get(url);
  console.log(data);
  return data;
};

export const ADDCOMMENT = async (a) => {
  const url = `/comment/${a.idx}`;
  const { data } = await customAxios.post(url, a.data);
  console.log(data);
  return data;
};

export const UPLOADIMAGE = async (form) => {
  const url = `/upload`;
  const { data } = await customAxios.post(url, form);
  console.log(data);
  return data;
}

export const ADDPOST = async (reqData) => {
  const url = '/hotplace';
  const data = await customAxios.post(url, reqData);
  console.log(data);
  return data.data.status;
}

export const GETPOSTINFO = async (idx) => {
  const url = `/hotplace/${idx}`;
  const { data } = await customAxios.get(url);
  console.log(data);
  return data;
}

export const DELETECOMMENT = async(idx) => {
  const url = `/comment/${idx}`;
  const { data } = await customAxios.delete(url);
  console.log(data);
  return data;
}