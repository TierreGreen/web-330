/**
 * Title: HTTP-CLIENT.JSa
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: May 9, 2021
 * description: HTTPCLient class export
 */


export class HttpClient {
    async get(url, params = "") {
        
        let urlObject = new URL(url);

        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject

        const res = await fetch(urlObjerct.toString(), {
            method: "GET",
        });

        return res.json();
    
    }

}