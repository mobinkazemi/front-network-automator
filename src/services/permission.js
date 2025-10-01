import axiosInstance from "@/utils/axios";

// ----------------------------------------------------------------------

export const paginated = async () => {
  const response = await axiosInstance.get("/permissionCategory/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const all = async () => {
  const response = await axiosInstance.get("/permission/list");

  return response.data;
};

// ----------------------------------------------------------------------

export const create = async (data) => {
  const response = await axiosInstance.post("/permissionCategory/create", data);

  return response.data;
};

// ----------------------------------------------------------------------

export const addPermissionToCategory = async (data) => {
  const response = await axiosInstance.post("/permission/addToCategory", data);

  return response.data;
};

// ----------------------------------------------------------------------

export const permissionsOfCategory = async (categoryId) => {
  const response = await axiosInstance.get(
    `/permissionCategory/permissions-under-categories/${categoryId}`,
  );

  return response.data;
};
