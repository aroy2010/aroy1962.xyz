// ============================================================
// 📌 CONFIGURACIÓN DEL SITIO
// ============================================================

const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://www.aroy1962.xyz" // ✅ Dominio principal con www
).replace(/\/$/, "");

export const SITE = {
  name: "La Caverna de Platón",
  description:
    "Los griegos nos advirtieron hace 2,500 años que debíamos buscar la verdad y compartirla. Hoy compartimos sombras y el poder material neutraliza nuestra humanidad.",
  url: "https://www.aroy1962.xyz", // ✅ Dominio con www
  locale: "es-ES",
  language: "es",
  repositoryUrl: "https://github.com/aroy2010/aroy1962.xyz", // ✅ Repositorio correcto
};

// ============================================================
// 📌 MENÚ DE NAVEGACIÓN
// ============================================================

export const NAVIGATION = [
  { to: "/", label: "Inicio" },
  { to: "/categories/la-cueva", label: "La Cueva" },
  { to: "/categories/las-sombras", label: "Las Sombras" },
  { to: "/categories/el-exterior", label: "El Exterior" },
  { to: "/categories/el-sol", label: "El Sol" },
  { to: "/categories/el-regreso", label: "El Regreso" },
  { to: "/about", label: "Acerca de" },
];

// ============================================================
// 📌 INFORMACIÓN DE CONTACTO
// ============================================================

export const CONTACT = {
  email: "adrielolorteguiyzu@gmail.com", // ✅ Correo corregido
  socialHandle: "@lacavernadeplaton",
  socialUrl: "https://x.com/lacavernadeplaton", // ✅ Si no tienes, cambia por tu URL real
};

// ============================================================
// 📌 FORMULARIOS (pendientes de configuración)
// ============================================================

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

// ============================================================
// 📌 REDES SOCIALES
// ============================================================

export const SOCIAL_LINKS = [
  { href: "/rss.xml", label: "Fuente RSS", icon: "rss" },
  { href: "https://x.com/lacavernadeplaton", label: "La Caverna en X", icon: "twitter" },
  { href: "https://github.com/aroy2010/aroy1962.xyz", label: "La Caverna en GitHub", icon: "github" },
  { href: "mailto:adrielolorteguiyzu@gmail.com", label: "Email", icon: "mail" },
];

// ============================================================
// 📌 AUTORES DEL BLOG
// ============================================================

export const authors = [
  {
    slug: "adriel-ortegui",
    name: "Adriel Olórtegui",
    bio: "Escritor y pensador. Fundador de 'La Caverna de Platón', un espacio de reflexión humanista sobre el mundo moderno.",
    longBio:
      "Adriel Olórtegui es el creador de 'La Caverna de Platón', un proyecto que busca recuperar la tradición del pensamiento crítico en la era digital. Sus escritos exploran la tensión entre la tecnología y la condición humana, inspirándose en la filosofía clásica y las ciencias sociales.",
    avatar: "/avatars/adriel-ortegui.svg", // ✅ Puedes cambiar esta ruta por tu avatar personalizado
  },
  // ✅ He eliminado los autores ficticios; puedes añadir colaboradores si los tienes
];

// ============================================================
// 📌 CATEGORÍAS (coinciden con los menús)
// ============================================================

export const categories = [
  { slug: "la-cueva", name: "La Cueva" },
  { slug: "las-sombras", name: "Las Sombras" },
  { slug: "la-salida", name: "La Salida" },
  { slug: "el-exterior", name: "El Exterior" },
  { slug: "el-sol", name: "El Sol" },
  { slug: "el-regreso", name: "El Regreso" },
];

// ============================================================
// 📌 ETIQUETAS (TAGS) - Puedes ampliarlas según necesites
// ============================================================

export const tags = [
  { slug: "filosofia", name: "Filosofía" },
  { slug: "humanismo", name: "Humanismo" },
  { slug: "tecnologia", name: "Tecnología" },
  { slug: "sociedad", name: "Sociedad" },
  { slug: "politica", name: "Política" },
  { slug: "ciencia", name: "Ciencia" },
  { slug: "arte", name: "Arte" },
  { slug: "reflexiones", name: "Reflexiones" },
];
