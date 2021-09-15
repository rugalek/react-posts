import React from 'react';
import {TweetBtn} from './TweetBtn';
import styles from './TweetCard.module.css'


export class TweetCard extends React.Component {
    render() {
        const {name, nickName, date, post, avatarUrl, replyCount, retweetCount, likes} = this.props;
        return <div className={styles.container}>
            <img src={avatarUrl}
            width={500}
            />
           <div style={{display:'flex', justifyContent:'space-between'}}> {name} {nickName} {date}</div>
           <p>{post}</p>
           <div>
               <TweetBtn hoverColor={'blue'} count={replyCount} description={'Reply'} />
               <TweetBtn hoverColor={'green'} count={replyCount} description={'Retweet'} />
               <TweetBtn hoverColor={'yellow'} count={replyCount} description={'Count'} />
           </div>
        </div>
    }
};

