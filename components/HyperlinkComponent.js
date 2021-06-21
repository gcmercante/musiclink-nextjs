import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    aTag: (props) => ({
        color: props.color,
        textTransform: props.textTransform,
        textDecoration: 'none',
        cursor: 'pointer',
    }),
});

function HyperlinkComponent({
    label, uppercase, color, href, onClick,
}, ref) {
    const cssProps = {
        color,
        textTransform: uppercase ? 'uppercase' : 'none',
    };
    const classes = useStyles(cssProps);

    return <a className={`${classes.aTag}`} ref={ref} href={href} onClick={onClick}>{label}</a>;
}

export default forwardRef(HyperlinkComponent);
