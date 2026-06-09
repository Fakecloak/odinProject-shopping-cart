export const fetcherWithFetch  = async (url) => {
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`HTTP error: Status ${response.status}`);
    }
    // console.log("fetcher called");
    return response.json();
};