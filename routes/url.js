import express from "express";
import handleGenerateNewShortUrl from '../controller/url.js';
const router= express.Router();


router.post('/', handleGenerateNewShortUrl);


router.get('/:shortId', async(req,res)=> {
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
});

export default router;