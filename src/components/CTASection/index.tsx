import cs from "classnames";
import Button from "components/common/Button";
import classes from "./cta-section.module.scss";
const CTASection = () => {
  return (
    <div className={cs(classes.CTASection, "padding-bottom-32")}>
      <h1 className="title-introduction">Let's work together</h1>
      <p
        className={cs(
          "margin-top-8 margin-bottom-32",
          classes.CTASectionDescription
        )}
      >
        Technology is important because it makes you feel more secure with every
        area in life for both personal and business reasons.
      </p>
      <Button className="btn--primary btn--big" onClick={() => {}}>
        <a href="mailto:floribert.mwibutsa@gmail.com">Contact me</a>
      </Button>
    </div>
  );
};

export default CTASection;
