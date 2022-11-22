import Footer from "../footer/footer";

function Works() {
  return (
    <>
      <div className="container">
        <h2 className="Featured_works_main_title">Works</h2>

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
            <img width={246} height={180} src="img/vibrant.png" alt="design" />
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
        <section className="line"></section>
        <div className="row_Featured_works">
          <div className="colomn_1_part_3_Featured_works">
            <img
              width={246}
              height={180}
              src="./img/components.png"
              alt="design"
            />
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
          {/* <section className="line"></section> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Works;
