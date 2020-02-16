import { connect } from "react-redux";
import { createGuild } from "../../../actions/guild_membership_actions";
import CreateGuildForm from "./create_guild_form";

const mapStateToProps = state => {
  const currentMemberId = state.session.id;
  return {
    currentMember: state.entities.members[currentMemberId].username,
    currentMemberId,
    guilds: state.entities.guilds
  };
};

const mapDispatchToProps = dispatch => ({
  createGuild: guild => dispatch(createGuild(guild))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGuildForm);
