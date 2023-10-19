import Button from "~/components/Button";
import Image from "~/components/Image";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src="https://res.cloudinary.com/dfbuzvevj/image/upload/v1696436922/FOCUS_avi3ht.png"
        fallback="https://res.cloudinary.com/dfbuzvevj/image/upload/v1696522206/abcc67fe433a80674cf4a5f7a14cb63a_kznfpt.jpg"
      />
    </div>
  );
}

export default Home;
