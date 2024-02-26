import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import toastr from 'toastr';
import { useRecoilValue } from 'recoil';

import withLayout from '../../hocs/withLayout';

import { getPages, updatePage } from '../../apis/page';

import withRole from '../../utils/withRole';

import { ROLE_ADMIN, SALE_MOD, B3_MOD } from '../../configs';
import authState from '../../atoms/auth';

const defaultPageSelected = {
  name: '',
  type: '',
  content: '',
};

function SettingPages(props) {
  const auth = useRecoilValue(authState);

  const [state, setState] = useState({
    pages: [],
    loading: false,
    pageSelected: defaultPageSelected,
  });

  const handleChangePageContent = (value) => {
    setState({
      ...state,
      pageSelected: {
        ...state.pageSelected,
        content: value,
      },
    });
  };

  const handleGetPages = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await getPages();
      const [firstPage = {}] = response.data || [];
      setState({
        ...state,
        loading: false,
        pages: response.data,
        pageSelected: {
          name: firstPage.name,
          type: firstPage.type,
          content: firstPage.content,
        },
      });
    } catch (error) {
      setState({ loading: false });
      toastr['error'](error.message);
    }
  };

  const handleChangePage = (page) => {
    setState({
      ...state,
      pageSelected: {
        name: page.name,
        type: page.type,
        content: page.content,
      },
    });
  };

  const handleSaveSetting = async () => {
    if (!withRole([ROLE_ADMIN, B3_MOD], auth.role)) {
      toastr['error']('You do not have permission to do this');
    }
    try {
      const response = await updatePage(
        state.pageSelected.type,
        state.pageSelected
      );
      toastr['success']('Cập nhật thành công!');
    } catch (error) {
      toastr['error'](error.message);
    }
  };

  useEffect(() => {
    handleGetPages();
  }, []);

  return (
    <div class="page-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-0 font-size-18">Edit pages</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="col-lg-3">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Pages</h4>
                <ul class="list-unstyled megamenu-list">
                  {state.pages.map((page) => {
                    return (
                      <li key={page.type} style={{ marginBottom: '5px' }}>
                        <b
                          onClick={() => handleChangePage(page)}
                          key="t-lightbox"
                          style={{ cursor: 'pointer' }}
                        >
                          {page.name}
                        </b>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            {!state.loading && (
              <>
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">
                    {state.pageSelected.name}
                  </h4>

                  <button
                    class="btn btn-primary w-md"
                    onClick={handleSaveSetting}
                  >
                    {state.loading && (
                      <i class="bx bx-loader bx-spin font-size-16 align-middle mr-2"></i>
                    )}
                    Save
                  </button>
                </div>

                <div class="card">
                  <div class="card-body">
                    <CKEditor
                      config={{
                        height: 200,
                      }}
                      // editor={BalloonEditor}
                      editor={ClassicEditor}
                      data={state.pageSelected.content}
                      onChange={(event, editor) => {
                        // console.log('on chage');
                        // const data = editor.getData();
                        // handleChangePageContent(data);
                        // console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        console.log('on blur');
                        const data = editor.getData();
                        handleChangePageContent(data);
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SettingPages.propTypes = {};

export default withLayout(SettingPages);
