import { useState } from "react";
import axios from "axios";

const useCrud = (baseUrl) => {
  const [infoApi, setInfoApi] = useState([]);

  // GET
  const getApi = (path, errorCallback) => {
    const url = `${baseUrl}${path}/`;
    axios.get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => errorCallback ? errorCallback(err) : console.error(err));
  };

  // POST
  const postApi = (path, data, errorCallback) => {
    const url = `${baseUrl}${path}/`;
    axios.post(url, data)
      .then((res) => {
        setInfoApi((prevInfoApi) => [...prevInfoApi, res.data]);
      })
      .catch((err) => errorCallback ? errorCallback(err) : console.error(err));
  };

  // DELETE
  const deleteApi = (path, id, errorCallback) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios.delete(url)
      .then(() => {
        setInfoApi((prevInfoApi) => prevInfoApi.filter((e) => e.id !== id));
      })
      .catch((err) => errorCallback ? errorCallback(err) : console.error(err));
  };

  // UPDATE
  const updateApi = (path, id, data, errorCallback) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios.patch(url, data)
      .then((res) => {
        setInfoApi((prevInfoApi) => prevInfoApi.map((e) => (e.id === id ? res.data : e)));
      })
      .catch((err) => errorCallback ? errorCallback(err) : console.error(err));
  };

  return [infoApi, getApi, postApi, deleteApi, updateApi];
};

export default useCrud;
