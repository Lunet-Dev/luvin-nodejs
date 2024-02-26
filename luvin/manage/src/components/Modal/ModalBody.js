import React from 'react';
import PropTypes from 'prop-types';

function ModalBody({ children }) {
  return (
    <div class="modal-body">
      {children}
      {/* <p class="mb-2">
        Product id: <span class="text-primary">#SK2540</span>
      </p>
      <p class="mb-4">
        Billing Name: <span class="text-primary">Neal Matthews</span>
      </p>

      <div class="table-responsive">
        <table class="table table-centered table-nowrap">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div>
                  <img
                    src="assets/images/product/img-7.png"
                    alt=""
                    class="avatar-sm"
                  />
                </div>
              </th>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">
                    Wireless Headphone (Black)
                  </h5>
                  <p class="text-muted mb-0">$ 225 x 1</p>
                </div>
              </td>
              <td>$ 255</td>
            </tr>
            <tr>
              <th scope="row">
                <div>
                  <img
                    src="assets/images/product/img-4.png"
                    alt=""
                    class="avatar-sm"
                  />
                </div>
              </th>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Hoodie (Blue)</h5>
                  <p class="text-muted mb-0">$ 145 x 1</p>
                </div>
              </td>
              <td>$ 145</td>
            </tr>
            <tr>
              <td colspan="2">
                <h6 class="m-0 text-right">Sub Total:</h6>
              </td>
              <td>$ 400</td>
            </tr>
            <tr>
              <td colspan="2">
                <h6 class="m-0 text-right">Shipping:</h6>
              </td>
              <td>Free</td>
            </tr>
            <tr>
              <td colspan="2">
                <h6 class="m-0 text-right">Total:</h6>
              </td>
              <td>$ 400</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

ModalBody.propTypes = {};

export default ModalBody;
