import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import profilePic from './harrison-mugshot.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <strong>{config.authorName}</strong> live in lovely Hornsey in north London. They are individually known as Will, Vicky, Harrison, Elliot and Hattie.
      </p>
    )
  }
}

export default Bio
