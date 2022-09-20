import React from "react";
import './style.css';
import faqs from '../data'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: "" }
  }

  handleClick = (i) => this.setState({ active: this.state.active === i ? "" : i })
  render() {


    return (
      <>
        <center><h1>Accordion</h1></center>
        {
          faqs.map((faq, i) =>
            <center>
              <div className="accordion-container">
                <div className="accordion" onClick={() => this.handleClick(i)}>
                  <div className="title"  ><h2>{faq.Q}</h2></div>
                  <div>+</div>
                </div>
                {this.state.active === i && <div className="panel"><p>{faq.A}</p></div>}
              </div>
            </center>
          )
        }

      </>
    )
  }
}
export default Accordion;