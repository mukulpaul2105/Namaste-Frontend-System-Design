// Only access/load resources from known / predifined domains/cdn/ip

// Example
const allowdDomains = ['api.example.com', 'internal-service.local'];

const isFromAllowedDomain  = (url) => {
    const parsedURL = new URL(url);
    return allowdDomains.includes(parsedURL.hostname);
}

// Before making a request check if the URL is from whitelisted domains
if (isFromAllowedDomain(url)) {
    // make the request
} else {
    return res.status(403).send('Access to this domain is not allowed');
}