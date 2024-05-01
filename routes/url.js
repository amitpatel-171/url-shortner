import express from "express";
import {handleGenerateNewShortUrl,handleGetShortenUrl }  from '../controller/url.js'; 
const router= express.Router();


router.post('/', handleGenerateNewShortUrl);


router.get('/:shortId', handleGetShortenUrl);

export default router;