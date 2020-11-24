import axios from "axios";
import authHeader from "../helpers/getAuthToken";

const API_URL = "http://localhost:4000/api/reports/";

const registerReport = async (message, categoryId) => {
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

const getStatuses = async () => {
  const statuses = await axios.get(
    "http://localhost:4000/api/admin/reportStatuses/",
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  );
  return statuses.data;
};

const getReports = async (query) => {
  const params = {};
  params.page = query.page;
  params.size = query.size;
  if (query.status) {
    params.status = query.status;
  }
  const categories = await axios.get("http://localhost:4000/api/reports", {
    params: params,
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
  console.log(report.data);
  return report.data;
};

const updateReport = async (
  statusId,
  categoryId,
  supportMessageForClient,
  supportMessageInner,
  priorityLevel,
  reportId
) => {
  const result = await axios
    .put(
      API_URL + reportId,
      {
        statusId,
        categoryId,
        supportMessageForClient,
        supportMessageInner,
        priorityLevel,
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
          "Reporte número " + result.data.id + " actualizado correctamente.",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const createCategory = async (name, defaultPriorityLevel) => {
  const result = await axios
    .post(
      "http://localhost:4000/api/admin/reportCategories",
      {
        name,
        defaultPriorityLevel,
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
        message: "Categoria creada correctamente",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const createStatus = async (name) => {
  const result = await axios
    .post(
      "http://localhost:4000/api/admin/reportStatuses",
      {
        name
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
        message: "Estado creado correctamente",
        sent: true,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};


export default {
  registerReport,
  getCategories,
  getReports,
  getReportById,
  getStatuses,
  updateReport,
  createCategory,
  createStatus
};
