import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

import '../css/zenburn.css'

class BlogPost extends React.Component {
  render () {
    const { route, children } = this.props
    const post = route.page.data

    return (
      <div className="react-wrapper">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        { children }
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Posted {moment(post.date).format('LL')}
        </em>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
      </div>
    )
  }
}

BlogPost.propTypes = {
  route: React.PropTypes.object
}

export default BlogPost
