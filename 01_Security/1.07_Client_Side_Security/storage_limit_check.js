
const hasEnoughSpaceForData = () => {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
        navigator.storage.estimate().then(estimate => {
            // Storage Used in MBs
            console.log("Usage: " + (estimate.usage / 1024 / 1024).toFixed(2) + " MB");
            // Storage Quota in MBs
            console.log("Quota: " + (estimate.quota / 1024 / 1024).toFixed(2) + " MB");
        })
    } else {
        console.log("StorageManager API is not supported in this browser");
    }
}



hasEnoughSpaceForData()
