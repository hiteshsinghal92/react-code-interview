import React, { useEffect, useState } from 'react';

const WithLogger = (Children) => {

  const HandleLogger = (props) => {
    const [isLogged,setIsLogged] =  useState(false);

    return <Children {...props} />
  }

return HandleLogger;
}
export default WithLogger;





// const WithLogger = (WrappedComponent) => {
//   const LoggerComponent = (props) => {
//     const [state, setState] = useState(null);

//     useEffect(() => {
//       console.log('WrappedComponent is being rendered');
//       // Perform side-effects here
//       setState('Some state value');
//     }, []); 

//     return <WrappedComponent {...props} loggerState={state} />;
//   };

//   return LoggerComponent;
// };

// export default WithLogger;
