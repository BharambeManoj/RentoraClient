

import axios from "axios";

const API = axios.create({
  // baseURL: "https://rentoraserver.onrender.com/api", // no trailing slash
});

// ✅ User Auth
export const UserSignUp = async (data) =>
  await API.post("/user/signup", data);

export const UserSignIn = async (data) =>
  await API.post("/user/signin", data);

// ✅ Property
export const getAllProperty = async (filter) =>
  await API.get(`/property/get?${filter}`);

export const getPropertyDetails = async (id) =>
  await API.get(`/property/${id}`);

// ✅ Favourites
// export const getFavourite = async (token) =>
    
//   await API.get(`/user/getFavorites`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
export const getFavourite = async (token, data) => {
    if (!token) throw new Error("User not logged in");
    return await API.get(`/user/getFavorites/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

export const addToFavourite = async (token, data) =>
  await API.post(`/user/addToFavorites`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteFromFavourite = async (token, data) =>
  await API.post(`/user/removeFavorites`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// ✅ Booking
export const bookProperty = async (token, data) =>
  await API.post(`/user/booking`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getBookedProperty = async (token) =>
  await API.get(`/user/getBooking`, {
    headers: { Authorization: `Bearer ${token}` },
  });
