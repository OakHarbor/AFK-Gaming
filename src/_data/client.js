module.exports = {
    name: "AFK Mobile Arcade",
    email: "info@afkmobilearcade.com",
    phoneForTel: "866-752-9235",
    phoneFormatted: "(866) 752-9235",
    address: {
        lineOne: "Greensboro, North Carolina",
        // lineTwo: "Second Address Line",
        // city: "Denver",
        // state: "CO",
        // zip: "80206",
        // country: "US",
        mapLink: "https://maps.app.goo.gl/QsN2waiqsxKdUnMQ9",
    },
    socials: {
        google: "https://share.google/ANxDJjzcaRdTGmIed",
        facebook: "https://www.facebook.com/AFKmobilearcade/",
        instagram: "https://www.instagram.com/afkmobilearcade/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://afkmobilearcade.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
