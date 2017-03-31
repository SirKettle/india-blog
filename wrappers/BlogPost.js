import React from 'react'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

import '../css/zenburn.css'

class BlogPost extends React.Component {
  render () {
    const { author, route, children } = this.props
    const post = route.page.data

    return (
      <div className="react-wrapper">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        { children }
        <hr
          style={{
            marginTop: rhythm(1.5),
            marginBottom: rhythm(1.5)
          }}
        />
        <Bio author={ author } post={ post } />
        <ReadNext post={post} pages={route.pages} />
      </div>
    )
  }
}

BlogPost.propTypes = {
  route: React.PropTypes.object
}

export default BlogPost
