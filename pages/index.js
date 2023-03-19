import Head from  "next/head"
import CSS from "../styles/home.module.css"

export default function Home() {
  const imageURL = "http://localhost:3000/api/createImage"

  return (
    <>
    <Head>
        <title>Thumbnail generator</title>
    </Head>
    <form method={"post"} action={"/result"} className={CSS.mainContent}>
      <span className={CSS.title}>Thumbnail generator</span>
      <input name={"image"} required placeholder={"Enter an image url"} type={"url"} className={CSS.input}></input>
      <input name={"text"} required placeholder={"Enter text"} type={"text"} className={CSS.input}></input>
      <div class={CSS.flexContainer}><label for={"isZoom"}>Zoom image to fit: </label> <input id={"isZoom"} class={CSS.checkbox} name={"hasZoom"} type={"checkbox"} ></input></div>
      <button className={CSS.button} type={"submit"}>Submit</button>
    </form>
    </>
  )
}
