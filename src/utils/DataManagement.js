let urls = [];

const DataManagement = (() => {
    const STORAGE_KEY = "shortifyLinks";

    function isStorageExist() {
        if (typeof Storage == "undefined") {
            alert("Your browser do not support Local Storage");
            return false;
        }
        return true;
    }

    function saveUrlToStorage(newData) {
        if (urls.length === 5) {
            // eslint-disable-next-line no-unused-vars
            let theRemovedElement = urls.shift();
        }
        urls.push(newData);
        const parsedData = JSON.stringify(urls);
        localStorage.setItem(STORAGE_KEY, parsedData);
    }

    function removeLink() {
        const parsedData = JSON.stringify(urls);
        localStorage.setItem(STORAGE_KEY, parsedData);
    }

    function getUrlFromStorage() {
        const serializedData = localStorage.getItem(STORAGE_KEY);
        const data = JSON.parse(serializedData);
        if (data == null) {
            return [];
        }
        urls = data;
        return data;
    }

    function composeData(originalUrl, shortUrl) {
        return {
            id: +new Date(),
            originalUrl,
            shortUrl,
        };
    }
    return {
        isStorageExist,
        saveUrlToStorage,
        removeLink,
        getUrlFromStorage,
        composeData,
    };
})();

export { urls, DataManagement };
