import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'
import Snippet from 'components/Snippet';
import mummyElliotAndMePhoto from 'components/mummyelliotandme.jpg';
import brothersPortrait from 'components/brothers-portrait.jpg';

class BlogIndex extends React.Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date').reverse();
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <Bio />
        <p>I‘m a lucky boy who has the bestest Mummy and Elliot.  Here is us on our last holiday...</p>
        <img src={ mummyElliotAndMePhoto } />
        <h3>Elliot</h3>
        <p>My little brother is called Elliot. Here is a picture I drew of us together</p>
        <img src={ brothersPortrait } />
        <h2>Follow my adventure...</h2>
        <div className="snippets">
        {visiblePages.map((page) => (
          <div className="snippetContainer"
            key={page.path}
          >
            <Snippet post={ page } />
          </div>
        ))}
        </div>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
