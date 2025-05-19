import React from "react";

const Home = () => {
  return (
    <div>
      <div className="mt-4 py-4">
        <img
          src="../src/assets/poetry-cover-photo.webp"
          alt=""
          className="w-100 
          d-flex
          flex-row
          justify-content-center
          align-items-center  
          "
          style={{
            height: "300px",
            objectFit: "cover",
            borderBottom: "1px solid black",
          }}
        />
      </div>
      <section className="container-fluid d-flex flex-column text-center align-items-center">
        <h1>The Title Of The Poem</h1>
        <p className="w-50 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum unde
          distinctio soluta, fugiat aperiam, magni alias quaerat quam laboriosam
          dolor voluptatem porro sint molestias mollitia tempore assumenda
          magnam asperiores necessitatibus!\ Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nobis distinctio impedit praesentium
          quaerat delectus, debitis eos rerum veritatis sed ea sunt iusto a?
          Blanditiis distinctio sunt vel ad eum earum, suscipit itaque tempore
          non quae magni veniam necessitatibus eaque. Facilis, dolor! Ex,
          provident? Reiciendis id porro nihil est et, cum earum optio. Non
          magni esse possimus quod numquam eligendi quibusdam ex officia aut
          aspernatur voluptas ea, facilis porro animi amet expedita quo quos ut!
          Eveniet, quidem iusto? Temporibus sapiente nulla eos harum possimus ea
          optio hic, vitae animi laboriosam aliquid quidem quisquam soluta qui
          culpa quae error deleniti aliquam eum.
        </p>
      </section>
      <br />
      <section
        className="container-fluid p-4 w-100 h-100 bg-light "
        style={{ borderTop: "1px solid black" }}
      >
        <div className="d-flex row align-items-center text-dark">
          <img
            src="../src/assets/poetry-featured-image-icon.webp"
            alt=""
            className="img-fluid col-6 p-4"
          />
          <p className="d-flex text-center justify-content-center col-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            eveniet nostrum nesciunt accusantium. Officiis laudantium aperiam
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
