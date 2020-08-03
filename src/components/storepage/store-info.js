import React from 'react';
import Table from 'react-bootstrap/Table';

function StoreInfo(props) {
  return (
    <div class="storeInfo" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div id="tablelong">
        <Table striped bordered hover >
          <thead>
            <tr>
              <th rowspan="2" id="storeLogo">
                <img src={props.store.logo} alt={props.store.name} />
              </th>
              <th>Store name</th>
              <th>Category</th>
              <th>Contact number</th>
              <th>Address</th>
              <th>Reviews</th>
              <th>rate</th>

            </tr>
            <tr>
              <td>{props.store.name}</td>
              <td>{props.store.category}</td>
              <td>{props.store.contactNumber}</td>
              <td>{props.store.counrty} {props.store.city}</td>
              <td>9</td>
              <td>3.8/5</td>
            </tr>
          </thead>
        </Table>


        {/* <div>
          {props.store.images.map(img => {
            return (
              <img src='https://picsum.photos/80/80' alt='store' /> 
              <img src={img} alt='store' />
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default StoreInfo;