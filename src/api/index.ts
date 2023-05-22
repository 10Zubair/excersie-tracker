import axios from "axios";

export type payloadType = {
  userName: string;
  userEmail: string;
  id: string;
};
type createUserType = {
  userName: string;
  userEmail: string;
};

export const getData = () => {
  return axios.get("http://localhost:3000/users").then((res) => {
    const persons = res.data.map((item: any) => {
      item.id = item._id;
      return item;
    });
    return persons;
  });
};

export const createUserAsync = (payload: createUserType) => {
  return axios.post("http://localhost:3000/users/add", payload).then((res) => {
    console.log(res);
    console.log(res.data);
  });
};
