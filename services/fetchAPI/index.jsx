const postAPI = async (
  URL,
  body,
  method = "POST",
  headers = { "Content-Type": "application/json" }
) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
      throw new Error("URL bulunamadı!");
    }
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));

    return data;
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};
const patchAPI = async (
  URL,
  body,
  method = "PATCH",
  headers = { "Content-Type": "application/json" }
) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
      throw new Error("URL bulunamadı!");
    }
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));

    return data;
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};

const getAPI = async (
  URL,
  headers = { "Content-Type": "application/json" }
) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
    method: "GET",
    headers: headers,
    cache: "no-store",
  })
    .then((res) => {
      if (res.redirected) {
      } else {
        return res.json();
      }
    })
    .catch((err) => console.log(err));

  return data;
};

const deleteAPI = async (
  URL,
  method = "DELETE",
) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
      throw new Error("URL bulunamadı!");
    }
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
      method: method,
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));

    return data;
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};
const putAPI = async (
  URL,
  body,
  method = "PUT",
  headers = { "Content-Type": "application/json" }
) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
      throw new Error("URL bulunamadı!");
    }
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL + URL}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));

    return data;
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};
export { postAPI, getAPI, patchAPI, deleteAPI, putAPI };

