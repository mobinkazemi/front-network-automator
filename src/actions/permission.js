import { useMutation, useQuery } from "@tanstack/react-query";

import {
  paginated,
  all,
  create,
  addPermissionToCategory,
  permissionsOfCategory,
} from "@/services/permission";
import { toast } from "sonner";

// ----------------------------------------------------------------------

export const usePermissionCategoriesQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["permission-categories"],
    queryFn: paginated,
  });

  return {
    permissionCategories: data,
    permissionCategoriesLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const usePermissionsQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["permissions"],
    queryFn: all,
  });

  return {
    permissions: data,
    permissionsLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useCreatePermissionCategoryMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: create,
    onError: (error) => {
      toast.error(error.response.data.detail);
    },
  });

  return {
    createPermissionCategory: mutate,
    createPermissionCategoryLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const useAddPermissionToCategoryMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: addPermissionToCategory,
  });

  return {
    addPermissionToCategory: mutate,
    addPermissionToCategoryLoading: isPending,
  };
};

// ----------------------------------------------------------------------

export const usePermissionsOfCategoryQuery = (categoryId) => {
  const { data, isPending } = useQuery({
    queryKey: ["permissions-of-category", categoryId],
    queryFn: () => permissionsOfCategory(categoryId),
    enabled: !!categoryId,
  });

  return {
    permissionsOfCategory: data,
    permissionsOfCategoryLoading: isPending,
  };
};
