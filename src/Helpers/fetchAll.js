// Fetch all name values for all urls in input array
const fetchAll = async (urls) => {
  const res = await Promise.all(urls?.map((u) => fetch(u)));
  const jsonList = await Promise.all(res.map((r) => r.json()));
  const listValues = jsonList.map((element) => element.name);

  return listValues;
};

export default fetchAll;
