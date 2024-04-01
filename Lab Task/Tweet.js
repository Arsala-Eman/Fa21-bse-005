import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ user, createdAt, content }) => (
  <div className="tweet">
    <div className="tweet-header">
      <img src={user.profileImage} alt={`${user.name}'s profile`} />
      <div className="header-details">
        <span className="username">{user.name}</span>
        <span className="handle">@{user.handle}</span>
        <span className="created-at">{createdAt}</span>
      </div>
    </div>
    <div className="tweet-content">{content}</div>
  </div>
);

Tweet.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Tweet;
import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => (
  <div className="tweet-list">
    {tweets.map((tweet) => (
      <Tweet
        key={tweet.id}
        user={{
          name: tweet.user.name,
          handle: tweet.user.handle,
          profileImage: tweet.user.profileImage,
        }}
        createdAt={tweet.createdAt}
        content={tweet.content}
      />
    ))}
  </div>
);

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired,
        profileImage: PropTypes.string.isRequired,
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TweetList;
import React from 'react';
import './App.css';
import TweetList from './components/TweetList';

const tweets = [
  {
    id: '1',
    user: {
      name: 'Jane Doe',
      handle: 'jane',
      profileImage: 'https://example.com/jane.jpg',
    },
    createdAt: '10m ago',
    content: 'Just finished watching the latest episode of my favorite show!',
  },
  {
    id: '2',
    user: {
      name: 'John Doe',
      handle: 'john',
      profileImage: 'https://example.com/john.jpg',
    },
    createdAt: '2h ago',
    content: 'Had a great time at the park with the family today.',
  },
];

function App() {
  return (
    <div className="App">
      <TweetList tweets={tweets} />
    </div>
  );
}

export default App;