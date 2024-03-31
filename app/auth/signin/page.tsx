// import SigninComponents from "@/components/signin"
import axios from "axios"

 const getData = async () => {
  // await new Promise((r) => {setTimeout(r, 3000)})
        const res = await axios.get("http://localhost:3000/api/user")
        return res.data
}
// async component
export default async function signin() {

  // const result = await getData();
    return <div >
      {/* <SigninComponents /> */}
          {/* {result.email}
          {result.name} */}
        signing
    </div>
}
