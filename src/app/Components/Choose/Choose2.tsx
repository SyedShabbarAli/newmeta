import Image from "next/image";

const Choose2 = () => {
    return (
<section className="cs_gray_bg_2 position-relative overflow-hidden">
      <div className="cs_height_161 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_1">
          <div className="row cs_gap_y_50 position-relative z-1">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_card_thumbnail position-relative">
                <div className="cs_video_embed">
                  <iframe
                    className="cs_video_iframe"
                    src="https://www.youtube.com/embed/N2DkftT1sog?autoplay=1"
                    title="MetaCrust utilization demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="cs_section_heading cs_style_1 cs_mb_19">
                <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
                  <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />  
                  <span>MetaCrust Utilizations</span>
                  <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />  
                </div>
                <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInUp">Secure communication where lives and uptime matter</h2>
              </div>
              <p className="cs_card_desc cs_mb_32">From remote care to critical infrastructure, MetaCrust keeps telemetry encrypted, battery conscious, and compliant across every hop—without forcing a hardware redesign.</p>
              <ul className="cs_list cs_mp_0 cs_bullet_list">
                <li>
                  <span className="cs_bullet_dot" aria-hidden="true"></span>
                  <h3 className="cs_fs_18 cs_normal mb-0">Remote patient monitoring with HIPAA/PIPEDA alignment.</h3>
                </li>
                <li>
                  <span className="cs_bullet_dot" aria-hidden="true"></span>
                  <h3 className="cs_fs_18 cs_normal mb-0">Workplace safety badges that maintain &lt;15% battery overhead.</h3>
                </li>
                <li>
                  <span className="cs_bullet_dot" aria-hidden="true"></span>
                  <h3 className="cs_fs_18 cs_normal mb-0">Environmental sensing fleets with lossless sync over spotty links.</h3>
                </li>
                <li>
                  <span className="cs_bullet_dot" aria-hidden="true"></span>
                  <h3 className="cs_fs_18 cs_normal mb-10">Edge-to-cloud auditing for IEC 62443 readiness.</h3>
                </li>
              </ul>
              <a href="#contact" aria-label="Request a demo" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_white_color cs_bold text-uppercase">
              <span>Request a Demo</span>
              <span className="cs_btn_icon"><i className="bi bi-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div className="cs_star_shape_2 position-absolute">
          <Image src="/assets/img/star-shape.svg" alt="img" width={67} height={67}   /> 
        </div>
        <div className="cs_star_shape_3 position-absolute">
          <Image src="/assets/img/star-shape.svg" alt="img" width={67} height={67}   /> 
        </div>
        <div className="cs_vector_shape_2 position-absolute">
          <Image src="/assets/img/vector.svg" alt="img" width={576} height={698}   /> 
        </div>
        <div className="cs_elipse_2 cs_radius_100 position-absolute"></div>
        <div className="cs_elipse_3 cs_radius_100 position-absolute"></div>
        <div className="cs_elipse_4 cs_radius_100 position-absolute"></div>
      </div>
      <div className="cs_height_133 cs_height_lg_80"></div>
    </section>
    );
};


export default Choose2;
