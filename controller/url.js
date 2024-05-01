import {nanoid} from "nanoid";
import URL from "../models/url.js";


async function handleGenerateNewShortUrl(req, res){
    const body= req.body;
    if(!body.url) return res.status(400).json({err: "url is required"});
    const shortID= nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistroy: [],
    });

    return res.json({id: shortID});
}


export default handleGenerateNewShortUrl;