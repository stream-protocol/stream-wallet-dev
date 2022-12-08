module.exports = {
    theme: "cosmos",
    title: "Stream wallet",
    locales: {
        "/": {
            lang: "en-US",
        },
    },
    base: process.env.VUEPRESS_BASE || "/",
    head: [
        ["link", { rel: "icon", type: "image/png", href: "/favicon-256.png" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:url", content: "https://docs.streamprotocol.app/wallet" }],
        ["meta", { property: "og:title", content: "Documentation | Stream Wallet" }],
        [
            "meta",
            {
                property: "og:description",
                content: "Stream Wallet is a non-custodial blockchain wallets for webpages that allow users to interact with blockchain applications.",
            },
        ],
        [
            "meta",
            { property: "og:image", content: "https://docs.streamprotocol.app/wallet/og-image.png" },
        ],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ],
    themeConfig: {
        custom: true,
        editLinks: false,
        repo: "stream-protocol/stream-wallet",
        docsRepo: "stream-protocol/stream-wallet",
        docsDir: "docs",
        logo: {
            src: "/Stream_Wallet_Black.png",
        },
        topbar: {
            banner: false,
        },
        sidebar: {
            auto: false,
            nav: [{
                title: "API",
                children: [{
                    title: "Stream Wallet API",
                    directory: true,
                    path: "/api",
                }, ],
            }, ],
        },
    },
    plugins: [
        [
            "sitemap",
            {
                hostname: "https://docs.streamprotocol.app/wallet",
            },
        ],
    ],
    markdown: {
        extendMarkdown: (md) => {
            md.use(require("markdown-it-container"), "suggest-chain-example-table");
        },
    },
};