import { defineStore } from "pinia";

export const useEventStore = defineStore("events", {
  state: () => ({
    list: [
      {
        title: "Haru Biru Experience Show: Tawa, Nada, Cerita",
        shortTitle: "Haru Biru",
        slug: "haru-biru",
        status: "Completed",
        starts_in: "Nov 9, 2024 12:00:00",
        ends_in: "Nov 9, 2024 15:00:00",
        cover_image: "/img/events/haru-biru/haru-biru-poster.jpg",
        seating_plan: "/img/events/haru-biru/seating-plan-haru-biru.svg",
        categories: [
          "Konser",
          "Stand-up comedy",
          "Nyanyi bareng",
          "Sesi curhat",
        ],
        date: "9 November 2024",
        time: "12:00 - 15:00",
        location: "Jakarta Convention Center (JCC) Senayan",
        locationMap: "https://maps.app.goo.gl/iAyUVWEbUqHL1mGx7",
        hall: "Plenary Hall",
        starting_price: "Rp400.000",
        in_conjunction_with: {
          label: "In conjunction with",
          list: [
            {
              name: "Indonesia Comic Con",
              image: "/img/profile-pictures/icc.jpg",
              link: "https://indonesiacomiccon.com",
            },
          ],
        },
        description_short:
          "Lagi galau? Yuk, move on bareng di Haru Biru Experience Show! Ketawa bareng komika, nyanyi-nyanyi sambil curhat, buang kenangan pahit, dan temuin alasan baru buat senyum lagi! Ayo, jadikan galaumu momen seru yang nggak terlupakan! 🎤🎶",
        description_full: `
          <p>Patah hati bukan akhir dunia, tapi awal untuk seru-seruan di Haru Biru Experience Show! 🎉 Siapkan tisu dan hati yang kuat, karena kita bakal ajak kamu buat move on dengan cara yang seru banget!</p>
          <p>Mulai dari ketawa ngakak bareng komika keren, nyanyi-nyanyi bareng musisi galau, sampai curhat dan workshop bareng sesama pejuang patah hati, semuanya ada di sini! Kamu juga bisa ikutan “Screaming Challenge” buat buang semua rasa kesal, atau buang kenangan di “Tong Sampah Kenangan”. Nggak cuma itu, ada dinding memori buat kamu yang mau ninggalin pesan atau kenangan manis (atau pahit, terserah!). 🎤🎶</p>
          <p>Yuk, gabung dan bikin momen galaumu jadi seru-seruan yang nggak akan terlupakan! Siapa tahu, di sini kamu bisa nemuin alasan baru buat senyum lagi. 😉</p>
        `,
        guests: [
          {
            name: "Sammy Simorangkir",
            categories: ["Music Performer"],
            img: "/img/events/haru-biru/featuring/sammy.png",
            isBgTransparent: true,
          },
          {
            name: "Kerispatih",
            categories: ["Music Performer"],
            img: "/img/events/haru-biru/featuring/kerispatih.png",
            isBgTransparent: true,
          },
          {
            name: "Ucupop",
            categories: ["Music Performer"],
            img: "/img/events/haru-biru/featuring/ucupop.png",
            isBgTransparent: true,
          },
          {
            name: "Marlo & Marco (VOLIX)",
            categories: ["Live Podcast Hosts"],
            img: "/img/events/haru-biru/featuring/volix.png",
            isBgTransparent: true,
          },
          {
            name: "Zola Yoana",
            categories: ["Speaker"],
            img: "/img/events/haru-biru/featuring/zola.png",
            isBgTransparent: true,
          },
          {
            name: "Yono Bakrie",
            categories: ["Stand-up comedian"],
            img: "/img/events/haru-biru/featuring/yono.png",
            isBgTransparent: true,
          },
          {
            name: "Cokiber",
            categories: ["Host"],
            img: "/img/events/haru-biru/featuring/cokiber.png",
            isBgTransparent: true,
          },
        ],
        rundownImages: [
          {
            title: "Rundown Haru Biru",
            img: "/img/events/haru-biru/rundown/rundown-haru-biru.jpg",
            w: 1080,
            h: 1350,
          },
        ],
        gallery: [],
        tickets: [
          {
            title: "Tickets",
            slug: "tickets",
            description: "",
            list: [
              {
                title: "Haru Biru · 9 Nov · VIP",
                name: "VIP",
                slug: "haru-biru-vip",
                image: "/img/events/haru-biru/tickets/haru-biru-vip.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 9, 2024 15:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/459577cb-68b6-4f13-99dd-a71fe5b59afc?show_options=true",
                // price: "Rp500.000",
                price: "Rp750.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp750.000",
                is_vip: true,
                benefits: [
                  "Akses ke Haru Biru Experience Show area VIP (duduk / free seating)",
                  "Akses VIP Lounge di area Panorama Live",
                  "Merchandise eksklusif Panorama Live",
                  "Akses jalur VIP ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              {
                title: "Haru Biru · 9 Nov · CAT 1",
                name: "CAT 1",
                slug: "haru-biru-cat-1",
                image: "/img/events/haru-biru/tickets/haru-biru-cat-1.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 9, 2024 15:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/459577cb-68b6-4f13-99dd-a71fe5b59afc?show_options=true",
                // price: "Rp350.000",
                price: "Rp500.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp500.000",
                is_vip: false,
                benefits: [
                  "Akses ke Haru Biru Experience Show area CAT 1 (duduk / free seating)",
                  "Akses ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              {
                title: "Haru Biru · 9 Nov · CAT 2",
                name: "CAT 2",
                slug: "haru-biru-cat-2",
                image: "/img/events/haru-biru/tickets/haru-biru-cat-2.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 9, 2024 15:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/459577cb-68b6-4f13-99dd-a71fe5b59afc?show_options=true",
                // price: "Rp250.000",
                price: "Rp400.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp400.000",
                is_vip: false,
                benefits: [
                  "Akses ke Haru Biru Experience Show area CAT 2 (duduk / free seating)",
                  "Akses ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              // {
              //   title: "Haru Biru · 9 Nov · TRIBUN",
              //   name: "TRIBUN",
              //   slug: "haru-biru-tribun",
              //   image: "/img/events/haru-biru/tickets/haru-biru-tribun.jpg",
              //   starts_in: "Oct 8, 2024 00:00:00",
              //   ends_in: "Nov 9, 2024 15:00:00",
              //   showStartCountdownLabel: false,
              //   showEndCountdownLabel: false,
              //   status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
              //   disableLink: true,
              //   button_label: "Beli tiket",
              //   button_url:
              //     "https://tiptip.id/event/459577cb-68b6-4f13-99dd-a71fe5b59afc",
              //   // price: "Rp200.000",
              //   price: "Rp325.000",
              //   label: "The ticket purchase",
              //   // price_before_discounted: "Rp325.000",
              //   is_vip: false,
              //   benefits: [
              //     "Akses ke Haru Biru Experience Show area TRIBUN (duduk / free seating)",
              //     "Akses ke Indonesia Comic Con 2024 di hari yang sama",
              //   ],
              // },
            ],
          },
        ],
        partners: [
          {
            category: "Stationery & Writing Partner",
            fullWidth: false,
            list: [
              {
                name: "Zebra",
                img: "/img/events/haru-biru/credits/01-zebra.jpg",
              },
            ],
          },
          {
            category: "Snacks & Treats Partner",
            fullWidth: false,
            list: [
              {
                name: "Mujigae by Wonhae",
                img: "/img/events/haru-biru/credits/02-mujigae-by-wonhae.jpg",
              },
            ],
          },

          {
            category: "Logistics Partner",
            fullWidth: false,
            list: [
              {
                name: "JNE",
                img: "/img/events/haru-biru/credits/04-jne.jpg",
              },
            ],
          },
          {
            category: "Creative IP Partner",
            fullWidth: false,
            list: [
              {
                name: "Tabi",
                img: "/img/events/haru-biru/credits/05-tabi.jpg",
              },
            ],
          },
          {
            category: "Blooms Partner",
            fullWidth: false,
            list: [
              {
                name: "Phane Florist",
                img: "/img/events/haru-biru/credits/06-phane-florist.jpg",
              },
            ],
          },
          {
            category: "Ticketing Partner",
            fullWidth: false,
            list: [
              {
                name: "Tiptip",
                img: "/img/events/haru-biru/credits/07-tiptip.jpg",
              },
            ],
          },
          {
            category: "Taste Experience Partner",
            fullWidth: true,
            list: [
              {
                name: "OT Group",
                img: "/img/events/haru-biru/credits/03-ot-group.jpg",
              },
            ],
          },
          {
            category: "Brand Partnership",
            fullWidth: false,
            list: [
              {
                name: "Hydro Coco",
                img: "/img/events/haru-biru/credits/08-hydro-coco.jpg",
              },
              {
                name: "Los Alamos",
                img: "/img/events/haru-biru/credits/09-los-alamos.jpg",
              },
            ],
          },
          {
            category: "Strategic Partner",
            fullWidth: true,
            list: [
              {
                name: "Volix",
                img: "/img/events/haru-biru/credits/10-volix.jpg",
              },
            ],
          },
        ],
      },

      {
        title: "Rasa Sayange Experience Show: Terasa Manise",
        shortTitle: "Rasa Sayange",
        slug: "rasa-sayange",
        status: "Completed",
        starts_in: "Nov 10, 2024 13:00:00",
        ends_in: "Nov 10, 2024 16:00:00",
        cover_image: "/img/events/rasa-sayange/rasa-sayange-poster.jpg",
        seating_plan: "/img/events/rasa-sayange/seating-plan-rasa-sayange.svg",
        categories: [
          "Konser",
          "Stand-up comedy",
          "Nyanyi bareng",
          "Sesi curhat",
        ],
        date: "10 November 2024",
        time: "13:00 - 16:00",
        location: "Jakarta Convention Center (JCC) Senayan",
        locationMap: "https://maps.app.goo.gl/iAyUVWEbUqHL1mGx7",
        hall: "Plenary Hall",
        starting_price: "Rp375.000",
        in_conjunction_with: {
          label: "In conjunction with",
          list: [
            {
              name: "Indonesia Comic Con",
              image: "/img/profile-pictures/icc.jpg",
              link: "https://indonesiacomiccon.com",
            },
          ],
        },
        description_short:
          "Siap-siap baper maksimal di Rasa Sayange Experience Show! 💕 Konser romantis untuk kamu yang lagi jatuh cinta, dengan tawa, lagu, dan momen manis yang bakal bikin hati meleleh. Yuk, ciptain kenangan indah bareng pasangan atau gebetan!",
        description_full: `
          <p>Buat kamu yang lagi berbunga-bunga karena cinta, Rasa Sayange Experience Show hadir khusus buat merayakan rasa itu! 💖 Dari ketawa bareng stand-up comedian yang bahas soal cinta-cintaan, curhat asik bareng pakar cinta, sampai nyanyi lagu romantis, semua ada di sini!</p>
          <p>Nggak cukup di situ, kita juga punya sesi nulis surat cinta buat yang pengen ungkapin perasaan, photo booth super cute buat kenang-kenangan, dan dinding memori penuh coretan sayang. 📝❤️</p>
          <p>Yuk, ajak pasangan atau gebetan kamu dan bikin momen yang bakal diinget seumur hidup! Siap-siap berbagi tawa, senyum, dan pelukan hangat di acara paling romantis tahun ini! 💏</p>
        `,
        guests: [
          {
            name: "Maliq & D'Essentials",
            categories: ["Music Performer"],
            img: "/img/events/rasa-sayange/featuring/maliq.png",
            isBgTransparent: true,
          },
          {
            name: "HIVI!",
            categories: ["Music Performer"],
            img: "/img/events/rasa-sayange/featuring/hivi.png",
            isBgTransparent: true,
          },
          {
            name: "RAPOT",
            categories: ["Live Podcast & Host"],
            img: "/img/events/rasa-sayange/featuring/rapot.png",
            isBgTransparent: true,
          },
          {
            name: "Zoya Amirin",
            categories: ["Speaker"],
            img: "/img/events/rasa-sayange/featuring/zoya.png",
            isBgTransparent: true,
          },
          {
            name: "Adjis Doa Ibu",
            categories: ["Stand-up Comedian"],
            img: "/img/events/rasa-sayange/featuring/adjis.png",
            isBgTransparent: true,
          },
          {
            name: "Juan & Eve",
            categories: ["Speaker"],
            img: "/img/events/rasa-sayange/featuring/juan-eve.png",
            isBgTransparent: true,
          },
        ],
        rundownImages: [
          {
            title: "Rundown Rasa Sayange",
            img: "/img/events/rasa-sayange/rundown/rundown-rasa-sayange.jpg",
            w: 1080,
            h: 1350,
          },
        ],
        gallery: [],
        tickets: [
          {
            title: "Tickets",
            slug: "tickets",
            description: "",
            list: [
              {
                title: "Rasa Sayange · 10 Nov · VIP",
                name: "VIP",
                slug: "rasa-sayange-vip",
                image: "/img/events/rasa-sayange/tickets/rasa-sayange-vip.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 10, 2024 16:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/7e729222-5998-42a6-bd09-2d216629f5fe?show_options=true",
                // price: "Rp500.000",
                price: "Rp750.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp750.000",
                is_vip: true,
                benefits: [
                  "Akses ke Rasa Sayange Experience Show area VIP (duduk / free seating)",
                  "Merchandise eksklusif Panorama Live",
                  "Akses jalur VIP ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              {
                title: "Rasa Sayange · 10 Nov · CAT 1",
                name: "CAT 1",
                slug: "rasa-sayange-cat-1",
                image:
                  "/img/events/rasa-sayange/tickets/rasa-sayange-cat-1.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 10, 2024 16:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/7e729222-5998-42a6-bd09-2d216629f5fe?show_options=true",
                // price: "Rp300.000",
                price: "Rp500.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp500.000",
                is_vip: false,
                benefits: [
                  "Akses ke Rasa Sayange Experience Show area CAT 1 (duduk / free seating)",
                  "Akses ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              {
                title: "Rasa Sayange · 10 Nov · CAT 2",
                name: "CAT 2",
                slug: "rasa-sayange-cat-2",
                image:
                  "/img/events/rasa-sayange/tickets/rasa-sayange-cat-2.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 10, 2024 16:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/7e729222-5998-42a6-bd09-2d216629f5fe?show_options=true",
                // price: "Rp250.000",
                price: "Rp375.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp375.000",
                is_vip: false,
                benefits: [
                  "Akses ke Rasa Sayange Experience Show area CAT 2 (berdiri / free standing)",
                  "Akses ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              // {
              //   title: "Rasa Sayange · 10 Nov · TRIBUN",
              //   name: "TRIBUN",
              //   slug: "rasa-sayange-tribun",
              //   image:
              //     "/img/events/rasa-sayange/tickets/rasa-sayange-tribun.jpg",
              //   starts_in: "Oct 8, 2024 00:00:00",
              //   ends_in: "Nov 10, 2024 16:00:00",
              //   showStartCountdownLabel: false,
              //   showEndCountdownLabel: false,
              //   status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
              //   disableLink: true,
              //   button_label: "Beli tiket",
              //   button_url:
              //     "https://tiptip.id/event/7e729222-5998-42a6-bd09-2d216629f5fe",
              //   // price: "Rp200.000",
              //   price: "Rp325.000",
              //   label: "The ticket purchase",
              //   // price_before_discounted: "Rp325.000",
              //   is_vip: false,
              //   benefits: [
              //     "Akses ke Rasa Sayange Experience Show area TRIBUN (duduk / free seating)",
              //     "Akses ke Indonesia Comic Con 2024 di hari yang sama",
              //   ],
              // },
            ],
          },
        ],
        partners: [
          {
            category: "Stationery & Writing Partner",
            fullWidth: false,
            list: [
              {
                name: "Zebra",
                img: "/img/events/rasa-sayange/credits/01-zebra.jpg",
              },
            ],
          },
          {
            category: "Snacks & Treats Partner",
            fullWidth: false,
            list: [
              {
                name: "Mujigae by Wonhae",
                img: "/img/events/rasa-sayange/credits/02-mujigae-by-wonhae.jpg",
              },
            ],
          },

          {
            category: "Logistics Partner",
            fullWidth: false,
            list: [
              {
                name: "JNE",
                img: "/img/events/rasa-sayange/credits/04-jne.jpg",
              },
            ],
          },
          {
            category: "Creative IP Partner",
            fullWidth: false,
            list: [
              {
                name: "Tabi",
                img: "/img/events/rasa-sayange/credits/05-tabi.jpg",
              },
            ],
          },
          {
            category: "Blooms Partner",
            fullWidth: false,
            list: [
              {
                name: "Phane Florist",
                img: "/img/events/rasa-sayange/credits/06-phane-florist.jpg",
              },
            ],
          },
          {
            category: "Ticketing Partner",
            fullWidth: false,
            list: [
              {
                name: "Tiptip",
                img: "/img/events/rasa-sayange/credits/07-tiptip.jpg",
              },
            ],
          },
          {
            category: "Taste Experience Partner",
            fullWidth: true,
            list: [
              {
                name: "OT Group",
                img: "/img/events/rasa-sayange/credits/03-ot-group.jpg",
              },
            ],
          },
          {
            category: "Brand Partnership",
            fullWidth: false,
            list: [
              {
                name: "Hydro Coco",
                img: "/img/events/rasa-sayange/credits/08-pick-me.jpg",
              },
              {
                name: "Hydro Coco",
                img: "/img/events/rasa-sayange/credits/09-hydro-coco.jpg",
              },
              {
                name: "Los Alamos",
                img: "/img/events/rasa-sayange/credits/10-los-alamos.jpg",
              },
              {
                name: "Hydro Coco",
                img: "/img/events/rasa-sayange/credits/11-sablon-juki.jpg",
              },
              {
                name: "Hydro Coco",
                img: "/img/events/rasa-sayange/credits/12-sweetbling.jpg",
              },
            ],
          },
        ],
      },

      {
        title: "Serasa Festival",
        shortTitle: "SeRasa Festival",
        slug: "serasa-festival",
        status: "Completed",
        starts_in: "Nov 10, 2024 18:00:00",
        ends_in: "Nov 10, 2024 21:00:00",
        cover_image: "/img/events/serasa-festival/serasa-festival-poster.jpg",
        seating_plan:
          "/img/events/serasa-festival/seating-plan-serasa-festival.svg",
        categories: ["Konser", "Nyanyi bareng"],
        date: "10 November 2024",
        time: "18:00 - 21:00",
        location: "Jakarta Convention Center (JCC) Senayan",
        locationMap: "https://maps.app.goo.gl/iAyUVWEbUqHL1mGx7",
        hall: "Plenary Hall",
        starting_price: "Rp375.000",
        in_conjunction_with: {
          label: "In conjunction with",
          list: [
            {
              name: "Indonesia Comic Con",
              image: "/img/profile-pictures/icc.jpg",
              link: "https://indonesiacomiccon.com",
            },
          ],
        },
        description_short:
          "Siap-siap merasakan semua emosi di Serasa Festival! 🎶 Dari cinta, persahabatan, hingga keluarga, nikmati musik yang bikin hati bergetar dan vibes yang bakal bikin kamu nggak mau pulang. Yuk, rayakan semua rasa di sini!",
        description_full: `
          <p>Bawa semua perasaanmu ke Serasa Festival! 🎉 Di sini, kita rayakan segala emosi yang ada—dari cinta yang membara, persahabatan yang hangat, sampai kenangan manis bareng keluarga. Nikmati panggung musik dengan tema perasaan yang bakal bikin hati berdebar dan mata berkaca-kaca.</p>
          <p>Bakal ada penampilan spesial dari musisi-musisi keren yang bakal ngiringin kamu merayakan setiap momen. Mulai dari lagu-lagu tentang cinta, sahabat, sampai keluarga, siap-siap untuk nyanyi bareng, joget bareng, dan nangis bareng! 🎤✨</p>
          <p>Di Serasa Festival, kamu nggak cuma nonton, tapi juga ngerasain dan berbagi. Yuk, hadir dan jadikan malam ini lebih berkesan dengan semua rasa yang ada di hati!</p>
        `,
        guests: [
          {
            name: "Bilal Indrajaya",
            categories: ["Music Performer"],
            img: "/img/events/serasa-festival/featuring/bilal.png",
            isBgTransparent: true,
          },
          {
            name: "Sal Priadi",
            categories: ["Music Performer"],
            img: "/img/events/serasa-festival/featuring/sal.png",
            isBgTransparent: true,
          },
          {
            name: "Salma Salsabil",
            categories: ["Music Performer"],
            img: "/img/events/serasa-festival/featuring/salma.png",
            isBgTransparent: true,
          },
          {
            name: "Project Pop",
            categories: ["Music Performer"],
            img: "/img/events/serasa-festival/featuring/project-pop.png",
            isBgTransparent: true,
          },
          {
            name: "Cokiber",
            categories: ["Host"],
            img: "/img/events/serasa-festival/featuring/cokiber.png",
            isBgTransparent: true,
          },
        ],
        rundownImages: [
          {
            title: "Rundown Serasa Festival",
            img: "/img/events/serasa-festival/rundown/rundown-serasa-festival.jpg",
            w: 1080,
            h: 1350,
          },
        ],
        gallery: [],
        tickets: [
          {
            title: "Tickets",
            slug: "tickets",
            description: "",
            list: [
              {
                title: "Serasa Festival · 10 Nov · VIP",
                name: "VIP",
                slug: "serasa-festival-vip",
                image:
                  "/img/events/serasa-festival/tickets/serasa-festival-vip.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 10, 2024 21:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/84acab65-8b65-4c72-8b41-0d530ca363a7?show_options=true",
                // price: "Rp450.000",
                price: "Rp600.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp600.000",
                is_vip: true,
                benefits: [
                  "Akses awal ke Serasa Festival area VIP (berdiri / free standing)",
                  "Akses VIP Lounge di area Panorama Live",
                  "Merchandise eksklusif Panorama Live",
                  "Akses jalur VIP ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              {
                title: "Serasa Festival · 10 Nov · FESTIVAL",
                name: "FESTIVAL",
                slug: "serasa-festival-festival",
                image:
                  "/img/events/serasa-festival/tickets/serasa-festival-festival.jpg",
                starts_in: "Oct 8, 2024 00:00:00",
                ends_in: "Nov 10, 2024 21:00:00",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url:
                  "https://tiptip.id/event/84acab65-8b65-4c72-8b41-0d530ca363a7?show_options=true",
                // price: "Rp250.000",
                price: "Rp375.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp375.000",
                is_vip: false,
                benefits: [
                  "Akses ke Serasa Festival area FESTIVAL (berdiri / free standing)",
                  "Akses ke Indonesia Comic Con 2024 di hari yang sama",
                ],
              },
              // {
              //   title: "Serasa Festival · 10 Nov · TRIBUN",
              //   name: "TRIBUN",
              //   slug: "serasa-festival-tribun",
              //   image:
              //     "/img/events/serasa-festival/tickets/serasa-festival-tribun.jpg",
              //   starts_in: "Oct 8, 2024 00:00:00",
              //   ends_in: "Nov 10, 2024 21:00:00",
              //   showStartCountdownLabel: false,
              //   showEndCountdownLabel: false,
              //   status: "", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
              //   disableLink: true,
              //   button_label: "Beli tiket",
              //   button_url:
              //     "https://tiptip.id/event/84acab65-8b65-4c72-8b41-0d530ca363a7",
              //   // price: "Rp200.000",
              //   price: "Rp300.000",
              //   label: "The ticket purchase",
              //   // price_before_discounted: "Rp300.000",
              //   is_vip: false,
              //   benefits: [
              //     "Akses ke Serasa Festival area TRIBUN (duduk / free seating)",
              //     "Akses ke Indonesia Comic Con 2024 di hari yang sama",
              //   ],
              // },
            ],
          },
        ],
        partners: [
          {
            category: "Celebration Partner",
            fullWidth: false,
            list: [
              {
                name: "Pico9 Cake",
                img: "/img/events/serasa-festival/credits/01-pico9-cake.jpg",
              },
            ],
          },
          {
            category: "Snacks & Treats Partner",
            fullWidth: false,
            list: [
              {
                name: "Mujigae by Wonhae",
                img: "/img/events/serasa-festival/credits/02-mujigae-by-wonhae.jpg",
              },
            ],
          },

          {
            category: "Logistics Partner",
            fullWidth: false,
            list: [
              {
                name: "JNE",
                img: "/img/events/serasa-festival/credits/04-jne.jpg",
              },
            ],
          },
          {
            category: "Creative IP Partner",
            fullWidth: false,
            list: [
              {
                name: "Tabi",
                img: "/img/events/serasa-festival/credits/05-tabi.jpg",
              },
            ],
          },
          {
            category: "Blooms Partner",
            fullWidth: false,
            list: [
              {
                name: "Phane Florist",
                img: "/img/events/serasa-festival/credits/06-phane-florist.jpg",
              },
            ],
          },
          {
            category: "Ticketing Partner",
            fullWidth: false,
            list: [
              {
                name: "Tiptip",
                img: "/img/events/serasa-festival/credits/07-tiptip.jpg",
              },
            ],
          },
          {
            category: "Taste Experience Partner",
            fullWidth: true,
            list: [
              {
                name: "OT Group",
                img: "/img/events/serasa-festival/credits/03-ot-group.jpg",
              },
            ],
          },
          {
            category: "Brand Partnership",
            fullWidth: false,
            list: [
              {
                name: "Hydro Coco",
                img: "/img/events/serasa-festival/credits/08-hydro-coco.jpg",
              },
              {
                name: "Los Alamos",
                img: "/img/events/serasa-festival/credits/09-los-alamos.jpg",
              },
            ],
          },
        ],
      },

      {
        title: "Wengi",
        slug: "wengi",
        status: "Completed",
        starts_in: "Jul 1, 2022 10:00:00",
        ends_in: "Jul 24, 2024 21:00:00",
        cover_image: "/img/events/wengi/wengi-poster.jpg",
        categories: ["Wahana", "Horor"],
        date: "1-24 Juli 2022",
        time: "10 AM - 10 PM",
        location: "Senayan Park (SPARK)",
        locationMap: "https://maps.app.goo.gl/4YjJDrveCdXAfjcE6",
        starting_price: "Rp120.000",
        in_conjunction_with: {
          label: "In partnership with",
          list: [
            {
              name: "Rekata Studio",
              image: "/img/profile-pictures/rekata.jpg",
            },
            {
              name: "Diary Misteri Sara",
              image: "/img/profile-pictures/dms.jpg",
            },
          ],
        },
        description_short:
          "Nikmati pengalaman mistis melalui Virtual Reality di Wengi, sebuah wahana yang terinspirasi dari serial YouTube Diary Misteri Sara. Saksikan penelusuran Sara Wijayanto sebagai psychic light trance medium bersama tim DMS dan rasakan ketegangan yang nyata dalam dunia gaib.",
        description_full: `
          <h3>Tentang Wengi</h3>
          <p>
            Rasakan ketegangan melalui pengalaman Virtual Reality di Wengi, event yang terinspirasi dari serial populer <strong>Diary Misteri Sara</strong> (DMS). Sara Wijayanto, seorang <em>psychic light trance medium</em>, bersama tim DMS akan membawa Anda merasakan pengalaman menelusuri dunia gaib, sebagaimana yang dilakukan dalam serial YouTube DMS. Wengi hadir untuk memberikan pengalaman mistis yang nyata, di mana Anda bisa menyaksikan langsung interaksi Sara dengan entitas dari alam lain.
          </p>
          <p>
            <strong>Wengi</strong> merupakan kesempatan langka bagi para penggemar DMS, atau yang akrab disebut Saraddicts, untuk merasakan atmosfer mencekam yang selalu menghantui setiap episode. Melalui teknologi <em>Virtual Reality Experience</em>, pengunjung akan diajak berkeliling di lokasi-lokasi yang disinyalir memiliki aktivitas supranatural, seolah Anda ikut serta dalam penelusuran bersama Sara dan tim.
          </p>

          <h3>Waktu dan Lokasi</h3>
          <p>
            Wengi akan diselenggarakan di Jakarta di:
            <br />
            <strong>1 – 24 Juli 2022</strong> di Senayan Park Lantai 1.
          </p>
          <p>
            <strong>Jam Operasional:</strong><br />
            Senin-Kamis: 12:00 – 22:00 WIB <br />
            Jumat-Minggu: 10:00 – 22:00 WIB
          </p>
          <p>
            <strong>Catatan:</strong> Pengalaman ini disarankan untuk usia 13 tahun ke atas. Pengunjung di bawah usia tersebut harus didampingi oleh orang dewasa.
          </p>
        `,
        guests: [
          {
            name: "Sara Wijayanto",
            img: "/img/events/wengi/featuring/sara-wijayanto.jpg",
          },
          {
            name: "Demian Aditya",
            img: "/img/events/wengi/featuring/demian-aditya.jpg",
          },
          {
            name: "Fadi Iskandar",
            img: "/img/events/wengi/featuring/fadi-iskandar.jpg",
          },
          {
            name: "Wisnu Hardana",
            img: "/img/events/wengi/featuring/wisnu-hardana.jpg",
          },
        ],
        gallery: [
          "001.jpg",
          "002.jpg",
          "003.jpg",
          "004.jpg",
          "005.jpg",
          "006.jpg",
          "007.jpg",
          "008.jpg",
          "009.jpg",
          "010.jpg",
          "011.jpg",
          "012.jpg",
          "013.jpg",
          "014.jpg",
          "015.jpg",
          "016.jpg",
          "017.jpg",
          "018.jpg",
          "019.jpg",
          "020.jpg",
          "021.jpg",
          "022.jpg",
          "023.jpg",
          "024.jpg",
          "025.jpg",
          "026.jpg",
          "027.jpg",
          "028.jpg",
          "029.jpg",
          "030.jpg",
          "031.jpg",
          "032.jpg",
          "033.jpg",
          "034.jpg",
          "035.jpg",
          "036.jpg",
          "037.jpg",
          "038.jpg",
          "039.jpg",
          "040.jpg",
          "041.jpg",
          "042.jpg",
        ],
        tickets: [
          {
            title: "Tickets",
            slug: "tickets",
            description: "",
            list: [
              {
                title: "Wengi Ticket Weekday",
                slug: "wengi-weekday",
                image: "/img/events/wengi/tickets/wengi-weekday.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp120.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Wengi Ticket Weekend",
                slug: "wengi-weekend",
                image: "/img/events/wengi/tickets/wengi-weekend.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp180.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Wengi Ticket Bundling 4 Stories",
                slug: "wengi-bundling",
                image: "/img/events/wengi/tickets/wengi-bundling.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp410.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
            ],
          },
        ],
      },

      {
        title: "Love Fest 2020",
        slug: "lovefest",
        status: "Completed",
        starts_in: "Feb 21, 2020 10:00:00",
        ends_in: "Feb 22, 2024 21:00:00",
        cover_image: "/img/events/lovefest/lovefest-poster.jpg",
        categories: ["Konser", "Nyanyi bareng"],
        date: "21-22 Februari 2020",
        time: "",
        location: "Istora Senayan",
        locationMap: "https://maps.app.goo.gl/7T9yPdkWm21Vs57YA",
        hall: "",
        starting_price: "Rp420.000",
        in_conjunction_with: {
          label: "In partnership with",
          list: [
            {
              name: "Hype Festival",
              image: "/img/profile-pictures/hype.jpg",
            },
            {
              name: "Berlian Entertainment",
              image: "/img/profile-pictures/berlian.jpg",
            },
          ],
        },
        description_short:
          "Love Fest 2020 kembali hadir dengan lineup musisi top dalam dan luar negeri! Siap-siap rasakan cinta yang nyata di festival seru ini, mulai dari momen baper, jatuh cinta, hingga nyanyi bareng. Jangan lewatkan keseruannya pada 21 & 22 Februari 2020!",
        description_full: `
          <h3>LOVE FEST IS BACK!! 🎉</h3>
          <p>
            Love Fest 2020 hadir lebih dahsyat dan siap membawa kamu masuk ke dunia cinta yang tak mungkin terlupakan. Dari tawa hingga air mata, festival ini siap mengajak kamu berbicara, bernyanyi, dan bermain dengan rasa cinta.
          </p>
          <p>
            Walau cinta sering tak terlihat atau tak terucap, di Love Fest, kamu akan merasakan cinta dalam segala bentuknya. Nggak harus bareng pasangan, karena Love Fest 2020 bakal bikin weekend kamu lebih berkesan dengan serangkaian aktivitas seru. Mulai dari nyanyi bareng sampai unjukin rasa baper kamu, semua bisa kamu lakukan di sini! Dan siapa tahu, kamu bisa jadi bagian dari <strong>#KomunitasPakePerasaan</strong> yang bisa aja nemu jodoh di sini 🥰.
          </p>
          <p>
            Nikmati penampilan dari musisi keren seperti:
          </p>
          <ul>
            <li><strong>Sun Rai</strong></li>
            <li><strong>Rossa</strong></li>
            <li><strong>Tulus</strong></li>
            <li><strong>NOAH</strong></li>
            <li><strong>HRVY</strong></li>
            <li><strong>Yovie & Arsy Widianto</strong></li>
            <li><strong>Glenn Fredly</strong></li>
            <li><strong>FOURTWNTY</strong></li>
            <li><strong>Nitya Shamdasani</strong></li>
            <li><strong>Reza Artamevia</strong></li>
            <li><strong>Armand Maulana</strong></li>
            <li><strong>Andmesh</strong></li>
            <li><strong>Ardhito Pramono</strong></li>
            <li><strong>Marion Jola</strong></li>
            <li><strong>Devano Danendra</strong></li>
            <li><strong>Nadin Amizah</strong></li>
          </ul>
          <p>
            <strong>Tanggal:</strong> 21 & 22 Februari 2020 <br>
            <strong>Tempat:</strong> JCC Senayan
          </p>
          <p>
            Siapkan diri kamu untuk merasakan cinta yang nyata di <strong>A Love Experience Festival</strong>. Jangan sampai kelewatan momen spesial ini!
          </p>
        `,
        guests: [
          {
            name: "Sun Rai",
            img: "/img/events/lovefest/featuring/sun-rai.jpg",
            appearanceDate: {
              date: "21",
              month: "Feb",
            },
          },
          {
            name: "Rossa",
            img: "/img/events/lovefest/featuring/rossa.jpg",
            appearanceDate: {
              date: "21",
              month: "Feb",
            },
          },
          {
            name: "Tulus",
            img: "/img/events/lovefest/featuring/tulus.jpg",
            appearanceDate: {
              date: "21",
              month: "Feb",
            },
          },
          {
            name: "NOAH",
            img: "/img/events/lovefest/featuring/noah.jpg",
            appearanceDate: {
              date: "21",
              month: "Feb",
            },
          },
          {
            name: "Nitya Shamdasani",
            img: "/img/events/lovefest/featuring/nitya.jpg",
            appearanceDate: {
              date: "21",
              month: "Feb",
            },
          },
          {
            name: "FOURTWNTY",
            img: "/img/events/lovefest/featuring/four-twenty.jpg",
            appearanceDate: {
              date: "21",
              month: "Feb",
            },
          },
          {
            name: "North to East",
            img: "/img/events/lovefest/featuring/north-to-east.jpg",
            appearanceDate: {
              date: "21",
              month: "Feb",
            },
          },
          {
            name: "HRVY",
            img: "/img/events/lovefest/featuring/hrvy.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Yovie & Arsy Widianto",
            img: "/img/events/lovefest/featuring/yovie-arsy.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Glenn Fredly",
            img: "/img/events/lovefest/featuring/glenn.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Reza Artamevia",
            img: "/img/events/lovefest/featuring/reza.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Armand Maulana",
            img: "/img/events/lovefest/featuring/armand-maulana.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Andmesh",
            img: "/img/events/lovefest/featuring/andmesh.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Ardhito Pramono",
            img: "/img/events/lovefest/featuring/ardhito.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Marion Jola",
            img: "/img/events/lovefest/featuring/marion.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Devano Danendra",
            img: "/img/events/lovefest/featuring/devano.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
          {
            name: "Nadin Amizah",
            img: "/img/events/lovefest/featuring/nadin.jpg",
            appearanceDate: {
              date: "22",
              month: "Feb",
            },
          },
        ],
        rundownImages: [
          {
            title: "Rundown Day 1 (21 Feb)",
            img: "/img/events/lovefest/rundown/rundown-day-1.jpg",
            w: 1080,
            h: 1080,
          },
          {
            title: "Rundown Day 2 (22 Feb)",
            img: "/img/events/lovefest/rundown/rundown-day-2.jpg",
          },
        ],
        gallery: [
          "lovefestindo-20240916-0025.jpg",
          "lovefestindo-20240916-0026.jpg",
          "lovefestindo-20240916-0029.jpg",
          "lovefestindo-20240916-0030.jpg",
          "lovefestindo-20240916-0031.jpg",
          "lovefestindo-20240916-0032.jpg",
          "lovefestindo-20240916-0033.jpg",
          "lovefestindo-20240916-0034.jpg",
          "lovefestindo-20240916-0035.jpg",
          "lovefestindo-20240916-0036.jpg",
          "lovefestindo-20240916-0037.jpg",
          "lovefestindo-20240916-0038.jpg",
          "lovefestindo-20240916-0039.jpg",
          "lovefestindo-20240916-0040.jpg",
          "lovefestindo-20240916-0041.jpg",
          "lovefestindo-20240916-0042.jpg",
          "lovefestindo-20240916-0043.jpg",
          "lovefestindo-20240916-0044.jpg",
          "lovefestindo-20240916-0045.jpg",
          "lovefestindo-20240916-0046.jpg",
          "lovefestindo-20240916-0047.jpg",
          "lovefestindo-20240916-0048.jpg",
          "lovefestindo-20240916-0049.jpg",
          "lovefestindo-20240916-0050.jpg",
          "lovefestindo-20240916-0051.jpg",
          "lovefestindo-20240916-0052.jpg",
          "lovefestindo-20240916-0053.jpg",
          "lovefestindo-20240916-0054.jpg",
          "lovefestindo-20240916-0055.jpg",
          "lovefestindo-20240916-0056.jpg",
          "lovefestindo-20240916-0057.jpg",
          "lovefestindo-20240916-0058.jpg",
          "lovefestindo-20240916-0059.jpg",
          "lovefestindo-20240916-0060.jpg",
          "lovefestindo-20240916-0061.jpg",
          "lovefestindo-20240916-0062.jpg",
          "lovefestindo-20240916-0063.jpg",
          "lovefestindo-20240916-0064.jpg",
          "lovefestindo-20240916-0065.jpg",
          "lovefestindo-20240916-0066.jpg",
          "lovefestindo-20240916-0067.jpg",
          "lovefestindo-20240916-0068.jpg",
          "lovefestindo-20240916-0069.jpg",
          "lovefestindo-20240916-0070.jpg",
          "lovefestindo-20240916-0071.jpg",
          "lovefestindo-20240916-0072.jpg",
          "lovefestindo-20240916-0073.jpg",
          "lovefestindo-20240916-0074.jpg",
          "lovefestindo-20240916-0075.jpg",
          "lovefestindo-20240916-0076.jpg",
          "lovefestindo-20240916-0077.jpg",
          "lovefestindo-20240916-0078.jpg",
          "lovefestindo-20240916-0079.jpg",
          "lovefestindo-20240916-0080.jpg",
          "lovefestindo-20240916-0081.jpg",
          "lovefestindo-20240916-0082.jpg",
          "lovefestindo-20240916-0083.jpg",
          "lovefestindo-20240916-0084.jpg",
          "lovefestindo-20240916-0085.jpg",
          "lovefestindo-20240916-0086.jpg",
          "lovefestindo-20240916-0087.jpg",
          "lovefestindo-20240916-0088.jpg",
          "lovefestindo-20240916-0089.jpg",
          "lovefestindo-20240916-0090.jpg",
          "lovefestindo-20240916-0091.jpg",
          "lovefestindo-20240916-0092.jpg",
          "lovefestindo-20240916-0093.jpg",
          "lovefestindo-20240916-0094.jpg",
          "lovefestindo-20240916-0095.jpg",
          "lovefestindo-20240916-0096.jpg",
          "lovefestindo-20240916-0097.jpg",
          "lovefestindo-20240916-0098.jpg",
          "lovefestindo-20240916-0099.jpg",
          "lovefestindo-20240916-0100.jpg",
          "lovefestindo-20240916-0101.jpg",
          "lovefestindo-20240916-0102.jpg",
          "lovefestindo-20240916-0103.jpg",
          "lovefestindo-20240916-0104.jpg",
          "lovefestindo-20240916-0105.jpg",
          "lovefestindo-20240916-0106.jpg",
          "lovefestindo-20240916-0107.jpg",
          "lovefestindo-20240916-0108.jpg",
          "lovefestindo-20240916-0109.jpg",
          "lovefestindo-20240916-0110.jpg",
          "lovefestindo-20240916-0111.jpg",
          "lovefestindo-20240916-0112.jpg",
          "lovefestindo-20240916-0113.jpg",
          "lovefestindo-20240916-0114.jpg",
          "lovefestindo-20240916-0115.jpg",
          "lovefestindo-20240916-0116.jpg",
          "lovefestindo-20240916-0117.jpg",
          "lovefestindo-20240916-0118.jpg",
          "lovefestindo-20240916-0119.jpg",
          "lovefestindo-20240916-0120.jpg",
          "lovefestindo-20240916-0121.jpg",
          "lovefestindo-20240916-0122.jpg",
          "lovefestindo-20240916-0123.jpg",
          "lovefestindo-20240916-0124.jpg",
        ],
        tickets: [
          {
            title: "Tickets",
            slug: "tickets",
            description: "",
            list: [
              {
                title: "Festival · One-Day Pass · Single",
                slug: "lovefest-festival-single",
                image:
                  "/img/events/lovefest/tickets/lovefest-festival-single.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp420.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                // day_pass: "One-day pass",
                // entrance: "Regular entrance",
                benefits: [],
              },
              {
                title: "Festival · One-Day Pass · Berduaan",
                slug: "lovefest-festival-berduaan",
                image:
                  "/img/events/lovefest/tickets/lovefest-festival-berduaan.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp700.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Festival · Two-Day Pass",
                slug: "lovefest-festival-two-day-pass",
                image:
                  "/img/events/lovefest/tickets/lovefest-festival-two-day-pass.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp675.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Silver · One-Day Pass · Single",
                slug: "lovefest-silver-single",
                image:
                  "/img/events/lovefest/tickets/lovefest-silver-single.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp475.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Silver · One-Day Pass · Berduaan",
                slug: "lovefest-silver-berduaan",
                image:
                  "/img/events/lovefest/tickets/lovefest-silver-berduaan.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp725.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Silver · Two-Day Pass",
                slug: "lovefest-silver-two-day-pass",
                image:
                  "/img/events/lovefest/tickets/lovefest-silver-two-day-pass.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp900.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Gold · One-Day Pass · Single",
                slug: "lovefest-gold-single",
                image: "/img/events/lovefest/tickets/lovefest-gold-single.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp700.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Gold · One-Day Pass · Berduaan",
                slug: "lovefest-gold-berduaan",
                image:
                  "/img/events/lovefest/tickets/lovefest-gold-berduaan.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp1.100.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
              {
                title: "Gold · Two-Day Pass",
                slug: "lovefest-gold-two-day-pass",
                image:
                  "/img/events/lovefest/tickets/lovefest-gold-two-day-pass.jpg",
                showStartCountdownLabel: false,
                showEndCountdownLabel: false,
                status: "Sold out", // empty string, Coming Soon, Available, Sold out // Coming Soon, Available, Sold out
                disableLink: true,
                button_label: "Beli tiket",
                button_url: "",
                price: "Rp1.250.000",
                label: "The ticket purchase",
                // price_before_discounted: "Rp105,000",
                is_vip: false,
                benefits: [],
              },
            ],
          },
        ],
      },
    ],
  }),

  getters: {
    getEventBySlug: (state) => (slug) => {
      return state.list.find((event) => event.slug === slug);
    },

    getEventsByStatus: (state) => (status) => {
      return state.list.filter((item) => item.status.toLowerCase() == status);
    },
  },
});
