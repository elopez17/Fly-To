export const IS_LOADING = "IS_LOADING";
export const IS_DONE_LOADING = "IS_DONE_LOADING";

export const isLoading = () => ({
  type: IS_LOADING,
  payload: true,
});

export const isDoneLoading = () => ({
  type: IS_DONE_LOADING,
  payload: false,
});