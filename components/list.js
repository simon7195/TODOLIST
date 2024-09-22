export function createListFromArray(arr) {
  const ul = document.createElement("ul");
  ul.id = "maListe";
  document.body.appendChild(ul);
  const maListe = document.getElementById("maListe");
  for (let i = 0; i < arr.length; i++) {
    const check = document.createElement("input");
    const btn = document.createElement("button");
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>';
    btn.classList = "";
    check.setAttribute("type", "checkbox");
    check.setAttribute("checked", arr[i].completed);
    const li = document.createElement("li");
    li.textContent = arr[i].todo;
    li.id = "todo" + arr[i].id;
    li.classList = "flex items-center gap-2";
    maListe.appendChild(li);
    li.insertAdjacentElement("afterbegin", check);
    li.insertAdjacentElement("beforeend", btn);
  }
}
