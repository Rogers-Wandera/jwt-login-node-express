const CustomAPIError = require("./custom-error");
const badRequestError = require("./badRequest");
const unAuthenticatedError = require("./unauthenticated");


module.exports = {
    CustomAPIError,
    badRequestError,
    unAuthenticatedError
}