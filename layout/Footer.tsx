import Image from "next/image";

function Footer() {
  return (
    <footer style={{ height: 125, margin: "2rem 0" }}>
      <Image
        src="/cosmos.jpg"
        placeholder="blur"
        blurDataURL="/cosmos.jpg"
        alt="footer"
        width="1000"
        height="150"
        style={{ borderRadius: "1rem" }}
      />
      <div style={{ position: "relative", bottom: "9rem", textAlign: "center", color: "white", fontWeight: "bold" }}>
        <p>VitalTools-corp</p>
        <p>teams</p>
        <p>terms</p>
      </div>
    </footer>
  );
}

export default Footer;
