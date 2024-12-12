type methods = "post" | "patch" | "get" | "delete";

interface IRoute {
  setId?: (id: string | number) => string;
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
  cis: {};
  category: {};
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
      setId: function setId(id: string | number) {
        return this.url.replace(":id", String(id));
      },
    },
    delete: {
      method: "delete",
      url: "/switches/delete/:id",
      setId: function setId(id: string | number) {
        return this.url.replace(":id", String(id));
      },
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
      setId: function setId(id: string | number) {
        return this.url.replace(":id", String(id));
      },
    },
    checkConnectionStatus: {
      method: "get",
      url: "/switches/checkConnectionStatus",
    },
    createAsset: {
      method: "post",
      url: "/switches/createAsset/:id",
      setId: function setId(id: string | number) {
        return this.url.replace(":id", String(id));
      },
    },
  },
  cis: {},
  category: {},
  hardening: {},
  hardeningResult: {
    switches: {
      detailList: {
        url: "/hardeningResults/switches/:id",
        method: "get",
        setId: function setId(id: string | number) {
          return this.url.replace(":id", String(id));
        },
      },
      version: {
        url: "/hardeningResults/switches/versions/:id",
        method: "get",
        setId: function setId(id: string | number) {
          return this.url.replace(":id", String(id));
        },
      },
    },
  },
};
