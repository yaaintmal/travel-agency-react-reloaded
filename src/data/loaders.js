export const destLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5));
  const res = await fetch("/travel.json");
  if (res.status !== 200) throw Error("something went wrong");
  const data = await res.json();
  return data;
};
