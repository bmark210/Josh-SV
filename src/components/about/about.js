import Footer from "../footer/footer";
function About() {
  return (
    <>
      <div className="container">
        <div className="about_content">
          <h1>Designing Dashboards with usability in mind</h1>

          <div className="flexbox_year2020">
            <p className="year2020_orange">2020</p>
            <p className="Dashboard">Dashboard</p>
          </div>
          <p className="about_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <img
          className="about_img"
          width={681}
          height={460}
          src="img/about_1_img.png"
        />
        <div className="about_headings">
          <h2>Heading 1</h2>
          <h4>Heading 2</h4>
          <p className="about_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <img className="about_img" width={681} height={460} src="img/car.png" />
        <img
          className="about_img"
          width={681}
          height={460}
          src="img/about_2_img.png"
        />
      </div>
      <Footer />
    </>
  );
}

export default About;
