import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url: string) {
  const [error, setError] = useState(null);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(url);
      console.log(response.data);

      setProductList(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { error, loading, productList };
}
export default useFetch;
