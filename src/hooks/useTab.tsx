"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { setValue } from "@/store/tabSlice";

export const useTab = () => {
  const value = useSelector((state: RootState) => state.tab.value);
  const dispatch = useDispatch<AppDispatch>();

  const setTabValue = (value: string) => {
    dispatch(setValue(value));
  };

  return {
    value,
    setTabValue,
  };
};
