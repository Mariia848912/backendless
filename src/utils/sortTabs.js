export const sortTabs = (tabs) => {
  return [...tabs].sort((curEl, nextEl) => curEl.order - nextEl.order);
};
