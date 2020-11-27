import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl() + "/api/reports/";

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
    getEnvUrl() + "/api/admin/reportCategories/",
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  );
  return categories.data;
};

const getStatuses = async () => {
  const statuses = await axios.get(getEnvUrl() + "/api/admin/reportStatuses/", {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return statuses.data;
};

const getReports = async (query) => {
  const params = {};
  params.page = query.page;
  params.size = query.size;
  if (query.status) {
    params.status = query.status;
  }
  const categories = await axios.get(getEnvUrl() + "/api/reports", {
    params: params,
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  console.log(categories)

  return categories.data;
};

const getReportById = async (reportId) => {
  const report = await axios.get(getEnvUrl() + "/api/reports/" + reportId, {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
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
      getEnvUrl() + "/api/admin/reportCategories",
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
      getEnvUrl() + "/api/admin/reportStatuses",
      {
        name,
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

const deleteStatus = async (statusId) => {
  const result = await axios.delete(
    getEnvUrl() + "/api/admin/reportStatuses/" + statusId,
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  );
  return result.data;
};

const deleteCategory = async (categoryId) => {
  const result = await axios.delete(
    getEnvUrl() + "/api/admin/reportCategories/" + categoryId,
    {
      headers: {
        "x-auth-token": authHeader(),
      },
    }
  );
  return result.data;
};

export default {
  registerReport,
  getCategories,
  getReports,
  getReportById,
  getStatuses,
  updateReport,
  createCategory,
  createStatus,
  deleteCategory,
  deleteStatus,
};
