import {nanoid} from "nanoid";
import URL from "../models/url.js";


export async function handleGenerateNewShortUrl(req, res){
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


export async function handleGetShortenUrl (req,res){
    const shortId= req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId},
    {$push: {
        visitHistroy:{
            timestamp: Date.now(),
        },
    }}
);
res.redirect(entry.redirectUrl);
};

 