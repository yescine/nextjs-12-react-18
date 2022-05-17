import Footer from "./Footer";
import NavBar from "./Nav";
function Index({ children }) {
  return (
    <div style={{ padding: "1rem", margin: "1rem", border: "4px dashed grey", borderRadius: "1rem" }}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Index;
