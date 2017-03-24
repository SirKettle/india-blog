const React = require('react')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route }>
        <p>I thought I‘d test the video offerings by posting my Uncy Tom‘s excellent Lego Ringu.</p>
        <ReactPlayer url='https://www.youtube.com/watch?v=QudFGTlN6aw' className="video" />
        <br />
        <p>This works don‘t you know!</p>
      </BlogPost>
    )
  }
}

export default Post

exports.data = {
  title: 'Testing a video post',
  date: '2017-03-09T21:49:00.000Z',
  path: '/test-video-post/',
  readNext: '/laters-england/'
}
