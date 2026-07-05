const app = document.querySelector("#app");

export function render(component){

    app.innerHTML = component;

}