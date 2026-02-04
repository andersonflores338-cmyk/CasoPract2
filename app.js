function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.add('oculto'));
  document.getElementById(id).classList.remove('oculto');
}

/* ================= EVENTOS ================= */
function guardarEvento() {
  if (
    !tituloEvento.value ||
    !invitadosEvento.value ||
    !fechaEvento.value ||
    !zonaEvento.value ||
    !descripcionEvento.value ||
    !lugarEvento.value
  ) {
    alert("⚠️ Complete TODOS los campos del evento.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${tituloEvento.value}</strong><br>
    👥 Invitados: ${invitadosEvento.value}<br>
    📅 Fecha: ${fechaEvento.value}<br>
    🌍 Zona horaria: ${zonaEvento.value}<br>
    📍 Lugar: ${lugarEvento.value}<br>
    📝 Descripción: ${descripcionEvento.value}
  `;

  if (document.getElementById("vacioEventos")) {
    listaEventosRegistrados.innerHTML = "";
  }

  listaEventosRegistrados.appendChild(li);

  tituloEvento.value = "";
  invitadosEvento.value = "";
  fechaEvento.value = "";
  zonaEvento.value = "";
  descripcionEvento.value = "";
  lugarEvento.value = "";
}

/* ================= UBICACIONES ================= */
function guardarUbicacion() {
  if (
    !tituloUbicacion.value ||
    !direccionUbicacion.value ||
    !coordenadasUbicacion.value
  ) {
    alert("⚠️ Complete TODOS los campos de la ubicación.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${tituloUbicacion.value}</strong><br>
    🏠 Dirección: ${direccionUbicacion.value}<br>
    📍 Coordenadas: ${coordenadasUbicacion.value}
  `;

  if (document.getElementById("vacioUbicaciones")) {
    listaUbicaciones.innerHTML = "";
  }

  listaUbicaciones.appendChild(li);

  tituloUbicacion.value = "";
  direccionUbicacion.value = "";
  coordenadasUbicacion.value = "";
}

/* ================= CONTACTOS ================= */
function guardarContacto() {
  if (
    !saludoContacto.value ||
    !nombreContacto.value ||
    !correoContacto.value
  ) {
    alert("⚠️ Complete TODOS los campos del contacto.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${saludoContacto.value} ${nombreContacto.value}</strong><br>
    ✉️ Correo electrónico: ${correoContacto.value}
  `;

  if (document.getElementById("vacioContactos")) {
    listaContactos.innerHTML = "";
  }

  listaContactos.appendChild(li);

  saludoContacto.value = "";
  nombreContacto.value = "";
  correoContacto.value = "";
}

/* ================= MULTILENGUAJE ================= */
const textos = {
  es: {
    app: "Sistema de Gestión de Eventos",
    eventos: "Eventos",
    ubicaciones: "Ubicaciones",
    contactos: "Contactos",
    ayuda: "Ayuda",
    regEvento: "Registrar Evento",
    regUbicacion: "Registrar Ubicación",
    regContacto: "Registrar Contacto",
    ayudaTitulo: "Ayuda del Sistema",
    ayudaTexto: "Este video explica cómo usar el sistema.",
    vacioEvento: "Aún no hay eventos registrados",
    vacioUbicacion: "Aún no hay ubicaciones registradas",
    vacioContacto: "Aún no hay contactos registrados"
  },
  en: {
    app: "Event Management System",
    eventos: "Events",
    ubicaciones: "Locations",
    contactos: "Contacts",
    ayuda: "Help",
    regEvento: "Register Event",
    regUbicacion: "Register Location",
    regContacto: "Register Contact",
    ayudaTitulo: "System Help",
    ayudaTexto: "This video explains how to use the system.",
    vacioEvento: "No events registered yet",
    vacioUbicacion: "No locations registered yet",
    vacioContacto: "No contacts registered yet"
  },
  fr: {
    app: "Système de Gestion d'Événements",
    eventos: "Événements",
    ubicaciones: "Lieux",
    contactos: "Contacts",
    ayuda: "Aide",
    regEvento: "Enregistrer un événement",
    regUbicacion: "Enregistrer un lieu",
    regContacto: "Enregistrer un contact",
    ayudaTitulo: "Aide du système",
    ayudaTexto: "Cette vidéo explique comment utiliser le système.",
    vacioEvento: "Aucun événement enregistré",
    vacioUbicacion: "Aucun lieu enregistré",
    vacioContacto: "Aucun contact enregistré"
  },
  pt: {
    app: "Sistema de Gestão de Eventos",
    eventos: "Eventos",
    ubicaciones: "Localizações",
    contactos: "Contatos",
    ayuda: "Ajuda",
    regEvento: "Registrar Evento",
    regUbicacion: "Registrar Localização",
    regContacto: "Registrar Contato",
    ayudaTitulo: "Ajuda do Sistema",
    ayudaTexto: "Este vídeo explica como usar o sistema.",
    vacioEvento: "Nenhum evento registrado",
    vacioUbicacion: "Nenhuma localização registrada",
    vacioContacto: "Nenhum contato registrado"
  },
  it: {
    app: "Sistema di Gestione Eventi",
    eventos: "Eventi",
    ubicaciones: "Luoghi",
    contactos: "Contatti",
    ayuda: "Aiuto",
    regEvento: "Registrare Evento",
    regUbicacion: "Registrare Luogo",
    regContacto: "Registrare Contatto",
    ayudaTitulo: "Aiuto del Sistema",
    ayudaTexto: "Questo video spiega come usare il sistema.",
    vacioEvento: "Nessun evento registrato",
    vacioUbicacion: "Nessun luogo registrato",
    vacioContacto: "Nessun contatto registrato"
  }
};

function cambiarIdioma() {
  const t = textos[idioma.value];
  if (!t) return;

  tituloApp.innerText = t.app;
  navEventos.innerText = t.eventos;
  navUbicaciones.innerText = t.ubicaciones;
  navContactos.innerText = t.contactos;
  navAyuda.innerText = t.ayuda;
  tituloEventos.innerText = t.regEvento;
  tituloUbicaciones.innerText = t.regUbicacion;
  tituloContactos.innerText = t.regContacto;
  tituloAyuda.innerText = t.ayudaTitulo;
  textoAyuda.innerText = t.ayudaTexto;

  if (vacioEventos) vacioEventos.innerText = t.vacioEvento;
  if (vacioUbicaciones) vacioUbicaciones.innerText = t.vacioUbicacion;
  if (vacioContactos) vacioContactos.innerText = t.vacioContacto;
}
