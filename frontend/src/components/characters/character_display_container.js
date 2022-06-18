import { connect } from 'react-redux';
import CharacterDisplay from './character_display';
import { addEntryToDiary, getUserDiary, removeEntryFromDiary } from '../../actions/character_diary_actions';

const mapStateToProps = ({ session, diary }) => ({
    user_id: session.user.id,
    diary: Object.values(diary).map(word => word.character),
    diaryWithIds: Object.values(diary).map(word => word)
})

const mapDispatchToProps = dispatch => ({
    addEntryToDiary: (entry) => dispatch(addEntryToDiary(entry)),
    getDiary: (id) => dispatch(getUserDiary(id)),
    removeEntry: (id) => dispatch(removeEntryFromDiary(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterDisplay)


