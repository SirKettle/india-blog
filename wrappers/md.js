import React from 'react'
import BlogPost from './BlogPost'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <BlogPost route={ route }>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </BlogPost>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
