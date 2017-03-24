import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'
import { rhythm, scale } from 'utils/typography'
import Snippet from 'components/Snippet';

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    const { readNext } = post
    let nextPost
    if (readNext) {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext)
      )
    }
    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      )
      // Create pruned version of the body.
      const html = nextPost.data.body
      const body = html && prune(html.replace(/<[^>]*>/g, ''), 200)

      return (
        <div>
          <h5>
            READ THIS NEXT:
          </h5>
          <Snippet post={ nextPost } />
          <hr
            style={{
              marginTop: rhythm(2)
            }}
          />
        </div>
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default ReadNext
