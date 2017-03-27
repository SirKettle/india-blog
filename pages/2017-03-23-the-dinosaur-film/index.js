const React = require('react')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import harrisonComputeringImage from './snippet.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route }>
        <img src={ harrisonComputeringImage } />
        <p>This is a crazy caky video which smells of poo...</p>
        <ReactPlayer url='https://youtu.be/KHW2051spuU' className="video" />
        <br />
        <p>So Harrison smells of poo, wait, my Dad smells of poo, and also he keeps typing things wrong :~/</p>
      </BlogPost>
    )
  }
}

export default Post;

exports.imgSrc = harrisonComputeringImage;

exports.data = {
  title: 'The Dinosaur Film',
  date: '2017-03-23T20:49:00.000Z',
  path: '/dinosaur-film/',
  tags: ['dnin']
};
