module.exports = {
    testMatch:[
       // `<rootDir>/test/suite${process.env.JEST_SUITE}/*.spec.js`
    ],
    reporters: [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Exoswap Backend Test Report"
        }]
    ]
}
