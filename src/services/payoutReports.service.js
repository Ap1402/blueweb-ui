import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl() + "/payout-reports/";

const registerPayout = async (payout) => {
  const result = await axios
    .post(API_URL, payout, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .then((result) => {
      return {
        success: true,
        message: "Registro de pago enviado con éxito ",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const updatePayoutReport = async (payoutData, payoutId) => {
  const result = await axios
    .put(API_URL + payoutId, payoutData, {
      headers: {
        "x-auth-token": authHeader(),
      },
    })
    .then((result) => {
      return {
        success: true,
        message: "Reporte de pago actualizado con éxito",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const getPayoutReports = async (query, isForClient) => {
  const params = {};
  params.page = query.page;
  params.size = query.size;

  if (query.clientDni) {
    params.dni = query.clientDni;
  }
  if (query.orderBy) {
    params.orderBy = query.orderBy;
  }
  if (query.order) {
    params.order = query.order;
  }

  params.isApproved = query.isApproved ? query.isApproved : 0;

  if (!isForClient) {
    const reports = await axios.get(API_URL, {
      params: params,
      headers: {
        "x-auth-token": authHeader(),
      },
    });
    return reports.data;
  } else {
    const reports = await axios.get(API_URL + "me", {
      params: params,
      headers: {
        "x-auth-token": authHeader(),
      },
    });
    console.log(reports);
    return reports.data;
  }
};

export default {
  registerPayout,
  getPayoutReports,
  updatePayoutReport,
};
