import { connect } from "react-redux";
import {
  createGuild,
  joinGuild
} from "../../../actions/guild_membership_actions";
import CreateGuildForm from "./create_guild_form";
import { removeErrors } from "../../../actions/session_actions";

const mapStateToProps = state => {
  const currentMemberId = state.session.id;
  return {
    errors: state.errors.session,
    currentMember: state.entities.members[currentMemberId].username,
    currentMemberId,
    guilds: state.entities.guilds
  };
};

const mapDispatchToProps = dispatch => ({
  createGuild: guild => dispatch(createGuild(guild)),
  joinGuild: name => dispatch(joinGuild(name)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGuildForm);
