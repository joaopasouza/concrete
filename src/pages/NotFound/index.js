import React from 'react';

import Header from '../../components/Header';
import FormSearch from '../../components/FormSearch';

import { Title } from './styles';

function NotFound() {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center mb-4 mt-4">
        <div className="col-lg-3">
          <Header title="Github" subTitle="Search" />
        </div>

        <div className="col-lg-9">
          <FormSearch />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-center">
            <Title>User not found :(</Title>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
