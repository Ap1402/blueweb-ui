import React from 'react'
import axios from 'axios';

const EditarCliente = (props) => {

    return (
        <div>
            
            {console.log(props)}
        </div>
    )
}

EditarCliente.getInitialProps = async (ctx)=>{
    try {
        const { clientId} = ctx.query;
        const result = await axios
          .get("http://localhost:4000/api/clients/"+clientId)
          .catch((err) => {
            console.log(err);
          });
        return {
          client: result.data,
        };
      } catch (err) {
      }
}

export default EditarCliente
