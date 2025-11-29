import Image from "next/image";

const highlights = [
  {
    label: "Integration Time",
    delta: "Days → 10 seconds",
    description: "Secure new devices almost instantly without touching firmware pipelines.",
  },
  {
    label: "Battery Overhead",
    delta: "85% → <15%",
    description: "Maintain real-time visibility while preserving critical battery life.",
  },
  {
    label: "Memory Overhead",
    delta: "65% → 35%",
    description: "Lightweight agents keep RAM usage predictable on constrained hardware.",
  },
  {
    label: "Deployment Time",
    delta: "Months → 2 weeks",
    description: "Roll out compliant monitoring stacks in record time across fleets.",
  },
];

const Feature3 = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_center_column cs_mb_47 text-center">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />  
            <span>Core Highlights</span>
            <Image src="/assets/img/icons/star-1.svg" alt="img" width={15} height={15}   />  
          </div>
          <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0 wow fadeInDown">
            Proof that MetaCrust stays lightweight—and powerful
          </h2>
        </div>
        <div className="cs_features_steps_wrapper">
          {highlights.map((item, index) => (
            <div key={item.label} className="cs_feature_step cs_center_column">
              <div className="cs_step_index cs_radius_50 cs_fs_14 cs_semibold cs_heading_color text-uppercase">
                <span>{`0${index + 1}`}</span>
              </div>
              <div className="cs_vertical_line"></div>
              <div className="cs_step_indfo_wrapper cs_radius_30 text-center position-relative">
                <h3 className="cs_fs_24 cs_semibold cs_mb_6">{item.label}</h3>
                <p className="cs_fs_18 cs_semibold cs_heading_color cs_mb_10">{item.delta}</p>
                <p className="mb-0">{item.description}</p>
                <Image src="/assets/img/border-shape.png" alt="img" width={402} height={165}   />   
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Feature3;