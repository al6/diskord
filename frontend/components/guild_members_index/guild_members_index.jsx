import React from "react";

class GuildMembersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: props.currentMemberId
    };
  }

  render() {
    const { orderedMembers } = this.props;
    return (
      <div className="guild-members-index">
        {orderedMembers.map(member => (
          <div key={member.id} className="current-guild-member">
            {member.username}
          </div>
        ))}
      </div>
    );
  }
}

export default GuildMembersIndex;
