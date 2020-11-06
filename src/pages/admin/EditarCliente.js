import React, { useEffect, useState } from "react";
import axios from "axios";

const EditarCliente = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const clientId = this.props.location.query.clientId;

        const result = await axios
          .get("http://localhost:4000/api/clients/" + clientId)
          .catch((err) => {
            console.log(err);
          });
        setData(result.data);
        return;
      } catch (err) {}
    };
    getData();
  }, []);

  return <div>{console.log(data)}</div>;
};

export default EditarCliente;
