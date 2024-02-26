import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import ReactPaginate from 'react-paginate';
import numeral from 'numeral';
import { useRecoilValue } from 'recoil';

import Upload from '../../components/Upload';
import Modal from '../../components/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';

import useCategories from '../../hooks/useCategories';

import {
  updateProduct,
  syncProducts,
  findProducts,
  deleteProduct,
} from '../../apis/products';

import withLayout from '../../hocs/withLayout';

import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD, SALE_STAFF } from '../../configs';

import authState from '../../atoms/auth';

const LIMIT = 20;

function ModalDetailProduct({ visible, onClose, product }) {
  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">Product Details</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </ModalHeader>
      <ModalBody>
        <table class="table table-centered table-nowrap">
          <tbody>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">ID</h5>
                </div>
              </td>
              <th scope="row">{product._id}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Ident</h5>
                </div>
              </td>
              <th scope="row">{product.ident}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Name</h5>
                </div>
              </td>
              <th scope="row">{product.name}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Price</h5>
                </div>
              </td>
              <th scope="row">{product.price}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Discount</h5>
                </div>
              </td>
              <th scope="row">{product.discount}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Description</h5>
                </div>
              </td>
              <th scope="row" style={{ whiteSpace: 'unset' }}>
                {product.description}
              </th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Slug</h5>
                </div>
              </td>
              <th scope="row">{product.slug}</th>
            </tr>
            <tr>
              <td>
                <div>
                  <h5 class="text-truncate font-size-14">Image</h5>
                </div>
              </td>
              <th scope="row">
                <div className="d-flex flex-wrap">
                  {product.images.map((image) => (
                    <img
                      class="img-thumbnail"
                      alt="200x200"
                      width="200"
                      src={image}
                      data-holder-rendered="true"
                    />
                  ))}
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </ModalBody>
      <ModalFooter>
        <button type="button" class="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
}

