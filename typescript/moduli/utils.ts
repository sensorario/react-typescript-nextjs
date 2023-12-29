export function formatDate(date : Date) {
    const options : Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        weekday: "long"
    }

    return date.toLocaleDateString("en-US", options);
}

