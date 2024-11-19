import "bootstrap";
import "./style.css";


window.onload = function() {
  let pronouns = ["la", "nuestra", "tu"];
  let adjetives = ["mejor", "nueva", "profesional"];
  let nouns = ["ropa", "cafe", "musica"];
  let domains = [".com", ".net", ".es"];
  let hackDomains = ["restaurant.es"];

  let textForOf = "";
  let textHackDomain = "";

  for (const pronoun of pronouns) {
    for (const adjetive of adjetives) {
      for (const noun of nouns) {
        for (const domain of domains) {
          textForOf += `
            <li class="list-group-item">
              ${pronoun}${adjetive}${noun}${domain}
            </li>`;
        }
      }
    }
  }
  for (const pronoun of pronouns) {
    for (const adjetive of adjetives) {
      for (const hackDomain of hackDomains) {
        textHackDomain += `
          <li class="list-group-item">
            ${pronoun}${adjetive}${hackDomain} 
          </li>`;
      }
    }
  }
  document.querySelector("#domain").innerHTML = textForOf;
  document.querySelector("#hack-domain").innerHTML = textHackDomain;
};
