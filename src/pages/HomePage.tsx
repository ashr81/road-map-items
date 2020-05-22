import { connect } from 'react-redux';
import { setBucketsData } from '../actions/index';
import HomePageView from '../views/HomePage';
import { bucketsResponseType, bucketsStateType } from '../types';
import { loadBucketsData } from '../actions/buckets';

const mapStateToProps = (state: { buckets: bucketsStateType}) => ({
  data: state.buckets.data,
  isLoading: state.buckets.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
  addBucketsData: (data: bucketsResponseType) => dispatch(setBucketsData(data)),
  loadData: () => dispatch(loadBucketsData())
})
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(HomePageView);