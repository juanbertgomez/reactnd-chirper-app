import React, { Component } from 'react'
import Tweet from './Tweet'
import { connect } from 'react-redux';
import NewTweet from './NewTweet';

class TweetPage extends Component {
    render() {
        console.log('helloooo: ', this.props)
        const { id, replies } = this.props
        return (
            <div>
                <Tweet id={id}/>
                <NewTweet id={id} />
                <ul>
                    {replies.map((replyId) =>(
                        <li key={replyId}>
                            <Tweet id={replyId}/>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}

function mapStateToProp({authedUser, tweets, users}, props) {
    const { id } = props.match.params

    return {
        id,
        replies: !tweets[id]
        ? []
        : tweets[id].replies.sort((a,b) => tweets[b].timestamp-tweets[a].timestamp)
    }
}

export default connect(mapStateToProp)(TweetPage)