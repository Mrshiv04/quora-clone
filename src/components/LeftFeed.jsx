import React from 'react';
import './LeftFeed.css';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';

export default function LeftFeed() {
	return (
		<div className='leftFeed'>
			<p className='leftFeed-option'>
				<AddIcon style={{ paddingRight: '5px' }} />
				Create Space
			</p>

			<p className='leftFeed-option'>
				<Avatar
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6TWCJJ7AvD19QcWdv2HMG9gnCSZQYrzCqg&usqp=CAU'
					className='avatar-style'
				/>
				Design
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://expertphotography.com/wp-content/uploads/2011/11/photography-beginners-image1.jpg'
				/>
				Photography
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://etimg.etb2bimg.com/photo/74881928.cms'
				/>
				Sports
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/peppers-pan-stove-flame.jpg?itok=Po__tNob'
				/>
				Cooking
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://www.topuniversities.com/sites/default/files/study_politics.jpg'
				/>
				Politics
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://img.etimg.com/thumb/msid-82570493,width-210,imgsize-96897,,resizemode-4,quality-100/52-week-highs.jpg'
				/>
				Economics
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://www.sciencenews.org/wp-content/uploads/2019/12/120719_scientistsrights_feat_opt2.png'
				/>
				Science
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://images.indianexpress.com/2021/05/6a2fedce-387d-4b1f-9c99-5ac808d55971-1.jpg'
				/>
				Technology
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale'
				/>
				Books
			</p>

			<p className='leftFeed-option'>
				<Avatar
					className='avatar-style'
					src='https://pbs.twimg.com/profile_images/1323296791060729856/knWLBrkl_400x400.jpg'
				/>
				History
			</p>
			<hr />
			<p
				style={{ marginLeft: '100px', marginBottom: '5px', marginTop: '10px' }}
			>
				About . Careers .
			</p>
			<p style={{ marginLeft: '100px', marginBottom: '5px' }}>
				Terms . Privacy .
			</p>
			<p style={{ marginLeft: '100px', marginBottom: '5px' }}>
				Acceptable Use .
			</p>
			<p style={{ marginLeft: '100px', marginBottom: '5px' }}>
				Business . Your Add .
			</p>
			<p style={{ marginLeft: '100px', marginBottom: '5px' }}>Choices</p>
		</div>
	);
}
