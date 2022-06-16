import { connect } from 'react-redux';
import CharacterDisplay from './character_display';
import { addEntryToDiary } from '../../actions/character_diary_actions';

const mapStateToProps = ({ session }) => ({
    userId: session.user.id
})

const mapDispatchToProps = dispatch => ({
    addEntryToDiary: (entry) => dispatch(addEntryToDiary(entry))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterDisplay)

