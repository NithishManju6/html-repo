function onGot(historyItems) {
    for (const item of historyItems) {
        console.log(item.url);
        console.log(new Date(item.lastVisitTime));
    }
}

history.search({
    text: "chrome",
    startTime: 0,
    maxResults: 5,
})
    .then(onGot);