import { ReactElement } from "react";

import "./blogPage.scss";

const BlogPage = (): ReactElement => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <h2 className="blog__title">Blog</h2>
          <div className="blog__content">
            <div className="blog__section">
              <h4 className="blog__subtitle">Subtitle</h4>
              <p className="blog__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, minima saepe commodi architecto a sint dolores rem
                dolorem accusantium hic, beatae autem. Non voluptas, veritatis
                aperiam magni est cupiditate repudiandae?
              </p>
            </div>
            <div className="blog__section">
              <h4 className="blog__subtitle">Subtitle</h4>
              <p className="blog__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, minima saepe commodi architecto a sint dolores rem
                dolorem accusantium hic, beatae autem. Non voluptas, veritatis
                aperiam magni est cupiditate repudiandae?
              </p>
            </div>
            <div className="blog__section">
              <h4 className="blog__subtitle">Subtitle</h4>
              <p className="blog__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum, minima saepe commodi architecto a sint dolores rem
                dolorem accusantium hic, beatae autem. Non voluptas, veritatis
                aperiam magni est cupiditate repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
