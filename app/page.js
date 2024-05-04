import Image from "next/image";
import back_image from "/public/Stars.jpg";
const home = () => {
  return (
    <div>
      <Image src={back_image} alt="logo" className="logo" />
    </div>
  );
};

export default home;