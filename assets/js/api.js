export async function getAllTodos(url) {
  const res = await fetch(url);
  const json = res.ok ? await res.json() : res.statusText;
  return json;
}
