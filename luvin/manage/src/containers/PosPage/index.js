import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { useRecoilValue } from 'recoil';

import Modal from '../../components/Modal';
import ModalHeader from '../../components/Modal/ModalHeader';
import ModalBody from '../../components/Modal/ModalBody';
import ModalFooter from '../../components/Modal/ModalFooter';

import usePos from '../../hooks/usePos';

import { getPos, createPos, updatePos, deletePos } from '../../apis/pos';
import cleanObj from '../../utils/cleanObj';

import withLayout from '../../hocs/withLayout';
import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD } from '../../configs';
import authState from '../../atoms/auth';

function ModalUpdatePos({ visible, onClose, pos, onUpdated, isCreate }) {
  const [state, setState] = useState({
    name: pos.name || '',
    ip: pos.ip || '',
    port: pos.port || '',
    path: pos.path || '',

    loading: false,
  });

  const handleChangePosInfo = (prop, value) => {
    setState({
      ...state,
      [prop]: value,
    });
  };

  const handleSubmit = async (event) => {
    setState({ ...state, loading: true });
    try {
      event.preventDefault();
      const posInfo = {
        name: state.name,
        ip: state.ip,
        port: state.port,
        path: state.path,
      };
      cleanObj(posInfo);
      let response = {};
      if (isCreate) {
        response = await createPos(posInfo);
      } else {
        response = await updatePos(pos._id, posInfo);
      }
      onUpdated(response.data);
    } catch (error) {
      toastr['error'](error.message);
    }
    setState({ ...state, loading: false });
  };

  return (
    <Modal visible={visible}>
      <ModalHeader>
        <h5 class="modal-title">{isCreate ? 'Create pos' : 'Update pos'}</h5>
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
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <div class="form-group row mb-4">
            <label for="posName" class="col-sm-3 col-form-label">
              Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="posName"
                value={state.name}
                onChange={(event) =>
                  handleChangePosInfo('name', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="ip" class="col-sm-3 col-form-label">
              IP
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="ip"
                value={state.ip}
                onChange={(event) =>
                  handleChangePosInfo('ip', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="port" class="col-sm-3 col-form-label">
              Port
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="port"
                value={state.port}
                onChange={(event) =>
                  handleChangePosInfo('port', event.target.value)
                }
              />
            </div>
          </div>
          <div class="form-group row mb-4">
            <label for="path" class="col-sm-3 col-form-label">
              Path
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="path"
                value={state.path}
                onChange={(event) =>
                  handleChangePosInfo('path', event.target.value)
                }
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

function PosPage(props) {
  const auth = useRecoilValue(authState);
  const [pos, setPosState] = usePos();
  const [state, setState] = useState({
    // pos: [],
    // loading: false,
    openModalCreate: false,
    openModalUpdate: false,
    posSelected: {},
  });

  // const handleGetPos = async () => {
  //   try {
  //     const response = await getPos();
  //     setState({
  //       ...state,
  //       pos: response.data,
  //     });
  //   } catch (error) {
  //     toastr['error'](error.message);
  //   }
  // };

  // useEffect(() => {
  //   handleGetPos();
  // }, []);

  const handleDeletePos = async (posId) => {
    try {
      const result = await deletePos(posId);
      setPosState(pos.filter(({ _id }) => _id !== posId));
      // setState({
      //   ...state,
      //   pos: state.pos.filter(({ _id }) => _id !== posId),
      // });
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  return (
    <>
      {(state.openModalUpdate || state.openModalCreate) && (
        <ModalUpdatePos
          isCreate={state.openModalCreate}
          visible={state.openModalUpdate || state.openModalCreate}
          pos={state.posSelected}
          onClose={() => {
            setState({
              ...state,
              openModalUpdate: false,
              openModalCreate: false,
              posSelected: {},
            });
          }}
          onUpdated={(_pos) => {
            if (state.openModalCreate) {
              setState({
                ...state,
                openModalCreate: false,
                // pos: [pos, ...state.pos],
              });
              setPosState([_pos, ...pos]);
            } else {
              setState({
                ...state,
                openModalUpdate: false,
                posSelected: {},
                // pos: state.pos.map((_pos) => {
                //   if (_pos._id === pos._id) {
                //     return pos;
                //   }
                //   return _pos;
                // }),
              });
              setPosState(
                pos.map((p) => {
                  if (p._id === _pos._id) {
                    return _pos;
                  }
                  return p;
                })
              );
            }
          }}
        />
      )}
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0 font-size-18">Pos List</h4>
                <div className="page-title-right">
                  {withRole([ROLE_ADMIN], auth.role) && (
                    <button
                      type="submit"
                      class="btn btn-primary w-md"
                      onClick={() => {
                        setState({
                          ...state,
                          openModalCreate: true,
                        });
                      }}
                    >
                      Thêm Pos
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" style={{ width: '70px' }}>
                            #
                          </th>
                          <th scope="col">Name</th>
                          <th scope="col">IP</th>
                          <th scope="col">Port</th>
                          <th scope="col">Path</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pos.map((_pos) => {
                          return (
                            <tr key={_pos._id}>
                              <td></td>
                              <td>
                                <h5 className="font-size-14 mb-1">
                                  <a href="#" className="text-dark">
                                    {_pos.name}
                                  </a>
                                </h5>
                              </td>
                              <td>{_pos.ip}</td>
                              <td>{_pos.port}</td>
                              <td>{_pos.path}</td>
                              <td>
                                <div class="dropdown">
                                  <a
                                    class="dropdown-toggle card-drop"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i class="mdi mdi-dots-horizontal font-size-18"></i>
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-right">
                                    {withRole([ROLE_ADMIN], auth.role) && (
                                      <>
                                        <li>
                                          <a
                                            onClick={() => {
                                              setState({
                                                ...state,
                                                openModalUpdate: true,
                                                posSelected: _pos,
                                              });
                                            }}
                                            class="dropdown-item"
                                          >
                                            <i class="mdi mdi-pencil font-size-16 text-success mr-1"></i>{' '}
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            onClick={() =>
                                              handleDeletePos(_pos._id)
                                            }
                                            class="dropdown-item"
                                          >
                                            <i class="mdi mdi-trash-can font-size-16 text-danger mr-1"></i>{' '}
                                            Delete
                                          </a>
                                        </li>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PosPage.propTypes = {};

export default withLayout(PosPage);
