

export const getLastModifiedDatetime = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    const now = new Date();
    const timeDifference = now - date;
    let formattedDate;
    
    if (timeDifference < 60000) {
        // Less than a minute ago
        formattedDate = "Just now";
    } else if (timeDifference < 3600000) {
        // Less than an hour ago
        const minutes = Math.floor(timeDifference / 60000);
        formattedDate = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400000) {
        // Less than a day ago
        const hours = Math.floor(timeDifference / 3600000);
        formattedDate = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 604800000) {
        // Less than a week ago
        const days = Math.floor(timeDifference / 86400000);
        formattedDate = `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
        // More than a week ago
        formattedDate = date.toLocaleString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric' 
        });
    }
    
    return formattedDate;
}