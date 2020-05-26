import React from 'react';

const withRouter = () => {
    let history = useHistory();
    function handleClick() {
        history.push("/about");
        console.log (history);
    }
    return handleClick();
};
export default withRouter;
