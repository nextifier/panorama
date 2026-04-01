import { defineStore } from "pinia";

export const useFAQStore = defineStore("faq", {
  state: () => {
    const config = useAppConfig();
    const whatsapp = config.contact.whatsapp;
    const whatsappLink = `https://wa.me/${whatsapp}`;
    const email = config.contact.email;
    const instagram = config.social.instagram;

    return {
      list: [
        {
          q: `What does ${config.app.name} do?`,
          a: `
            <p>Please visit our <a href="/about">About page</a> to learn more about our company and the services we offer.</p>
          `,
        },
        {
          q: "How can I contact you?",
          a: `
            <p>You can reach us through:</p>
            <ul>
              <li>WhatsApp: <a href="${whatsappLink}" target="_blank">Click here to chat</a></li>
              <li>Email: <a href="mailto:${email}">${email}</a></li>
            </ul>
            <p>Or visit our <a href="/contact">Contact page</a> for more options.</p>
          `,
        },
        {
          q: "How can I stay updated?",
          a: `
            <p>Follow us on Instagram <a href="https://www.instagram.com/${instagram}" target="_blank">@${instagram}</a> for the latest updates. You can also check our <a href="/news">News page</a>.</p>
          `,
        },
      ],
    };
  },
});
