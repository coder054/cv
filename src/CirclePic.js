import React from "react"
import PropTypes from "prop-types"

import "./CirclePic.css"
import { data } from "./data.js"
import ava from "./avata.png"

const CirclePic = ({ pullRight }) => (
  <div
    className={`circle outer-circle center outer-circle-background ${pullRight &&
      "pull-right"}`}
  >
    <div className="circle inner-circle inner-circle-background">
      <img className="img-circle profile-pic" alt={data.name} src={ava} />
    </div>
  </div>
)

CirclePic.propTypes = {
  pullRight: PropTypes.bool
}

CirclePic.defaultProps = {
  pullRight: false
}

export default CirclePic
