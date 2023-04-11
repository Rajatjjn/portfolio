import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";
import { FaSchool } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Gudha International School, jhunjhunu, Rajathan
          </h3>
          <p> Secondary School</p>
          <p>81%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Gudha international School,jhunjhunu,Rajathan
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Senior Secondary(PCM)
          </h4>

          <p>72%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science(Maths)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Rajasthan,jaipur(raj.)
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "yellow", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Governement Exam Preparation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SSC(cgl,chsl,..etc)
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer Trainee
          </h3>
          <h4 className="vertical-timeline-element-subtitle">at,FunctionUp</h4>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
