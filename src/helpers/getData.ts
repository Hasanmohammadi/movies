export const getData = async (url: string) => {
  const data = await fetch(url);
  const res = await data.json();
  return res;
};

export const getDataFromNewPage = async (url:string) => {
    const data = await fetch(url)
    const res = await data.json()
    return res
}