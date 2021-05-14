import React from 'react';
import './FeedArticles.css';
import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CachedIcon from '@material-ui/icons/Cached';
import ChatIcon from '@material-ui/icons/Chat';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function FeedArticles(props) {
	return (
		<div className='feedArticle'>
			<div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
				<Avatar className='avatar' src={props.userImage} />
				<div style={{ marginLeft: '10px', fontSize: '12px' }}>
					<p>
						<span style={{ fontWeight: 'bold', color: '#D5D6D6' }}>
							{props.name} .
						</span>{' '}
						<span style={{ color: '#4C8FEB' }}>follow</span>
					</p>
					<p style={{ color: '#D5D6D6' }}>{props.designation}</p>
				</div>
				<CloseIcon className='cancel' />
			</div>
			<div className='heading'>
				<p
					style={{
						fontWeight: 'bold',
						paddingBottom: '10px',
						fontSize: '15px',
					}}
				>
					{props.question}
				</p>
				<p>
					{props.answer}
					<span style={{ color: '#4C8FEB' }}> (more)</span>
				</p>
				<img
					className='articleImage'
					// src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
					src={props.image}
					alt='logo'
				/>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					color: 'grey',
					paddingBottom: '10px',
				}}
			>
				<div className='upvote'>
					<ArrowUpwardIcon className='upvoteIcon1' />
					<span style={{ color: '#4894FD', margin: '10px', fontSize: '12px' }}>
						{props.upvotes}
					</span>
					<ArrowDownwardIcon className='upvoteIcon' />
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						marginTop: '10px',
					}}
				>
					<CachedIcon
						className='upvoteIcon'
						style={{ marginLeft: '30px', marginRight: '5px' }}
					/>
					<p>{props.share}</p>
					<ChatIcon
						className='upvoteIcon'
						style={{ marginLeft: '30px', marginRight: '5px' }}
					/>
					<p>{props.comments}</p>
					<ReplyIcon className='share' />
					<MoreHorizIcon className='moreOption' />
				</div>
			</div>
		</div>
	);
}
