import React from 'react'
import BlogPost from './BlogPost'
const ReactPlayer = require('react-player');

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data
    const videos = post.videos || [];

    return (
      <BlogPost route={ route } author={ post.author }>
        {
          videos.map( video => (
            <div>
              { video.title ? (<p>{ video.title }</p>) : null }
              <ReactPlayer url={ video.url } className="video" />
              <br />
            </div>
          ))
        }
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </BlogPost>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
