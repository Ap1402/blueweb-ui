import axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://localhost:4000/api/reports/";

const registerReport = async (message, categoryId) => {
  console.log(message);
  const result = await axios
    .post(
      API_URL,
      {
        message,
        categoryId,
      },
      {
        headers: {
          "x-auth-token": authHeader(),
        },
      }
    )
    .then((result) => {
      return {
        success: true,
        message:
          "Reporte con código " +
          result.data.id +
          " creado correctamente, nos contactaremos con usted pronto.",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const getCategories = async () => {
  const categories = await axios.get(
    "http://localhost:4000/api/admin/reportCategories/",
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  );
  return categories.data;
};

const getReports = async (query) => {
  const categories = await axios.get("http://localhost:4000/api/reports", {
    params: {
      page: query.page,
      size: query.size,
      status: query.status || null,
    },
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return categories.data;
};

const getReportById = async (reportId) => {
  const report = await axios.get(
    "http://localhost:4000/api/reports/" + reportId,
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  );
  return report.data;
};

export default {
  registerReport,
  getCategories,
  getReports,
  getReportById
};
