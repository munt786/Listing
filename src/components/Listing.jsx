import data from '../data/data.json';
import "./Listing.css";

function Listing() {
    return (
        <>
            <h1 style={{textAlign:'center'}}>Listing</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        <th rowSpan={2}>Sr. No.</th>
                        <th rowSpan={2}>Name</th>
                        <th rowSpan={2}>City</th>
                        <th colSpan={3}>Contact</th>
                    </tr>
                    <tr>
                        <th>Primary</th>
                        <th>Landline</th>
                        <th>Office</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.city}</td>
                            <td>{user.contact.primary}</td>
                            <td>{user.contact.landLine}</td>
                            <td>{user.contact.office}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default Listing;