import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Film } from '../../store/ducks/films/types';
import { AppllicationState } from '../../store';

import * as FilmsActions from '../../store/ducks/films/actions'
import { Container } from './style';
import FilmItem from '../FilmItem';

interface StateProps {
  films: Film[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

class FilmList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest()
  }
  
  render () {
    const { films } = this.props;
    return (
      <Container>
        { films.map( film => <FilmItem key={film.id} film={film}/> )}
      </Container>
    )
  }
}

const mapStateToProps = (state: AppllicationState) => ({
  films: state.films.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(FilmsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);