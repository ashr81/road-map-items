import { connect } from 'react-redux';
import HomePageView from '../views/HomePage';
import { bucketsStateType } from '../types';
import { loadBucketsData } from '../actions';

const mapStateToProps = (state: { buckets: bucketsStateType}) => ({
  data: state.buckets.data,
  isLoading: state.buckets.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
  loadData: () => dispatch(loadBucketsData())
})
const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(HomePageView);