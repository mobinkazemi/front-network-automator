import { useState } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";

import { useBoolean } from "@/hooks/use-boolean";

import { Input, InputGroup } from "@/components/input";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";

import axiosInstance from "@/utils/axios";

import { FeedCard } from "../feed-card";
import { FeedNewEditForm } from "../feed-new-edit-form";

// ----------------------------------------------------------------------

const get = async (params) => {
  const response = await axiosInstance.get("/devices/firewall/feed/list", {
    params: Object.fromEntries(params.entries()),
  });

  return response.data;
};

// ----------------------------------------------------------------------

export function FeedListView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const newFeed = useBoolean();

  const { data: feeds, isPending: feedsLoading } = useQuery({
    queryKey: ["feeds", searchParams.toString()],
    queryFn: () => get(searchParams),
  });

  const [filters, setFilters] = useState({
    list_sort: searchParams.get("list_sort") || "desc",
    feed: searchParams.get("feed") || "",
    active: searchParams.get("active") || "",
    type: searchParams.get("type") || "",
  });

  const list_page = searchParams.get("list_page") || 1;

  const updateQuery = (updates) => {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(updates).map(([key, value]) => {
      if (value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    setSearchParams(newParams);
  };

  const handleSearch = () => {
    updateQuery({ list_page: 1, ...filters });
  };

  if (feedsLoading) return "Loading...";

  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="px-6 py-5">
          <div className="-mt-2 -mr-4 flex items-center justify-between">
            <div className="mt-2 mr-4">
              <h3 className="text-base font-semibold text-orange-500">
                لیست تغذیه ها و تامین کنندگان
              </h3>
            </div>

            <div className="mt-2 mr-4 shrink-0">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-xl bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-400"
                onClick={newFeed.onTrue}
              >
                <PlusIcon aria-hidden="true" className="-mr-0.5 size-4" />
                تغذیه جدید
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex gap-8 sm:gap-4">
            <div className="grow">
              <InputGroup>
                <Input
                  placeholder="آی پی را جستجو کنید&hellip;"
                  value={filters.feed}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, feed: e.target.value }))
                  }
                />
                <MagnifyingGlassIcon className="-scale-x-100" />
              </InputGroup>
            </div>

            <Listbox
              placeholder="وضعیت"
              className="w-44!"
              value={filters.active}
              onChange={(value) => {
                setFilters((f) => ({ ...f, active: value }));
              }}
            >
              <ListboxOption value={true}>
                <ListboxLabel>فعال</ListboxLabel>
              </ListboxOption>
              <ListboxOption value={false}>
                <ListboxLabel>غیرفعال</ListboxLabel>
              </ListboxOption>
            </Listbox>

            <Listbox
              placeholder="نوع عملکرد"
              className="w-44!"
              value={filters.type}
              onChange={(value) => {
                setFilters((f) => ({ ...f, type: value }));
              }}
            >
              <ListboxOption value="block">
                <ListboxLabel>مسدود</ListboxLabel>
              </ListboxOption>
              <ListboxOption value="allow">
                <ListboxLabel>مجاز</ListboxLabel>
              </ListboxOption>
            </Listbox>

            <Listbox
              placeholder="مرتب سازی"
              className="w-44!"
              value={filters.list_sort}
              onChange={(value) => {
                setFilters((f) => ({ ...f, list_sort: value }));
              }}
            >
              <ListboxOption value="desc">
                <ListboxLabel>جدیدترین</ListboxLabel>
              </ListboxOption>
              <ListboxOption value="asc">
                <ListboxLabel>قدیمی ترین</ListboxLabel>
              </ListboxOption>
            </Listbox>

            <button
              className="flex w-9 items-center justify-center rounded-lg bg-gray-100 p-2 text-gray-500 hover:bg-gray-200"
              onClick={handleSearch}
            >
              <MagnifyingGlassIcon className="size-4" />
            </button>
          </div>

          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {feeds.data.length === 0 && (
              <div className="col-span-full flex h-28 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-500">
                هیچ داده ای یافت نشد
              </div>
            )}

            {feeds.data.map((feed) => (
              <FeedCard key={feed.id} feed={feed} />
            ))}
          </ul>

          <nav className="mt-8 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
              <button
                disabled={list_page === 1}
                className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                onClick={() => updateQuery({ list_page: list_page - 1 })}
              >
                <ArrowLongRightIcon
                  aria-hidden="true"
                  className="ml-3 size-5 text-gray-400"
                />
                قبلی
              </button>
            </div>

            <div className="-mt-px flex w-0 flex-1 justify-end">
              <button
                disabled={list_page === Math.ceil(feeds.count / 8)}
                className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                onClick={() => updateQuery({ list_page: list_page + 1 })}
              >
                بعدی
                <ArrowLongLeftIcon
                  aria-hidden="true"
                  className="mr-3 size-5 text-gray-400"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>

      <FeedNewEditForm open={newFeed.value} onClose={newFeed.onFalse} />
    </>
  );
}
