import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        removeCar: (idx) => dispatch(removeCar(idx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)