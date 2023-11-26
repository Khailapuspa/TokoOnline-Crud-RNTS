
export const BASE_URL = "http://[::1]:3000"

interface initialParamsType{
    title : string,
    desc : string,
    harga : number
}


fetch(`${BASE_URL}/bajus`);

fetch(`${BASE_URL}/bajus`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Kaos Rumahan',
    desc: 'Nyaman dan Simpel',
    harga: 20000
  }),
});

const getProdukFromApiAsync = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/bajus`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
        console.error(error);
    }
  };