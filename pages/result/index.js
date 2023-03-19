import Head from  "next/head"
import bodyParser from "body-parser";
import util from "util";
import CSS from "../../styles/home.module.css"
import downlaod from "../api/downlaodImage";


const getBody = util.promisify(bodyParser.urlencoded());


export default function Home({body}) {

  const text = body.text ?? ""
  const imageURL = `/api/createImage?image=${encodeURI(body.image)}&text=${encodeURI(text)}${body.hasZoom === "on" ? "&zoom=true" : ""}` ?? "/api/createImage"
  const downlaodURL = `/api/downlaodImage?url="${encodeURI(imageURL)}"gqKV5$Yti379yqyP9GTt` ?? "."

  return (
    <>
    <Head>
        <title>Thumbnail generator</title>
        <meta property="og:image" content={imageURL} />
    </Head>
    <div className={CSS.mainContent}>
      <span className={CSS.title}>Your Image</span>
      <img className={CSS.image} src={imageURL}></img>
      <div class={CSS.flexContainer}>
        <a class={CSS.downlaodButton} target={"_blank"} href={downlaodURL}>Download</a>
        <a class={CSS.downlaodButton} href={"/"}>Home</a>
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps({req , res}){
    await getBody(req, res);
    if (req.method !== "POST"){
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      }
    }
    return { 
        props : {body : req.body},
    }
  }