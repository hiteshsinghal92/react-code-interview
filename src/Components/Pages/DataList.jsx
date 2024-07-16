import { useEffect, useState } from "react";

const DataList = () => {
  const [dataList, setDataList] = useState([]);

  const handleData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/", {
        // method:"GET"
      });
      console.log(data);
      const status = data.status;
      const response = await data.json();
      if (status === 200) {
        setDataList(response);
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleData();
  }, []);

  return <>{dataList && dataList.map((list) => <li>{list.title}</li>)}</>;
};

export default DataList;
