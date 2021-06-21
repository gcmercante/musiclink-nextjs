import { Box, withStyles } from '@material-ui/core';

const ContainerCustom = withStyles({
    root: {
        '& > *': {
            marginBottom: '20px',
            marginRight: '20px',
        },
        margin: 'auto',
    },
})(Box);

export default function ContainerComponent({
    display, flexDirection, maxWidth, alignItems, children, flexWrap,
}) {
    return (
      <ContainerCustom
        display={display}
        flexDirection={flexDirection}
        maxWidth={maxWidth}
        alignItems={alignItems}
        flexWrap={flexWrap}
      >
        { children }
      </ContainerCustom>
    );
}
