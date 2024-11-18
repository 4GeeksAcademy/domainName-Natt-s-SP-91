/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronombre = ["la", "nuestra", "tu"];
  let adjetivo = ["mejor", "nueva", "profesional"];
  let nombre = ["ropa", "cafe", "musica"];
  let dominio = [".com", ".net", ".es"];
  let hackDomain = ["restaurant.es"];

  let textForOf = "";
  let textHackDomain = "";

  for (const elementP of pronombre) {
    for (const elementA of adjetivo) {
      for (const elementN of nombre) {
        for (const elementD of dominio) {
          textForOf += `
          <li class="list-group-item">
            ${elementP}${elementA}${elementN}${elementD}
          </li>`;
        }
      }
    }
  }
  for (const elementP of pronombre) {
    for (const elementA of adjetivo) {
      for (const elementH of hackDomain) {
        textHackDomain += `
        <li class="list-group-item">
          ${elementP}${elementA}${elementH} 
        </li>`;
      }
    }
  }
  document.querySelector("#dominio").innerHTML = textForOf;

  document.querySelector("#h-dominio").innerHTML = textHackDomain;
};
