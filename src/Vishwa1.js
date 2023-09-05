import React from 'react'
function Ex(props)
{
    return(
            <table border="1" align="center">  
            <th>
                <thead>Student Name</thead>
                <thead>Roll no.</thead>
                <thead>Test 1 marks</thead>
                <thead>Test 2 marks</thead>
            </th>          
            <tr>
                <td>{props.data.sname}</td>
                <td>{props.data.rnum}</td>
                <td>{props.data.mt1}</td>
                <td>{props.data.mt2}</td>
            </tr>
            </table>
    ) }
export default Ex;