import fetch from "node-fetch"
import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

export default async function (req, res) { 
    let url = "http://localhost:3000"+decodeURI(decodeURI(req.url.split('%22')[1]))
    console.log(url)
    
    //const url = `http://localhost:3000/api/createImage?image=${image}&text=${text}&zoom=${searchParams.get("zoom")}`
    const response = await fetch(url); // replace this with your API call & options
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`)
    
    res.setHeader("Content-Type", "image/png")
    res.setHeader("Content-Disposition", `attachment; filename=your_image.png`)
    await pipeline(response.body, res)
}