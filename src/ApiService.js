const url = "http://localhost:2020/api";
async function fetchLocations() {
  const response = await fetch(`${url}/locations`);
  const data = await response.json();
  return data;
}

async function fetchLocationNameById(id) {
  if (id) {
    const response = await fetch(`${url}/location/${id}`);
    const data = await response.json();
    return data.name;
  }
}

async function fetchMealTypes() {
  const response = await fetch(`${url}/mealtypes`);
  const data = await response.json();
  return data;
}

async function fetchMealTypeNameById(id) {
  const response = await fetch(`${url}/mealtype/${id}`);
  const data = await response.json();
  return data.name;
}

async function fetchFilteredRestaurants(requestBody) {
  const response = await fetch(`${url}/filter`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });
  const data = await response.json();
  return data;
}

async function fetchRestaurantById(id) {
  const response = await fetch(`${url}/getrestaurantbyid/${id}`);
  const data = await response.json();
  return data.restaurant;
}

 

export { fetchLocations, fetchMealTypes, fetchFilteredRestaurants, fetchLocationNameById, fetchMealTypeNameById, fetchRestaurantById };
