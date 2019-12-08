const http = async (): Promise<any> => {
    return new Promise(resolve => {
        fetch("https://e2workci.ddns.net/api/mockup.php")
            .then(response => response.json())
            .then(body => {
                resolve(body);
            });
    });
};

export default http;
