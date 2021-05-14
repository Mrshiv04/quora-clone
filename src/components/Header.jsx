import React from 'react';
import '../components/Header.css';
import logo from './quoralogo.PNG';
// import logo from './logo.png';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function Header() {
	return (
		<div className='header'>
			<div className='header-left'>
				<img src={logo} alt='Quora-logo' className='header-logo' />
			</div>
			<div className='icons-div'>
				<HomeOutlinedIcon className='icons' style={{ color: '#F52936' }} />
				<ListAltOutlinedIcon className='icons' />
				<EditOutlinedIcon className='icons' />
				<PeopleAltOutlinedIcon className='icons' />
				<NotificationsNoneOutlinedIcon className='icons' />
			</div>
			<div className='header-input'>
				<SearchOutlinedIcon style={{ color: 'gray', paddingLeft: '5px' }} />
				<input placeholder='Search Quora' className='header-input-field' />
			</div>
			<div className='header-right'>
				<Avatar
					className='header-avatar'
					src='https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
				/>
				<LanguageOutlinedIcon className='right-icon' />
				<Button className='header-button'>Add Question</Button>
			</div>
		</div>
	);
}

export default Header;
