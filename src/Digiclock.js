// import { useState, useEffect } from 'react';

// function US7() {
//   const [date, setDate] = useState(new Date());
  
//   function setInterval() {
//     setDate(new Date(),1000)
//             }
//    useEffect(setInterval )

//   return (
//     <h1>
//       Time using Localtimestring - {date.toLocaleTimeString()}<br/>
//       Hour-{date.getHours()} : Min-{date.getMinutes()} : Sec-{date.getSeconds()}
//     </h1>
//   ) }
// export default US7;

import { useState, useEffect } from 'react';

function US7() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(setDate(new Date()), 1000)
  },[])

  return (
    <h1>
      Time using Localtimestring - {date.toLocaleTimeString()}<br/>
      Hour-{date.getHours()}:Min-{date.getMinutes()}:Sec-{date.getSeconds()} 
    </h1>
  );
}
export default US7;
