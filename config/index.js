module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "Cloudbacon", // Navigation and Site Title
  siteTitleAlt: "Cloudbacon - Ramblings of Braidn", // Alternative Site title for SEO
  siteTitleManifest: "Cloudbacon",
  siteUrl: "https://cloudbacon.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteHeadline: "Writing and publishing content", // Headline for schema.org JSONLD
  siteBanner: "/social/banner.jpg", // Your image for og:image tag. You can find it in the /static folder
  favicon: "src/favicon.png", // Your image for favicons. You can find it in the /src folder
  siteDescription:
    "Blog about Ruby/Reason/JavaScript and the professional world of programming", // Your site description
  author: "Braidn", // Author for schemaORGJSONLD
  siteLogo: "/social/logo.png", // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@braidn", // Twitter Username - Optional
  googleAnalyticsID: "UA-47519312-6",

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: "#3498DB",
  backgroundColor: "#2b2e3c"
};
