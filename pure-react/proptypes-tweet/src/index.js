import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";
import PropTypes from "prop-types";

// ajout du { tweet } destructuring, afin de pouvoir accepter des props
function Tweet({tweet}) {
    return (
        <div className={"tweet"}>
            <Avatar hash={tweet.gravatar} />
            <div className={"content"}>
                <NameWithHandle author={tweet.author} />
                <Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className={"buttons"}>
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

const testTweet = {
    message: "ReactJS rocks the floor ! ",
    gravatar: "xyz",
    author: {
        handle: "Corneliushka",
        name: "Corneliu Gaina",
    },
    likes: 3,
    retweets: 5,
    timestamp: "2019-07-30 21:24:37",
};

function Comment({author, message,likes}) {
    return (
        <div>
            <div className={"author"}>{author}</div>
            <div className={"message"}>{message}</div>
            <div className={"likes"}>
                {likes > 0 ? likes : 'No'}likes
            </div>
        </div>
    );
}

function Avatar({hash}) {
    let url = `https://www.gravatar.com/avatar/${hash}`;
    return <img src={url} className="avatar" alt="avatar" />;
}

function NameWithHandle({author}) {
    const {name, handle} = author;
    return (
        <span className={"name-with-handle"}>
            <span className={"name"}>{name}</span>
            <span className={"handle"}>@{handle}</span>
        </span>
    );
}

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired,
    }).isRequired,
};

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    )
}

Time.propTypes = {
    timeString: PropTypes.number,
}

function Message({ text }) {
    return (
        <div className="message">
            { text }
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
}

function Count({count}) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        <Count count={count} />
    </span>
);

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 && 
            <span className="like-count">
                {count}
            </span>}
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number,
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);


const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);


ReactDOM.render(<Tweet tweet={testTweet} />,
    document.querySelector('#root'));