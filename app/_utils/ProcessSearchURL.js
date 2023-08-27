exports.processSearchURL = (data) => {
  const queryParams = new URLSearchParams();
  if (data.food) queryParams.set("food", data.food);
  if (data.shop) queryParams.set("shop", data.shop);
  if (data.address) queryParams.set("address", data.address);
  if (data.country) queryParams.set("country", data.country);
  const apiUrl = `/search?${queryParams}`;
  return apiUrl;
};
