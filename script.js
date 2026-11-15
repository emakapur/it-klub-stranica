"use strict";

// ===== 1. Validacija forme za prijavu =====
const forma = document.getElementById("prijava-forma");
const statusForme = document.getElementById("forma-status");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const pravila = {
  ime: (v) => (v.length < 3 ? "Upiši ime i prezime (najmanje 3 znaka)." : ""),
  email: (v) => (emailRegex.test(v) ? "" : "Upiši ispravnu email adresu, na primjer ime@skola.ba."),
  razred: (v) => (v === "" ? "Odaberi razred." : ""),
  interes: (v) => (v === "" ? "Odaberi područje koje te zanima." : ""),
  poruka: (v) => (v.length < 10 ? "Napiši barem jednu rečenicu (najmanje 10 znakova)." : ""),
};

function provjeriPolje(polje) {
  const greska = pravila[polje.name](polje.value.trim());
  const grupa = polje.closest(".form-field");
  grupa.classList.toggle("invalid", greska !== "");
  grupa.querySelector(".field-error").textContent = greska;
  polje.setAttribute("aria-invalid", greska !== "" ? "true" : "false");
  return greska === "";
}

if (forma) {
  const polja = [...forma.querySelectorAll("input, select, textarea")];

  polja.forEach((polje) => {
    polje.addEventListener("blur", () => provjeriPolje(polje));
    polje.addEventListener("input", () => {
      if (polje.closest(".form-field").classList.contains("invalid")) {
        provjeriPolje(polje);
      }
    });
  });

  forma.addEventListener("submit", (event) => {
    event.preventDefault();
    statusForme.textContent = "";

    const rezultati = polja.map(provjeriPolje);

    if (!rezultati.every(Boolean)) {
      polja[rezultati.indexOf(false)].focus();
      return;
    }

    const ime = forma.elements.ime.value.trim().split(" ")[0];
    statusForme.textContent = "Hvala, " + ime + "! Prijava je primljena (demo verzija, podaci se ne šalju).";
    forma.reset();
    azurirajBrojac();
  });
}

// Brojač znakova u polju "poruka"
const poljePoruka = document.getElementById("poruka");
const brojac = document.getElementById("brojac");

function azurirajBrojac() {
  if (poljePoruka && brojac) {
    brojac.textContent = poljePoruka.value.length + " / " + poljePoruka.maxLength;
  }
}

if (poljePoruka) {
  poljePoruka.addEventListener("input", azurirajBrojac);
}
