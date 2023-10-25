import Image from "./components/Image";
import logo from "./img/logo.jpg";

export default function Logo({ children }) {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
