import React from 'react';
import './Feed.css';
import FeedArticle from './FeedArticles';
import { Avatar } from '@material-ui/core';

function Feed() {
	return (
		<div className='feed'>
			<div className='createQuestion'>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Avatar className='feedAvatar' />
					<p className='userName'>Shivam Shah</p>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<p className='userName1'>What is Your Question or Link?</p>
				</div>
			</div>
			<FeedArticle
				name='Jordan Zhouyi'
				userImage='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
				designation='Frontend Developer'
				question='What movie details did you notice only after watching more than once?'
				answer='I have a soft spot for the Kung Fu Panda films, I’ve seen them a good number of times. Po loves food, he’s always eating something. Food is also his defense...'
				image='https://qph.fs.quoracdn.net/main-qimg-1159a65ef3341108040a2944220cf6dc-c'
				upvotes='5.4K'
				share='13'
				comments='21'
			/>
			<FeedArticle
				name='David Ross'
				userImage='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
				designation='B.A. in History '
				question='What photos look Photoshopped but are actually real?'
				answer='Just a panoramal photo gone wrong to grab your attention The photographer spent months waiting for the sun to perfectly line up so he could get this picture. They just added paint here to create a pretty sick illusion. Damn! That break must hav...'
				image='https://qph.fs.quoracdn.net/main-qimg-853c1cd6f83837f6cf6588cf38869ac6'
				upvotes='10.3K'
				share='72'
				comments='35'
			/>
			<FeedArticle
				name='Brie Fults'
				userImage='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
				designation='MCU Fan at Marvel Studios'
				question='Who is the unluckiest character in the Harry Potter series?'
				answer='The Patil twins were very, very unlucky when it comes to both the movies and books. In the fourth book, Harry Potter and the Goblet of Fire, the twins Padma and Parvati are Harry and Ron’s dates to the Yule Ball. The two girls are descri...'
				image='https://qph.fs.quoracdn.net/main-qimg-787666146097b7838427a925f60cb2b8'
				upvotes='9.5K'
				share='21'
				comments='64'
			/>
		</div>
	);
}

export default Feed;
