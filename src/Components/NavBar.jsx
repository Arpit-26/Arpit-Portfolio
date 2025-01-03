const NavBar = () => {
  return (
    <div>
      <div
        // style={{
        //   position: "fixed",
        //   display: "flex",
        //   justifyContent: "center",
        //   gap: "2rem",
        //   background: "rgba(255,255,255,0.75)",
        //   padding: "1rem",
        //   top: 0,
        //   width: "100%",
        //   zIndex: 10,
        // }}

        className="flex justify-center gap-8 bg-gray-200 bg-opacity-75 p-4 fixed top-0 w-full z-10"
      >
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        {/* <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a> */}
        <a href="#footer">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
