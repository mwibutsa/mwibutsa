import React from "react";
import "./timeline.scss";

interface TimelineProps {
  contentComponent: any;
  data: Array<any>;
}
const Timeline: React.FC<TimelineProps> = ({
  contentComponent: Content,
  data,
}) => {
  return (
    <section className="timeline-section">
      <div className="timeline__items">
        {data.map((itemData) => (
          <div className="timeline__item">
            <div className="timeline__dot"></div>

            <Content {...itemData} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
