import Footer from "../footer/footer";

function Home() {
  return (
    <>
      <main>
        <div className="container">
          <div className="row_items">
            <img
              width={243}
              height={243}
              className="avatar"
              src="img/avatar.png"
              alt="avatar"
            />
            <div>
              <h1>
                Hi, I am John,
                <br />
                Creative Technologist
              </h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="download_form">
            <form action="#">
              <button type="download" value="Download Resume">
                Download Resume
              </button>
            </form>
          </div>
        </div>

        <div className="posts_inner">
          <div className="posts_justify">
            <div className="first_post">
              <h2>Making a design system from scratch</h2>
              <p>12 Feb 2020 | Design, Pattern</p>
              <p className="resent_post_subtitle">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="second_post">
              <h2>Creating pixel perfect icons in Figma</h2>
              <p>12 Feb 2020 | Figma, Icon Design</p>
              <p className="resent_post_subtitle">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="Featured_works_main_title">Featured works</h2>

          <div className="row_Featured_works">
            <div className="colomn_1_part_1_Featured_works">
              <img width={246} height={180} src="img/retina.png" alt="design" />
            </div>

            <div className="colomn_2_item_1_Featured_works">
              <h2>Designing Dashboards</h2>

              <div className="flexbox_year2020">
                <p className="year2020">2020</p>
                <p className="Dashboard">Dashboard</p>
              </div>
              <p className="colomn_2_item_3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          {/* <!-- 1 part end --> */}

          <section className="line"></section>

          {/* <!-- 2 part start --> */}
          <div className="row_Featured_works">
            <div>
              <img
                width={246}
                height={180}
                src="img/vibrant.png"
                alt="design"
              />
            </div>

            <div className="colomn_2_item_1_Featured_works">
              <h2>Vibrant Portraits of 2020</h2>

              <div className="flexbox_year2020">
                <p className="year2020">2018</p>
                <p className="Dashboard">Illustration</p>
              </div>
              <p className="colomn_2_item_3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          {/* <!-- 2 part end --> */}

          <section className="line"></section>

          {/* <!-- 3 part start --> */}
          <div className="row_Featured_works">
            <div className="colomn_1_part_3_Featured_works">
              <img width={246} height={180} src="./img/days.png" alt="design" />
            </div>

            <div className="colomn_2_item_1_Featured_works">
              <h2>36 Days of Malayalam type</h2>

              <div className="flexbox_year2020">
                <p className="year2020">2018</p>
                <p className="Dashboard">Typography</p>
              </div>
              <p className="colomn_2_item_3">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <section className="line1"></section>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Home;
