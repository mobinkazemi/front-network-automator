import { useState } from "react";
import { useSearchParams } from "react-router";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";

import { useBoolean } from "@/hooks/use-boolean";

import { Input, InputGroup } from "@/components/input";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";

import { useFeedsQuery } from "@/actions/feed";

import { FeedCard } from "../feed-card";
import { FeedNewEditForm } from "../feed-new-edit-form";

// ----------------------------------------------------------------------

export function FeedListView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const newFeed = useBoolean();

  const { feeds, feedsLoading } = useFeedsQuery();

  const [filters, setFilters] = useState({
    feed: "",
    active: "",
    type: "",
  });

  const page = searchParams.get("page") || 1;

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
    updateQuery({ ...filters });
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
              <ListboxOption value="active">
                <ListboxLabel>مسدود</ListboxLabel>
              </ListboxOption>
              <ListboxOption value="paused">
                <ListboxLabel>مجاز</ListboxLabel>
              </ListboxOption>
            </Listbox>

            <Listbox name="status" placeholder="مرتب سازی" className="w-44!">
              <ListboxOption value="active">
                <ListboxLabel>جدیدترین</ListboxLabel>
              </ListboxOption>
              <ListboxOption value="paused">
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
            {feeds.data.map((feed) => (
              <FeedCard key={feed.id} feed={feed} />
            ))}
          </ul>
        </div>
      </div>

      <FeedNewEditForm open={newFeed.value} onClose={newFeed.onFalse} />
    </>
  );
}
