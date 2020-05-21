import { connect, ConnectedProps } from 'react-redux';
import { setBucketsData } from '../actions/index';
import HomePageView from '../views/HomePage';
import { bucketsResponseType, bucketsStateType, HomePageViewPropType as PropTypes } from '../types';

const mapStateToProps = (state: bucketsStateType) => ({
  buckets: state.data,
  isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
    addBucketsData: (data: bucketsResponseType) => dispatch(setBucketsData(data))
})
const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export type HomePageViewPropType = PropsFromRedux & PropTypes

export default connector(HomePageView);