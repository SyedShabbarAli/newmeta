import Image from "next/image";

const Feature5 = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 text-center">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <Image src="/assets/img/icons/star-1.svg" alt="Star icon" width={15} height={15} />
            <span>Awesome Feature</span>
            <Image src="/assets/img/icons/star-1.svg" alt="Star icon" width={15} height={15} />
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInDown">Our Fantastic App Features</h2>
        </div>

        <div className="cs_features_steps_wrapper">
          {["Download App", "Create account", "Install App, & Enjoy"].map((title, index) => (
            <div key={title} className="cs_feature_step cs_center_column">
              <div className="cs_step_index cs_radius_50 cs_fs_14 cs_semibold cs_heading_color text-uppercase">
                <span>{`Step ${index + 1}`}</span>
              </div>
              <div className="cs_vertical_line"></div>
              <div className="cs_step_indfo_wrapper cs_radius_30 text-center position-relative">
                <h3 className="cs_fs_24 cs_semibold cs_mb_10">{title}</h3>
                <p className="mb-0">
                  All the generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
                <Image src="/assets/img/border-shape.png" alt="Border shape" width={320} height={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature5;