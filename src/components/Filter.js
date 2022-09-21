/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";
import React from "react";
const Filter = (props) => {
  // const dispatch = useDispatch();
  const handleChange = (event) => {
    // input-field value is in variable event.target.value

    props.setFilter(event.target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  setFilter,
};

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default ConnectedFilter;
