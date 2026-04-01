const isProduction = process.env.NODE_ENV === "production";

const app = {
  name: "Panorama Live",
  shortName: "Panorama Live",
  projectUsername: "pl",
  url: isProduction ? "https://panoramalive.id" : "http://localhost:3000",
  company: {
    name: "PT Panorama Media",
    address:
      "Panorama Media Building, Jl. Tanjung Selor No.17A, RT.11/RW.6, Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10150",
  },
};

const settings = {
  header: {
    logoClass: "h-9 text-primary",
  },
  footer: {
    logoClass: "h-12 text-primary",
  },
  blog: {
    showPostCardAuthor: false,
    showPostCardExcerpt: false,
  },
  ogImage: {
    isDarkMode: true,
  },
  terms: {
    lastUpdate: "",
  },
};

const contact = {
  email: "live@panoramamedia.co.id",
  whatsapp: "6281119220003",
};

const social = {
  instagram: "panoramalive.id",
};

const contactLinks = {
  email: {
    label: "Email",
    path: `mailto:${contact.email}`,
  },
  whatsapp: {
    label: "WhatsApp",
    path: `https://api.whatsapp.com/send?phone=${contact.whatsapp}&text=Halo, ${app.shortName}!`,
  },
};

const socialLinks = {
  instagram: {
    label: "Instagram",
    path: `https://www.instagram.com/${social.instagram}`,
    iconName: "hugeicons:instagram",
  },
};

const routes = {
  home: { label: "Home", path: "/" },
  about: { label: "About", path: "/about" },
  events: { label: "Events", path: "/events" },
  contact: { label: "Contact", path: "/contact" },
};

export default defineAppConfig({
  app: app,
  settings: settings,
  contact: contact,
  social: social,
  contactLinks: contactLinks,
  socialLinks: socialLinks,

  routes: {
    header: [routes.home, routes.events, routes.about, routes.contact],
    dialog: [
      {
        label: "Menu",
        links: [routes.home, routes.events, routes.about, routes.contact],
      },
      {
        label: "Get in touch",
        links: Object.values(contactLinks),
      },
      {
        label: "Social",
        links: Object.values(socialLinks),
      },
    ],
  },
});
