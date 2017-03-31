import React from 'react'
import moment from 'moment'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import willAvatarSrc from 'assets/images/avatars/will.jpg';
import vickyAvatarSrc from 'assets/images/avatars/vicky.jpg';
import harrisonAvatarSrc from 'assets/images/avatars/harrison.jpg';
import elliotAvatarSrc from 'assets/images/avatars/elliot.jpg';

const authorData = {
  WILL: {
    name: 'Will',
    summary: 'Will (aka Dad) is the smelliest member of the family',
    avatarSrc: willAvatarSrc
  },
  VICKY: {
    name: 'Vicky',
    summary: 'Vicky (aka Mum) is the prettiest member of the family',
    avatarSrc: vickyAvatarSrc
  },
  HARRISON: {
    name: 'Harrison',
    summary: 'Harrison (aka Hassie) is cheeky and strong with the force',
    avatarSrc: harrisonAvatarSrc
  },
  ELLIOT: {
    name: 'Elliot',
    summary: 'Elliot (aka Elly) is extremely cheeky and could turn to the dark side',
    avatarSrc: elliotAvatarSrc
  }
};

class Bio extends React.Component {
  render () {

    const author = authorData[ this.props.author ];

    const summary = author ? author.summary : 'The Thirkettles live in lovely Hornsey in north London. They are individually known as Will, Vicky, Harrison, Elliot and Hattie';
    const imageSrc = author && author.avatarSrc;

    return (
      <p
        style={{
          marginBottom: rhythm(1.5),
        }}
      >
        { imageSrc && (
            <img
              src={imageSrc}
              alt={`author ${author.name}`}
              style={{
                float: 'left',
                marginRight: rhythm(1/4),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
                borderRadius: '50%'
              }}
            />
          ) || null }

        { this.props.post &&
          (<em
            style={{
              display: 'block'
            }}
          >
            Posted { author ? `by ${author.name} - ` : null } {moment(this.props.post.date).format('LL')}
          </em>)
        }
        { summary }
      </p>
    )
  }
}

Bio.propTypes = {
  author: React.PropTypes.string,
  post: React.PropTypes.object
}

export default Bio
