import { useState, useEffect } from 'react';
function UE2() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    })
  })
  return (    <h1>
      Time using Localtimestring - {date.toLocaleTimeString()}<br/>
      {/* Hour-{date.getHours()}:Min-{date.getMinutes()}:Sec-{date.getSeconds()}  */}
    </h1>
  ) }
export default UE2;
