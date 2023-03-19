import { ImageResponse } from "@vercel/og"
import fetch from "node-fetch"



export const config = {
  runtime: 'experimental-edge',
}

export default async function (req, res) {
  const { searchParams } = new URL(req.url) // make a searchParam object
  const text = decodeURI(searchParams.get("text"))
  const hasZoom = !searchParams.get("zoom") ? false : true
  const zoomProprety = hasZoom ? "cover" : "contain"
  let image = searchParams.get("image")
  let isImage = false


  
    try {
      const resp = await fetch(image);
      isImage = resp.headers.get("Content-Type").includes("image")
    } catch (err) {
      console.log(err)
    }
  
  
    // ?? -> if first is null or undefined
    // || -> if first is any falsy value
    if (!isImage) image = "" 
    if (!text || !image) { 
      let reason = ""
      if (!text && image) {
        reason = "No text !"
      }else if (!image && text){
        reason = "No image"
      }else {
        reason = "No text and image"
      }
      const left = reason === "No text and image" ? "0" : "170px"
      return new ImageResponse(
        (
    
        <>
          <div style={{position : "absolute" , backgroundColor : "#333" , width : "200%" , height : "100%",}}></div>
          <div style={{
            display: "flex",
            alignItems : "center",
            backgroundColor : "#333",
            position : "relative",
            left : left,
            top : "130px",
            }}>
            <img src="https://www.freeiconspng.com/thumbs/warning-icon-png/sign-warning-icon-png-7.png" />
            <span style={{color : "red" , fontFamily: "system-ui" , fontSize : "100px"}}>{reason}</span>
          </div>
        </>
        )
      )
    }else {
  
      return new ImageResponse(
          (
          <>
    
          <head style={{position : "absolute",backgroundColor : "#333" , height : "630px"}}>
            <img onError={() => {console.log("holy shit !")}} style={{position : "absolute" , backgroundColor : "#333" , objectFit : zoomProprety , height : "480px" , width : "1200px"}} src={image}></img>
            <div style={{ borderRadius : "10px", display : "flex",width : "1200px", backgroundColor : "#333", height : "150px", position : "relative" , top : "480px"}}>
              <span style={{color : "#bebebe" ,fontWeight : "900", fontSize : "100px" , marginLeft : "auto" , marginRight : "auto"}}>{text}</span>
            </div>
          </head>
          </>
          )
        )
      }
  
    }


