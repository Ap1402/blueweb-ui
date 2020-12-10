import axios from "axios";
import authHeader from "../helpers/getAuthToken";
import getEnvUrl from "../helpers/GetEnvUrl";

const API_URL = getEnvUrl() + "/reports";

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
  const categories = await axios.get(API_URL + "/categories", {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return categories.data;
};

const getCommentsById = async (reportId) => {
  const comments = await axios.get(API_URL + "/comments/" + reportId, {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return comments.data;
};

const getAllCategories = async () => {
  const categories = await axios.get(API_URL + "/categories/all", {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return categories.data;
};

const getAllStatuses = async () => {
  const statuses = await axios.get(API_URL + "/statuses/all", {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return statuses.data;
};

const getStatuses = async () => {
  const statuses = await axios.get(API_URL + "/statuses", {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return statuses.data;
};

const getReports = async (query, isForClient) => {
  const params = {};
  params.page = query.page;
  params.size = query.size;

  if (query.status) {
    params.status = query.status;
  }

  if (query.clientName) {
    params.name = query.clientName;
  }

  if (query.clientDni) {
    params.dni = query.clientDni;
  }
  if (query.orderBy) {
    params.orderBy = query.orderBy;
  }
  if (query.order) {
    params.order = query.order;
  }

  if (!isForClient) {
    const reports = await axios.get(API_URL, {
      params: params,
      headers: {
        "x-auth-token": authHeader(),
      },
    });
    return reports.data;
  } else {
    const reports = await axios.get(API_URL + "/me", {
      params: params,
      headers: {
        "x-auth-token": authHeader(),
      },
    });
    return reports.data;
  }
};

const getMyReports = async (query) => {
  const params = {};
  params.page = query.page;
  params.size = query.size;
  if (query.status) {
    params.status = query.status;
  }
  const reports = await axios.get(API_URL + "/me", {
    params: params,
    headers: {
      "x-auth-token": authHeader(),
    },
  });

  return reports.data;
};

const getReportById = async (reportId) => {
  const report = await axios.get(API_URL + "/" + reportId, {
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
      API_URL + "/" + reportId,
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
      API_URL + "/categories",
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
        data: result.data,
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
      API_URL + "/statuses",
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
        data: result.data,
      };
    })
    .catch((err) => {
      return { success: false, message: err.response.data.message, sent: true };
    });
  return result;
};

const deleteStatus = async (statusId) => {
  const result = await axios.delete(API_URL + "/statuses/" + statusId, {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
  return result.data;
};

const deleteCategory = async (categoryId) => {
  const result = await axios.delete(API_URL + "/categories/" + categoryId, {
    headers: {
      "x-auth-token": authHeader(),
    },
  });
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
  getMyReports,
  createStatus,
  deleteCategory,
  deleteStatus,
  getAllStatuses,
  getAllCategories,
  getCommentsById,
};
