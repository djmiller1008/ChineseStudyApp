import { connect } from "react-redux";
import { getUserDiary } from "../../actions/character_diary_actions";
import Diary from "./diary";

const mapStateToProps = ({ session, diary }) => ({
    user_id: session.user.id,
    diary: Object.values(diary)
});

const mapDispatchToProps = dispatch => ({
    getDiary: (id) => dispatch(getUserDiary(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Diary);