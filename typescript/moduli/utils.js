"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long"
    };
    return date.toLocaleDateString("en-US", options);
}
exports.formatDate = formatDate;
