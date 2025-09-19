module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/ethan-web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/dd3a6_e194c388._.js",
  "build/chunks/[root-of-the-server]__8e9d882f._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/ethan-web/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];