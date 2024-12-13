type methods = "post" | "patch" | "get" | "delete";

export const setId = ({ id, url }: { id: string | number; url: string }) => {
  return url.replace(":id", String(id));
};
interface IRoute {
  method: methods;
  url: string;
}

interface IBackendRoutes {
  auth: {
    login: IRoute;
    register: IRoute;
  };
  switch: {
    create: IRoute;
    info: IRoute;
    list: IRoute;
    update: IRoute;
    delete: IRoute;
    execCommand: IRoute;
    createAsset: IRoute;
    checkHardening: IRoute;
    checkConnectionStatus: IRoute;
  };
  cis: {
    create: IRoute;
    delete: IRoute;
    list: IRoute;
    info: IRoute;
    update: IRoute;
  };
  category: {
    create: IRoute;
  };
  hardening: {};
  hardeningResult: {
    switches: {
      detailList: IRoute;
      version: IRoute;
    };
  };
}

export const BACKEND_ROUTES: IBackendRoutes = {
  auth: {
    login: {
      method: "post",
      url: "/auth/login",
    },
    register: {
      method: "post",
      url: "/auth/register",
    },
  },
  switch: {
    create: {
      method: "post",
      url: "/switches/create",
    },
    info: {
      method: "get",
      url: "/switches/info/:id",
    },
    delete: {
      method: "delete",
      url: "/switches/delete/:id",
    },
    list: { method: "get", url: "/switches/list" },
    update: {
      method: "patch",
      url: "/switches/update",
    },
    execCommand: { method: "post", url: "/switches/execCommand" },
    checkHardening: {
      method: "get",
      url: "/switches/checkHardening/:id",
    },
    checkConnectionStatus: {
      method: "get",
      url: "/switches/checkConnectionStatus",
    },
    createAsset: {
      method: "post",
      url: "/switches/createAsset/:id",
    },
  },
  cis: {
    create: {
      method: "post",
      url: "/cis/create",
    },
    delete: {
      method: "delete",
      url: "/cis/delete/:id",
    },
    list: {
      method: "get",
      url: "/cis/list",
    },
    info: {
      method: "get",
      url: "/cis/info/:id",
    },
    update: {
      method: "patch",
      url: "/cis/update",
    },
  },
  category: {
    create: {
      method: "post",
      url: "/category/create",
    },
  },
  hardening: {},
  hardeningResult: {
    switches: {
      detailList: {
        url: "/hardeningResults/switches/:id",
        method: "get",
      },
      version: {
        url: "/hardeningResults/switches/versions/:id",
        method: "get",
      },
    },
  },
};
