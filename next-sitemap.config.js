/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://www.disclosingvalue.com";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: "*", allow: "/" }],
    },
    outDir: "./out",
};