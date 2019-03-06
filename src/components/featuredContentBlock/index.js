import React, { Component, Fragment } from 'react'
import './featuredContentBlock.scss'

class FeaturedContentBlock extends Component{
  render() {

    let ctaLinks = this.props.model.cta.map( ( link ) => {
      return ( <a href={ link.href } aria-label={ link.text }> { link.text } </a> )
    })

    return (
      <Fragment>
        <section className="featuredContentBlock" style={this.props.style} >
          <h2> { this.props.model.headline } </h2>
          <h3> { this.props.model.subText } </h3>
          <div class="cta">
            { ctaLinks }
          </div>
        </section>
      </Fragment>
    )
  }
}

export default FeaturedContentBlock
