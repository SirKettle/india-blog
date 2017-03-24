import Typography from 'typography';
// import Wordpress2016Theme from 'typography-theme-wordpress-2016'
// import GithubTheme from 'typography-theme-github'
// import irvingTheme from 'typography-theme-irving'
// import doelgerTheme from 'typography-theme-doelger'
// import moragaTheme from 'typography-theme-moraga'
import theme from 'typography-theme-lincoln';
import colors from 'constants/colors';
import wallpaper from 'components/elephants.jpg';

theme.baseFontSize = '17px';
theme.baseLineHeight = 1.6;
theme.scaleRatio = 3;
theme.googleFonts = [
	{
		name: 'Playfair Display',
		styles: [
			'400',
			'700',
			'900'
		]
	},
	{
		name: 'Lora',
		styles: [
			'400',
			'400i',
			'700',
			'700i'
		]
	}
];

theme.bodyColor = colors.bodyText;
theme.headerColor = colors.headerText;
theme.headerWeight = 700;
theme.bodyWeight = 400;
theme.boldWeight = 700;
theme.headerFontFamily = [ 'Playfair Display', 'Georgia' ];
theme.bodyFontFamily = [ 'Lora', 'Arial', 'Sans serif' ];
theme.boldWeight = 700;

const anchorColor = colors.link;
const accentColor = colors.quotes;

theme.overrideThemeStyles = ({ rythym }, options) => ({
	'html, body': {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 100%',
		minHeight: '100%'
	},
	'.app': {
		background: colors.bodyBackground,
		padding: '1.5rem 1.2rem'
	},
	'h1,h2,h3,h4,h5,h6': {
		marginBottom: '1.3rem',
		lineHeight: 1.2
	},
	'h1': {
		letterSpacing: '0.02em'
	},
	'h2': {
		letterSpacing: '0.12em'
	},
	'h3,h4,h5,h6': {
		letterSpacing: '0.15em'
	},
	'hr': {
		background: colors.quotes
	},
	'a': {
		color: anchorColor,
		backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${ anchorColor } 1px, ${ anchorColor } 2px, rgba(0, 0, 0, 0) 2px)`,
		textShadow: `${ colors.bodyBackground } 0.03em 0px, ${ colors.bodyBackground } -0.03em 0px, ${ colors.bodyBackground } 0px 0.03em, ${ colors.bodyBackground } 0px -0.03em, ${ colors.bodyBackground } 0.06em 0px, ${ colors.bodyBackground } -0.06em 0px, ${ colors.bodyBackground } 0.09em 0px, ${ colors.bodyBackground } -0.09em 0px, ${ colors.bodyBackground } 0.12em 0px, ${ colors.bodyBackground } -0.12em 0px, ${ colors.bodyBackground } 0.15em 0px, ${ colors.bodyBackground } -0.15em 0px`
		// backgroundImage: `linear-gradient(to top, ${ colors.bodyBackground }, ${ colors.bodyBackground } 1px, ${ anchorColor } 1px, ${ anchorColor } 2px, ${ colors.bodyBackground } 2px)`
	},
	'header > * > a': {
		textShadow: 'none',
		backgroundImage: 'none'
	},
	'blockquote': {
		borderLeftColor: `${ accentColor } !important`,
		marginLeft: '-1.6rem',
		lineHeight: 1.7,
		color: colors.bodyTextLight
	},
	'.snippets': {
		display: 'flex',
		flexDirection: 'column'
	},
	'.snippets > .snippetContainer': {
    	marginBottom: '1.3rem'
	},
	'.snippet': {
		backgroundSize: 'cover',
		backgroundPosition: 'center 5%',
		color: 'white'
	},
	'.snippet *': {
		color: 'white !important'
	},
	'.snippet > a > *:last-child': {
		marginBottom: 0
    },
	'.snippet > a': {
		backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.22) 50%, rgba(0,0,0,0.35) 90%)',
        padding: '5rem 2rem 2rem',
        textShadow: 'none',
        textShadow: '0 0 5px rgba(0,0,0,0.4)'
    },
	'.snippet:hover > a': {
		backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.32) 90%)',
	},
	'@media (min-width: 480px)': {
		'.app': {
			padding: '2rem 2.5rem',
			boxShadow: '0 0 10px rgba(0,0,0,0.1)'
		},
		'h1,h2,h3,h4,h5,h6': {
			marginBottom: '1.6rem',
			lineHeight: 1.2
		}
	},
	'@media (min-width: 769px)': {
		body: {
			paddingBottom: '2rem',
			// background: colors.bodyBackground,
			background: `url(${ wallpaper })`,
			position: 'relative'
		},
		// 'body:after': {
		// 	content: '""',
		// 	position: 'absolute',
		// 	top: 0,
		// 	right: 0,
		// 	bottom: 0,
		// 	left: 0,
		// 	backgroundSize: '8%',
		// 	opacity: 0.05,
		// 	zIndex: -1
		// },
		'.app': {
			padding: '2rem 4.5rem'
		},
		'.snippets > .snippetContainer': {
	    	marginBottom: '2rem'
		}
		// '.snippets': {
		// 	display: 'flex',
		// 	flexDirection: 'row',
		// 	flexWrap: 'wrap'
		// },
		// '.snippets > .snippetContainer': {
		// 	flex: '0 0 50%',
		// 	textAlign: 'justify'
		// }
	}
});

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
