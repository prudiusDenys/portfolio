import React, {useState} from 'react';
import burgerClasses from "./BurgerMenu.module.scss";
import clsx from 'clsx';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {SwipeableDrawer} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {BurgerNav} from "./BurgerNav/BurgerNav";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
	list: {
		width: '100%',
	},
	fullList: {
		width: 'auto',
	},
	button: {
		padding: '7px 14px ',
		minWidth: 'inherit',
		width: '100%',
		[theme.breakpoints.down(575.98)]: {
			padding: '4px 8px',
		},
	},
	icon: {
		color: '#666',
		fontSize: '40px'
	},
}));


type Anchor = 'top' | 'left' | 'bottom' | 'right';


export const BurgerMenu = () => {

	const [burgerMode, setBurgerMode] = useState(false)

	const classes = useStyles();
	const matches = useMediaQuery('(max-width: 575.98px)');
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor: Anchor, open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		setBurgerMode(!burgerMode)
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setState({...state, [anchor]: open});
	};

	const list = (anchor: Anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<BurgerNav/>
			</List>
		</div>
	);

	const SwipeableDrawerWithStyles = withStyles({
		paper: {
			width: matches ? '53%' : '300px'
		}

	})(SwipeableDrawer);

	return (
		<div className={burgerClasses.burgerMenuWrapper}>
			<div className={burgerClasses.burgerMenu}>
				{(['left'] as Anchor[]).map((anchor) => (
					<React.Fragment key={anchor}>
						<Button className={classes.button} onClick={toggleDrawer(anchor, true)}>{!burgerMode ?
							<MenuIcon className={classes.icon}/> : <CloseIcon className={classes.icon}/>}</Button>
						<SwipeableDrawerWithStyles
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
							onOpen={toggleDrawer(anchor, true)}
						>
							{list(anchor)}
						</SwipeableDrawerWithStyles>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}