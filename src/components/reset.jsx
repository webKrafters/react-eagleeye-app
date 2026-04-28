import React, { useEffect } from 'react';

const Reset = ({ resetState }) => {
	useEffect(() => console.log( 'Reset component rendered.....' ));
	const reset = () => resetState([ '@@STATE' ]);
	return ( <button onClick={ reset }>reset context</button> );
};

Reset.displayName = 'Reset';

export default Reset;