function ModalUpdateProduct({ visible, onClose, product, onUpdated }) {
  const auth = useRecoilValue(authState);
  const [state, setState] = useState({
    name: product.name || '',
    description: product.description || '',
    images: product.images || [],
    price: product.price || 0,
    discount: product.discount || 0,
    loading: false,
  });

  const handleChangeProductInfo = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleUpdateProduct = async (event) => {
    setState({ ...state, loading: true });
    try {
      event.preventDefault();

      const response = await updateProduct(product.ident, {
        name: state.name,
        description: state.description,
        images: state.images,
        price: state.price,
        discount: state.discount,
      });
      onUpdated(response.data);
    } catch (error) {
      toastr['error'](error.message);
    }
    setState({ ...state, loading: false });
  };

  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">Update product</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </ModalHeader>
      <form onSubmit={handleUpdateProduct}>
        <ModalBody>
          <div class="form-group row mb-4">
            <label for="categoryName" class="col-sm-3 col-form-label">
              Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="categoryName"
                value={state.name}
                onChange={(event) =>
                  handleChangeProductInfo('name', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="categoryDescription" class="col-sm-3 col-form-label">
              Description
            </label>
            <div class="col-sm-9">
              <textarea
                required=""
                class="form-control"
                rows="3"
                id="categoryDescription"
                value={state.description}
                onChange={(event) =>
                  handleChangeProductInfo('description', event.target.value)
                }
              ></textarea>
            </div>
          </div>
          {withRole([ROLE_ADMIN], auth.role) && (
            <>
              <div class="form-group row mb-4">
                <label for="productPrice" class="col-sm-3 col-form-label">
                  Price
                </label>
                <div class="col-sm-9">
                  <input
                    type="number"
                    class="form-control"
                    id="productPrice"
                    value={state.price}
                    onChange={(event) =>
                      handleChangeProductInfo('price', event.target.value)
                    }
                  />
                </div>
              </div>
              <div class="form-group row mb-4">
                <label for="productDiscount" class="col-sm-3 col-form-label">
                  Discount
                </label>
                <div class="col-sm-9">
                  <input
                    type="number"
                    class="form-control"
                    id="productDiscount"
                    value={state.discount}
                    onChange={(event) =>
                      handleChangeProductInfo('discount', event.target.value)
                    }
                  />
                </div>
              </div>
            </>
          )}
          <div class="form-group row mb-4">
            <label for="categoryImage" class="col-sm-3 col-form-label">
              Image
            </label>
            <div class="col-sm-9">
              <Upload
                initFiles={state.images}
                onUploaded={(files) => {
                  handleChangeProductInfo('images', files);
                }}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button type="submit" class="btn btn-primary w-md">
            {state.loading && (
              <i class="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>
            )}
            Submit
          </button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

function ProductsPage(props) {
  const auth = useRecoilValue(authState);
  const [categories, setCategoriesState] = useCategories();
  const [state, setState] = useState({
    openModalDetail: false,
    openModalUpdate: false,
    productSelected: {},
    products: [],
    total: 0,
    page: 1,
    name: '',
    category: '',
    discount: '',
    origin: '',
    type: '',
    loading: false,
    syncLoading: false,
  });

  const handleChangeSearchValue = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSearchProducts = async (
    page,
    name,
    category,
    discount,
    origin,
    type
  ) => {
    setState({
      ...state,
      loading: true,
      page,
    });
    const newState = {
      ...state,
      loading: true,
      page,
    };
    try {
      const response = await findProducts(
        LIMIT,
        page,
        name,
        category,
        discount,
        origin,
        type
      );
      newState.products = response.data.products;
      newState.total = response.data.total;
      newState.loading = false;
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  useEffect(() => {
    handleSearchProducts(
      1,
      state.name,
      state.category,
      state.discount,
      state.origin,
      state.type
    );
  }, []);

  const handleDeleteProduct = async (productIdent) => {
    const newState = {
      ...state,
      loading: true,
    };
    try {
      const response = await deleteProduct(productIdent);
      newState.loading = false;
      newState.products = state.products.filter(
        ({ ident }) => ident !== productIdent
      );
    } catch (error) {
      newState.loading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  const handleSyncProduct = async () => {
    const newState = {
      ...state,
      syncLoading: true,
    };
    try {
      const response = await syncProducts();
      newState.syncLoading = false;
      toastr['success']('Đồng bộ sản phẩm thành công');
      await handleSearchProducts(
        state.page,
        state.name,
        state.category,
        state.discount,
        state.origin,
        state.type
      );
    } catch (error) {
      newState.syncLoading = false;
      toastr['error'](error.message);
    }
    setState(newState);
  };

  return (
    <>
      {state.openModalDetail && (
        <ModalDetailProduct
          visible={state.openModalDetail}
          product={state.productSelected}
          onClose={() => {
            setState({
              ...state,
              openModalDetail: false,
              productSelected: {},
            });
          }}
        />
      )}
      {state.openModalUpdate && (
        <ModalUpdateProduct
          visible={state.openModalUpdate}
          product={state.productSelected}
          onClose={() => {
            setState({
              ...state,
              openModalUpdate: false,
              productSelected: {},
            });
          }}
          onUpdated={(product) => {
            setState({
              ...state,
              openModalUpdate: false,
              productSelected: {},
              products: state.products.map((_product) => {
                if (_product.ident === product.ident) {
                  return product;
                }
                return _product;
              }),
            });
          }}
        />
      )}

      <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">Products List</h4>
                <div class="page-title-right">
                  {withRole([ROLE_ADMIN], auth.role) && (
                    <button
                      type="submit"
                      class="btn btn-primary w-md"
                      onClick={handleSyncProduct}
                    >
                      {state.syncLoading ? (
                        <i class="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>
                      ) : (
                        <i class="bx bx-sync font-size-16 align-middle mr-2"></i>
                      )}
                      Đồng bộ sản phẩm
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="col-lg-3">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-4">Filter</h4>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      handleSearchProducts(
                        1,
                        state.name,
                        state.category,
                        state.discount,
                        state.origin,
                        state.type
                      );
                    }}
                  >
                    <div class="form-group">
                      <label for="ategory-select">Chuyên mục sản phẩm</label>
                      <select
                        class="form-control"
                        id="category-select"
                        value={state.category}
                        onChange={(event) =>
                          handleChangeSearchValue(
                            'category',
                            event.target.value
                          )
                        }
                      >
                        <option value="">Tất cả</option>
                        {categories.map((category) => {
                          return (
                            <option key={category._id} value={category._id}>
                              {category.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="type-select">Loại</label>
                      <select
                        class="form-control"
                        id="type-select"
                        value={state.type}
                        onChange={(event) =>
                          handleChangeSearchValue('type', event.target.value)
                        }
                      >
                        <option value="">Bất kỳ Loại vang</option>
                        <option value="vang đỏ">Vang đỏ</option>
                        <option value="vang hồng">Vang hồng</option>
                        <option value="vang nổ">Vang nổ</option>
                        <option value="vang trắng">Vang trắng</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="origin-select">Xuất xứ</label>
                      <select
                        class="form-control"
                        id="origin-select"
                        value={state.origin}
                        onChange={(event) =>
                          handleChangeSearchValue('origin', event.target.value)
                        }
                      >
                        <option value="">Bất kỳ Nguồn gốc vang</option>
                        <option value="đức">Đức</option>
                        <option value="hungary">Hungary</option>
                        <option value="new zealand">New Zealand</option>
                        <option value="nga">Nga</option>
                        <option value="pháp">Pháp</option>
                        <option value="scotland">Scotland</option>
                        <option value="việt nam">Việt Nam</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="discount-select">Giảm giá</label>
                      <select
                        class="form-control"
                        id="discount-select"
                        value={state.discount}
                        onChange={(event) =>
                          handleChangeSearchValue(
                            'discount',
                            event.target.value
                          )
                        }
                      >
                        <option value="">Không</option>
                        <option value="true">Đang giảm giá</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="name-select">Tên</label>
                      <input
                        class="form-control"
                        type="text"
                        id="name-select"
                        value={state.name}
                        onChange={(event) =>
                          handleChangeSearchValue('name', event.target.value)
                        }
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="">
                <div class="table-responsive">
                  <table class="table project-list-table table-nowrap table-centered table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: '100px' }}>
                          #
                        </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Ident</th>
                        <th>View Details</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.products.map((product, index) => {
                        return (
                          <tr key={product._id}>
                            <td>
                              <img
                                src={(product.images || [])[0]}
                                alt=""
                                class="avatar-sm"
                              />
                            </td>
                            <td>
                              <h5
                                class="text-truncate font-size-14"
                                style={{
                                  maxWidth: '300px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                <a href="#" class="text-dark">
                                  {product.name}
                                </a>
                              </h5>
                              <p
                                class="text-muted mb-0"
                                style={{
                                  maxWidth: '300px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {product.description}
                              </p>
                            </td>
                            <td>{numeral(product.price).format('0,0')}</td>
                            <td>{numeral(product.discount).format('0,0')}</td>
                            <td>{product.ident}</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-primary btn-sm btn-rounded"
                                onClick={() => {
                                  setState({
                                    ...state,
                                    openModalDetail: true,
                                    productSelected: product,
                                  });
                                }}
                              >
                                View Details
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <a
                                  href="#"
                                  class="dropdown-toggle card-drop"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i class="mdi mdi-dots-horizontal font-size-18"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right">
                                  {withRole(
                                    [ROLE_ADMIN, SALE_MOD, B3_MOD, SALE_STAFF],
                                    auth.role
                                  ) && (
                                    <>
                                      <li>
                                        <a
                                          onClick={() => {
                                            setState({
                                              ...state,
                                              openModalUpdate: true,
                                              productSelected: product,
                                            });
                                          }}
                                          class="dropdown-item"
                                        >
                                          <i class="mdi mdi-pencil font-size-16 text-success mr-1"></i>{' '}
                                          Edit
                                        </a>
                                      </li>
                                      {withRole([ROLE_ADMIN], auth.role) && (
                                        <li>
                                          <a
                                            onClick={() =>
                                              handleDeleteProduct(product.ident)
                                            }
                                            class="dropdown-item"
                                          >
                                            <i class="mdi mdi-trash-can font-size-16 text-danger mr-1"></i>{' '}
                                            Delete
                                          </a>
                                        </li>
                                      )}
                                    </>
                                  )}
                                </ul>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <ReactPaginate
                      previousLabel={<i class="mdi mdi-chevron-left"></i>}
                      nextLabel={<i class="mdi mdi-chevron-right"></i>}
                      forcePage={state.page - 1}
                      breakLabel={'...'}
                      breakClassName={'break-me'}
                      pageCount={Math.ceil(state.total / LIMIT)}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      onPageChange={(page) => {
                        handleSearchProducts(
                          page.selected + 1,
                          state.name,
                          state.category,
                          state.discount,
                          state.origin,
                          state.type
                        );
                      }}
                      containerClassName="pagination pagination-rounded justify-content-center mt-4"
                      pageClassName="page-item"
                      previousClassName="page-item"
                      nextClassName="page-item"
                      activeClassName="active"
                      pageLinkClassName="page-link"
                      previousLinkClassName="page-link"
                      nextLinkClassName="page-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="row">
                            <div class="col-12">
                                <div class="text-center my-3">
                                    <a href="javascript:void(0);" class="text-success"><i class="bx bx-loader bx-spin font-size-18 align-middle mr-2"></i> Load more </a>
                                </div>
                            </div>
                        </div> */}
        </div>
      </div>
    </>
  );
}

ProductsPage.propTypes = {};

export default withLayout(ProductsPage);
