
import React from 'react'


function Preview(props) {
    const { formData} = props.data;
    return (
            <tr>
                <td>{formData.id}</td>
                <td>{formData.name}</td>
                <td>{formData.age}</td>
                <td>{formData.country}</td>
                <td>{formData.gender}</td>
                <td>{formData.date}</td>
            </tr>
            );
}
export default Preview;
